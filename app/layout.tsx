import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next Mission Fitness | Stronger Today. Better Tomorrow.",
  description:
    "Veteran-owned fitness and nutrition coaching in San Antonio, TX and online nationwide. Structured programming, accountability, and disciplined progression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-nmf-black text-nmf-off antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}