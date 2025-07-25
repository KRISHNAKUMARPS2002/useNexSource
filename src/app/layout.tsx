// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "useNexSource – Supplier Compliance & Document Management",
  description:
    "useNexSource is a multi-tenant SaaS platform for food manufacturers and consultants to manage suppliers, compliance documents, issues, and CAPAs. Built with Next.js and PostgreSQL.",
  keywords: [
    "supplier management",
    "compliance tracking",
    "food safety software",
    "GFSI",
    "CAPA tracking",
    "Next.js SaaS",
    "multi-tenant platform",
    "food manufacturing compliance",
  ],
  authors: [{ name: "Krisha Kumar P. S." }],
  creator: "Krisha Kumar P. S.",
  metadataBase: new URL("https://usenexsource.com"),
  openGraph: {
    title: "useNexSource – Supplier Compliance Platform",
    description:
      "Streamline supplier onboarding, document tracking, CAPAs, and performance reviews with useNexSource. A modern platform replacing Excel workflows for food safety consultants and manufacturers.",
    url: "https://usenexsource.com",
    siteName: "useNexSource",
    images: [
      {
        url: "https://usenexsource.com/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "useNexSource dashboard preview",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          antialiased 
          bg-[var(--background)] 
          text-[var(--foreground)] 
          font-sans
        `}
      >
        {children}
      </body>
    </html>
  );
}
