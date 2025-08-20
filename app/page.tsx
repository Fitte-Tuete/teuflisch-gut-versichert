// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* =================================================================== */}
      {/* HERO SECTION                                                      */}
      {/* =================================================================== */}
      <div
        className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Zentrierter Text-Container */}
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Teuflisch Gut Versichert.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Ihr persönlicher Partner für maßgeschneiderte Versicherungslösungen. Sicher, transparent und immer für Sie da.
          </p>
          <div className="mt-8">
            <a
              href="mailto:andreas.teufel@wuerttembergische.de"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105"
            >
              Jetzt Beratung anfordern
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* INTRODUCTION & SERVICES SECTION (FINALE VERSION)                  */}
      {/* =================================================================== */}
      <section className="bg-gray-900 text-gray-200 py-20 px-4">
        <div className="container mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Willkommen beim Versicherungsbüro Andreas Teufel in Stuttgart
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Wenn es um Ihre finanzielle Sicherheit und Ihre Gesundheit geht, sollten Sie keine Kompromisse eingehen. Als erfahrenes Versicherungsbüro in Stuttgart stehen wir Ihnen persönlich und kompetent zur Seite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <Link href="/betriebliche-altersvorsorge" className="block p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12h6m-6 5.25h6M5.25 3h13.5v18h-13.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 text-center">Betriebliche Altersvorsorge</h3>
              <p className="mt-2 text-gray-600 text-center">
                Profitieren Sie von steuerlichen Vorteilen und sichern Sie sich eine verlässliche Zusatzrente.
              </p>
            </Link>

            <Link href="/private-krankenversicherung" className="block p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 text-center">Private Krankenversicherung</h3>
              <p className="mt-2 text-gray-600 text-center">
                Individueller Schutz, hochwertige Leistungen und Flexibilität für Ihre Gesundheit.
              </p>
            </Link>

            <Link href="/private-zahnzusatzversicherung" className="block p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.25 13.5l.648 1.938a3.375 3.375 0 002.672 2.672L21.75 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 text-center">Private Zahnzusatzversicherung</h3>
              <p className="mt-2 text-gray-600 text-center">
                Sichern Sie sich Top-Leistungen beim Zahnarzt und vermeiden Sie hohe Eigenkosten.
              </p>
            </Link>
            
            <Link href="/etf-rentenversicherung" className="block p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-2.25M21 18v-6c0-1.104-.896-2-2-2h-6a2 2 0 00-2 2v6c0 1.104.896 2 2 2h6a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 text-center">ETF-Rentenversicherung</h3>
              <p className="mt-2 text-gray-600 text-center">
                Moderne Altersvorsorge, die Sicherheit und Rendite clever kombiniert.
              </p>
            </Link>

          </div>
          
          <div className="text-center max-w-3xl mx-auto mt-20">
            <p className="text-lg text-gray-200">
              Egal, ob Sie Unternehmer, Selbstständiger oder Privatkunde sind – wir nehmen uns Zeit für Ihr Anliegen und entwickeln ein Konzept, das wirklich funktioniert. Versicherung kann kompliziert sein – mit uns wird sie einfach.
            </p>
            <a href="tel:+497116142710" className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Vereinbaren Sie jetzt einen Termin
            </a>
          </div>

        </div>
      </section>
    </>
  );
}