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

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn([
        'peer group/switch rounded-full transition-all',
        'inline-flex h-7 w-11 shrink-0 items-center p-0.5',
        'inset-shadow-2xs inset-ring inset-ring-border-alpha data-[state=unchecked]:bg-icon',
        'transition-colors',
        'hover:inset-ring-border-alpha-strong hover:data-[state=unchecked]:bg-icon-hover',
        'active:data-[state=unchecked]:bg-icon-active',
        'data-[state=checked]:bg-primary',
        'active:data-[state=checked]:bg-primary-active',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'disabled:cursor-not-allowed disabled:bg-muted',
        // 'active:[&>[data-slot="switch-thumb"]]:bg-red-500!',
        className,
      ])}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn([
          'pointer-events-none block size-6',
          // 'pointer-events-none block h-6 min-w-6',
          // 'ease-out-quint rounded-full ring-0 duration-100',
          'shadow-2xs ring ring-black-alpha-100',
          'relative self-end',
          'data-[state=checked]:bg-white',
          'bg-white/90 group-hover/switch:bg-white',
          'inset-ring-1 inset-ring-white/5',
          'rounded-[calc(--spacing(6)/2)] transition-[translate,width,height] ease-out-quint group-active/switch:w-7 data-[state=checked]:translate-x-2/3 data-[state=unchecked]:translate-x-0',
          'group-active/switch:data-[state=checked]:translate-x-[calc(--spacing(3))]',
        ])}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
