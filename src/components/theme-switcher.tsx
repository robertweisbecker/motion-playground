'use client';
// import styles from './theme-switcher.module.css';

import * as React from 'react';
import { MoonIcon, SunIcon, ComputerDesktopIcon, CogIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';

import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

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
      variant="elevated"
      type="single"
      defaultValue="system"
      className={cn('w-auto flex-0 rounded-full')}
      value={theme}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <ToggleGroupItem
            className="w-8 flex-[unset] shrink-0 rounded-full"
            onClick={() => setTheme('light')}
            value="light"
            aria-label="Toggle light mode"
          >
            <SunIcon className="text-sm" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent side="top">Light{theme === 'light' && ': On'}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <ToggleGroupItem
            className="w-8 flex-[unset] shrink-0 rounded-full"
            onClick={() => setTheme('dark')}
            value="dark"
            aria-label="Toggle dark mode"
          >
            <MoonIcon className="" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent side="top">Dark{theme === 'dark' && ': On'}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <ToggleGroupItem
            className="w-8 flex-[unset] shrink-0 rounded-full"
            onClick={() => setTheme('system')}
            value="system"
            aria-label="Use system color mode"
          >
            <ComputerDesktopIcon className="" />
          </ToggleGroupItem>
        </TooltipTrigger>
        <TooltipContent side="top">System{theme === 'system' && ': On'}</TooltipContent>
      </Tooltip>
    </ToggleGroup>
  );
}
