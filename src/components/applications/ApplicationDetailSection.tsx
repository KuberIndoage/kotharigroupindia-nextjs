import React from 'react';

export const ApplicationDetailSection: React.FC<{
  tinted?: boolean;
  isPipe: boolean;
  children: React.ReactNode;
}> = ({ tinted = false, isPipe, children }) => {
  return (
    <section
      className={`w-full py-16 sm:py-24 ${
        tinted
          ? isPipe
            ? 'bg-[#F5F6F8] border-y border-slate-300/70'
            : 'bg-[#EAF6EE] border-y border-[#1E8E3E]/15'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">{children}</div>
    </section>
  );
};

export const ApplicationSectionHeading: React.FC<{
  title: string;
  intro?: string;
}> = ({ title, intro }) => {
  return (
    <div className="pb-6 border-b border-slate-300 mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
        {title}
      </h2>
      {intro && (
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl font-normal leading-relaxed mt-4">
          {intro}
        </p>
      )}
    </div>
  );
};