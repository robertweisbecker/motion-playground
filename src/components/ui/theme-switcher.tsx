'use client';
// import styles from './theme-switcher.module.css';

import * as React from 'react';
import { MoonStarIcon, SunIcon, MonitorIcon, CogIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import { cn } from '@/lib/utils';
import { Separator } from './separator';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

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
    <div className="fixed top-0 right-0 flex flex-col items-center justify-center gap-1 p-4">
      <div className="text-muted-foreground shrink-0">
        <CogIcon className="" strokeWidth={1.5} />
      </div>
      <Separator />

      <ToggleGroup
        orientation="vertical"
        variant="ghost"
        type="single"
        title="Color mode"
        defaultValue="system"
        className={cn(
          'rounded-full',
          // `${styles.Group}`,
        )}
        value={theme}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleGroupItem
              className="w-8 flex-[unset] shrink-0 rounded-full"
              onClick={() => setTheme('light')}
              value="light"
              // pressed={theme === 'light'}
              aria-label="Toggle light mode"
            >
              <SunIcon className="lucide-duo text-sm" />
            </ToggleGroupItem>
          </TooltipTrigger>
          <TooltipContent side="left">Light{theme === 'light' && ': On'}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleGroupItem
              className="w-8 flex-[unset] shrink-0 rounded-full"
              onClick={() => setTheme('dark')}
              value="dark"
              // pressed={theme === 'dark'}
              aria-label="Toggle dark mode"
            >
              <MoonStarIcon className="lucide-duo" />
            </ToggleGroupItem>
          </TooltipTrigger>
          <TooltipContent side="left">Dark{theme === 'dark' && ': On'}</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <ToggleGroupItem
              className="w-8 flex-[unset] shrink-0 rounded-full"
              onClick={() => setTheme('system')}
              value="system"
              aria-label="Use system color mode"
            >
              <MonitorIcon className="lucide-duo" />
            </ToggleGroupItem>
          </TooltipTrigger>
          <TooltipContent side="left">System{theme === 'system' && ': On'}</TooltipContent>
        </Tooltip>
      </ToggleGroup>
    </div>
  );
}
