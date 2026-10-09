import React from 'react';
import type { ApplicationDetail } from '@/data/applications';
import { ApplicationDetailHero } from './ApplicationDetailHero';
import { ApplicationDetailOverview } from './ApplicationDetailOverview';
import { ApplicationDetailWhereUsed } from './ApplicationDetailWhereUsed';
import { ApplicationDetailRequirements } from './ApplicationDetailRequirements';
import { ApplicationDetailProducts } from './ApplicationDetailProducts';
import { ApplicationDetailHowItWorks } from './ApplicationDetailHowItWorks';
import { ApplicationDetailRelated } from './ApplicationDetailRelated';
import { ApplicationDetailCta } from './ApplicationDetailCta';

export const ApplicationDetailPageTemplate: React.FC<{ detail: ApplicationDetail }> = ({
  detail,
}) => {
  const isPipe = detail.division === 'pipe-division';
 
  return (
    <div className="text-left"> 
      <ApplicationDetailHero detail={detail} />
      <ApplicationDetailOverview overview={detail.overview} isPipe={isPipe} />
      <ApplicationDetailWhereUsed whereUsed={detail.whereUsed} isPipe={isPipe} />
      <ApplicationDetailRequirements requirements={detail.requirements} isPipe={isPipe} />
      <ApplicationDetailProducts products={detail.products} isPipe={isPipe} />
      <ApplicationDetailHowItWorks detail={detail} />
      {/* <ApplicationDetailRelated detail={detail} /> */}
      <ApplicationDetailCta cta={detail.cta} isPipe={isPipe} />
    </div>
  );
};