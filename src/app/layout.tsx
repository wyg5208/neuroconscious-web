import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuroConscious Transformer - 用 Transformer 重构意识神经科学",
  description: "首个将 GWT、IIT、Predictive Coding 等 6 大意识理论统一于 Transformer 架构的可学习框架",
  keywords: ["consciousness AI", "neuromorphic architecture", "Transformer neuroscience", "NCT", "意识计算"],
  authors: [{ name: "Yonggang Weng", url: "https://neuroconscious.link" }],
  creator: "WENG YONGGANG(翁勇刚)",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://neuroconscious.link",
    title: "NeuroConscious Transformer - 用 Transformer 重构意识神经科学",
    description: "首个将 GWT、IIT、Predictive Coding 等 6 大意识理论统一于 Transformer 架构的可学习框架",
    siteName: "NeuroConscious Transformer",
    images: [
      {
        url: "https://neuroconscious.link/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroConscious Transformer - 用 Transformer 重构意识神经科学",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroConscious Transformer",
    description: "用 Transformer 重构意识神经科学",
    images: ["https://neuroconscious.link/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
