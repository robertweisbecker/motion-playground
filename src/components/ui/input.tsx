'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Kbd } from '../kbd';
import { Slot } from '@radix-ui/react-slot';
import { useResizeObserver } from 'usehooks-ts';
import { cva, VariantProps } from 'class-variance-authority';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  cmdk?: boolean;
  selectableSlot?: boolean;
  action?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  // unstyled?: boolean;
};

const inputVariants = cva(
  'flex w-full min-w-0 text-base/5 sm:text-sm py-1 transition-[background,color,box-shadow,border-color,outline,outline-color] duration-150 placeholder:text-muted-foreground/64 text-foreground',
  {
    variants: {
      variant: {
        default: [
          'bg-field inset-ring-border-alpha inset-ring outline-none',
          'select-all',
          'hover:inset-ring-input-alpha hover:not-disabled:not-focus-within:bg-accent/50',
          ' focus-within:bg-card focus-within:inset-shadow-none',
          'inset-shadow-2xs file:inline-flex file:h-7 file:border-0 file:bg-field file:text-sm file:font-medium file:text-foreground focus-visible:ring-ring/32 focus-visible:ring-2 focus-visible:shadow-sm focus-visible:inset-ring-ring aria-invalid:border-destructive aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-50',
        ],
        unstyled: 'border-none shadow-none outline-none appearance-none',
      },
      size: {
        lg: 'h-button-lg rounded-lg ps-3',
        md: 'h-button rounded-lg ps-2.5',
        sm: 'h-button-sm rounded-md ps-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

function Input({
  startSlot,
  endSlot,
  action,
  selectableSlot,
  cmdk,
  className,
  size = 'md',
  type,
  variant = 'default',
  ...props
}: InputProps & VariantProps<typeof inputVariants>) {
  const slotClasses =
    'absolute inset-y-0 px-2 inline-flex text-xs sm:text-sm gap-1 items-center justify-center text-muted-foreground';
  const myRef = React.useRef(null);
  const { width = undefined } = useResizeObserver({
    ref: myRef,
    box: 'border-box',
  });
  return (
    <div
      className={cn(
        'relative max-w-full min-w-0 flex-1',
        // size === 'lg' && 'h-button-lg rounded-lg',
        // size === 'md' && 'h-button rounded-md',
        // size === 'sm' && 'h-button-sm rounded-md',

        className,
      )}
      style={
        startSlot && width !== undefined
          ? ({ '--startSlotSize': `${width}px` } as React.CSSProperties)
          : undefined
      }
    >
      <input
        type={type}
        data-slot="input"
        autoComplete="off"
        spellCheck="false"
        className={cn(
          inputVariants({ variant, size, className }),
          startSlot && 'ps-(--startSlotSize)',
          endSlot && 'pe-button',
        )}
        {...props}
      />
      {startSlot && (
        <span className={cn('left-0', slotClasses)} ref={myRef}>
          {startSlot}
        </span>
      )}
      {endSlot && (
        <span
          className={cn(
            cmdk ? 'right-14' : 'right-0',
            'has-[button]:-me-1 has-[data-slot="badge"]:-me-2',
            !selectableSlot && 'pointer-events-none',
            slotClasses,
          )}
        >
          {endSlot}
        </span>
      )}
      {action && (
        <span className={cn(cmdk ? 'right-14' : 'right-0 z-10', slotClasses)}>
          {action}
        </span>
      )}
      {/* Make action and end slot mutually exclusive */}
      {cmdk && (
        <span
          className={cn(
            'right-0 pe-[calc(var(--spacing-button)/4)]',
            !selectableSlot && 'pointer-events-none',
            slotClasses,
          )}
        >
          <Kbd size="sm">⌘</Kbd>
          <Kbd size="sm">K</Kbd>
        </span>
      )}
    </div>
  );
}

export { Input, inputVariants };
