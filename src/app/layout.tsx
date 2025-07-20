// 'use client';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

import { Geist, Inter, Geist_Mono } from 'next/font/google';
import './styles/globals.css';
import './styles/components.css';
import './styles/animations.css';
import Image from 'next/image';
import { LucideChevronDown, LucideComponent, LucideDot, LucideHome } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components/ui/theme-switcher';

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Fun x games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} prose relative min-h-screen antialiased`}
      >
        {/* @TODO: decide on antialiased or not */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="from-background sm:px-6l sticky top-0 z-10 flex items-center justify-between gap-x-0 bg-gradient-to-b from-20% to-transparent px-4 py-4">
            <div className="from-background to-background/0 pointer-events-none absolute -inset-2 z-0 h-[120px] bg-gradient-to-b from-0% to-50% mask-b-from-40% mask-b-to-100% blur-xs backdrop-blur-xs"></div>
            <Button asChild variant="ghost">
              <NavLink href="/" label="Home" />
            </Button>
            <Button asChild variant="ghost">
              <NavLink href="/components" label="Components" />
            </Button>
            {/* <Button asChild variant="ghost">
							<NavLink href="/theme" label="Theme" />
						</Button> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  Experiments <LucideChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <NavLink href="/demos">CSS Playground</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink href="/tabs">Animated Tabs</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink href="/experiment-tailwind">Tailwind Playground</NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="ms-auto">
              <ModeToggle />
            </span>
          </nav>
          <main className="mx-auto flex max-w-4xl flex-col p-8 pb-20 sm:p-20">{children}</main>
          <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
