/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

/**
 * A fullscreen overlay that displays a loading animation and text indicating that
 * a video remix is being created.
 */
export const SavingProgressPage: React.FC = () => {
  return (
    <div
      className="fixed inset-0 bg-void/95 backdrop-blur-sm flex flex-col items-center justify-center z-50 animate-fade-in"
      aria-live="polite"
      aria-busy="true">
      <div className="relative">
        <div className="w-20 h-20 border-2 border-rim rounded-full"></div>
        <div className="absolute inset-0 w-20 h-20 border-t-2 border-plasma rounded-full animate-spin"></div>
      </div>
      <h2 className="font-serif text-3xl font-bold text-white mt-8 mb-2">
        Forging <em className="italic text-plasma">New Canon</em>...
      </h2>
      <p className="font-mono text-xs tracking-widest text-text-mid uppercase">
        Veo 3.1 is rendering your vision
      </p>
    </div>
  );
};
