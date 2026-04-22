import React from 'react';

export function SectionHeader_SectionHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100" style={{ backgroundColor: 'var(--color-bg)', borderColor: 'rgba(0,0,0,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>Kalkulacka</span>
        <nav className="hidden md:flex gap-6">
          
        </nav>
      </div>
    </header>
  );
}
