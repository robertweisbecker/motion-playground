import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center text-center font-medium tracking-none w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none transition-[color,box-shadow,border-color] overflow-hidden tabular-nums max-w-full truncate tracking-normal align-middle',

  {
    variants: {
      variant: {
        default:
          'bg-accent/50 text-accent-foreground [a&]:hover:bg-primary-hover [a&]:hover:text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary-hover',
        destructive: 'bg-destructive text-primary-foreground',
        outline:
          'ring ring-current/16 shadow-sm bg-card [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        subtle: 'text-inherit bg-[currentColor]/12 [a&]:hover:bg-[currentColor]/20 ring-0',
        tag: 'px-3 py-1 text-md rounded-md inset-ring-border inset-ring-1',
      },
      shape: {
        default: 'rounded-sm',
        pill: 'rounded-full px-1',
      },
      size: {
        default: 'text-xs leading-5 font-medium min-w-4.5 px-1.5 py-0 gap-1 rounded-sm',
        dot: 'size-2 p-0 border-0 my-auto overflow-hidden [&_span]:invisible rounded-full',
      },
      color: {
        neutral: 'text-secondary-foreground bg-secondary',
        info: ['text-blue'],
        error: 'text-destructive',
        warning: [''],
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-200 text-gray-400',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        disabled: false,
        className: 'has-[a]:hover:bg-secondary-hover',
      },
    ],
    defaultVariants: {
      variant: 'secondary',
      shape: 'default',
      size: 'default',
      disabled: false,
    },
  },
);

function Badge({
  className,
  variant = 'secondary',
  color,
  disabled,
  size,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant,
          color,
          size,
          disabled,
        }),
        className,
      )}
      {...props}
    >
      {/* <span className="contents"> */}
      {children}
      {/* </span> */}
    </Comp>
  );
}

export { Badge, badgeVariants };
