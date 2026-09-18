import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Frank Chávez Marchena — Geomática & SIG",
    template: "%s · Frank Chávez Marchena",
  },
  description:
    "Portafolio de Frank Chávez Marchena: especialista GIS, piloto RPAS y datos espaciales. Mapas, geovisores y dashboards para utilidades y gobiernos locales.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: "Frank Chávez Marchena",
    title: "Frank Chávez Marchena — Geomática & SIG",
    description:
      "Mapas, geovisores y dashboards para utilidades y gobiernos locales. Geomática · SIG · Drones RPAS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Chávez Marchena — Geomática & SIG",
    description:
      "Mapas, geovisores y dashboards para utilidades y gobiernos locales. Geomática · SIG · Drones RPAS.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${instrument.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-night text-paper font-body">{children}</body>
    </html>
  );
}