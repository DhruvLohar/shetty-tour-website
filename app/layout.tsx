import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";

// @ts-ignore Global CSS import 
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shettytravels.co.in"),
  title: "Shetty Tours and Travels – 50 Years of Trusted Travel in Mumbai",
  description: "For over 50 years, Shetty Tours and Travels has been a name synonymous with reliable, safe, and comfortable vehicle hire services in the Mumbai region. Tempo Travellers, Buses, Cars, and more for family outings, corporate travel, weddings, airport transfers, and outstation tours.",
  keywords: [
    "Shetty Tours and Travels",
    "Mumbai vehicle hire",
    "Tempo Traveller hire Mumbai",
    "Bus rental Mumbai",
    "Car rental Mumbai",
    "Corporate travel Mumbai",
    "Wedding transportation Mumbai",
    "Airport transfers Mumbai",
    "Outstation tours Mumbai",
    "AC vehicle hire Mumbai",
    "Mumbai tours and travels",
    "Maharashtra vehicle hire",
    "Tours and travels Maharashtra",
  ],
  authors: [{ name: "Shetty Tours and Travels" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://shettytravels.co.in/",
  },
  openGraph: {
    title: "Shetty Tours and Travels – 50 Years of Trusted Travel in Mumbai",
    description: "50 years of proven experience in vehicle hire services. Well-maintained AC & Non-AC vehicles with professional drivers. Transparent pricing and on-time service.",
    type: "website",
    locale: "en_IN",
    url: "https://shettytravels.co.in/",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Shetty Tours and Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shetty Tours and Travels – 50 Years of Trusted Travel in Mumbai",
    description: "50 years of proven experience in vehicle hire services. Well-maintained AC & Non-AC vehicles with professional drivers.",
    images: ["/android-chrome-512x512.png"],
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
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${montserrat.variable} antialiased`}
        style={{ overflowX: 'hidden' }}
      >
        {children}
      </body>
    </html>
  );
}
