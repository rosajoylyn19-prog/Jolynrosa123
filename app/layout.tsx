import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const siteUrl = "https://joylynrosa-lb6t.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joylyn Rosa | SEO Content Writer & Virtual Assistant",
    template: "%s | Joylyn Rosa",
  },
  description:
    "Joylyn Rosa is an SEO Content Writer and Virtual Assistant based in the Philippines. Explore her content writer portfolio and get in touch for SEO writing, copywriting, and virtual assistance services.",
  keywords: [
    "Joylyn Rosa",
    "SEO Content Writer",
    "Virtual Assistant",
    "Content Writer Portfolio",
    "Philippines Content Writer",
    "Freelance Copywriter",
    "AEO Writer",
  ],
  authors: [{ name: "Joylyn Rosa" }],
  creator: "Joylyn Rosa",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Joylyn Rosa | SEO Content Writer & Virtual Assistant",
    description:
      "SEO Content Writer & Virtual Assistant based in the Philippines. View the content writer portfolio and services.",
    siteName: "Joylyn Rosa",
    locale: "en_PH",
    images: [
      {
        url: "/joylyn-headshot.jpg",
        width: 1200,
        height: 1200,
        alt: "Joylyn Rosa — SEO Content Writer & Virtual Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joylyn Rosa | SEO Content Writer & Virtual Assistant",
    description:
      "SEO Content Writer & Virtual Assistant based in the Philippines. View the content writer portfolio and services.",
    images: ["/joylyn-headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joylyn Rosa",
  jobTitle: ["SEO Content Writer", "Virtual Assistant"],
  url: siteUrl,
  image: `${siteUrl}/joylyn-headshot.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Butuan",
    addressRegion: "Caraga",
    addressCountry: "PH",
  },
  sameAs: [
    "https://www.linkedin.com/in/joylyn-rosa-040143415",
    "https://www.clippings.me/users/joylyncasintahanrosa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
