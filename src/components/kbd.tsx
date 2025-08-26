import { cn } from '@/lib/utils';
import * as React from 'react';

interface KbdProps extends React.ComponentProps<'kbd'> {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  modifier?: string;
}

// {
//   name: 'cmd',
//   key: '⌘',
// },
// {
//   name: 'opt',
//   key: '⌥',
// },
// {
//   title: 'ctrl',
//   key: '⌃',
// },
// {
//   title: 'enter',
//   key: '⏎',
// },
// {
//   title: 'shift',
//   key: '⇧',
// },

// function KbdSymbol(value: 'cmd' | 'alt' | 'shift' | 'enter' | 'del') {

//       if (value === 'cmd') {
//         return { '⌘'}
//       }
//       if (value === 'alt') {
//         return { '⌥'}
//       }
//     if (value === 'shift')
//       return { '⇧'}
//     if (value === 'enter')
//       return { 'Enter' }
//     if (value === 'del')
//       return { '⌫'};
//     else return null
// }

export function Kbd({ children, size = 'md' }: KbdProps) {
  const KEYBOARD_KEYS = [
    {
      cmd: '⌘',
      opt: '⌥',
      ctrl: '⌃',
      enter: '⏎',
      shift: '⇧',
      del: '⌫',
    },
  ];
  return (
    <kbd
      // style={{
      //   boxShadow:
      //     ' inset 0 .5px 0px 0px rgb(255 255 255 / 30%), 0 2px 6px -1px var(--color-gray-alpha-200),0 0 0 .5px color-mix(in oklch,var(--color-border) 70%,transparent),0 2px 1px -1px var(--color-black-alpha-600),0 1px var(--color-black-alpha-400)',
      // }}
      className={cn([
        // 'from-background to-secondary bg-gradient-to-b from-25% text-shadow-[0_0px_1px] text-shadow-white/5',
        'bg-glass-light',
        // 'dark:shadow-glass bg-white/20 dark:border-black/50 dark:bg-gray-600/5',
        'inline-flex w-auto flex-none items-center justify-center gap-1 pt-px pb-0 align-middle text-sm font-normal whitespace-nowrap tabular-nums select-none',
        'text-secondary-foreground font-sans uppercase',
        size === 'sm' && 'h-4.5 min-w-4 rounded-xs px-0.5 text-xs',
        size === 'md' && 'h-6 min-w-5 rounded-sm px-1',
        size === 'lg' && 'h-7 min-w-6 rounded-sm px-1.5',
      ])}
    >
      {children}
    </kbd>
  );
}

// function KbdKey(key: string) {
//   (key === 'cmd')
//     return (
//       '⌘'
//   )
//   (key === 'cmd')
//     return (
//       '⌘'
//   )
// }
