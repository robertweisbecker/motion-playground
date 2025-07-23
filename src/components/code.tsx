import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const codeVariants = cva(
  [
    'inline-flex items-center justify-center w-fit shrink-0 gap-2',
    'self-middle  align-baseline',
    'overflow-hidden max-w-full truncate',
    'ring ring-border',
    'font-mono tabular-nums leading-none',
    // '[font-size-adjust:0.95]',
    'tracking-[-0.007em]',
    '[&>svg]:pointer-events-none',
    'not-prose',
  ],
  {
    variants: {
      variant: {
        default: 'bg-gray-100/50 text-gray-700 rounded-md',
        elevated:
          'bg-gradient-to-b from-card text-accent-foreground to-muted from-60% font-normal  shadow-[0_1px_2px] shadow-input',
      },
      size: {
        default: 'h-6 min-w-5 rounded-md px-1.5 py-0.5 -my-1 gap-2 text-sm',
        inherit: 'h-auto min-w-5 rounded-[0.25em] px-[0.25em] py-[0.1em] text-[0.85em] font-medium',
      },
      color: {
        info: 'text-blue-600',
        error: 'text-destructive',
        warning: 'text-yellow-600',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Code({
  className,
  variant,
  color,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof codeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'code';

  return (
    <Comp
      data-slot="badge"
      className={cn(
        codeVariants({
          variant,
          color,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Code, codeVariants };
