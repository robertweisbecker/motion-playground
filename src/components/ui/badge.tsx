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
          'bg-secondary text-secondary-foreground',
          '[a&]:hover:bg-secondary [a&]:hover:text-secondary-foreground',
          'dark:shadow-[inset_0_.5px_0.5px_0.5px_var(--color-white-alpha-25),0_.5px_.5px_var(--color-black-alpha-900),var(--shadow-sm)]',
          // 'shadow-glass-1',
        ],
        secondary:
          'bg-accent text-accent-foreground [a&]:hover:bg-secondary [button&]:hover:bg-secondary [a&]:hover:text-secondary-foreground [button&]:hover:text-secondary-foreground dark:shadow-[inset_0_.5px_0.5px_0.5px_var(--color-white-alpha-25),0_.5px_.5px_var(--color-black-alpha-400),var(--shadow-sm)]',
        destructive: [
          'text-error-25 bg-error-500 dark:bg-error-700 dark:text-error-200',
          'light:shadow-button-base light:shadow-red-300 dark:shadow-red-600',
          // 'dark:shadow-[inset_0_-1px_3px_-2px_var(--color-red-900),inset_0_.5px_0px_var(--color-red-500),inset_0_.0px_.5px_.5px_var(--color-red-600)]',
          'dark:shadow-[inset_0_.5px_0.5px_0.5px_var(--color-white-alpha-25),0_.5px_.5px_var(--color-black-alpha-900),var(--shadow-button-base)]',
        ],
        beta: ['bg-info-50 border-info-200 border-dashed rounded-none'],
        outline:
          'text-card-foreground shadow-xs bg-card [a&]:hover:bg-secondary [a&]:hover:text-secondary-foreground [a&]:hover:shadow-none [a&]:hover:shadow-none [a&]:hover:outline dark:shadow-[inset_0_0.5px_0.5px_0px_var(--color-white-alpha-50),inset_0_0_0_.5px_var(--color-white-alpha-25),inset_0_-1px_2px_var(--color-black-alpha-300),0_.5px_1px_var(--color-black-alpha-900),var(--shadow-xs)]',
        outline2:
          'text-card-foreground ring ring-outline shadow-sm bg-card [a&]:hover:bg-secondary [a&]:hover:text-secondary-foreground dark:shadow-[0_-.5px_.5px_var(--color-white-alpha-100),inset_0_-.5px_.5px_var(--color-black-alpha-900),var(--shadow-sm)]',
        subtle: [
          'text-inherit bg-[currentColor]/12 [a&]:hover:bg-[currentColor]/20',
          'shadow-button-base',
        ],
        tag: 'px-3 py-1 text-md rounded-md inset-ring-border-alpha-soft',
      },
      shape: {
        default: ' px-1.5',
        pill: 'rounded-full! px-2',
      },
      size: {
        lg: 'text-sm rounded-md font-medium min-w-6 py-0.5 gap-1.5',
        default:
          'text-xs leading-5 rounded-sm font-medium min-w-4.5 py-0 gap-1',
        sm: 'text-2xs rounded-2xs font-medium min-w-4 py-0 px-0.5 gap-1',
        dot: 'min-w-2 min-h-2 p-0 border-0 my-auto [&>span]:sr-only rounded-full self-center after:absolute after:size-1 after:rounded-full after:outline-offset-2 after:animate-[ping_2s_ease-out_infinite] after:outline-1 after:outline-current after:opacity-25 after:-z-1',
      },
      color: {
        neutral: 'text-muted-foreground bg-muted',
        brand: [
          'text-brand-700 [&_svg]:text-brand-400 bg-brand-100',
          'dark:text-brand-400 dark:[&_svg]:text-brand-600 dark:bg-brand-975',
          'ring-1 ring-brand-200',
          'dark:ring-inset dark:ring-brand-900',
        ],
        info: [
          'text-info-600 [&_svg]:text-info-500 bg-info-100',
          'dark:text-info-400 dark:[&_svg]:text-info-600 dark:bg-info-975',
          // 'ring-1 ring-info-200',
          'dark:ring-0 dark:shadow-info-900',
          'dark:shadow-[inset_0_.5px_0.5px_0.5px_var(--color-white-alpha-25),0_.5px_.5px_var(--color-black-alpha-900),var(--shadow-sm)]',
        ],
        highlight: [
          'text-highlight-600 [&_svg]:text-highlight-500 bg-highlight-100',
          'dark:text-highlight-400 dark:[&_svg]:text-highlight-600 dark:bg-highlight-975',
          // 'ring-1 ring-highlight-200',
          'dark:ring-inset dark:ring-highlight-900',
        ],
        error: [
          'text-error-600 [&_svg]:text-error-500 bg-error-100',
          'dark:text-error-400 dark:[&_svg]:text-error-600 dark:bg-error-975',
          // 'ring-1 ring-error-200',
          'dark:ring-inset dark:ring-error-900',
        ],
        warning: [
          'text-warning-600 [&_svg]:text-warning-500 bg-warning-100',
          'dark:text-warning-400 dark:[&_svg]:text-warning-600 dark:bg-warning-975',
          // 'ring-1 ring-warning-200',
          'dark:ring-inset dark:ring-warning-900',
        ],
        success: [
          'text-success-600 [&_svg]:text-success-500 bg-success-100',
          'dark:text-success-400 dark:[&_svg]:text-success-600 dark:bg-success-975',
          // 'ring-1 ring-success-200',
          'dark:ring-inset dark:ring-success-900',
        ],
      },
      disabled: {
        true: 'cursor-not-allowed bg-muted text-muted-foreground opacity-50',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        size: 'default',
        disabled: false,
        className: 'has-[a]:hover:bg-accent-hover',
      },
      {
        color: 'success',
        size: 'dot',
        className:
          'bg-success-200 bg-radial-[at_25%_25%] to-success-600 to-75% inset-shadow-[-1px_-2px_3px_-1px_var(--color-success-300),0_0_1px_--alpha(--color-foreground/50%)] inset-shadow-success-300 inset-ring-white-alpha-25 text-success-500',
      },
      {
        variant: 'default',
        size: 'dot',
        className:
          'bg-brand-100 bg-radial-[at_25%_25%] to-brand-600 to-75% inset-shadow-[-1px_-2px_3px_-1px_var(--color-secondary),0_0_1px_--alpha(--color-primary)] inset-shadow-secondary  shadow-xs light:shadow-primary relative text-primary',
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
  shape,
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
      data-color={color}
      className={cn(
        badgeVariants({
          variant,
          color,
          size,
          shape,
          disabled,
        }),
        `hue-${color}`,
        className,
      )}
      {...props}
    >
      {size !== 'dot' && children}
    </Comp>
  );
}

export { Badge, badgeVariants };
