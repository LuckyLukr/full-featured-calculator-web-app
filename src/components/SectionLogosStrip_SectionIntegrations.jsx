import React from 'react';

export function SectionLogosStrip_SectionIntegrations() {
  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
        <div dangerouslySetInnerHTML={{ __html: "<h2 style=\"font-size:2rem;font-weight:700;color:var(--color-text)\">Připraveno pro moderní web — bez složitostí</h2>" }} />
        <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1.5rem;border-radius:1rem;border:1px solid rgba(0,0,0,.08);background:var(--color-surface)\"><div style=\"font-size:1.75rem;margin-bottom:.5rem\">●</div><h3 style=\"font-size:1.125rem;font-weight:600;margin-bottom:.25rem;color:var(--color-text)\">Lokální historie</h3><p style=\"color:var(--color-muted)\">Ukládání posledních výpočtů (volitelně do LocalStorage).</p></div>" }} />
        <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1.5rem;border-radius:1rem;border:1px solid rgba(0,0,0,.08);background:var(--color-surface)\"><div style=\"font-size:1.75rem;margin-bottom:.5rem\">●</div><h3 style=\"font-size:1.125rem;font-weight:600;margin-bottom:.25rem;color:var(--color-text)\">Sdílení výrazů</h3><p style=\"color:var(--color-muted)\">Kopie vstupu/výsledku do schránky (připraveno pro UI tlačítka).</p></div>" }} />
        <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1.5rem;border-radius:1rem;border:1px solid rgba(0,0,0,.08);background:var(--color-surface)\"><div style=\"font-size:1.75rem;margin-bottom:.5rem\">●</div><h3 style=\"font-size:1.125rem;font-weight:600;margin-bottom:.25rem;color:var(--color-text)\">Accurate parsing</h3><p style=\"color:var(--color-muted)\">Bezpečné vyhodnocení výrazů se závorkami a procenty.</p></div>" }} />
        <div dangerouslySetInnerHTML={{ __html: "<div style=\"padding:1.5rem;border-radius:1rem;border:1px solid rgba(0,0,0,.08);background:var(--color-surface)\"><div style=\"font-size:1.75rem;margin-bottom:.5rem\">●</div><h3 style=\"font-size:1.125rem;font-weight:600;margin-bottom:.25rem;color:var(--color-text)\">Design system</h3><p style=\"color:var(--color-muted)\">Glass/umorno kompatibilita s tématem tmavé/světlé.</p></div>" }} />
      </div>
    </section>
  );
}
