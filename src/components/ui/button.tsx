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
    'dark:text-shadow-white/20',
    'disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none! disabled:text-shadow-none! disabled:inset-shadow-none',
  ],
  {
    variants: {
      size: {
        default: ['h-button min-w-button rounded-md px-2.5 text-md gap-1.5 text-sm'],
        sm: 'h-button-sm min-w-button-md rounded-sm gap-1 px-2 has-[>svg]:p-0 text-xs',
        lg: 'h-button-lg min-w-button-lg rounded-lg px-4 gap-2 text-base',
        xl: 'h-12 min-w-12 rounded-lg px-4 gap-2 text-lg',
        xs: 'h-6 min-w-5 rounded-sm px-2 text-xs [&>svg]:size-4',
        icon: 'w-button h-button rounded-md aspect-square text-base [&>svg]:size-5',
        'icon-lg': 'w-9 h-9 rounded-md aspect-square text-lg [&>svg]:size-5',
      },
      variant: {
        default: [
          'bg-gray-50 text-gray-600 inset-ring-gray-200 inset-ring',
          'hover:bg-gray-100',
          'active:bg-gray-200',
          'data-[state=on]:bg-gray-100',
          'data-[state=open]:bg-gray-100',
        ],
        primary: [
          'bg-primary text-primary-foreground',
          'shadow-button-primary',
          'ring ring-primary-hover dark:ring-0',
          'hover:bg-primary-hover hover:ring-primary-active',
          'active:bg-primary-active active:inset-shadow-xs active:shadow-none active:ring-transparent',
          'data-toggled:bg-primary-active data-toggled:shadow-none data-toggled:inset-shadow-xs',
          'not-disabled:active:pt-px',
          'disabled:bg-gray-400',
        ],
        destructive: [
          'text-destructive bg-background',
          'shadow-button-highlight',
          // 'inset-ring inset-ring-destructive/10',
          'hover:not-disabled:bg-destructive hover:text-primary-foreground',
          'active:shadow-none active:inset-shadow-sm active:bg-destructive-active',
          'data-toggled:bg-destructive-active data-toggled:shadow-none data-toggled:inset-shadow-sm',
          'not-disabled:active:pt-px',
        ],
        outline: [
          'text-foreground border border-input bg-card dark:bg-transparent',
          'hover:bg-current/10 ',
          'active:bg-current/15 active:border-gray-400',
          'data-toggled:bg-current/20 data-toggled:text-foreground data-toggled:border-gray-500',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground ',
          'hover:bg-gray-200',
          'active:bg-gray-300',
          'data-toggled:bg-gray-300',
        ],
        ghost: [
          'text-muted-foreground shadow-none',
          'hover:bg-current/8',
          'active:bg-current/16',
          'data-toggled:text-foreground',
          // 'data-[state=active]:bg-current/12',
          '[&>svg]:first:not-only:ms-0',
          ' disabled:bg-transparent',
        ],
        link: [
          'py-0 min-w-[initial]! gap-1 [&_svg]:mx-[initial] px-0.5 shadow-none self-baseline rounded-2xs!',
          'underline underline-offset-3 decoration-1 decoration-current/50',
          'text-foreground',
          'not-disabled:hover:text-foreground',
          'not-disabled:hover:decoration-current/75',
          'not-disabled:hover:bg-current/5',
          'active:decoration-current',
          'disabled:no-underline disabled:bg-transparent',
        ],
        elevated: [
          'bg-card dark:bg-popover text-foreground shadow-button-highlight',
          'hover:bg-muted',
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
        true: 'p-0 aspect-square',
      },
    },
    compoundVariants: [
      {
        size: 'default',
        iconOnly: true,
        className: '[&>svg]:size-4',
      },
      {
        size: 'sm',
        iconOnly: true,
        className: '[&>svg]:size-4',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

// interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
//   startSlot?: React.ReactNode;
//   endSlot?: React.ReactNode;
//   asChild?: boolean;
//   label?: string;
// }

function Button({
  className,
  variant,
  size,
  iconOnly,
  // startSlot,
  // label,
  // endSlot,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-size={size}
      data-icon={iconOnly}
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
    />
  );
}

export { Button, buttonVariants };
