import { Generation } from '@/app/types';
import { cn } from '@/app/utils/cn';
import Link from 'next/link';
import { X } from 'lucide-react';

interface SidebarProps {
  generations: Generation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  isOpen?: boolean; // ajout
  onClose?: () => void; // ajout
}

export default function Sidebar({
  generations,
  selectedId,
  onSelect,
  isOpen = false,
  onClose,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 min-h-screen w-64 bg-black border-r border-white/10 p-4 z-50 transform transition-transform',
        'lg:static lg:translate-x-0 lg:flex lg:flex-col lg:max-h-screen lg:overflow-y-auto',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      {/* Bouton fermer sur mobile */}
      <div className='flex justify-between items-center mb-4 lg:hidden'>
        <Link href={'/'} className='text-3xl font-bold mb-4'>
          APPROTO.
        </Link>
        <button onClick={onClose}>
          <X className='text-white' />
        </button>
      </div>

      <Link href={'/'} className='hidden lg:block text-3xl font-bold mb-4'>
        APPROTO.
      </Link>

      <h2 className='text-lg font-bold mb-4'>Mes générations</h2>
      <ul className='space-y-2'>
        {generations.map((g, i) => (
          <li
            key={g.id}
            onClick={() => {
              onSelect(g.id);
              onClose?.();
            }}
            className={cn(
              'p-2 rounded-xl cursor-pointer truncate transition',
              'bg-white-fade backdrop-blur-sm border border-white/10 hover:border-white/30',
              selectedId === g.id
                ? 'border border-purple bg-purple/40 purple-glow'
                : 'border-white',
            )}
          >
            {g.title || `Génération ${i + 1}`}
          </li>
        ))}
      </ul>
    </aside>
  );
}
