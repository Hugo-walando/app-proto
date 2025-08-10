'use client';

import { useState } from 'react';

interface InputFormProps {
  onSubmit: (idea: string) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [idea, setIdea] = useState('');

  const handleSubmit = () => {
    if (!idea.trim()) return;
    onSubmit(idea);
  };

  return (
    <div className='w-full max-w-md'>
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder='Exemple : une app de recettes qui suggère des plats selon les ingrédients...'
        className='w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 resize-none'
        rows={4}
      />
      <button
        onClick={handleSubmit}
        className='mt-4 w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition-colors'
      >
        Générer ma maquette
      </button>
    </div>
  );
}
