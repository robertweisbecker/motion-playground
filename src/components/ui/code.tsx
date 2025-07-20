import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const codeVariants = cva(
  'inline-flex items-center justify-center ring ring-border font-mono w-fit shrink-0 gap-2 [&>svg]:pointer-events-none overflow-hidden tabular-nums leading-none max-w-full truncate self-middle  align-baseline',
  {
    variants: {
      variant: {
        default: 'bg-gray-50 text-current rounded-md',
        elevated:
          'bg-gradient-to-b from-card text-accent-foreground to-muted from-60% font-normal  shadow-[0_1px_2px] shadow-input',
      },
      size: {
        default: 'h-5 min-w-5 rounded-sm px-1 py-0.5 -my-1 text-sm gap-1.5',
        inherit: 'h-auto min-w-5 rounded-[0.25em] px-[0.4em] py-[0.2em] text-[0.875em]',
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
