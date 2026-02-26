/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {Video} from '../types';
import {PencilSquareIcon, XMarkIcon} from './icons';

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
  onEdit: (video: Video) => void;
}

/**
 * A component that renders a video player with controls, description, and edit button.
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  onClose,
  onEdit,
}) => {
  return (
    <div
      className="fixed inset-0 bg-void/95 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog">
      <div
        className="bg-panel border border-rim rounded-none shadow-2xl w-full max-w-5xl relative overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}>
        
        {/* Header / Close */}
        <div className="absolute top-0 right-0 z-20 p-4">
          <button
            onClick={onClose}
            className="text-text-mid hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors border border-white/10"
            aria-label="Close video player">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-shrink-0 bg-black relative">
          <div className="aspect-video w-full">
            <video
              key={video.id}
              className="w-full h-full"
              src={video.videoUrl}
              controls
              autoPlay
              loop
              aria-label={video.title}
            />
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto bg-panel">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                 <span className={`px-2 py-1 border text-[10px] font-mono uppercase tracking-widest ${
                    video.type === 'remix' ? 'border-verdant text-verdant' : 
                    video.type === 'fork' ? 'border-plasma text-plasma' : 
                    'border-amber text-amber'
                 }`}>
                    {video.type || 'Canon'}
                 </span>
                 <h2 className="font-serif text-2xl font-bold text-text-hi">{video.title}</h2>
              </div>
              <p className="font-mono text-sm text-text-mid whitespace-pre-wrap leading-relaxed border-l-2 border-rim pl-4">
                {video.description}
              </p>
            </div>
            
            <button
              onClick={() => onEdit(video)}
              className="flex-shrink-0 flex items-center gap-2 bg-plasma/10 hover:bg-plasma/20 border border-plasma/30 text-plasma font-mono text-xs font-bold tracking-widest py-3 px-6 uppercase transition-all hover:shadow-[0_0_20px_rgba(192,132,252,0.2)]"
              aria-label="Remix this scene">
              <PencilSquareIcon className="w-4 h-4" />
              <span>Remix Scene</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
