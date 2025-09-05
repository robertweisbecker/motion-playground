'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

// const switchVariants = cva(['inline-flex items-center justify-center gap-1'], {
//   variants: {
//     variant: {
//       default: [
//         'bg-gray-50',
//         'hover:bg-gray-200 hover:text-foreground',
//         'aria-checked:bg-gray-100 aria-checked:text-accent-foreground',
//         'aria-pressed:bg-gray-100 aria-pressed:text-accent-foreground',
//       ],
//       ghost: [
//         'text-muted-foreground',
//         'aria-checked:bg-gray-100 aria-checked:text-foreground',
//         'aria-pressed:bg-gray-100 aria-pressed:text-foreground',
//         'hover:bg-gray-200 hover:text-foreground',
//       ],
//     },
//     size: {
//       default: 'h-8 px-2 min-w-8 text-sm rounded-md',
//       sm: 'h-8 px-1.5 min-w-8 text-sm',
//       lg: 'h-10 px-2.5 min-w-10 text-base',
//     },
//   },
//   defaultVariants: {
//     variant: 'default',
//     size: 'default',
//   },
// });

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn([
        'peer rounded-full transition-all',
        'inline-flex h-7 w-11 shrink-0 items-center p-0.5',
        'data-[state=unchecked]:bg-icon inset-ring-border-alpha inset-shadow-2xs inset-ring',
        'hover:data-[state=unchecked]:bg-icon-hover hover:inset-ring-border-alpha-strong',
        'active:data-[state=unchecked]:bg-icon-active',
        'data-[state=checked]:bg-primary',
        'active:data-[state=checked]:bg-primary/90',
        'focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:bg-muted disabled:cursor-not-allowed',
        className,
      ])}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn([
          'pointer-events-none block size-6',
          'ease-out-quart rounded-full ring-0 transition-transform duration-100',
          'bg-card ring-black-alpha-100 shadow-2xs ring',
          'relative self-end',
          'data-[state=checked]:translate-x-2/3 data-[state=unchecked]:translate-x-0',
          'dark:data-[state=unchecked]:bg-foreground',
          'dark:data-[state=checked]:bg-primary-foreground',
        ])}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
