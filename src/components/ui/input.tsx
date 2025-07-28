'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Kbd } from '../kbd';
import { Slot } from '@radix-ui/react-slot';
import { useResizeObserver } from 'usehooks-ts';

interface InputProps extends React.ComponentProps<'input'> {
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  cmdk?: boolean;
  selectableSlot?: boolean;
  action?: React.ReactNode;
}

function Input({
  startSlot,
  endSlot,
  action,
  selectableSlot,
  cmdk,
  className,
  type,
  ...props
}: InputProps) {
  const slotClasses =
    'absolute inset-y-0 min-w-button px-2 h-full select-none pointer-events-none inline-flex text-xs gap-1 items-center justify-center [&>svg]:pointer-events-none text-secondary-foreground';
  const myRef = React.useRef(null);
  const { width = undefined } = useResizeObserver({
    ref: myRef,
    box: 'border-box',
  });
  return (
    <div
      className="h-button relative"
      style={{ '--startSlotSize': `${width}px` } as React.CSSProperties}
    >
      <input
        type={type}
        data-slot="input"
        autoComplete="off"
        spellCheck="false"
        className={cn(
          'selection:bg-blue/50 bg-card h-button inset-ring-border flex w-full min-w-0 rounded-md py-1 ps-2.5 text-base inset-ring outline-0 transition-[background,color,box-shadow,border-color,outline] placeholder:text-gray-400 sm:text-sm',
          'box-border select-all',
          'not-disabled:hover:bg-background not-disabled:not-focus-visible:hover:inset-ring-input',
          'inset-shadow-2xs',
          'file:text-foreground file:bg-background file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium',
          'focus-visible:outline-ring hover:focus-visible:inset-ring-ring focus-visible:outline-1',
          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
          'disabled:cursor-not-allowed disabled:opacity-50',
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
      {action && <Slot className={cn(cmdk ? 'right-14' : 'right-0', slotClasses)}>{action}</Slot>}
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
