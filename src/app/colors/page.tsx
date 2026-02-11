'use client';
import { Heading } from '@/components/heading';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Paragraph } from '@/components/paragraph';

export default function ColorsPage() {
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
  const swatchClass = 'w-full h-10';

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Heading as="h1">Colors</Heading>
        <Paragraph className="mt-2 text-muted-foreground">
          okLCH color palettes & testing. View{' '}
          <Link href="/colors/theme" className="underline hover:text-foreground">
            theming examples
          </Link>{' '}
          for button variants across different color palettes.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h2">Palette</Heading>
        <div className="flex flex-col gap-0">
          {hues.map((hue) => (
            <div key={hue} className="flex w-full items-center gap-0">
              <p className="w-1/3 font-mono text-[11px] leading-none">{hue}</p>
              <div className="bg-muted grid w-full grid-cols-13 gap-0">
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
    </div>
  );
}
