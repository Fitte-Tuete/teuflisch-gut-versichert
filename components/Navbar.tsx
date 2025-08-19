// components/Navbar.tsx
'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Logo als klickbarer Link (Position angepasst) */}
      <Link href="/" className="fixed top-10 left-10 z-50"> {/* <-- GEÄNDERT: top-6/left-6 zu top-10/left-10 */}
        <Image 
          src="/logo.png" 
          alt="Logo Teuflisch Gut Versichert" 
          width={100} 
          height={100}
          className="rounded-full shadow-lg border-2 border-white/50"
        />
      </Link>

      {/* Hamburger Button (nur sichtbar, wenn das Menü geschlossen ist) */}
      { !isOpen && (
        <button 
          onClick={toggleMenu} 
          className="fixed top-10 right-10 z-50 text-white bg-black/50 p-2 rounded-md hover:bg-black/75 transition-colors"
          aria-label="Menü öffnen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      )}

      {/* Das Overlay-Menü (nur sichtbar, wenn isOpen === true) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center">
          {/* Schließen-Button (X) im Overlay */}
          <button 
            onClick={toggleMenu} 
            className="absolute top-10 right-10 z-50 text-white p-2"
            aria-label="Menü schließen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Die eigentlichen Menü-Links */}
          <nav>
            <ul className="text-center space-y-8">
              <li><Link href="/" onClick={toggleMenu} className="text-3xl text-gray-300 hover:text-white transition-colors">Startseite</Link></li>
              <li><Link href="/betriebliche-altersvorsorge" onClick={toggleMenu} className="text-3xl text-gray-300 hover:text-white transition-colors">Betriebliche Altersvorsorge</Link></li>
              <li><Link href="/private-krankenversicherung" onClick={toggleMenu} className="text-3xl text-gray-300 hover:text-white transition-colors">Private Krankenversicherung</Link></li>
              <li><Link href="/private-zahnzusatzversicherung" onClick={toggleMenu} className="text-3xl text-gray-300 hover:text-white transition-colors">Private Zahnzusatzversicherung</Link></li>
              <li><Link href="/etf-rentenversicherung" onClick={toggleMenu} className="text-3xl text-gray-300 hover:text-white transition-colors">ETF Rentenversicherung</Link></li>
              <li><Link href="/ueber-uns" onClick={toggleMenu} className="text-3xl text-gray-300 hover:text-white transition-colors">Über uns</Link></li>
              <li><Link href="/kontakt" onClick={toggleMenu} className="text-3xl text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}