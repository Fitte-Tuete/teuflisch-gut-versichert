// app/etf-rentenversicherung/page.tsx
import Link from 'next/link';
import Image from 'next/image';

// HIER IST DIE DEFINITION, DIE GEFEHLT HAT
const AdvantageItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-4 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

export default function ETFRentenversicherungPage() {
  return (
    <>
      {/* =================================================================== */}
      {/* 1. HERO SECTION (CRO-optimiert & responsive)                      */}
      {/* =================================================================== */}
      <div
        className="relative flex items-center justify-center min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            ETF-Rentenversicherung
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            <span className="text-white font-semibold">Rendite mit Absicherung</span> für Ihre Altersvorsorge.
          </p>
          
          {/* CTA Button im Hero */}
          <div className="mt-8 sm:mt-10">
            <a href="mailto:ralf-jochen.klein@wuerttembergische.de" 
               className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25">
              Kostenlose Beratung anfordern
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. INHALTS-SEKTION (responsive optimiert)                         */}
      {/* =================================================================== */}
      <section className="bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto space-y-12 sm:space-y-16">
          
          {/* Einleitungstext (modernisiert, ohne Button) */}
          <div className="max-w-5xl mx-auto text-left">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 sm:p-8 rounded-2xl border border-slate-600">
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                Angesichts einer gesetzlichen Rente, die selten den gewohnten Lebensstandard sichert, und historisch niedriger Zinsen bei klassischen Anlageformen, eröffnet die ETF Rentenversicherung völlig neue Möglichkeiten für Ihre finanzielle Zukunft.
              </p>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
                Die PrivatRente Genius Vorsorge der Württembergischen Versicherungsgesellschaft verbindet die Renditechancen globaler Kapitalmärkte mit der Sicherheit einer monatlichen Rente. Eine Alternative zur herkömmlichen Altersvorsorge, die höchste Flexibilität mit attraktiven Ertragsaussichten kombiniert.
              </p>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
                Seit über 25 Jahren begleiten wir anspruchsvolle Anleger auf ihrem Weg zu finanzieller Unabhängigkeit.
              </p>
            </div>
          </div>

          {/* Block 1: Was ist eine ETF Rente? */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Was ist eine ETF Rente?
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </div>
              <div className="md:col-span-2 text-gray-700 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-blue-900 font-medium">
                    Die ETF Rente ist eine Form der privaten Altersvorsorge, bei der die Beiträge in sogenannte Exchange Traded Funds (ETFs) investiert werden. Diese börsengehandelten Indexfonds ermöglichen eine breite Streuung des Kapitals über verschiedene Märkte hinweg.
                  </p>
                </div>
                <p>
                  Im Rahmen einer fondsgebundenen Rentenversicherung kombiniert die ETF Rente die Renditechancen der Kapitalmärkte mit den Vorteilen einer Versicherungslösung. So wird zum Rentenbeginn eine lebenslang Rente gezahlt. Der sogenannte garantierte Rentenfaktor sorgt dabei für Planungssicherheit bei der späteren Rentenzahlung.
                </p>
                 <div className="border-t border-gray-200 pt-4 sm:pt-6 bg-gradient-to-r from-red-50 to-red-100 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    Warum eine klassische Altersvorsorge für viele nicht mehr ausreicht
                  </h3>
                  <p>
                    Mit einer durchschnittlichen gesetzlichen Rente von nur 48% des letzten Einkommens klafft eine erhebliche Rentenlücke. Prognosen zeigen, dass die Kaufkraft der gesetzlichen Rente bis 2040 weiter sinken könnte. Gleichzeitig bieten klassische Lebensversicherungen mit Garantiezins kaum noch Rendite, während die Inflation Ihr Vermögen kontinuierlich entwertet.
                  </p>
                   <p className="mt-4">
                    Die Kosten für den Ruhestand steigen, während traditionelle Vorsorgeprodukte an Wirksamkeit verlieren. Wer seinen Lebensstandard im Alter aktiv gestalten möchte, benötigt renditeorientierte, flexible und steuerlich optimierte Vorsorgekonzepte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: Der Vergleich mit Tabelle */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Fondsgebundene Rentenversicherung vs. ETF-Sparplan
              </h3>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto"></div>
            </div>
                        
            <div className="overflow-x-auto bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 sm:p-6">
              <table className="min-w-full border-collapse text-left text-sm sm:text-base">
                <thead className="border-b-2 border-gray-300">
                  <tr>
                    <th className="p-2 sm:p-4 text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">Merkmal</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">ETF-Sparplan</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100">ETF Rentenversicherung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="p-2 sm:p-4 font-semibold text-gray-800">Ziel</th>
                    <td className="p-2 sm:p-4 text-gray-600">Kapitalaufbau</td>
                    <td className="p-2 sm:p-4 text-gray-700 border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 font-medium">Altersvorsorge mit Rentenzahlung</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="p-2 sm:p-4 font-semibold text-gray-800">Anlageform</th>
                    <td className="p-2 sm:p-4 text-gray-600">Direktanlage in ETFs</td>
                    <td className="p-2 sm:p-4 text-gray-700 border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 font-medium">ETF-Anlage innerhalb Versicherungsmantel</td>
                  </tr>
                   <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="p-2 sm:p-4 font-semibold text-gray-800">Auszahlung</th>
                    <td className="p-2 sm:p-4 text-gray-600">Einmalbetrag oder Entnahmeplan</td>
                    <td className="p-2 sm:p-4 text-gray-700 border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 font-medium">Lebenslange Rente (wahlweise Kapitalauszahlung möglich)</td>
                  </tr>
                   <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="p-2 sm:p-4 font-semibold text-gray-800">Steuervorteile</th>
                    <td className="p-2 sm:p-4 text-gray-600">Nur auf Kursgewinne (Abgeltungsteuer)</td>
                    <td className="p-2 sm:p-4 text-gray-700 border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 font-medium">Steuervergünstigungen bei Rentenphase (nach § 20, § 22 EStG)</td>
                  </tr>
                   <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="p-2 sm:p-4 font-semibold text-gray-800">Kosten</th>
                    <td className="p-2 sm:p-4 text-gray-600">i. d. R. geringere Fondskosten, keine Versicherungskosten</td>
                    <td className="p-2 sm:p-4 text-gray-700 border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 font-medium">Kombination aus Fonds- und Versicherungskosten</td>
                  </tr>
                   <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <th scope="row" className="p-2 sm:p-4 font-semibold text-gray-800">Mögliche Absicherung</th>
                    <td className="p-2 sm:p-4 text-gray-600">Keine</td>
                    <td className="p-2 sm:p-4 text-gray-700 border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 font-medium">Rentengarantie, BU-Rente, BU-Beitragsbefreiung, Todesfallschutz, garantierter Rentenfaktor</td>
                  </tr>
                   <tr className="hover:bg-gray-50 transition-colors">
                    <th scope="row" className="p-2 sm:p-4 font-semibold text-gray-800">Flexibilität</th>
                    <td className="p-2 sm:p-4 text-gray-600">Hoch, aber ohne Absicherung</td>
                    <td className="p-2 sm:p-4 text-gray-700 border-l-2 border-red-200 bg-gradient-to-r from-red-50 to-red-100 font-medium">Hoch, mit Zusatzleistungen</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed border-t pt-6 sm:pt-8 border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl">
              <p className="text-blue-900">
                Sowohl der ETF-Sparplan als auch die fondsgebundene Rentenversicherung basieren auf der Anlage in ETFs, unterscheiden sich aber grundlegend in Konstruktion, Zielsetzung und Auszahlungsform.Die ETF-Rentenversicherung ist eine strategische Ergänzung des ETF-Sparplans und richtet sich an alle, die ihre Kapitalanlage mit einer planbaren Rentenphase verbinden möchten. Dabei können Sie zusätzlich von den Versicherungsmechanismen wie lebenslanger Rente, steuerlicher Begünstigung und Sicherheit durch garantierten Rentenfaktor profitieren.
              </p>
            </div>
          </div>

          {/* NEUER BLOCK: PrivatRente Genius Vorsorge */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Die PrivatRente Genius Vorsorge
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4"></div>
                <p className="text-base sm:text-lg text-gray-600 bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl border-l-4 border-blue-500">
                  Ihr Zugang zu globalen Wachstumsmärkten.
                </p>

                {/* BUTTON HIER EINGEFÜGT - mit größerem Abstand */}
                <div className="mt-6 sm:mt-8">
                  <a href="mailto:andreas.teufel@wuerttembergische.de" 
                     className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 sm:px-6 rounded-xl text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    Jetzt persönliche Beratung anfordern
                  </a>
                </div>
              </div>
              <div className="md:col-span-2 text-gray-700 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-blue-900 font-medium">
                    Die PrivatRente Genius Vorsorge der Württembergischen ist eine hochflexible ETF-basierte Rentenversicherung, die Ihnen Zugang zu den Wachstumschancen internationaler Kapitalmärkte verschafft. Sie kombiniert die Renditepotenziale moderner ETF-Investments mit der Sicherheit einer Rentenversicherung und bietet Ihnen maximale Gestaltungsfreiheit für Ihre persönliche Anlagestrategie.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 sm:pt-6 bg-gradient-to-r from-red-50 to-red-100 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                    ETF-Portfolio: Individuelle Anlagestrategie nach Ihren Anforderungen
                  </h3>
                  <p className="mt-2 text-red-900">
                    Die PrivatRente Genius bietet Zugang zu einem sorgfältig kuratierten Portfolio an ETFs und weiteren Investments, das sich flexibel an Ihre Anlageziele anpassen lässt.
                  </p>
                  <p className="mt-4 text-red-900">
                    Möchten Sie in nachhaltige Investments, Technologiewerte oder breit diversifizierte Weltindizes investieren? Die ETF Rentenversicherung bietet Ihnen alle Möglichkeiten. Besonders attraktiv sind die thematischen Fondsbaskets, die mehrere ETFs nach Anlagethemen bündeln und so eine optimale Streuung Ihrer Investments gewährleisten.
                  </p>
                  <p className="mt-4 text-red-900">
                    Sie können Ihre Anlagestrategie jederzeit kostenlos anpassen und auf veränderte Marktbedingungen oder persönliche Lebensumstände reagieren. Diese Flexibilität macht die ETF-basierte Geldanlage zu einer Lösung für langfristig orientierte Investoren.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEUER BLOCK: Vorteile der ETF Versicherung */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
             <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Vorteile im Vergleich zu klassischen Anlageprodukten
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4"></div>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl border border-blue-200">
                  Die PrivatRente Genius Vorsorge kombiniert die Flexibilität einer modernen ETF-basierten Geldanlage mit den Sicherheitskomponenten einer lebenslangen Rentenversicherung.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AdvantageItem title="Maximale Flexibilität">Anpassung an jede Lebenssituation ohne Einschränkungen.</AdvantageItem>
              <AdvantageItem title="Strategische Sicherheit">Intelligente Absicherungsmechanismen für Ihr Kapital.</AdvantageItem>
              <AdvantageItem title="Überdurchschnittliche Ertragschancen">Zugang zu globalen Wachstumsmärkten.</AdvantageItem>
              <AdvantageItem title="Dynamische Wechseloption">Jederzeitige Anpassung Ihrer Anlagestrategie.</AdvantageItem>
              <AdvantageItem title="Personalisierte Anpassung">Individuelle Lösung statt Standardprodukt.</AdvantageItem>
              <AdvantageItem title="Hohe Liquidität">Sofortiger Zugriff auf Ihr Kapital bei Bedarf.</AdvantageItem>
              <AdvantageItem title="Flexible Auszahlungsoptionen">Individuelle Gestaltung Ihrer Rentenbezüge.</AdvantageItem>
              <AdvantageItem title="Premium-Zusatzabsicherung">Optionale Erweiterungen für maximalen Schutz.</AdvantageItem>
              <AdvantageItem title="Generationenübergreifende Vorsorge">Optimale Lösung für Ihre Kinder.</AdvantageItem>
              <AdvantageItem title="Signifikante Steuervorteile">Legale Steueroptimierung für mehr Nettorendite.</AdvantageItem>
              <AdvantageItem title="Vollständige Transparenz">Jederzeit volle Kontrolle über Ihre Anlage.</AdvantageItem>
            </div>
          </div>

          {/* BLOCK: Für wen ist die Versicherung geeignet? (MIT NEUEN ICONS) */}
<div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-200">
  <div className="text-center mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
      Für wen ist die private Rentenversicherung mit ETFs geeignet?
    </h2>
    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4"></div>
    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
      Die private Rentenversicherung mit ETFs bietet ein hohes Maß an Anpassungsfähigkeit und ist deshalb für unterschiedlichste Lebensphasen und Anlagebedürfnisse geeignet. Unabhängig von Alter, Einkommen oder Erfahrungsstand profitieren Sparer von der Kombination aus Kapitalmarktchancen, steuerlicher Optimierung und individueller Gestaltungsfreiheit beim Rentenbeginn.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

    {/* Box 1: Junge Menschen */}
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3">Für junge Menschen & Einsteiger</h3>
      <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mb-3 sm:mb-4"></div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Gerade für junge Sparer bietet die ETF Rentenversicherung außergewöhnliche Vorteile. Mit einem Einstieg ab nur 25 € monatlich können Sie frühzeitig den Grundstein für Ihre finanzielle Zukunft legen und dabei maximal vom Zinseszinseffekt profitieren.
      </p>
    </div>

    {/* Box 2: Familien */}
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3">Für Familien & Haushalte</h3>
      <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mb-3 sm:mb-4"></div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Familien profitieren besonders von der Kombination aus Renditechancen und Absicherungsmöglichkeiten. Die ETF Rentenversicherung bietet Potenzial für den eigenen Vermögensaufbau und wertvolle Optionen für die finanzielle Absicherung der gesamten Familie.
      </p>
    </div>

    {/* Box 3: Selbstständige */}
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3">Für Selbstständige & Unternehmer</h3>
      <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mb-3 sm:mb-4"></div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Selbstständige und Unternehmer stehen vor besonderen Herausforderungen bei der Altersvorsorge. Die ETF Rentenversicherung bietet hier Lösungen für schwankende Einkommen und individuelle Vorsorgebedürfnisse.
      </p>
    </div>

    {/* Box 4: Renditeorientierte Anleger */}
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3">Für renditeorientierte Anleger</h3>
      <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mb-3 sm:mb-4"></div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Anleger mit Fokus auf Rendite finden in der ETF Rentenversicherung ein leistungsstarkes Instrument für langfristigen Vermögensaufbau. Die Möglichkeit, aus über 50 hochwertigen ETFs zu wählen, erlaubt eine präzise Ausrichtung der Anlagestrategie.
      </p>
    </div>

  </div>
  {/* Finaler Button in diesem Block */}
  <div className="text-center mt-8 sm:mt-12">
    <a href="mailto:ralf-jochen.klein@wuerttembergische.de" 
       className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25">
      Jetzt persönliche Beratung anfordern
    </a>
  </div>
</div>
          
          {/* NEUER BLOCK: Steueroptimierung */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Steueroptimierung durch die ETF Rentenversicherung
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
              </div>
              <div className="md:col-span-2 text-gray-700 space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-blue-900 font-medium">
                    Die steuerlichen Vorteile der ETF Rentenversicherung gehören zu ihren stärksten Argumenten. Im Gegensatz zu direkten Fondsinvestments fallen während der gesamten Ansparphase keine Abgeltungssteuern auf Kursgewinne, Dividenden oder Umschichtungen an.
                  </p>
                </div>
                <p>
                  Der entscheidende Vorteil zeigt sich bei Rentenbeginn. Während bei klassischen Investments der volle Steuersatz auf alle Erträge fällig wird, unterliegt bei der ETF Rente nur der sogenannte Ertragsanteil der Besteuerung. Dieser Ertragsanteil ist abhängig vom Alter bei Rentenbeginn und kann bei einem Renteneintritt mit 67 Jahren auf nur 17% sinken.
                </p>
                
                {/* Hervorgehobene Beispiel-Box */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 text-red-900 p-4 sm:p-6 rounded-r-xl my-4 sm:my-6 shadow-lg">
                  <p className="font-bold text-base sm:text-lg mb-2">Rechenbeispiel:</p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Bei einer monatlichen Rente von 1.000 € und einem persönlichen Steuersatz von 25% würden Sie bei einem Rentenbeginn mit 67 Jahren nur etwa <strong className="text-red-800 bg-red-200 px-2 py-1 rounded">42,50 € monatlich an Steuern</strong> zahlen (1.000 € × 17% Ertragsanteil × 25% Steuersatz). Bei direkten ETF-Investments wären die Steuern auf die enthaltenen Erträge deutlich höher.
                  </p>
                </div>

                <p className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4 rounded-xl border-l-4 border-blue-500 text-blue-900 font-medium">
                  Diese steuerliche Regelung macht die ETF-Rentenversicherung insbesondere für langfristig orientierte Anleger zu einer hocheffizienten Vorsorgelösung.
                </p>
              </div>
            </div>
          </div>

          {/* FINALER BLOCK: Ihre persönlichen Vorsorge Spezialisten */}
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-slate-700">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Ihre persönlichen Vorsorge Spezialisten
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto bg-slate-700/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-600">
              Hinter der PrivatRente Genius Vorsorge stehen erfahrene Experten, die Sie auf Ihrem Weg zu finanzieller Unabhängigkeit begleiten. Mit über 25 Jahren Erfahrung in der Finanzberatung verstehen wir die individuellen Bedürfnisse unserer Kunden und entwickeln Lösungen für Ihre persönliche Situation.
            </p>

            {/* Berater-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12 max-w-4xl mx-auto">
              
              {/* Berater 1: Andreas Teufel */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto shadow-xl border-4 border-slate-600 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-red-700">AT</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-6 mb-3 sm:mb-4">Andreas Teufel</h3>
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mb-4 sm:mb-6"></div>
                <a href="mailto:andreas.teufel@wuerttembergische.de" 
                   className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  E-Mail an Andreas Teufel
                </a>
              </div>

              {/* Berater 2: Ralf-Jochen Klein */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto shadow-xl border-4 border-slate-600 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-red-700">RK</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-6 mb-3 sm:mb-4">Ralf-Jochen Klein</h3>
                <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto mb-4 sm:mb-6"></div>
                <a href="mailto:ralf-jochen.klein@wuerttembergische.de" 
                   className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-xl text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  E-Mail an Ralf-Jochen Klein
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}