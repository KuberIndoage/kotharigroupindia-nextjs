import React from 'react';
import type { ApplicationDetail } from '@/data/applications';

export const ApplicationDetailHowItWorks: React.FC<{
  detail: ApplicationDetail;
}> = ({ detail }) => {
  if (!detail.bannerImage) return null;

  return (
    <section className="w-full bg-white">
      <img
        src={detail.bannerImage}
        alt={detail.h1}
        loading="lazy"
        className="w-full h-auto block"
      />
    </section>
  );
};