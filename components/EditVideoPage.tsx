/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, {useState} from 'react';
import {Video} from '../types';

interface EditVideoPageProps {
  video: Video;
  onSave: (updatedVideo: Video) => void;
  onCancel: () => void;
}

/**
 * A page that allows the user to edit the description of a video.
 * It provides input field for the description and buttons to save or cancel the changes.
 */
export const EditVideoPage: React.FC<EditVideoPageProps> = ({
  video,
  onSave,
  onCancel,
}) => {
  const [description, setDescription] = useState(video.description);

  const handleSave = () => {
    onSave({...video, description});
  };

  return (
    <div className="min-h-screen bg-void text-text-hi font-sans flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-3xl bg-panel border border-rim p-8 md:p-12 shadow-2xl relative">
        {/* Decorative corner */}
        <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t-2 border-l-2 border-plasma"></div>
        <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b-2 border-r-2 border-plasma"></div>

        <header className="mb-8 border-b border-rim pb-6">
          <div className="font-mono text-[10px] tracking-[0.2em] text-plasma uppercase mb-2">
             Remixing Node: {video.id.substring(0, 8)}...
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Define Your <em className="italic text-plasma">Variation</em>
          </h1>
        </header>

        <main>
          <div className="mb-8">
            <label
              htmlFor="description"
              className="block font-mono text-xs tracking-widest text-text-mid uppercase mb-3">
              Prompt / Narrative Directive
            </label>
            <textarea
              id="description"
              rows={12}
              className="w-full bg-surface border border-rim p-4 text-text-hi font-mono text-sm leading-relaxed focus:border-plasma focus:ring-1 focus:ring-plasma/50 transition-all outline-none resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              aria-label={`Edit description for the video`}
            />
            <div className="mt-2 flex justify-between text-[10px] font-mono text-text-dim uppercase">
               <span>Veo 3.1 Model Active</span>
               <span>Native Audio Enabled</span>
            </div>
          </div>
        </main>

        <footer className="flex justify-end gap-4 pt-4 border-t border-rim">
          <button
            onClick={onCancel}
            className="px-8 py-3 border border-rim text-text-mid font-mono text-xs font-bold tracking-widest uppercase hover:text-white hover:border-white/30 transition-colors">
            Abort
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-plasma text-black font-mono text-xs font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all transform hover:-translate-y-1">
            Generate Variation
          </button>
        </footer>
      </div>
    </div>
  );
};
