import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center text-center font-medium tracking-none whitespace-nowrap shrink-0 [&>svg]:pointer-events-none transition-[color,box-shadow,border-color] overflow-hidden tabular-nums max-w-full truncate tracking-normal align-middle self-center [&>svg]:first:-ms-0.5 max-h-fit w-fit',

  {
    variants: {
      variant: {
        default:
          'bg-neutral-700 text-white [a&]:hover:bg-primary-hover [a&]:hover:text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary-hover',
        destructive: [
          'text-error-50 bg-error-500 dark:bg-error-700 dark:text-error-200 ',
          'dark:shadow-[inset_0_-1px_3px_-2px_var(--color-red-900),inset_0_.5px_0px_var(--color-red-500),inset_0_.0px_.5px_.5px_var(--color-red-600)]',
        ],
        beta: ['bg-info-50 border-info-200 border-dashed rounded-none'],
        outline:
          'text-card-foreground ring ring-ring-shadow shadow-sm bg-card [a&]:hover:bg-accent [a&]:hover:text-accent-foreground dark:shadow-[0_-.5px_.5px_var(--color-white-alpha-100),inset_0_-.5px_.5px_var(--color-black-alpha-900),var(--shadow-sm)]',
        subtle: 'text-inherit bg-[currentColor]/12 [a&]:hover:bg-[currentColor]/20 ring-0',
        tag: 'px-3 py-1 text-md rounded-md inset-ring-border-alpha-soft inset-ring-1',
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
        info: [
          'text-info-500 [&_svg]:text-info-400 bg-info-25',
          'dark:text-info-500 dark:[&_svg]:text-info-500 dark:bg-info-975',
          'ring ring-info-100',
          'dark:ring-info-900',
        ],
        highlight: [
          'text-highlight-500 [&_svg]:text-highlight-400 bg-highlight-25',
          'dark:text-highlight-500 dark:[&_svg]:text-highlight-500 dark:bg-highlight-975',
          'ring ring-highlight-100',
          'dark:ring-highlight-900',
        ],
        error: [
          'text-error-500 [&_svg]:text-error-400 bg-error-25',
          'dark:text-error-500 dark:[&_svg]:text-error-500 dark:bg-error-975',
          'ring ring-error-100',
          'dark:ring-error-900',
        ],
        warning: [
          'text-warning-500 [&_svg]:text-warning-400 bg-warning-25',
          'dark:text-warning-500 dark:[&_svg]:text-warning-500 dark:bg-warning-975',
          'ring ring-warning-100',
          'dark:ring-warning-900',
        ],
        success: [
          'text-success-500 [&_svg]:text-success-400 bg-success-25',
          'dark:text-success-500 dark:[&_svg]:text-success-500 dark:bg-success-975',
          'ring ring-success-100',
          'dark:ring-success-900',
        ],
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
