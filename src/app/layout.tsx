import type { Metadata } from "next";
import { Anton, Inter, Sarabun } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers";

const anton = Anton({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const sarabun = Sarabun({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thanakhon Oonklan — Creative Frontend Developer",
  description:
    "Portfolio of Thanakhon Oonklan — A creative frontend developer specializing in modern web experiences, interactive design, and motion-driven interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${inter.variable} ${sarabun.variable} bg-black text-white antialiased`}
        suppressHydrationWarning
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
