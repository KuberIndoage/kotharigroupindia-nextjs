import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, globalGraph } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Water Management Solution Provider in India | Kothari Group",
  description:
    "India's leading water management solution provider. Kothari Group offers pipes, fittings & irrigation systems that save water and cut costs. Explore now.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={
          "min-h-full bg-[#F5FAFF] text-[#111111] font-['Outfit',sans-serif] selection:bg-[#1575B3] selection:text-white"
        }
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Schema.txt Template 1: Organization + 2 divisions + WebSite, on every page. */}
        <JsonLd data={globalGraph()} />
        {children}
      </body>
    </html>
  );
}