import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const codeVariants = cva(
  [
    'inline-flex items-center justify-center w-fit shrink-0 gap-1',
    'self-middle align-baseline',
    'overflow-hidden max-w-full truncate',
    'font-mono tabular-nums font-normal',
    // '[font-size-adjust:0.95]',
    'tracking-[-0.007em]',
    'word-spacing-[-0.05em]',
    '[&>svg]:pointer-events-none',
    '[&>a]:underline [&>a]:font-medium [&>a]:decoration-[0.5px] [&>a]:underline-offset-2 ',
    'not-prose',
    'h-fit w-fit',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-accent has-[a]:hover:bg-hover text-foreground [&>svg]:text-icon ',
        ],
        elevated:
          '[background-color:var(--background)] text-shadow-xs dark:text-shadow-black bg-gradient-to-b from-accent/50 to-background text-foreground shadow-button from-25%',
      },
      size: {
        default:
          'h-6 min-w-5 rounded-sm px-1.5 py-1 gap-1.5 text-sm leading-none',
        inherit:
          'h-auto min-w-5 rounded-[0.375em] px-[0.25em] py-[.125em] text-[0.85em] font-normal leading-none',
      },
      color: {
        primary: 'text-brand-500',
        info: 'text-info-500',
        error: 'text-error-500',
        warning: 'text-warning-500',
        inherit: [
          'bg-current/5 has-[a]:hover:bg-current/10 text-current/72 [&>svg]:text-current/64',
          'border border-current/10',
        ],
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
  hue,
  asChild = false,
  ...props
}: React.ComponentProps<'code'> &
  VariantProps<typeof codeVariants> & {
    asChild?: boolean;
    hue?: string;
  }) {
  const Comp = asChild ? Slot : 'code';

  return (
    <Comp
      data-slot="badge"
      data-hue={hue}
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
