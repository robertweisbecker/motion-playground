import * as React from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
}
function Input({ startSlot, endSlot, className, type, ...props }: InputProps) {
  const slotClasses =
    'absolute inset-y-0 text-center text-xs grid place-items-center [&>svg]:pointer-events-none text-gray-600';
  return (
    <div className="relative">
      {startSlot && <span className={cn('left-1 ps-1', slotClasses)}>{startSlot}</span>}
      <input
        type={type}
        data-slot="input"
        autoComplete="off"
        spellCheck="false"
        className={cn(
          'selection:bg-blue ring-input bg-card h-button flex w-full min-w-0 rounded-lg py-1 ps-2.5 text-base transition-[color,box-shadow] ring-inset placeholder:text-gray-500 sm:text-sm',
          'inset-shadow-2xs',
          'file:text-foreground file:bg-background file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium',
          'focus-visible:outline-ring',
          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          startSlot && 'ps-button',
          className,
        )}
        {...props}
      />
      {endSlot && <span className={cn('right-1 pe-1', slotClasses)}>{endSlot}</span>}
    </div>
  );
}

export { Input };
