"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { ThemeToggle } from './theme-toggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Ideas', href: '/ideas' },
  { name: 'Admin', href: '/admin' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold">
                HackDay 2025
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                    pathname === item.href
                      ? 'border-primary text-foreground'
                      : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 