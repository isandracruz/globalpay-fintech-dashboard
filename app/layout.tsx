import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ReactQueryProvider from "../providers/ReactQueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "GlobalPay Dashboard",
  description: "International transfer management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
