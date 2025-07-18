import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'ease-out transition-colors duration-150',
    'inline-flex items-center justify-center whitespace-nowrap font-medium shrink-0 relative',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    'before:rounded-[inherit] before:absolute after:rounded-[inherit] after:absolute',
    'focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-1',
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
    '[&]:has-[data-slot="badge"]:-me-2',
    'disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none! disabled:text-shadow-none! disabled:inset-shadow-none',
  ],
  {
    variants: {
      size: {
        default: ['h-9 min-w-9 rounded-md px-2.5 text-md gap-2 text-sm'],
        sm: 'h-7 min-w-7 rounded-sm gap-1 px-2 has-[>svg]:px-2 text-sm',
        lg: 'h-10 min-w-10 rounded-md px-4 gap-2 text-md',
        xl: 'h-12 min-w-12 rounded-lg px-4 gap-2 text-lg',
        xs: 'h-6 min-w-6 rounded-full p-1 text-sm',
        icon: 'size-8 rounded-md aspect-square',
        'icon-lg': 'size-10 rounded-lg aspect-square',
      },
      variant: {
        default: [
          'bg-muted text-muted-foreground border rounded-md border-border',
          'hover:bg-gray-100 hover:text-gray-900',
          'active:bg-gray-200 active:inset-shadow-2xs',
          'data-[state=on]:bg-gray-100 data-[state=on]:text-foreground data-[state=on]:inset-shadow-2xs',
          'data-[state=open]:bg-gray-100 data-[state=open]:text-foreground data-[state=on]:inset-shadow-2xs',
        ],
        primary: [
          'bg-primary text-primary-foreground shadow-button text-shadow-2xs ring-1 ring-inset ring-primary/50',
          'hover:bg-gray-800',
          'active:bg-gray-700 active:shadow-none active:inset-shadow-sm',
          'data-[state=on]:bg-gray-700 data-[state=on]:shadow-none data-[state=on]:inset-shadow-xs',
          'data-[state=open]:bg-gray-700 data-[state=open]:shadow-none data-[state=open]:inset-shadow-sm',
          'not-disabled:active:pt-px',
          'disabled:bg-gray-400',
        ],
        destructive: [
          'bg-destructive text-shadow-2xs text-primary-foreground border border-[(in_oklch,var(--color-destructive),var(--color-foreground)_20%)] shadow-button-highlight',
          'hover:not-disabled:bg-[oklch(from_var(--color-destructive)_0.1_1_1)]',
          'active:shadow-none active:inset-shadow-sm',
          'data-[state=on]:shadow-none data-[state=on]:inset-shadow-sm',
          'not-disabled:active:pt-px',
        ],
        outline: [
          'text-foreground border border-gray-400',
          'hover:bg-gray-100',
          'active:bg-gray-200',
          'data-[state=on]:bg-gray-200 data-[state=on]:text-foreground',
          'data-[state=open]:bg-gray-200 data-[state=open]:text-foreground',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground dark:text-shadow-2xs',
          'hover:bg-gray-200',
          'active:bg-gray-300',
        ],
        ghost: [
          'text-foreground shadow-none',
          'hover:bg-current/6',
          'active:bg-current/12',
          'data-[state=on]:bg-current/12',
          'data-[state=open]:bg-current/12',
          // 'data-[state=active]:bg-current/12',
          '[&>svg]:first:not-only:ms-0',
        ],
        link: [
          'px-0 py-0! gap-1 [&_svg]:mx-[initial] shadow-none self-baseline',
          'underline underline-offset-3 decoration-1 decoration-transparent hover:decoration-current/50',
          'text-blue-600 dark:text-blue-400',
          'hover:text-blue-700 dark:hover:text-blue-300',
          'active:decoration-current',
        ],
        elevated: [
          'bg-card text-foreground shadow-button-highlight',
          'hover:bg-secondary ',
          'active:shadow-none active:inset-shadow-xs',
          'not-disabled:active:pt-px',
        ],
        text: [
          'h-auto! p-0! text-muted-foreground hover:text-foreground self-baseline',
          'active:pt-px',
        ],

        unstyled: '',
      },
      iconOnly: {
        true: 'px-0 aspect-square',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  iconOnly,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    label?: string;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
          iconOnly,
        }),
        variant === 'link' && 'px-0',
        !iconOnly &&
          '[&_svg]:not-only:first-child:-ms-[0.125em] [&_svg]:not-only:last-child:-me-[0.125em]',
      )}
      {...props}
    ></Comp>
  );
}

export { Button, buttonVariants };
