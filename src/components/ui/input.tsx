import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      autoComplete="off"
      spellCheck="false"
      className={cn(
        'placeholder:text-muted-foreground selection:bg-blue ring-input bg-input/5 h-button flex min-w-0 rounded-md py-1 ps-3 text-sm ring-1 transition-[color,box-shadow] ring-inset',
        'inset-shadow-xs',
        'file:text-foreground file:bg-background file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium',
        'focus-visible:outline-ring',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
