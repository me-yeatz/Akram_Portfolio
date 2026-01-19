import type { Metadata } from "next";
import { Open_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akram Hadid - Professional Portfolio",
  description: "Bachelor of Social Science (History) with Honours from Universiti Malaysia Sabah. Professional journey and achievements of Akram Hadid.",
  keywords: ["Akram Hadid", "Portfolio", "Historian", "Public Administration", "UMS", "Malaysia"],
  authors: [{ name: "Akram Hadid" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/logo-akram.png",
    apple: "/logo-akram.png",
  },
  openGraph: {
    title: "Akram Hadid - Professional Portfolio",
    description: "Bachelor of Social Science (History) with Honours - Universiti Malaysia Sabah",
    url: "https://akram-hadid.vercel.app",

    siteName: "Akram Hadid Portfolio",
    images: [
      {
        url: "/logo-akram.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akram Hadid - Professional Portfolio",
    description: "Bachelor of Social Science (History) with Honours - Universiti Malaysia Sabah",
    images: ["/logo-akram.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
