'use client';

import { cn } from '@/app/utils/cn';

interface MockupBlockProps {
  type: string;
  height: string;
  color?: string;
  textColor?: string;
}

export default function MockupBlock({
  type,
  height,
  color = 'bg-purple-dark/5',
  textColor = 'text-white',
}: MockupBlockProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center backdrop-blur-md rounded-xl border-2 border-white/10',
        height,
        color,
      )}
    >
      {/* Label en haut à gauche */}
      <span
        className={cn(
          'absolute top-1 left-1 text-xs px-2 py-0.5 rounded bg-black/50',
          'text-white',
        )}
      >
        {type}
      </span>

      {/* Placeholder */}
      <span className={cn('opacity-50', textColor)}>{type} content</span>
    </div>
  );
}
