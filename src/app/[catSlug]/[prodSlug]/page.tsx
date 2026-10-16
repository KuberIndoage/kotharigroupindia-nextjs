// src/app/[catSlug]/[prodSlug]/page.tsx

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { ProductDetailPage } from '@/components/ProductDetailPage';
import { ProductDetailSkeleton } from '@/components/ProductDetailSkeleton';
import ProductPageLayout from '@/components/ProductPageLayout';
import { productsData } from '@/data/products';
import { findProductBySlugs, getCategorySlug, getProductSlug, isPipeCategorySlug } from '@/lib/slug';
import { fetchWpProductBySlug } from '@/lib/wp-product';
import type { WpProductData } from '@/lib/wp-product';
import type { ProductItem } from '@/lib/types';
import { JsonLd } from '@/components/JsonLd';
import {
  IRRIGATION_DIVISION_ID,
  PIPE_DIVISION_ID,
  abs,
  productGraph,
} from '@/lib/schema';

type Params = { catSlug: string; prodSlug: string };

export const revalidate = 600;
export const dynamicParams = true;

export function generateStaticParams() {
  return productsData.map((p) => ({
    catSlug: getCategorySlug(p.category),
    prodSlug: getProductSlug(p),
  }));
}

/**
 * Resolves the title and description a product is served with. Shared by
 * generateMetadata and the JSON-LD below so {{PRODUCT_NAME}} / description can
 * never drift from the page's own title tag (Schema.txt section 3.3).
 */
function productMeta(wp: WpProductData | null | undefined, product: ProductItem | undefined) {
  const title = wp
    ? wp.seoTitle || `${wp.name} | Kothari Group`
    : product
    ? `${product.name} | Kothari Group`
    : '';

  const description = wp
    ? wp.seoDescription ||
      (wp.specificationsHtml?.replace(/<[^>]*>/g, '').slice(0, 160) || '')
    : product?.shortDescription || '';

  return { title, description };
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const { catSlug, prodSlug } = await Promise.resolve(params);

  // Cached — shares one request with the page body below
  try {
    const wpProduct = await fetchWpProductBySlug(prodSlug);
    if (wpProduct) {
      const { title, description } = productMeta(wpProduct, undefined);
      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: [wpProduct.mainImage],
        },
      };
    }
  } catch {
    // Fall through to static metadata on WP failure
  }

  // Fallback to static data (instant, no network)
  const product = findProductBySlugs(catSlug, prodSlug, productsData);
  if (!product) return { title: 'Product Not Found | Kothari Group' };
  const { description } = productMeta(null, product);
  return {
    title: `${product.name} | Kothari Group`,
    description,
    openGraph: {
      title: product.name,
      description,
      images: [product.image],
    },
  };
}

// Async island: streams in after the shell (header/footer) is already visible.
async function ProductDetailLoader({ catSlug, prodSlug, staticProduct }: { catSlug: string; prodSlug: string; staticProduct: ProductItem | undefined }) {
  const wpProduct = await fetchWpProductBySlug(prodSlug).catch(() => null);

  if (!wpProduct && !staticProduct) notFound();

  // Division detection uses the same helper that picks the page's blue/green
  // chrome (ProductPageLayout / ProductDetailPage), so the schema always agrees
  // with what the visitor actually sees. Cross-checked against WooCommerce's
  // own division_name meta: 108/108 agreement, zero contradictions.
  const isPipe = isPipeCategorySlug(catSlug);
  const { title, description } = productMeta(wpProduct, staticProduct);
  const name = wpProduct?.name || staticProduct?.name || 'Product';
  const imageUrl = wpProduct?.mainImage || abs(staticProduct?.image || '');

  return (
    <>
      {/* Schema.txt Template 6: Product + BreadcrumbList (+ FAQPage when the
          product actually shows FAQs). The category folder is deliberately not
          a crumb — the visible breadcrumb is Home > Division > Product. */}
      <JsonLd
        data={productGraph({
          path: `/${catSlug}/${prodSlug}`,
          name,
          description: description || name,
          imageUrl,
          divisionName: isPipe ? 'Pipe Division' : 'Irrigation Division',
          divisionPath: isPipe ? '/pipe-division' : '/irrigation-division',
          divisionId: isPipe ? PIPE_DIVISION_ID : IRRIGATION_DIVISION_ID,
          faqs: wpProduct?.faqs ?? [],
        })}
      />
      <ProductDetailPage
        product={staticProduct || undefined}
        wp={wpProduct || undefined}
        theme={isPipe ? 'blue' : 'green'}
      />
    </>
  );
}

export default async function CategoryProductPage({ params }: { params: Params | Promise<Params> }) {
  const { catSlug, prodSlug } = await Promise.resolve(params);

  // Sync + instant — no network, so the shell renders immediately.
  const staticProduct = findProductBySlugs(catSlug, prodSlug, productsData);

  return (
    <AppShell>
      <ProductPageLayout catSlug={catSlug}>
        <Suspense fallback={<ProductDetailSkeleton />}>
          <ProductDetailLoader catSlug={catSlug} prodSlug={prodSlug} staticProduct={staticProduct} />
        </Suspense>
      </ProductPageLayout>
    </AppShell>
  );
}
