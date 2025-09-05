'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Kbd } from '../kbd';
import { Slot } from '@radix-ui/react-slot';
import { useResizeObserver } from 'usehooks-ts';

interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  cmdk?: boolean;
  selectableSlot?: boolean;
  action?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

function Input({
  startSlot,
  endSlot,
  action,
  selectableSlot,
  cmdk,
  className,
  size = 'md',
  type,
  ...props
}: InputProps) {
  const slotClasses =
    'absolute inset-y-0 px-2 inline-flex text-xs gap-1 items-center justify-center text-secondary-foreground';
  const myRef = React.useRef(null);
  const { width = undefined } = useResizeObserver({
    ref: myRef,
    box: 'border-box',
  });
  return (
    <div
      className={cn(
        'relative max-w-full',
        size === 'lg' && 'h-button-lg rounded-lg',
        size === 'md' && 'h-button rounded-md',
        size === 'sm' && 'h-button-sm rounded-md',
      )}
      style={{ '--startSlotSize': `${width}px` } as React.CSSProperties}
    >
      <input
        type={type}
        data-slot="input"
        autoComplete="off"
        spellCheck="false"
        className={cn(
          'inset-ring-input placeholder:text-muted-foreground/60 flex w-full min-w-0 bg-current/2 py-1 text-base inset-ring outline-0 transition-[background,color,box-shadow,border-color,outline] selection:bg-blue-500/20 sm:text-sm',
          'box-border transition-colors duration-150 select-all',
          'text-foreground',
          'not-disabled:hover:bg-card',
          'inset-shadow-2xs',
          'file:text-foreground file:bg-background file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium',
          // 'focus-visible:outline-ring',
          // 'focus-visible:outline-1',
          'focus-visible:inset-ring-ring focus-visible:inset-ring-2',
          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
          'disabled:cursor-not-allowed disabled:opacity-50',
          size === 'lg' && 'h-button-lg rounded-lg ps-3',
          size === 'md' && 'h-button rounded-md ps-2.5',
          size === 'sm' && 'h-button-sm rounded-md ps-2',
          startSlot && 'ps-[var(--startSlotSize)]',
          endSlot && 'pe-button',
          className,
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
            !selectableSlot && 'pointer-events-none',
            slotClasses,
          )}
        >
          {endSlot}
        </span>
      )}
      {action && (
        <span className={cn(cmdk ? 'right-14' : 'right-0 z-10', slotClasses)}>{action}</span>
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

export { Input };
