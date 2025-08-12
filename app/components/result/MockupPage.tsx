'use client';

import MockupBlock from './MockupBlock';

const components = [
  { type: 'Hero', height: 'h-14' },
  { type: 'Cards', height: 'h-18' },
  { type: 'Section', height: 'h-18' },
  { type: 'Gallery', height: 'h-26' },
  { type: 'Form', height: 'h-22' },
];

export default function MockupPage() {
  // Génère un layout aléatoire à chaque rendu
  const shuffled = [...components].sort(() => Math.random() - 0.5);

  return (
    <section className='flex justify-center max-h-screen flex-1 p-4 overflow-y-auto overflow-x-hidden relative '>
      <div className='absolute top-0 left- w-full h-full  blur-3xl -z-20'></div>
      {/* <div className='absolute top-20 right-5 w-[300px] h-[200px] bg-purple-glow blur-3xl -z-20'></div>
      <div className='absolute top-60 left-[-100px]  w-[300px] h-[200px] bg-purple-glow blur-3xl -z-20'></div>
      <div className='absolute bottom-10 right-[-100px] left-10 w-[400px] h-[200px] bg-purple-glow blur-3xl -z-20'></div> */}

      <div className='border-white/20 border-2 h-min max-w-full w-[600px] rounded-lg shadow-lg p-3  bg-purple/30 backdrop-blur-md purple-glow flex flex-col gap-4'>
        {/* NavBar */}
        <MockupBlock type='NavBar' height='h-12' />

        {/* Sections aléatoires */}
        {shuffled.map((block, i) => (
          <MockupBlock key={i} type={block.type} height={block.height} />
        ))}

        {/* Footer */}
        <MockupBlock type='Footer' height='h-16' />
      </div>
    </section>
  );
}
