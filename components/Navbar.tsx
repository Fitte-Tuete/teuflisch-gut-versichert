// components/Navbar.tsx
import Link from 'next/link';

// Dies ist die Navbar-Komponente.
// Das "export default" macht sie für andere Dateien verfügbar.
export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
        <li><Link href="/">Startseite</Link></li>
        
        {/* Hier kommen deine 4 Leistungsseiten rein. Passe href und Text an! */}
        <li><Link href="/betriebliche-altersvorsorge/">Betriebliche Altersvorsorge</Link></li>
        <li><Link href="/private-krankenversicherung/">Private Krankenversicherung</Link></li>
        <li><Link href="/private-zahnzusatzversicherung/">Private Zahnzusatzversicherung</Link></li>
        <li><Link href="/etf-rentenversicherung/">ETF Rentenversicherung</Link></li>
        {/* ... usw. */}

        <li><Link href="/ueber-uns">Über uns</Link></li>
        <li><Link href="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
}