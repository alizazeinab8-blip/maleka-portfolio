import type { Metadata } from "next";
import { Space_Grotesk, Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maleka.dev"),
  title: "Maleka — Front-End Developer",
  description:
    "Portfolio of Maleka, a front-end developer focused on building modern, responsive and interactive web applications with React, TypeScript and Next.js.",
  keywords: [
    "Maleka",
    "Front-End Developer",
    "React Developer",
    "TypeScript",
    "Next.js Portfolio",
    "Web Developer Portfolio",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Maleka — Front-End Developer",
    description:
      "Front-end developer building modern, responsive web applications with React, TypeScript and Next.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maleka — Front-End Developer",
    description:
      "Front-end developer building modern, responsive web applications with React, TypeScript and Next.js.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${vazirmatn.variable} font-body bg-void text-ink antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
