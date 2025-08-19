import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // <-- HINZUGEFÜGT

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadaten für deine Webseite angepasst
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
    // Sprache auf Deutsch gesetzt
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* <-- HINZUGEFÜGT */}
        
        {/* Ein Container, damit der Inhalt etwas Abstand hat */}
        <main style={{ padding: '2rem' }}>
          {children}
        </main>

      </body>
    </html>
  );
}