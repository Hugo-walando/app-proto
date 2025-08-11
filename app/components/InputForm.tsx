'use client';

import { WandSparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface InputFormProps {
  onSubmit: (idea: string) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [idea, setIdea] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Redimensionner automatiquement le textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [idea]);

  const handleSubmit = () => {
    if (!idea.trim()) return;
    onSubmit(idea);
    setIdea('');
  };

  return (
    <div className='w-full max-w-3xl relative flex'>
      <textarea
        ref={textareaRef}
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder='Décrivez votre idée...'
        rows={1}
        className='w-full rounded-4xl p-6 pr-40 bg-white/5 backdrop-blur-md text-white border border-gray-700 focus:outline-none focus:border-purple-500 resize-none overflow-hidden'
      />
      <button
        onClick={handleSubmit}
        className='absolute flex items-center gap-2 right-2 top-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple to-purple-dark font-medium transition-colors hover:cursor-pointer'
      >
        Générer
        <WandSparkles className='w-5 h-5 ' />
      </button>
    </div>
  );
}
