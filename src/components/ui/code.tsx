import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const codeVariants = cva(
  'inline-flex items-center justify-center inset-ring inset-ring-border font-mono w-fit shrink-0 gap-1 [&>svg]:pointer-events-none overflow-hidden tabular-nums leading-none max-w-full truncate self-middle  align-middle',
  {
    variants: {
      variant: {
        default: 'bg-muted text-muted-foreground rounded-md',
        elevated:
          'bg-gradient-to-b from-card text-accent-foreground to-accent font-normal  shadow-[0_1px_2px] shadow-input',
      },
      size: {
        default: 'min-h-5 min-w-5 rounded-xs px-1 py-0.5 -my-1 text-sm',
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
