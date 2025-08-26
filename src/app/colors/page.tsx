'use client';
import { Heading } from '@/components/heading';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';
import { colorScheme } from '@/components/utils/colorScheme';
import { Button } from '@/components/ui/button';
import { LinkOutIcon } from '../icons/icons';
import { Badge } from '@/components/ui/badge';

export default function ThemePage() {
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
        <button
          className={colorScheme.blue.solid.initial}
          // className={cn(...Object.values(colorScheme.blue.solid), 'h-button rounded-md px-3')}
        >
          Solid
        </button>

        <button className={cn(Object.entries(colorScheme.blue.solid), 'h-button rounded-md px-3')}>
          Solid
        </button>
        <button className={cn(Object.entries(colorScheme.blue.subtle), 'h-button rounded-md px-3')}>
          Outline
        </button>
        <button
          className={cn(Object.entries(colorScheme.blue.outline), 'h-button rounded-md px-3')}
        >
          Subtle
        </button>

        <button
          className={cn(Object.entries(colorScheme.orange.solid), 'h-button rounded-md px-3')}
        >
          Solid
        </button>
        <button
          className={cn(Object.entries(colorScheme.orange.subtle), 'h-button rounded-md px-3')}
        >
          Outline
        </button>
        <button
          className={cn(Object.entries(colorScheme.orange.outline), 'h-button rounded-md px-3')}
        >
          Subtle
        </button>
        <div className="flex flex-col gap-2">
          Hue
          {palettes.map((value) => (
            <div
              key={value}
              className={`hue hue-${value} bg-muted relative flex gap-1 rounded-lg p-4 shadow-xs`}
            >
              <Badge className="absolute top-1 right-1">{value}</Badge>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">
                Secondary <LinkOutIcon />
              </Button>
              <Button variant="outline">Outline</Button>
              <Button variant="default">Default</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          ))}
        </div>
        <Heading>Palette</Heading>
        {/* <div className={cn(swatchClass)} style={{ background: `var(--color-navy-25)` }} />
                <div className={cn(swatchClass)} style={{ background: `var(--color-navy-50)` }} />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-100)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-200)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-300)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-400)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-500)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-600)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-700)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-800)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-900)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-950)` }}
                />
                <div
                  className={cn(swatchClass)}
                  style={{ background: `var(--color-navy-975)` }}
                />
              </div>
            </div> */}
        <div className="flex flex-col">
          {hues.map((hue) => (
            <div key={hue} className="flex w-full items-center gap-1">
              <p className="w-1/3 font-mono text-[11px] leading-none">{hue}</p>
              <div className="bg-muted grid w-full grid-cols-13 dark:bg-white">
                <div className={cn(swatchClass)} style={{ background: `var(--color-${hue}-25)` }} />
                <div className={cn(swatchClass)} style={{ background: `var(--color-${hue}-50)` }} />
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
              <p className="w-1/3 font-mono text-[11px] leading-none">{neutral}</p>
              <div className="bg-black-500 grid w-full grid-cols-14">
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
