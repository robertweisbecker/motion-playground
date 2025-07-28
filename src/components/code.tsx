import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const codeVariants = cva(
  [
    'inline-flex items-center justify-center w-fit shrink-0 gap-2',
    'self-middle  align-baseline',
    'overflow-hidden max-w-full truncate',
    'inset-ring inset-ring-border',
    'font-mono tabular-nums leading-none',
    // '[font-size-adjust:0.95]',
    'tracking-[-0.007em]',
    '[&>svg]:pointer-events-none',
    '[&>a]:underline [&>a]:font-medium [&>a]:decoration-[0.5px] [&>a]:underline-offset-2 ',
    'not-prose',
  ],
  {
    variants: {
      variant: {
        default: 'bg-[var(--ui1)] hover:bg-hover text-gray-700',
        elevated:
          'bg-gradient-to-b from-popover text-accent-foreground to-muted from-60% font-normal  shadow-[0_1px_2px] shadow-input',
      },
      size: {
        default: 'h-6 min-w-5 rounded-md px-1.5 py-0.5 gap-2 text-sm',
        inherit: 'h-auto min-w-5 rounded-[0.25em] px-[0.25em] py-[0.1em] text-[0.85em] font-medium',
      },
      color: {
        info: 'text-blue',
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
