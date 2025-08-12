'use client';

import { motion } from 'motion/react';

interface LoadingScreenProps {
  isReady?: boolean;
}

export default function LoadingScreen({ isReady = false }: LoadingScreenProps) {
  return (
    <div className='flex flex-col items-center mt-8'>
      {/* Engrenage */}
      <motion.div
        className='w-16 h-16 border-4 border-purple border-t-transparent rounded-full'
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />

      {/* Texte */}
      <motion.p
        className='mt-4 text-lg'
        animate={{ opacity: isReady ? 0.5 : 1, scale: isReady ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {isReady ? 'Finalisation...' : 'Analyse de votre idée...'}
      </motion.p>

      {/* Barre de progression */}
      <motion.div className='mt-4 w-64 h-2 bg-gray-700 rounded-full overflow-hidden'>
        <motion.div
          className='h-full bg-purple-dark'
          initial={{ width: 0 }}
          animate={{ width: isReady ? '100%' : '60%' }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
}
