import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharon Diane Walsh | Premium Investment Adviser & Stock Broker",
  description:
    "Professional Stock Broker & Investment Adviser with 26+ years of experience and 38 state licenses. Get premium financial consulting, digital assets trading, and retirement plans.",
  keywords: "Sharon Diane Walsh, investment adviser, stock broker, financial consultant, FINRA, NYSE, portfolio management",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body
        className="min-h-full flex flex-col antialiased bg-white text-gray-900"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
