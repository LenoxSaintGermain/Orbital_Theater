/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {Video} from '../types';
import {PlayIcon} from './icons';

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
}

/**
 * A component that renders a video card with a thumbnail, title, and play button.
 */
export const VideoCard: React.FC<VideoCardProps> = ({video, onPlay}) => {
  const typeColors = {
    canon: 'text-amber border-amber/30 bg-amber/10',
    fork: 'text-plasma border-plasma/30 bg-plasma/10',
    remix: 'text-verdant border-verdant/30 bg-verdant/10',
  };

  const badgeClass = typeColors[video.type || 'canon'];

  return (
    <button
      type="button"
      className="group w-full text-left bg-panel border border-rim rounded-none overflow-hidden hover:border-rim-bright transition-all duration-300 cursor-pointer focus:outline-none"
      onClick={() => onPlay(video)}
      aria-label={`Play video: ${video.title}`}>
      <div className="relative aspect-video">
        <video
          className="w-full h-full object-cover pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          src={video.videoUrl}
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"></video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/30">
             <PlayIcon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 border ${badgeClass} text-[9px] font-mono uppercase tracking-widest backdrop-blur-md`}>
          {video.type || 'Canon'}
        </div>
      </div>
      
      <div className="p-5 border-t border-rim group-hover:bg-surface transition-colors">
        <h3
          className="font-serif text-lg text-text-hi mb-2 leading-tight group-hover:text-plasma transition-colors"
          title={video.title}>
          {video.title}
        </h3>
        <p className="font-mono text-[10px] text-text-mid line-clamp-2 leading-relaxed">
          {video.description}
        </p>
      </div>
    </button>
  );
};
