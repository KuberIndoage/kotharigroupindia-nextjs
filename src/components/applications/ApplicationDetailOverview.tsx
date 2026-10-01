import React from 'react';
import type { ApplicationDetail } from '@/data/applications';
import {
  ApplicationDetailSection,
  ApplicationSectionHeading,
} from './ApplicationDetailSection';

export const ApplicationDetailOverview: React.FC<{
  overview: ApplicationDetail['overview'];
  isPipe: boolean;
}> = ({ overview, isPipe }) => {
  return (
    <ApplicationDetailSection isPipe={isPipe}>
      <ApplicationSectionHeading title={overview.heading} />
      <div className="space-y-6 max-w-4xl">
        {overview.paragraphs.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed m-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </ApplicationDetailSection>
  );
};