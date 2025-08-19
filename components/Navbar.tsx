// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    // Wir ersetzen die style-Attribute durch Tailwind-Klassen
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center space-x-8 h-16 text-lg">
          <li><Link href="/" className="text-gray-600 hover:text-red-700 transition-colors">Startseite</Link></li>
          
          <li><Link href="/betriebliche-altersvorsorge" className="text-gray-600 hover:text-red-700 transition-colors">Betriebliche Altersvorsorge</Link></li>
          <li><Link href="/private-krankenversicherung" className="text-gray-600 hover:text-red-700 transition-colors">Private Krankenversicherung</Link></li>
          <li><Link href="/private-zahnzusatzversicherung" className="text-gray-600 hover:text-red-700 transition-colors">Private Zahnzusatzversicherung</Link></li>
          <li><Link href="/etf-rentenversicherung" className="text-gray-600 hover:text-red-700 transition-colors">ETF Rentenversicherung</Link></li>

          <li><Link href="/ueber-uns" className="text-gray-600 hover:text-red-700 transition-colors">Über uns</Link></li>
          <li><Link href="/kontakt" className="text-gray-600 hover:text-red-700 transition-colors">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}