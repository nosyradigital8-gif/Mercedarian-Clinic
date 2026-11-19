import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mercedarian-spine-specialist-clinic.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mercedarian Spine Specialist Clinic | Spine & Joint Care",
  description:
    "Mercedarian Spine Specialist Clinic focuses on spine-related conditions and other joint complications. Contact the clinic to enquire about an appointment.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "/",
    siteName: "Mercedarian Spine Specialist Clinic",
    title: "Mercedarian Spine Specialist Clinic | Spine & Joint Care",
    description:
      "Focused attention for spine-related conditions and other joint complications. Reach out to enquire about an appointment.",
    images: [
      {
        url: "/images/spine-consultation.jpg",
        width: 6720,
        height: 4480,
        alt: "Healthcare professional speaking with a patient about back discomfort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedarian Spine Specialist Clinic | Spine & Joint Care",
    description:
      "Focused attention for spine-related conditions and other joint complications. Reach out to enquire about an appointment.",
    images: ["/images/spine-consultation.jpg"],
  },
  icons: {
    icon: "/images/clinic-logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
