import "./globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Haven",
  description: "shop haven store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
