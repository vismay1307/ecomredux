import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoreProvider from "@/components/providers/StoreProvider";

export const metadata: Metadata = {
  title: "ShelfCart",
  description: "Modern e-commerce product catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <StoreProvider>
          <Navbar />

          <div className="min-h-[calc(100vh-4rem)]">
            {children}
          </div>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}