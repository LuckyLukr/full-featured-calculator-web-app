import React from 'react';

export function SectionCtaBanner_SectionCta() {
  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Začněte počítat — bez instalace.</h2>
        <a href="#app" className="inline-block px-8 py-3 rounded-full font-semibold bg-white" style={{ color: 'var(--color-primary)' }}>Start Free Trial</a>
      </div>
    </section>
  );
}
