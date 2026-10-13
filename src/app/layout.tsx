import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jev.codes";
const title = "Jev - Full Stack Web Developer";
const description =
  "Jev is a Full Stack Web Developer in Brighton, UK with 10+ years of commercial experience, building ecommerce and web applications with JavaScript, TypeScript, React, Remix and Shopify Hydrogen.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "jev.codes",
    locale: "en_GB",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jev",
  jobTitle: "Full Stack Web Developer",
  url: siteUrl,
  email: "mailto:hi@jev.codes",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brighton",
    addressCountry: "GB",
  },
  sameAs: ["https://www.linkedin.com/in/iriepixel/", "https://github.com/iriepixel"],
  knowsAbout: ["JavaScript", "TypeScript", "React", "Remix", "Shopify", "Shopify Hydrogen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
