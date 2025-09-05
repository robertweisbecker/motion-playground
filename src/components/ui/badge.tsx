import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center text-center font-medium tracking-none whitespace-nowrap shrink-0 [&>svg]:pointer-events-none transition-[color,box-shadow,border-color] overflow-hidden tabular-nums max-w-full truncate tracking-normal align-middle self-center [&>svg]:first:-ms-0.5 min-h-fit min-w-fit ',

  {
    variants: {
      variant: {
        default: [
          'bg-accent text-accent-foreground [a&]:hover:bg-accent-hover [a&]:hover:text-primary',
          'ring-[0.5px] ring-accent-hover',
          // 'shadow-glass-1',
        ],
        secondary:
          'bg-background text-primary [a&]:hover:bg-accent-hover ring-[0.5px] ring-accent-hover',
        destructive: [
          'text-error-50 bg-error-500 dark:bg-error-700 dark:text-error-200',
          // 'dark:shadow-[inset_0_-1px_3px_-2px_var(--color-red-900),inset_0_.5px_0px_var(--color-red-500),inset_0_.0px_.5px_.5px_var(--color-red-600)]',
          'shadow-button-base shadow-red-300',
        ],
        beta: ['bg-info-50 border-info-200 border-dashed rounded-none'],
        outline:
          'text-card-foreground ring ring-ring-shadow shadow-sm bg-card [a&]:hover:bg-accent [a&]:hover:text-accent-foreground dark:shadow-[0_-.5px_.5px_var(--color-white-alpha-100),inset_0_-.5px_.5px_var(--color-black-alpha-900),var(--shadow-sm)]',
        subtle: [
          'text-inherit bg-[currentColor]/12 [a&]:hover:bg-[currentColor]/20',
          'shadow-button-base',
        ],
        tag: 'px-3 py-1 text-md rounded-md inset-ring-border-alpha-soft',
      },
      shape: {
        default: 'rounded-sm',
        pill: 'rounded-full px-1',
      },
      size: {
        default: 'text-xs leading-5 font-medium min-w-4.5 px-1.5 py-0 gap-1',
        dot: 'size-2 p-0 border-0 my-auto overflow-hidden [&>span]:sr-only rounded-full',
      },
      color: {
        neutral: 'text-muted-foreground bg-muted',
        brand: [
          'text-brand-700 [&_svg]:text-brand-400 bg-brand-100',
          'dark:text-brand-300 dark:[&_svg]:text-brand-500 dark:bg-brand-900',
          'ring-[0.5px] ring-brand-300',
          'dark:ring-brand-800 dark:shadow-inner shadow-current/5',
        ],
        info: [
          'text-info-700 [&_svg]:text-info-400 bg-info-100',
          'dark:text-info-300 dark:[&_svg]:text-info-500 dark:bg-info-900',
          'ring-[0.5px] ring-info-300',
          'dark:ring-info-800 dark:shadow-inner shadow-current/5',
        ],
        highlight: [
          'text-highlight-700 [&_svg]:text-highlight-400 bg-highlight-100',
          'dark:text-highlight-300 dark:[&_svg]:text-highlight-500 dark:bg-highlight-900',
          'ring-[0.5px] ring-highlight-300',
          'dark:ring-highlight-800 dark:shadow-inner shadow-current/5',
        ],
        error: [
          'text-error-700 [&_svg]:text-error-400 bg-error-100',
          'dark:text-error-300 dark:[&_svg]:text-error-500 dark:bg-error-900',
          'ring-[0.5px] ring-error-300',
          'dark:ring-error-800 dark:shadow-inner shadow-current/5',
        ],
        warning: [
          'text-warning-700 [&_svg]:text-warning-400 bg-warning-100',
          'dark:text-warning-300 dark:[&_svg]:text-warning-500 dark:bg-warning-900',
          'ring-[0.5px] ring-warning-300',
          'dark:ring-warning-800 dark:shadow-inner shadow-current/5',
        ],
        success: [
          'text-success-700 [&_svg]:text-success-400 bg-success-100',
          'dark:text-success-300 dark:[&_svg]:text-success-500 dark:bg-success-900',
          'ring-[0.5px] ring-success-300',
          'dark:ring-success-800 dark:shadow-inner shadow-current/5',
        ],
      },
      disabled: {
        true: 'cursor-not-allowed bg-gray-200 text-gray-400',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        size: 'default',
        disabled: false,
        className: 'has-[a]:hover:bg-secondary-hover',
      },
      {
        color: 'success',
        size: 'dot',
        className:
          'bg-success-200 bg-radial-[at_25%_25%] to-success-600 to-75% inset-shadow-[-1px_-2px_3px_-1px_var(--color-success-300),0_0_1px_--alpha(--color-foreground/50%)] inset-shadow-success-300 inset-ring-white-alpha-25',
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
