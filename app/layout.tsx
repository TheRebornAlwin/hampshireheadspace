import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";

const SITE_URL = "https://hampshireheadspace.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hampshire Headspace, Private Counselling in Eastleigh and Winchester",
    template: "%s | Hampshire Headspace",
  },
  description:
    "Private counselling in Eastleigh and Winchester, Hampshire. Your first 50-minute session is free. BACP-registered, calm, real, and entirely yours.",
  keywords: [
    "counsellor Eastleigh",
    "counsellor Winchester",
    "private counselling Hampshire",
    "BACP counsellor Eastleigh",
    "counselling Chandlers Ford",
    "anxiety counsellor Southampton",
  ],
  authors: [{ name: "Ruth, Hampshire Headspace" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-icon.webp?v=2",
    shortcut: "/logo-icon.webp?v=2",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Hampshire Headspace",
    title: "Hampshire Headspace, Private Counselling in Eastleigh and Winchester",
    description:
      "On paper, you've got a good life. So why does it feel like this? Private counselling in Eastleigh and Winchester. Your first 50-minute session is free.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Hampshire Headspace logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hampshire Headspace, Private Counselling in Eastleigh and Winchester",
    description:
      "Private counselling in Eastleigh and Winchester. Your first 50-minute session is free.",
    images: [
      "/logo.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hampshire Headspace",
  description:
    "Private counselling in Eastleigh and Winchester, Hampshire. BACP-registered counsellor offering individual sessions in person and online. First session free.",
  url: SITE_URL,
  image:
    "/logo.webp",
  priceRange: "££",
  // Two rooms, neither street address published, so this stays at locality
  // level. The town signals live in `areaServed` below.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eastleigh",
    addressRegion: "Hampshire",
    addressCountry: "GB",
  },
  telephone: "+447717811986",
  email: "hello@hampshireheadspace.com",
  areaServed: [
    "Eastleigh",
    "Chandler's Ford",
    "Southampton",
    "Hedge End",
    "Romsey",
    "Winchester",
  ],
  serviceType: ["Counselling", "Talking Therapy", "Online Counselling"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Preconnect early so the font + image fetches don't pay for DNS/TLS later. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Slimmer font payload: only Plus Jakarta Sans, only the weights we use. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload everything that paints in the first viewport. */}
        <link
          rel="preload"
          as="image"
          href="/hero-session.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/logo.webp?v=2"
          type="image/webp"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
        />
        {/* The homepage headline is now the wordmark lockup, so it paints
            above the fold on every visit. */}
        <link
          rel="preload"
          as="image"
          href="/logo-wordmark.webp"
          type="image/webp"
        />
        {/*
          Analytics placeholder. When ready, drop in Plausible or GA snippet here.
          Do not add any tracking before talking with Ruth about consent.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-cream text-navy antialiased">
        <ScrollToTopOnLoad />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
