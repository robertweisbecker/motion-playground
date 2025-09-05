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
        xl: ['h-11 rounded-xl px-4 gap-2 text-lg', '[&>svg]:size-6 [&>svg]:-mx-2'],
        lg: ['h-button-lg rounded-lg px-3 gap-1.5 text-base', '[&>svg]:size-5 [&>svg]:-mx-1'],
        md: ['h-button rounded-md px-2.5 gap-1.5 text-md', '[&>svg]:size-4 [&>svg]:-mx-1'],
        sm: ['h-button-sm rounded-md px-2 gap-1 text-sm', '[&>svg]:size-3.5 [&>svg]:-mx-0.5'],
        xs: ['min-h-6 min-w-6 rounded-sm px-2 text-xs gap-1.5 [&>svg]:-mx-0.5 [&>svg]:size-3.5'],
        'icon-inline': 'size-6 rounded-sm',
        icon: 'w-button h-button rounded-md aspect-square text-base',
        'icon-lg': 'w-9 h-9 rounded-lg aspect-square text-lg [&>svg]:size-5',
      },
      variant: {
        default: [
          'bg-current/4 text-muted-foreground border border-border',
          'hover:bg-current/6 hover:text-secondary-foreground',
          'active:bg-current/10 active:text-foreground',
          'data-[state=on]:bg-accent',
          'data-[state=open]:bg-accent',
        ],
        primary: [
          '[--current-bg:var(--color-primary)]',
          'bg-primary text-primary-foreground',
          'shadow-button-highlight text-shadow-2xs [&svg]:drop-shadow-xs',
          'hover:bg-primary-hover',
          'active:bg-primary-active active:inset-shadow-xs active:shadow-none',
          'data-toggled:bg-primary-active data-toggled:shadow-none data-toggled:inset-shadow-xs',
          'disabled:bg-gray-alpha-200 disabled:text-gray-alpha-400',
          'not-disabled:active:pt-px',
        ],
        destructive: [
          '[--current-bg:var(--destructive)]',
          // '[--current-bg:oklch(var(--color-destructive))]',
          'bg-destructive text-destructive-foreground',
          'shadow-button-highlight',
          // 'inset-ring inset-ring-destructive/10',
          'hover:bg-destructive-hover',
          'active:shadow-none active:inset-shadow-xs active:bg-destructive-active',
          'data-toggled:bg-destructive-active data-toggled:shadow-none data-toggled:inset-shadow-sm',
          'not-disabled:active:pt-px',
        ],
        outline: [
          'text-secondary-foreground border border-border bg-white/1 ',
          'hover:bg-secondary hover:text-foreground hover:border-border-strong',
          'active:text-foreground active:border-current',
          'data-toggled:bg-secondary data-toggled:text-foreground data-toggled:border-current',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground',
          'hover:bg-secondary-hover hover:text-foreground',
          'active:bg-secondary-active',
          'data-toggled:bg-secondary-hover data-toggled:text-foreground',
        ],
        ghost: [
          'text-secondary-foreground shadow-none',
          'hover:bg-current/8',
          'active:bg-current/12',
          'data-toggled:text-sidebar-accent-foreground data-toggled:bg-sidebar-accent',
          // 'data-[state=active]:bg-current/12',
          '[&>svg]:first:not-only:ms-0',
          ' disabled:bg-transparent',
        ],
        invisible: [
          'text-muted-foreground size-[1em]! p-0 min-w-0! min-h-0! relative m-auto',
          'hover:after:bg-current/8',
          'active:after:bg-current/16',
          ' data-toggled:bg-current/16',
          'after:absolute after:-inset-1 after:rounded-[inherit]',
          '[&>svg]:first:not-only:ms-0',
          ' disabled:bg-transparent',
        ],
        link: [
          'min-w-0  px-0 gap-1',
          'shadow-none self-center inline-flex font-[450]',
          'underline underline-offset-[0.25em] decoration-1 decoration-current/40',
          'text-secondary-foreground',
          'after:absolute after:-inset-x-[.5ch] after:inset-y-[.125em] after:rounded-sm ',
          'not-disabled:hover:text-foreground',
          'not-disabled:hover:decoration-current/60',
          'not-disabled:hover:after:bg-current/8',
          'not-disabled:active:after:bg-current/12',
          'not-disabled:active:decoration-current',
          'disabled:no-underline disabled:bg-transparent',
        ],
        'clerk-link': [
          'underline decoration-gray-200 decoration-2 underline-offset-[0.25em] transition-colors',
          'group-hover/link:decoration-gray-950',
          'dark:decoration-gray-600 dark:group-hover/link:decoration-white',
        ],
        elevated: [
          'transition-[box-shadow,background] shadow-button',
          'bg-card text-card-foreground [&>svg]:text-icon',
          'hover:not-active:bg-background hover:text-foreground',
          '',
          'active:bg-secondary active:text-foreground',
          'active:inset-shadow-pressed active:ring-[0.5px] active:ring-border-alpha active:shadow-none',
          'data-toggled:inset-shadow-pressed data-toggled:ring-[0.5px] data-toggled:ring-border-alpha data-toggled:shadow-none data-toggled:bg-muted',
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
      shape: {
        pill: 'rounded-full',
        tile: ['flex flex-col p-3 justify-between items-start'],
      },
    },
    compoundVariants: [
      {
        size: 'lg',
        iconOnly: true,
        // className: '[&>svg]:size-6',
      },
      {
        size: 'md',
        iconOnly: true,
        // className: '[&>svg]:size-5',
      },
      {
        size: 'sm',
        iconOnly: true,
        // className: '[&>svg]:size-4',
      },
      {
        size: 'xs',
        iconOnly: true,
        // className: 'size-6 p-0.5 [&>svg]:size-3.5',
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
  shape,
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
          shape,
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
          '[&_svg]:not-only:first-child:-ms-[0.25em] [&_svg]:not-only:last-child:-me-[0.25em]',
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
