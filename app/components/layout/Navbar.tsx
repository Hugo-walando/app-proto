'use client';

import { cn } from '@/app/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    {
      href: '/',
      label: 'Accueil',
    },
    {
      href: '/about',
      label: 'A propos',
    },
    {
      href: '/pricing',
      label: 'Tarifs',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ];

  return (
    <nav className='w-full flex justify-between px-10 py-10'>
      <div className='font-bold text-2xl'>APPROTO.</div>
      <div className='flex items-center gap-4 font-medium rounded-full p-2 bg-white/5 backdrop-blur-md'>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn('flex items-center ')}
            >
              <span
                className={cn(
                  'px-4 py-2 rounded-full hover:bg-gradient-to-t hover:from-slate-300 hover:to-slate-50 hover:text-black',
                  isActive &&
                    'bg-gradient-to-t from-slate-300 to-slate-50 text-black',
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      <div></div>
    </nav>
  );
}
