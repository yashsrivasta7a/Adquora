import { Outfit, Inter } from "next/font/google";

import "./globals.css";
import ReactLenis from "lenis/react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Adquora : Digital Marketing & Web Experiences",
    template: "%s | Adquora"
  },
  description: "Adquora is a digital agency driving exponential growth through precision-targeted campaigns, bespoke web experiences, and high-impact SEO.",
  keywords: [
    "Digital Agency", 
    "Performance Marketing", 
    "Premium Web Design", 
    "Technical SEO", 
    "Google Ads", 
    "Meta Campaigns", 
    "Brand Growth",
    "Bespoke Digital Experiences"
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Adquora : Digital Marketing & Web Experiences",
    description: "Adquora is a digital agency driving exponential growth through precision-targeted campaigns, bespoke web experiences, and high-impact SEO.",
    url: "https://adquora.com",
    siteName: "Adquora",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Adquora Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adquora : Digital Marketing & Web Experiences",
    description: "Adquora is a digital agency driving exponential growth through precision-targeted campaigns, bespoke web experiences, and high-impact SEO.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} font-sans`}>
        <ReactLenis root>
          <div className="min-h-screen">
            {children}
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
