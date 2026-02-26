/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {XMarkIcon} from './icons';

interface ErrorModalProps {
  message: string[];
  onClose: () => void;
  onSelectKey: () => void;
}

/**
 * A modal component that displays an error message to the user.
 * It includes a title, the error message, a close button, and a visual error icon.
 */
export const ErrorModal: React.FC<ErrorModalProps> = ({
  message,
  onClose,
  onSelectKey,
}) => {
  return (
    <div
      className="fixed inset-0 bg-void/95 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="error-modal-title">
      <div
        className="bg-panel border border-rim shadow-2xl w-full max-w-md relative p-8 m-4 text-center"
        onClick={(e) => e.stopPropagation()}>
        
        <div className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t-2 border-l-2 border-crimson"></div>
        <div className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b-2 border-r-2 border-crimson"></div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-text-mid hover:text-white z-10 p-2 transition-colors"
          aria-label="Close error message">
          <XMarkIcon className="w-6 h-6" />
        </button>
        
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-crimson/10 mb-6 border border-crimson/30">
          <svg
            className="h-8 w-8 text-crimson"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        
        <h2
          id="error-modal-title"
          className="font-serif text-2xl font-bold text-white mb-4">
          Generation Halted
        </h2>
        
        <div className="font-mono text-xs text-text-mid space-y-2 mb-8 leading-relaxed">
          {message.map((m, i) => (
            <p key={i}>{m}</p>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={onSelectKey}
            className="px-6 py-3 bg-plasma text-black font-mono text-[10px] font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] transition-all transform hover:-translate-y-1">
            Connect Cloud Project
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-rim text-text-mid font-mono text-[10px] font-bold tracking-widest uppercase hover:text-white hover:border-white/30 transition-colors">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
