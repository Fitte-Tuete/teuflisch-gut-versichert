// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Der äußere Footer sorgt jetzt nur noch für den Abstand nach oben/unten
    <footer className="py-16 px-4">
      {/* Dieser innere Container bekommt jetzt das komplette Styling */}
      <div className="container mx-auto bg-gray-800 text-gray-300 p-12 rounded-2xl shadow-lg">
        
        {/* Haupt-Grid für die drei Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Spalte 1: Kontakt & Adresse */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <address className="not-italic">
              <p className="font-bold">Agentur Württembergische Versicherung:</p>
              <p>Andreas Teufel</p>
              <p>Regerstraße 19</p>
              <p>70195 Stuttgart</p>
              <p className="mt-4">
                Telefon: <a href="tel:+497116142710" className="hover:text-white">0711 6142710</a>
              </p>
              <p>
                Fax: 0711 6142711
              </p>
              <p>
                <a href="mailto:andreas.teufel@wuerttembergische.de" className="hover:text-white">
                  andreas.teufel@wuerttembergische.de
                </a>
              </p>
            </address>
          </div>

          {/* Spalte 2: Öffnungszeiten */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Öffnungszeiten</h3>
            <div className="space-y-2">
              <div className="flex justify-center md:justify-start">
                <span className="w-24">Montag</span>
                <span>09:00 - 12:00</span>
              </div>
              <div className="flex justify-center md:justify-start">
                <span className="w-24">Dienstag</span>
                <span>09:00 - 12:00 & 14:00 - 17:00</span>
              </div>
              <div className="flex justify-center md:justify-start">
                <span className="w-24">Mittwoch</span>
                <span>09:00 - 12:00</span>
              </div>
              <div className="flex justify-center md:justify-start">
                <span className="w-24">Donnerstag</span>
                <span>09:00 - 12:00 & 14:00 - 17:00</span>
              </div>
              <div className="flex justify-center md:justify-start">
                <span className="w-24">Freitag</span>
                <span>09:00 - 12:00</span>
              </div>
            </div>
          </div>

          {/* Spalte 3: Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </nav>
          </div>

        </div>

        {/* Copyright-Leiste am Ende */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Teuflisch Gut Versichert - Versicherungsbüro Andreas Teufel. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}