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
        'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      ])}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn([
          'dark:data-[state=unchecked]:bg-foreground',
          'dark:data-[state=checked]:bg-primary-foreground',
          'bg-background pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
        ])}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
