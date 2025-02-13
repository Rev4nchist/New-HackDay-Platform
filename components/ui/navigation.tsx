"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { ThemeToggle } from './theme-toggle';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Ideas', href: '/ideas' },
  { name: 'Admin', href: '/admin' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold">
                HackDay 2025
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors',
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
          <div className="hidden md:ml-6 md:flex md:items-center">
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-primary/10 text-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 