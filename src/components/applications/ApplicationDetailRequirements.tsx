'use client';

import React, { useCallback, useState } from 'react';
import type { ApplicationDetail, ApplicationDetailPoint } from '@/data/applications';
import {
  ApplicationDetailSection,
  ApplicationSectionHeading,
} from './ApplicationDetailSection';
import { ApplicationDetailPopup } from './ApplicationDetailPopup';

export const ApplicationDetailRequirements: React.FC<{
  requirements: ApplicationDetail['requirements'];
  isPipe: boolean;
}> = ({ requirements, isPipe }) => {
  // const isGreen = !isPipe;
  const isGreen = isPipe;
  const accentBg = isGreen ? 'bg-[#1575B3]' : 'bg-[#1575B3]';
  const accentHoverBorder = isGreen ? 'hover:border-[#1575B3]/40' : 'hover:border-[#1575B3]/40';
  const accentText = isGreen ? 'text-[#1575B3]' : 'text-[#1575B3]';

  const [activeItem, setActiveItem] = useState<ApplicationDetailPoint | null>(null);

  const handleClose = useCallback(() => setActiveItem(null), []);
  const activeIndex = activeItem
    ? requirements.items.findIndex((item) => item.label === activeItem.label)
    : 0;

  return (
    <ApplicationDetailSection isPipe={isPipe}>
      <ApplicationSectionHeading title={requirements.heading} intro={requirements.intro} />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 list-none p-0 m-0">
        {requirements.items.map((item, idx) => (
          <li
            key={item.label}
            className={`group border border-slate-200 bg-white p-4 sm:p-5 flex gap-3 items-start ${accentHoverBorder} hover:shadow-md transition-all`}
          >
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              aria-label={`View details for ${item.label}`}
              className="flex gap-3 items-start text-left w-full p-0 bg-transparent border-0 cursor-pointer"
            >
              <span
                className={`w-7 h-7 ${accentBg} text-white flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:opacity-90`}
              >
                <span className="text-[10px] font-mono font-semibold tracking-wider">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </span>
              <span className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <ApplicationDetailPopup
        item={activeItem}
        index={activeIndex}
        isPipe={isPipe}
        onClose={handleClose}
      />
    </ApplicationDetailSection>
  );
};