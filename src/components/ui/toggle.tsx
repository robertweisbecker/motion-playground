'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps, cx } from 'class-variance-authority';

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center gap-1',
    'select-none transition-colors',
    'font-medium whitespace-nowrap truncate',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ",
    'aria-invalid:outline-destructive',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-none disabled:text-gray-400',
  ],
  {
    variants: {
      variant: {
        default: 'aria-checked:bg-accent aria-checked:text-accent-foreground',
        ghost:
          'aria-checked:bg-secondary text-muted-foreground hover:bg-accent aria-checked:text-foreground',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
        destructive: '',
        unstyled: '',
        base: [
          'rounded-sm!',
          'text-gray-600 hover:bg-gray-100',
          'focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800',
          'active:bg-gray-200 aria-checked:bg-gray-100 aria-checked:text-gray-900',
          'aria-checked:ring-inset aria-checked:ring-1 aria-checked:ring-current/4',
          'active:bg-gray-200 aria-checked:bg-blue-500/12 aria-checked:text-blue-500',
        ],
      },
      size: {
        default: 'h-8 px-2 min-w-8 text-sm rounded-md',
        sm: 'h-8 px-1.5 min-w-8 text-sm',
        lg: 'h-10 px-2.5 min-w-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'default',
    },
  },
);

function Toggle({
  className,
  variant,
  size = 'default',
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cx(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
