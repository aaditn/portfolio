import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Import font
import "./globals.css";

// 2. Configure font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply font class to body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}