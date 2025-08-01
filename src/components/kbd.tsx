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
      style={{
        boxShadow:
          'inset 0 .5px hsla(0,0%,100%,.3),inset 0 1px 5px var(--color-gray-100),0 0 0 .5px var(--color-gray-200),0 2px 1px -1px var(--color-gray-300),0 1px var(--color-gray-200)',
      }}
      className={cn([
        'from-background to-secondary bg-gradient-to-b text-shadow-[0_0_1px] text-shadow-white/5',
        'inline-flex w-auto flex-none items-center justify-center gap-1 px-1.5 pt-0.5 pb-0 align-middle text-xs font-[475] whitespace-nowrap tabular-nums select-none',
        'font-sans uppercase',
        size === 'sm' && 'rounded-2xs h-4.5 min-w-4 px-0.5 text-xs',
        size === 'md' && 'h-6 min-w-5 rounded-xs',
        size === 'lg' && 'h-7 min-w-6 rounded-md',
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
