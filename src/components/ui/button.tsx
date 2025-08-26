import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  asChild?: boolean;
  label?: string;
}

const buttonVariants = cva(
  [
    'group/button',
    'ease transition-colors duration-150',
    // 'active:scale-[.994] ',
    'inline-flex items-center justify-center min-w-0 font-medium shrink-0 relative',
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
        xl: ['h-12 rounded-lg px-4 gap-2 text-lg'],
        lg: ['h-button-lg rounded-md px-4 gap-2 text-base'],
        md: ['h-button rounded-md px-2.5 gap-1.5 text-md'],
        sm: ['h-button-sm rounded-sm px-2 gap-1 text-sm', '[&>svg]:size-4'],
        xs: ['h-6 min-w-5 rounded-sm px-2 text-xs', '[&>svg]:size-3'],
        'icon-inline': 'size-1lh rounded-xs',
        icon: 'w-button h-button rounded-sm aspect-square text-base',
        'icon-lg': 'w-9 h-9 rounded-md aspect-square text-lg [&>svg]:size-5',
      },
      variant: {
        default: [
          'bg-muted text-muted-foreground border border-border-alpha-soft',
          'hover:bg-secondary hover:text-secondary-foreground',
          'active:bg-accent active:text-accent-foreground',
          'data-[state=on]:bg-accent',
          'data-[state=open]:bg-accent',
        ],
        primary: [
          'bg-primary text-primary-foreground',
          'shadow-button-highlight text-shadow-2xs [&svg]:drop-shadow-xs',
          'hover:bg-primary-hover',
          'active:bg-primary-active active:inset-shadow-xs active:shadow-none',
          'data-toggled:bg-primary-active data-toggled:shadow-none data-toggled:inset-shadow-xs',
          'disabled:bg-gray-alpha-200 disabled:text-gray-alpha-400',
          'not-disabled:active:pt-px',
        ],
        destructive: [
          'bg-destructive text-white',
          'shadow-button-highlight',
          // 'inset-ring inset-ring-destructive/10',
          'hover:not-disabled:bg-destructive-hover hover:text-primary-foreground',
          'active:shadow-none active:inset-shadow-sm active:bg-destructive-active',
          'data-toggled:bg-destructive-active data-toggled:shadow-none data-toggled:inset-shadow-sm',
          'not-disabled:active:pt-px',
        ],
        outline: [
          'text-accent-foreground border border-border-alpha bg-transparent',
          'hover:bg-accent hover:border-current',
          'active:bg-accent-hover',
          'data-toggled:bg-accent data-toggled:text-foreground data-toggled:border-current',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground',
          'hover:bg-secondary-hover hover:text-foreground',
          'active:bg-secondary-active',
          'data-toggled:bg-accent',
        ],
        ghost: [
          'text-foreground shadow-none',
          'hover:bg-accent hover:text-accent-foreground',
          'active:bg-current/16',
          'data-toggled:text-accent-foreground data-toggled:bg-accent',
          // 'data-[state=active]:bg-current/12',
          '[&>svg]:first:not-only:ms-0',
          ' disabled:bg-transparent',
        ],
        invisible: [
          'text-muted-foreground size-[1em]! p-0 min-w-0! min-h-0! relative m-auto',
          'hover:after:bg-current/8',
          'active:after:bg-current/16',
          'data-toggled:text-accent-foreground data-toggled:bg-accent',
          'after:absolute after:-inset-1 after:rounded-xs',
          '[&>svg]:first:not-only:ms-0',
          ' disabled:bg-transparent',
        ],
        link: [
          'min-w-0  px-0 gap-1',
          'shadow-none self-center rounded-xs inline-flex font-[450]',
          'underline underline-offset-[0.25em] decoration-1 decoration-current/40',
          'text-brand-600 dark:text-brand-400',
          'after:absolute after:-inset-x-1 after:inset-y-0.5 after:rounded-[inherit] ',
          'not-disabled:hover:text-brand-700 dark:not-disabled:hover:text-brand-300',
          'not-disabled:hover:decoration-current/60',
          'not-disabled:hover:after:bg-current/4',
          'not-disabled:active:after:bg-current/6',
          'not-disabled:active:decoration-current',
          'disabled:no-underline disabled:bg-transparent',
        ],
        'clerk-link': [
          'underline decoration-gray-200 decoration-2 underline-offset-[0.25em] transition-colors',
          'group-hover/link:decoration-gray-950',
          'dark:decoration-gray-600 dark:group-hover/link:decoration-white',
        ],
        elevated: [
          'bg-card text-foreground ring-[0.5px] ring-current/5 dark:ring-transparent',
          'transition-shadow shadow-button',
          'hover:bg-popover',
          'active:bg-secondary active:shadow-none active:inset-shadow-xs',
          'not-disabled:active:pt-px',
        ],
        glass: [
          'transition-colors',
          'backdrop-blur-xs bg-[linear-gradient(rgba(255,0,0,0.1)),linear-gradient(rgba(0,0,0,0.25)),linear-gradient(rgba(255,255,255,0.25))] [background-blend-mode:normal,overlay,saturation] dark:[background-blend-mode:lighten,normal,normal] dark:bg-[linear-gradient(rgba(89,89,89,0.2)),linear-gradient(rgba(255,255,255,0.25)),linear-gradient(rgba(0,0,0,0.25))]',
          'mix-blend-luminosity',
          'text-foreground shadow-glass-light',
          'hover:bg-none',
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
        size: 'md',
        iconOnly: true,
        className: '[&>svg]:size-4',
      },
      {
        size: 'sm',
        iconOnly: true,
        className: '[&>svg]:size-3.5',
      },
      {
        size: 'xs',
        iconOnly: true,
        className: 'size-5 p-0.5',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

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

function IconButton({
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
