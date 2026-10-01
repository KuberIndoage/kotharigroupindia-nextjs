'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { ApplicationDetailPoint } from '@/data/applications';

export const ApplicationDetailPopup: React.FC<{
  item: ApplicationDetailPoint | null;
  index: number;
  isPipe: boolean;
  onClose: () => void;
}> = ({ item, index, isPipe, onClose }) => {
  useEffect(() => {
    if (!item) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [item, onClose]);

  const accentText = isPipe ? 'text-[#1575B3]' : 'text-[#1E8E3E]';
  const accentBg = isPipe ? 'bg-[#1575B3]' : 'bg-[#1E8E3E]';

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={item.label}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-2xl bg-white shadow-2xl max-h-[85dvh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="absolute top-4 right-4 z-10 w-10 h-10 inline-flex items-center justify-center bg-white/90 text-slate-900 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-7 sm:p-10">
              <span
                className={`inline-flex items-center justify-center w-9 h-9 ${accentBg} text-white shrink-0`}
              >
                <span className="text-[11px] font-mono font-semibold tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </span>
              <h3
                className={`text-2xl sm:text-3xl font-serif font-light uppercase tracking-tight m-0 mt-5 leading-snug ${accentText}`}
              >
                {item.label}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mt-4 mb-0">
                {item.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};