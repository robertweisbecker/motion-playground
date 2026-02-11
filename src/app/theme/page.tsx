'use client';
import { Heading } from '@/components/heading';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';
import { colorScheme } from '@/components/utils/colorScheme';
import { Button } from '@/components/ui/button';
import { LinkOutIcon } from '../icons/icons';
import { Badge } from '@/components/ui/badge';

export default function StylesPage() {
  const hues = [
    'ruby',
    'red',
    'orange',
    'yellow',
    'gold',
    'lime',
    'green',
    'jade',
    'teal',
    'cyan',
    'blue',
    'navy',
    'indigo',
    'violet',
    'purple',
    'magenta',
    'pink',
  ];
  const neutrals = [
    'black',
    'gray',
    'zinc',
    'ash',
    'plum',
    'sand',
    'sage',
    'steel',
    'black-alpha',
    'white-alpha',
    'gray-alpha',
  ];
  const palettes = [...hues, ...neutrals];
  const swatchClass = 'w-full h-10';
  return (
    <>
      <div className="">
        <Heading as="h1">Theme</Heading>
        <Heading as="h2" sub>
          Shadow
        </Heading>

        <div className="grid grid-cols-7 gap-4">
          <div className={`rounded-md bg-card p-10 shadow-2xs`}>
            <Heading size="h4">2xs</Heading>
          </div>
          <div className={`rounded-md bg-card p-10 shadow-xs`}>
            <Heading size="h4">xs</Heading>
          </div>
          <div className={`rounded-md bg-card p-10 shadow-sm`}>
            <Heading size="h4">sm</Heading>
          </div>
          <div className={`rounded-md bg-card p-10 shadow-md`}>
            <Heading size="h4">md</Heading>
          </div>
          <div className={`rounded-md bg-card p-10 shadow-lg`}>
            <Heading size="h4">lg</Heading>
          </div>
          <div className={`rounded-md bg-card p-10 shadow-xl`}>
            <Heading size="h4">xl</Heading>
          </div>
          <div className={`rounded-md bg-card p-10 shadow-2xl`}>
            <Heading size="h4">2xl</Heading>
          </div>
          <div className={`rounded-md bg-card p-10 shadow-popover`}>
            <Heading size="h4">Popover</Heading>
          </div>
          <div className="bg-elevated flex flex-col rounded-lg border border-transparent py-1 shadow-popover transition-all duration-75 dark:border-neutral-800 dark:bg-[#1E1E1E]">
            <p className="mx-2 text-xs/6">Label</p>
            <div
              className={cn(
                'group relative mx-1 flex h-8.5 cursor-pointer items-center rounded-[5px] border-none px-3 text-sm font-medium outline-none',
                'bg-black/5 shadow-dropdown-item dark:bg-white/10',
              )}
            >
              Dropdown
            </div>
            <div
              className={cn(
                'group relative mx-1 flex h-8.5 cursor-pointer items-center rounded-[5px] border-none px-3 text-sm font-medium outline-none',
                // 'shadow-dropdown-item bg-black-5',
              )}
            >
              Dropdown
            </div>
          </div>
        </div>
        <Heading>Palette</Heading>
        <div className="flex flex-col">
          {hues.map((hue) => (
            <div key={hue} className="flex w-full items-center gap-1">
              <p className="w-1/3 font-mono text-[11px] leading-none">{hue}</p>
              <div className="grid w-full grid-cols-13 bg-muted dark:bg-white">
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-25)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-50)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-100)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-200)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-300)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-400)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-500)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-600)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-700)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-800)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-900)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-950)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${hue}-975)` }}
                />
              </div>
            </div>
          ))}
          {neutrals.map((neutral) => (
            <div key={neutral} className="flex w-full items-center gap-1">
              <p className="w-1/3 font-mono text-[11px] leading-none">
                {neutral}
              </p>
              <div className="grid w-full grid-cols-14 bg-black-500">
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-25)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-50)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-75)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-100)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-200)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-300)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-400)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-500)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-600)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-700)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-800)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-900)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-950)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-${neutral}-975)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
