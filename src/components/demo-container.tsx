'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

type ThemeItem = {
  value: 'light' | 'dark' | 'system';
  label: string;
  icon: React.ReactNode;
};

const defaultThemeItems: ThemeItem[] = [
  {
    value: 'light',
    label: 'Light theme',
    icon: <SunIcon className="size-3" />,
  },
  {
    value: 'dark',
    label: 'Dark theme',
    icon: <MoonIcon className="size-3" />,
  },
  {
    value: 'system',
    label: 'System theme',
    icon: <ComputerDesktopIcon className="size-3" />,
  },
];

export function DemoContainer({
  children,
  className,
  items,
  ...props
}: React.ComponentProps<'div'> & {
  items?: ThemeItem[];
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const themeItems = items ?? defaultThemeItems;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        'not-prose',
        'rounded-[15px]',
        'relative my-6 gap-2 bg-muted p-1',
        // 'ring-border-alpha ring-2',
        'inset-shadow-2xs',
        'dark:ring dark:ring-border-alpha-soft',
        'lg:-mx-4',
        // 'transition-[height,width]',
      )}
      {...props}
    >
      {mounted ? (
        <ToggleGroup
          type="single"
          size="sm"
          variant="elevated"
          value={theme}
          onValueChange={(value) => {
            if (value) {
              setTheme(value as 'light' | 'dark' | 'system');
            }
          }}
          aria-label="Theme selector"
          className="absolute top-2 right-2 z-1"
        >
          {themeItems.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              aria-label={item.label}
            >
              {item.icon}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      ) : // Placeholder to prevent layout shift - approximates 3 toggle items with sm size
      null}
      <div
        className={cn(
          // 'flex items-center justify-center',
          'gap-20 overflow-auto rounded-[12px] bg-card px-8 py-12 shadow-sm lg:py-16 dark:bg-background',
          // DIAGONALS
          // 'bg-background bg-[image:repeating-linear-gradient(45deg,var(--border-alpha-soft),var(--border-alpha-soft)_1px,transparent_0,transparent_0.5rem)]',
          // GRID
          // 'bg-card bg-[linear-gradient(to_right,var(--border-alpha-soft)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-alpha-soft)_1px,transparent_1px)] bg-size-[0.5rem_0.5rem]',
          // DOTS
          'bg-[radial-gradient(var(--border-alpha-soft)_1px,transparent_1px)] bg-size-[--spacing(4)_--spacing(4)]',

          'max-w-full overscroll-x-contain',
          'relative',
          // Only apply theme classes after mounting to avoid hydration mismatch
          // Use resolvedTheme to get the actual theme (light/dark) even when theme is 'system'
          mounted && resolvedTheme === 'light' && 'light',
          mounted && resolvedTheme === 'dark' && 'dark',
        )}
      >
        <div
          className={cn(
            'not-prose relative mx-auto flex w-full flex-col items-center justify-center gap-4',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
