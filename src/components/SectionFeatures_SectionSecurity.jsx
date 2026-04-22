import React from 'react';

export function SectionFeatures_SectionSecurity() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Bezpečné vyhodnocení výrazů</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Izolace výpočtu v UI</h3>
            <p style={{ color: 'var(--color-muted)' }}>Vyhodnocení běží v aplikaci bez externích skriptů.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Kontrola vstupu</h3>
            <p style={{ color: 'var(--color-muted)' }}>Validace znaků (čísla, operátory, závorky, procenta, tečka).</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Soukromí historie</h3>
            <p style={{ color: 'var(--color-muted)' }}>Historie může být volitelně lokální a snadno smazatelná.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Deterministické pravidlo tokenů</h3>
            <p style={{ color: 'var(--color-muted)' }}>M−/M+/MR/MC mění stav paměti řízeně a predikovatelně.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Audit v historii</h3>
            <p style={{ color: 'var(--color-muted)' }}>Každý krok se projeví v postranním panelu historie.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
