import React from 'react';

export function SectionFeatures_SectionFeatures() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Elegantní kalkulační UI s přesným displejem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Plná mřížka tlačítek</h3>
            <p style={{ color: 'var(--color-muted)' }}>0–9, + − × ÷, vymazat, zpět, desetinná tečka, rovná se, závorky a procenta.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Paměťové funkce</h3>
            <p style={{ color: 'var(--color-muted)' }}>M+, M−, MR a MC pro práci s průběžnou hodnotou bez přepisování displeje.</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">●</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>Podpora klávesnice přes JS</h3>
            <p style={{ color: 'var(--color-muted)' }}>Real-time zpracování: Enter = „=“, Backspace = „Zpět“, Esc = „Vymazat“, znaky pro operátory a závorky.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
