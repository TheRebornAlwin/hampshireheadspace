import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const SITE_URL = "https://hampshireheadspace.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hampshire HeadSpace, Private Counselling in Eastleigh",
    template: "%s | Hampshire HeadSpace",
  },
  description:
    "Private counselling in Eastleigh, Hampshire. Your first 55-minute session is free. BACP-registered, calm, real, and entirely yours.",
  keywords: [
    "counsellor Eastleigh",
    "private counselling Hampshire",
    "BACP counsellor Eastleigh",
    "counselling Chandlers Ford",
    "anxiety counsellor Southampton",
  ],
  authors: [{ name: "Ruth, Hampshire HeadSpace" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "https://5gl6uqlaxg.ufs.sh/f/x0izTbEnXmRa1o74WxlwBoXC02JYsPjAyFlLMdSZ8prOEaKT",
    shortcut:
      "https://5gl6uqlaxg.ufs.sh/f/x0izTbEnXmRa1o74WxlwBoXC02JYsPjAyFlLMdSZ8prOEaKT",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Hampshire HeadSpace",
    title: "Hampshire HeadSpace, Private Counselling in Eastleigh",
    description:
      "On paper, you've got a good life. So why does it feel like this? Private counselling in Eastleigh. Your first 55-minute session is free.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hampshire HeadSpace logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hampshire HeadSpace, Private Counselling in Eastleigh",
    description:
      "Private counselling in Eastleigh. Your first 55-minute session is free.",
    images: [
      "/logo.png",
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
  name: "Hampshire HeadSpace",
  description:
    "Private counselling in Eastleigh, Hampshire. BACP-registered counsellor offering individual sessions in person and online. First session free.",
  url: SITE_URL,
  image:
    "/logo.png",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cranberry Wellbeing Centre",
    addressLocality: "Eastleigh",
    addressRegion: "Hampshire",
    addressCountry: "GB",
  },
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
          href="/hero-tangled-yarn.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/logo.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
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
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
