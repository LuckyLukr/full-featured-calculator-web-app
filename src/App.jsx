import React from 'react';
import { SectionHeader_SectionHeader } from './components/SectionHeader_SectionHeader';
import { SectionFeatures_SectionFeatures } from './components/SectionFeatures_SectionFeatures';
import { SectionFeatures_SectionSecurity } from './components/SectionFeatures_SectionSecurity';
import { SectionPricing_SectionPricing } from './components/SectionPricing_SectionPricing';
import { SectionLogosStrip_SectionIntegrations } from './components/SectionLogosStrip_SectionIntegrations';
import { SectionCtaBanner_SectionCta } from './components/SectionCtaBanner_SectionCta';

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SectionHeader_SectionHeader />
      <SectionFeatures_SectionFeatures />
      <SectionFeatures_SectionSecurity />
      <SectionPricing_SectionPricing />
      <SectionLogosStrip_SectionIntegrations />
      <SectionCtaBanner_SectionCta />
      </div>
    </>
  );
}
