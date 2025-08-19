import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // <-- 1. FOOTER IMPORTIERT

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teuflisch Gut Versichert",
  description: "Ihr persönlicher und unabhängiger Versicherungsexperte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      {/* 2. STICKY FOOTER KLASSEN HINZUGEFÜGT */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        
        {/* 3. STICKY FOOTER KLASSE HINZUGEFÜGT */}
        <main className="flex-grow" style={{ padding: '2rem' }}>
          {children}
        </main>

        <Footer /> {/* <-- 4. FOOTER HINZUGEFÜGT */}
      </body>
    </html>
  );
}