import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { restaurantConfig } from "@/config/restaurant";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["500", "600", "700"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: restaurantConfig.seo.title,
  description: restaurantConfig.seo.description,
  applicationName: restaurantConfig.name,
  keywords: ["cardápio digital", "restaurante", "lanches", "porções", "pedido pelo WhatsApp"],
  openGraph: {
    title: restaurantConfig.seo.title,
    description: restaurantConfig.seo.description,
    type: "website",
    locale: "pt_BR",
    siteName: restaurantConfig.name,
  },
  robots: { index: true, follow: true },
  icons: { icon: restaurantConfig.logo.src },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
