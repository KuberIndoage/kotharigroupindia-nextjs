'use client';

import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import type { KothariVideo } from '@/lib/video';

const INITIAL_COUNT = 6;
const LOAD_STEP = 6;

// Static, unfiltered video grid (KothariTV card styling without the category tabs).
export const StaticVideoGallery: React.FC<{
  videos: KothariVideo[];
  playlistId?: string;
}> = ({ videos, playlistId }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  if (videos.length === 0) return null;

  const visible = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((video, i) => (
          <Reveal key={video.embedId} delay={(i % 3) * 90}>
            <div className="group border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1E8E3E] transition-all duration-500">
              <div className="aspect-video w-full bg-slate-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="pt-10 flex flex-col items-center gap-4">
        {hasMore && (
          <>
            <button
              onClick={() => setVisibleCount((c) => Math.min(videos.length, c + LOAD_STEP))}
              className="px-7 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase border border-[#1575B3] text-[#1575B3] hover:bg-[#1575B3] hover:text-white transition-all duration-200"
            >
              Load More
            </button>
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500">
              Showing {visible.length} of {videos.length}
            </span>
          </>
        )}

        {playlistId && (
          <a
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#01568f] text-white px-7 py-3.5 text-sm font-medium transition-all duration-300"
          >
            <PlayCircle className="w-4 h-4" /> 
            Watch all on YouTube
          </a>
        )}
      </div>
    </div>
  );
};
