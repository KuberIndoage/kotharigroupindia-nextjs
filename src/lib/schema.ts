// src/lib/schema.ts
//
// JSON-LD builders for the Kothari Group site.
//
// Every graph here is a verbatim transcription of the templates in Schema.txt
// (Templates 1-6). Nothing in this file fetches data or touches the DOM — pages
// resolve their own title/description/image/FAQ values and pass them in, so the
// structured data can never drift from the values the page actually renders.
//
// Domain: read from NEXT_PUBLIC_SITE_URL with the production URL as fallback,
// matching the convention already used in lib/wp-seo.ts and lib/wp-product.ts.

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://kotharigroupindia.com';

// Strip any trailing slash so `${SITE_URL}/path` never doubles up.
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, '');

/** Absolute URL for a site-relative path. `/about-us` -> `https://.../about-us`. */
export function abs(path: string): string {
  if (!path) return `${SITE_URL}/`;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

// Cross-referenced entity IDs (Schema.txt, "The entity IDs used across the
// templates are"). Division nodes are defined once in the global graph (Template
// 1) and referenced by every other template, so the whole site resolves to one
// consistent entity set.
export const ORG_ID = `${SITE_URL}/#organization`;
export const PIPE_DIVISION_ID = `${SITE_URL}/#pipe-division`;
export const IRRIGATION_DIVISION_ID = `${SITE_URL}/#irrigation-division`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type SchemaGraph = Record<string, unknown>;

/** Schema.org page types used by Template 2's {{PAGE_TYPE}}. */
export type PageSchemaType = 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ContactPage';

export interface Crumb {
  name: string;
  path: string;
}

function breadcrumbListNode(path: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

/**
 * Template 1: Global block, injected once from the root layout so it appears on
 * every page. Defines the company, both divisions and the website.
 *
 * Logos use the colour versions in /public/logos (Schema.txt section 6, item 6:
 * Google renders logos on a white background, so the white `_W` variants are
 * unsuitable).
 */
export function globalGraph(): SchemaGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Kothari Group India',
        legalName: 'Kothari Agritech Private Limited',
        url: `${SITE_URL}/`,
        logo: abs('/logos/Kothari Group.png'),
        description:
          'Kothari Group India is a 35+ year old manufacturer of irrigation systems, plumbing pipes and agri pipes serving 23+ states in India.',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            '8516/11, Level 3, Sun Plaza, Subhash Chowk, Murarji Peth',
          addressLocality: 'Solapur',
          addressRegion: 'Maharashtra',
          postalCode: '413001',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-1800-120-4343',
          email: 'enquiry@kotharigroupindia.com',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Marathi'],
        },
        sameAs: [
          'https://www.facebook.com/Kotharigroupindia',
          'https://www.instagram.com/kotharigroup_',
          'https://www.linkedin.com/company/kotharigroupindia/',
        ],
        subOrganization: [
          { '@id': PIPE_DIVISION_ID },
          { '@id': IRRIGATION_DIVISION_ID },
        ],
      },
      {
        '@type': 'Organization',
        '@id': PIPE_DIVISION_ID,
        name: 'Kothari Pipes',
        logo: abs('/logos/Kothari Pipes.png'),
        parentOrganization: { '@id': ORG_ID },
        sameAs: [
          'https://www.facebook.com/kothariplumbing',
          'https://www.instagram.com/kothariplumbing',
          'https://www.youtube.com/@kotharipipesplumbing',
          'https://www.facebook.com/Kotharipipess',
          'https://www.instagram.com/kotharipipess',
          'https://www.youtube.com/@kotharipipesagri',
          'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i',
        ],
      },
      {
        '@type': 'Organization',
        '@id': IRRIGATION_DIVISION_ID,
        name: 'Kothari Irrigation',
        logo: abs('/logos/Kothari Irrigation.png'),
        parentOrganization: { '@id': ORG_ID },
        sameAs: [
          'https://www.facebook.com/kothariirrigation',
          'https://www.instagram.com/kothariirrigation_/',
          'https://www.youtube.com/@kothariirrigation',
          'https://whatsapp.com/channel/0029Va6OjqKA89MhSFoEY32l',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: 'Kothari Group India',
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-IN',
      },
    ],
  };
}

export interface StandardPageArgs {
  /** Site-relative path, leading slash, e.g. `/about-us`. */
  path: string;
  /** {{PAGE_NAME}} — the leaf crumb name shown on the page. */
  pageName: string;
  /** {{PAGE_TITLE}} — must match the page's own title tag. */
  title: string;
  /** {{META_DESCRIPTION}} — must match the page's own meta description. */
  description: string;
  /** {{PAGE_TYPE}} */
  pageType: PageSchemaType;
  /** {{ABOUT_ID}} — ORG_ID / PIPE_DIVISION_ID / IRRIGATION_DIVISION_ID. */
  aboutId: string;
}

/**
 * Template 2: Standard page (Home > Page name).
 * Also used for the two division Success Stories pages, which render a visible
 * breadcrumb and therefore match Template 2's structure (Schema.txt Template 4
 * assumed no breadcrumb there, which is no longer the case).
 */
export function standardPageGraph(args: StandardPageArgs): SchemaGraph {
  const { path, pageName, title, description, pageType, aboutId } = args;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': pageType,
        '@id': `${abs(path)}#webpage`,
        url: abs(path),
        name: title,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': aboutId },
        inLanguage: 'en-IN',
        breadcrumb: { '@id': `${abs(path)}#breadcrumb` },
      },
      breadcrumbListNode(path, [
        { name: 'Home', path: '/' },
        { name: pageName, path },
      ]),
    ],
  };
}

export interface ChildPageArgs extends Omit<StandardPageArgs, 'pageType'> {
  /** {{PARENT_NAME}} — the middle crumb, e.g. `Pipe Applications`. */
  parentName: string;
  /** {{PARENT_PATH}} — the middle crumb path. */
  parentPath: string;
}

/**
 * Template 3: Page with a parent in the breadcrumb (Home > Parent > Page name).
 * Used by the four Precision Irrigation sub pages and all 19 child application
 * pages. Always `WebPage`.
 */
export function childPageGraph(args: ChildPageArgs): SchemaGraph {
  const { path, pageName, title, description, aboutId, parentName, parentPath } =
    args;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${abs(path)}#webpage`,
        url: abs(path),
        name: title,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': aboutId },
        inLanguage: 'en-IN',
        breadcrumb: { '@id': `${abs(path)}#breadcrumb` },
      },
      breadcrumbListNode(path, [
        { name: 'Home', path: '/' },
        { name: parentName, path: parentPath },
        { name: pageName, path },
      ]),
    ],
  };
}

export interface ContactPageArgs {
  title: string;
  description: string;
}

/**
 * Template 5: Contact page (/contact-us). Same as Template 2 with the company
 * set as the main entity of the page.
 */
export function contactPageGraph(args: ContactPageArgs): SchemaGraph {
  const path = '/contact-us';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${abs(path)}#webpage`,
        url: abs(path),
        name: args.title,
        description: args.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        mainEntity: { '@id': ORG_ID },
        inLanguage: 'en-IN',
        breadcrumb: { '@id': `${abs(path)}#breadcrumb` },
      },
      breadcrumbListNode(path, [
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path },
      ]),
    ],
  };
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductArgs {
  /** {{PRODUCT_PATH}} — e.g. `/cpvc/cpvc-solvent-cement`. */
  path: string;
  /** {{PRODUCT_NAME}} */
  name: string;
  /** {{PRODUCT_DESCRIPTION}} */
  description: string;
  /** {{PRODUCT_IMAGE_URL}} — must be a full image URL, not a relative path. */
  imageUrl: string;
  /** {{DIVISION_NAME}} — e.g. `Pipe Division`. */
  divisionName: string;
  /** {{DIVISION_PATH}} — e.g. `/pipe-division`. */
  divisionPath: string;
  /** {{DIVISION_ID}} */
  divisionId: string;
  /**
   * Visible FAQs only. Schema.txt section 6, item 5: the FAQPage block is
   * omitted entirely when a product has no FAQs on the page (irrigation FAQs
   * are still pending upstream).
   */
  faqs?: ProductFaq[];
}

/**
 * Template 6: Product page (Product + Breadcrumb + FAQPage).
 * The category folder in the URL is intentionally not a crumb — Schema.txt
 * section 5.6: the visible breadcrumb is always Home > Division > Product name.
 */
export function productGraph(args: ProductArgs): SchemaGraph {
  const {
    path,
    name,
    description,
    imageUrl,
    divisionName,
    divisionPath,
    divisionId,
    faqs = [],
  } = args;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Product',
      '@id': `${abs(path)}#product`,
      name,
      description,
      image: imageUrl,
      url: abs(path),
      brand: { '@type': 'Brand', name: 'Kothari' },
      manufacturer: { '@id': divisionId },
    },
    breadcrumbListNode(path, [
      { name: 'Home', path: '/' },
      { name: divisionName, path: divisionPath },
      { name, path },
    ]),
  ];

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${abs(path)}#faq`,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * Normalises a date to ISO 8601, which is what Google expects for
 * `datePublished` / `dateModified`. WordPress supplies a pre-formatted display
 * string (e.g. "21 June 2021"), so this must be converted rather than passed
 * through. Returns undefined when the value cannot be parsed, which causes the
 * property to be omitted from the graph rather than emitted malformed.
 */
function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? undefined : new Date(parsed).toISOString();
}

export interface ArticleArgs {
  /** Site-relative path, e.g. `/blogs/my-post`. */
  path: string;
  /** {{PAGE_NAME}} — the leaf crumb name. */
  pageName: string;
  title: string;
  description: string;
  /** Absolute image URL. */
  imageUrl: string;
  /** ISO 8601 date. Omitted from the graph when missing. */
  datePublished?: string;
  /** ISO 8601 date. Omitted from the graph when missing. */
  dateModified?: string;
  /** `BlogPosting` for blogs, `NewsArticle` for press releases, `Article` otherwise. */
  articleType?: 'Article' | 'BlogPosting' | 'NewsArticle';
  /** {{ABOUT_ID}} — defaults to the group. */
  aboutId?: string;
  /** Optional middle crumb, e.g. `Blogs`. Omitted from the graph when absent. */
  parentName?: string;
  /** Optional middle crumb path, e.g. `/blogs`. */
  parentPath?: string;
}

/**
 * Article / BlogPosting / NewsArticle for editorial detail pages
 * (`/blogs/[slug]`, `/press-release/[slug]`, success story detail pages).
 * These routes are outside the 190 pages covered by Schema.txt and were added
 * separately, so this builder has no template in that document.
 */
export function articleGraph(args: ArticleArgs): SchemaGraph {
  const {
    path,
    pageName,
    title,
    description,
    imageUrl,
    datePublished,
    dateModified,
    articleType = 'Article',
    aboutId = ORG_ID,
    parentName,
    parentPath,
  } = args;

  const node: Record<string, unknown> = {
    '@type': articleType,
    '@id': `${abs(path)}#article`,
    url: abs(path),
    mainEntityOfPage: { '@id': `${abs(path)}#webpage` },
    headline: title,
    name: title,
    description,
    image: imageUrl,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': aboutId },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
    breadcrumb: { '@id': `${abs(path)}#breadcrumb` },
  };

  const published = toIsoDate(datePublished);
  const modified = toIsoDate(dateModified) ?? published;
  if (published) node.datePublished = published;
  if (modified) node.dateModified = modified;

  const crumbs: Crumb[] = [{ name: 'Home', path: '/' }];
  if (parentName && parentPath) crumbs.push({ name: parentName, path: parentPath });
  crumbs.push({ name: pageName, path });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      node,
      {
        '@type': 'WebPage',
        '@id': `${abs(path)}#webpage`,
        url: abs(path),
        name: title,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        inLanguage: 'en-IN',
      },
      breadcrumbListNode(path, crumbs),
    ],
  };
}
