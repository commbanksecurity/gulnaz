import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gul Naz Bibi Gul Naz Bibi | International Marketing & Growth Strategist",
  description:
    "Senior Global Growth Marketing & Creative Brand Strategist scaling international iconic D2C, SaaS, & Luxury brands.",
  keywords: [
    "Gul Naz Bibi Gul Naz Bibi",
    "Growth Marketer",
    "Digital Marketing Consultant",
    "International Marketing Strategist",
    "Performance Marketing",
    "Influencer Marketing",
    "UGC Strategy",
  ],
  authors: [{ name: "Gul Naz Bibi Gul Naz Bibi" }],
  openGraph: {
    title: "Gul Naz Bibi Gul Naz Bibi | International Marketing Strategist",
    description:
      "Crafting high-growth marketing architectures, viral creator campaigns, and multi-million dollar funnels for international brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,900;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFF8FA] text-[#2D1222] antialiased selection:bg-[#F472B6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
