'use client';
import styles from './theme-switcher.module.css';

import * as React from 'react';
import { MoonIcon, SunIcon, MonitorIcon, SwatchBookIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import { cn } from '@/lib/utils';

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect ensures this runs only on the client side after hydration
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server to prevent hydration mismatches
  }

  return (
    <ToggleGroup
      variant="ghost"
      type="single"
      title="Color mode"
      defaultValue="system"
      className={cn(
        'ease fixed top-2 right-2 w-9 overflow-hidden rounded-full shadow-md transition-[width] hover:w-auto',
        // `${styles.Group}`,
      )}
      value={theme}
    >
      <div className="ms-px flex size-8 shrink-0 items-center justify-center">
        <SwatchBookIcon className="lucide-duo lucide" strokeWidth={1.5} />
      </div>
      <ToggleGroupItem
        className="w-8 flex-[unset] shrink-0 rounded-full"
        onClick={() => setTheme('light')}
        value="light"
        // pressed={theme === 'light'}
        aria-label="Toggle light mode"
      >
        <SunIcon className="lucide-duo text-sm" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="w-8 flex-[unset] shrink-0 rounded-full"
        onClick={() => setTheme('dark')}
        value="dark"
        // pressed={theme === 'dark'}
        aria-label="Toggle dark mode"
      >
        <MoonIcon className="lucide-duo" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="w-8 flex-[unset] shrink-0 rounded-full"
        onClick={() => setTheme('system')}
        value="system"
        aria-label="Use system color mode"
      >
        <MonitorIcon className="lucide-duo" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
