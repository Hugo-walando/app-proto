'use client';

import { useRouter } from 'next/navigation';
import InputForm from './components/InputForm';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import { useGenerationStore } from './store/useGenerationsStore';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const createGeneration = useGenerationStore(
    (state) => state.createGeneration,
  );

  const handleIdeaSubmit = (idea: string) => {
    if (!idea.trim()) return;

    // On sauvegarde l'idée dans le store
    createGeneration(idea);

    // On simule le chargement
    setIsLoading(true);
    const fakeTime = Math.floor(Math.random() * 2000) + 3000;
    setTimeout(() => {
      setIsReady(true);
    }, fakeTime);
  };

  useEffect(() => {
    if (isReady) {
      setTimeout(() => {
        router.push(`/result`);
      }, 800);
    }
  }, [isReady, router]);
  return (
    <main className='max-w-7xl mx-auto p-6'>
      <section className='flex flex-col items-center text-center pt-10 gap-6'>
        <div className='absolute top-5 right-5 w-[500px] h-[300px] bg-purple-glow blur-3xl -z-10'></div>
        <div className='absolute top-40 left-5 w-[500px] h-[300px] bg-purple-glow blur-3xl -z-10'></div>
        <div className='absolute top-[-100px] left-80 w-[200px] h-[200px] bg-purple-glow blur-3xl -z-10'></div>
        <h1 className='text-7xl font-semibold mb-6 '>
          <span className='bg-gradient-to-r from-purple-300 from-5% to-20% to-slate-50 bg-clip-text text-transparent'>
            Transformez vos idées en <br />
          </span>
          <span className='bg-gradient-to-r from-purple-300 from-5% to-20% to-slate-50  bg-clip-text text-transparent'>
            maquettes visuelles
          </span>{' '}
        </h1>
        <p>
          Décrivez votre application en quelques mots et laissez notre outil
          imaginer son design.
        </p>
        <AnimatePresence mode='wait'>
          {!isLoading ? (
            <InputForm key='form' onSubmit={handleIdeaSubmit} />
          ) : (
            <LoadingScreen key='loading' isReady={isReady} />
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
