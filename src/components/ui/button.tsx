import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { cn } from '@/lib/utils';

interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  asChild?: boolean;
  label?: string;
}

const buttonVariants = cva(
  [
    'group/button',
    'ease transition-[background,scale,color,box-shadow,border-color] duration-150',
    'active:scale-[.9875] origin-bottom',
    'inline-flex items-center justify-center min-w-0 font-medium shrink-0 relative',
    '[&>svg]:pointer-events-none [&>svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 ',
    'before:rounded-[inherit] before:absolute after:rounded-[inherit] after:absolute',
    'focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:z-1',
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
    '[&]:has-[data-slot="badge"]:-me-2',
    'disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none! disabled:text-shadow-none! disabled:inset-shadow-none',
  ],
  {
    variants: {
      size: {
        xl: [
          'min-h-button-xl min-w-button-xl rounded-xl px-4 gap-2 text-base',
          '[&>svg:not([class*="size-"])]:size-6 [&>svg]:-mx-1.5',
        ],
        lg: [
          'min-h-button-lg min-w-button-lg rounded-lg px-3 gap-1.5 text-base',
          '[&>svg:not([class*="size-"])]:size-5',
          '[&>svg]:-mx-1',
          // 'has-[>*+*]:[&>svg:first-child]:-ms-2 has-[>*+*]:[&>svg:last-child]:-me-2',
        ],
        md: [
          'min-h-button min-w-button rounded-lg px-2.5 gap-1.5 text-sm supports-[corner-shape:squircle]:[corner-shape:superellipse(1.4)] supports-[corner-shape:squircle]:rounded-[calc(var(--radius-md)_*_1.4)]',
          '[&>svg:not([class*="size-"])]:size-4.5',
          '[&>svg]:-mx-1',
        ],
        sm: [
          'min-h-button-sm min-w-button-sm rounded-md px-2 gap-1 text-sm',
          '[&>svg:not([class*="size-"])]:size-4',
          '[&>svg]:-mx-0.5',
        ],
        xs: [
          'min-h-button-xs min-w-button-xs rounded-sm px-1.5 text-xs gap-1 [&_svg:not([class*="size-"])]:size-4',
          '[&>svg]:-mx-0.5',
        ],
        'icon-inline':
          'size-[1lh] rounded-sm [&_svg:not([class*="size-"])]:size-[1em]',
        icon: 'w-button h-button rounded-md [&_svg:not([class*="size-"])]:size-5',
        'icon-lg':
          'w-button-lg h-button-lg rounded-lg [&_svg:not([class*="size-"])]:size-6',
        'icon-xs': 'size-button-xs rounded [&_svg]:size-5',
        'icon-sm':
          'size-button-sm rounded-sm [&_svg:not([class*="size-"])]:size-4',
      },
      variant: {
        default: [
          'bg-current/6 text-foreground',
          'hover:bg-current/8',
          'hover:text-foreground active:bg-current/12',
          'data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground data-[state=on]:border-current',
          'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        ],
        media: [
          'bg-black/20 text-white',
          'hover:bg-black/30',
          'active:bg-black/40',
        ],
        inverse: [
          'bg-foreground text-background shadow-sm',
          'hover:bg-foreground/88',
          'active:bg-foreground/72',
          'data-toggled:bg-foreground/80',
        ],
        primary: [
          '[--current-bg:var(--color-primary)]',
          'bg-primary text-primary-foreground',
          'shadow-button-highlight text-shadow-2xs [&svg]:drop-shadow-xs',
          'hover:bg-primary-hover',
          'active:bg-primary-active active:inset-shadow-xs active:shadow-none',
          'active:outline-[0.5px] active:-outline-offset-[0.5px] active:outline-border-alpha',
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
          '[--current-bg:var(--destructive-hover)]',
          'hover:bg-(--current-bg)',
          'active:shadow-none active:inset-shadow-xs active:bg-destructive-active',
          'data-toggled:bg-destructive-active data-toggled:shadow-none data-toggled:inset-shadow-sm',
          'not-disabled:active:pt-px',
        ],
        outline: [
          'outline outline-border-alpha-soft text-foreground -outline-offset-1 bg-white/2',
          'shadow-[inset_0_-1px_var(--color-black-alpha-100),inset_0_1px_var(--color-white-alpha-50)]',
          'hover:bg-accent',
          'active:bg-accent active:inset-shadow-xs',
          'data-toggled:bg-muted data-toggled:text-foreground data-toggled:outline-border-alpha-strong',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground',
          'hover:bg-secondary-hover',
          'active:not-data-toggled:bg-secondary-active',
          'data-toggled:bg-secondary-hover',
        ],
        ghost: [
          'shadow-none text-foreground',
          'hover:bg-current/8',
          'active:bg-current/12',
          'data-toggled:text-accent-foreground data-toggled:bg-accent',
          // 'data-[state=active]:bg-current/12',
          '[&>svg:first-child:not(:last-child)]:ms-0',
          ' disabled:bg-transparent',
        ],
        invisible: [
          'p-0 relative',
          'hover:before:bg-current/8 hover:text-foreground',
          'active:before:bg-current/16',
          'data-toggled:bg-current/16',
          'before:absolute before:rounded-[inherit]!',
          '[&>svg:first-child:not(:last-child)]:ms-0',
          'before:absolute before:-inset-1',
          ' disabled:bg-transparent',
        ],
        link: [
          'min-w-0 h-auto! w-fit!',
          'shadow-none self-center inline-flex font-[450]',
          'underline underline-offset-[0.25em] decoration-1 decoration-current/48',
          'text-accent-foreground',
          'after:absolute after:rounded',
          'not-disabled:hover:text-foreground',
          'not-disabled:hover:decoration-current/72',
          'not-disabled:hover:after:bg-current/4',
          'not-disabled:active:after:bg-current/8',
          'not-disabled:active:decoration-current',
          'disabled:no-underline disabled:bg-transparent',
        ],
        'clerk-link': [
          'underline decoration-gray-200 decoration-2 underline-offset-[0.25em]',
          'group-hover/link:decoration-gray-950',
          'dark:decoration-gray-600 dark:group-hover/link:decoration-white',
        ],
        border: [
          '[--shadow-top:inset_0_0_0_1px_var(--color-black-alpha-100),inset_0_-2px_1px_var(--color-black-alpha-100)]',
          '[--shadow-bottom:inset_0_4px_2px_-2px_var(--color-white-alpha-200),inset_0_2px_1px_-1px_var(--color-white-alpha-200)]',

          'isolate z-0 bg-card text-card-foreground relative [background-image:linear-gradient(to_bottom,_transparent_50%,_var(--color-accent)),_linear-gradient(to_bottom,_transparent_50%,_var(--color-accent)_80%)] shadow-[var(--shadow-top),inset_0_0_0_1px_var(--color-white-alpha-100),var(--shadow-bottom)]',
          'after:absolute after:inset-px after:-z-1 after:rounded-lg after:pointer-events-none after:border after:border-transparent after:[background-color:inherit] after:bg-clip-content after:bg-linear-to-b after:from-accent after:via-transparent after:to-background after:inset-shadow-[0_2px_3px_-1px_var(--color-white-alpha-100)]',

          'hover:after:bg-background  hover:after:bg-[linear-gradient(var(--color-black-alpha-50)_-15%,_transparent,_var(--color-white-alpha-100))]',
        ],
        elevated: [
          'shadow-button',
          'text-card-foreground bg-card dark:bg-popover [&>svg]:opacity-75',
          // 'dark:bg-[color-mix(in_oklch,var(--card),var(--popover))]',
          'hover:text-foreground hover:bg-background dark:hover:bg-card',
          'active:bg-linear-to-b active:from-sidebar active:from-25% active:to-background active:text-foreground',
          'active:inset-shadow-pressed active:outline-[0.5px] active:-outline-offset-[0.5px] active:outline-border-alpha active:shadow-none',
          'data-toggled:inset-shadow-pressed data-toggled:ring-[0.5px] data-toggled:ring-border-alpha data-toggled:shadow-none data-toggled:bg-background',
          'not-disabled:active:pt-px disabled:bg-transparent hover:disabled:bg-transparent',
        ],
        glass: [
          'backdrop-blur-xs bg-[linear-gradient(rgba(255,0,0,0.05)),linear-gradient(rgba(0,0,0,0.1)),linear-gradient(rgba(255,255,255,0.25))] [background-blend-mode:saturation,normal,normal] dark:[background-blend-mode:lighten,lighten,darken] dark:bg-[linear-gradient(rgba(89,89,89,0.2)),linear-gradient(rgba(255,255,255,0.25)),linear-gradient(rgba(0,0,0,0.25))]',
          // 'mix-blend-multiply',
          // 'bg-background/5',
          // 'backdrop-blur-[1px]',
          'text-foreground shadow-glass-light',
          'hover:bg-none',
        ],
        text: [
          'h-auto! p-0! text-muted-foreground hover:text-foreground self-baseline',
          'active:pt-px justify-start w-fit!',
        ],
        unstyled: '',
      },
      iconOnly: {
        true: 'p-0 aspect-square',
      },
      shape: {
        default: '',
        pill: 'rounded-full',
        tile: ['flex flex-col p-3 justify-between items-start'],
      },
    },
    compoundVariants: [
      {
        variant: 'invisible',
        iconOnly: undefined,
        className:
          'min-h-0! h-auto! p-0 rounded-[inherit] before:-inset-x-1 before:inset-y-0 me-1',
      },
      {
        variant: 'invisible',
        iconOnly: true,
        className: 'min-w-[1em]! min-h-[1em]! size-[1lh]! p-0 rounded-full ',
      },
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
      {
        variant: 'link',
        className: 'h-auto! min-h-auto! px-0! after:-inset-0.5 size-[initial]',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      shape: 'default',
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
        !iconOnly && '[&>svg]:first:-ms-[0.25em] [&>svg]:last:-me-[0.25em]',
      )}
      {...props}
    />
  );
}

export { Button, IconButton, buttonVariants };
