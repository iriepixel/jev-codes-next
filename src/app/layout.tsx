import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Shortcuts } from "@/components/shortcuts";
import { ConsoleHello } from "@/components/console-hello";
import { siteUrl, linkedinUrl, githubUrl } from "@/lib/site";
import { requestEmail, requestOrigin } from "@/lib/request";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Jev - Full Stack Web Developer";
const description =
  "Jev is a Full Stack Web Developer in Brighton, UK with 15+ years of commercial experience, building ecommerce and web applications with JavaScript, TypeScript, React, Remix and Shopify Hydrogen.";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  return {
    metadataBase: new URL(origin),
    title,
    description,
    // Canonical stays on the real domain even on preview deployments.
    alternates: { canonical: siteUrl },
    openGraph: {
      type: "website",
      url: origin,
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
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
  ],
};

const personJsonLd = (email: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jev",
  jobTitle: "Full Stack Web Developer",
  url: siteUrl,
  email: `mailto:${email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brighton",
    addressCountry: "GB",
  },
  sameAs: [linkedinUrl, githubUrl],
  knowsAbout: ["JavaScript", "TypeScript", "React", "Remix", "Shopify", "Shopify Hydrogen"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const email = await requestEmail();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Shortcuts email={email} />
        </ThemeProvider>
        <ConsoleHello email={email} />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(email)) }}
        />
      </body>
    </html>
  );
}
