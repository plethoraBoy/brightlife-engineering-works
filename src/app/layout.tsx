import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Anton, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollTools from "@/components/ScrollTools";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightlife-engineering-works.vercel.app"),
  title: {
    default: "Brightlife Engineering Works — Systems, live on site",
    template: "%s / Brightlife Engineering Works",
  },
  description:
    "Brightlife Engineering Works designs, installs and maintains security, surveillance, networking, automation and safety systems across Chennai and beyond.",
  keywords: [
    "Brightlife Engineering Works",
    "CCTV Chennai",
    "security systems",
    "network infrastructure",
    "home automation",
    "fire safety",
    "MEP engineering",
  ],
  openGraph: {
    title: "Brightlife Engineering Works — Systems, live on site",
    description:
      "Security, surveillance, networking, automation and safety — one team, one accountable system.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteNav />
        {children}
        <SiteFooter />
        <ScrollTools />
      </body>
    </html>
  );
}
