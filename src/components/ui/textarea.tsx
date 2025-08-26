import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-border placeholder:text-muted-foreground bg-card border outline-none md:text-sm',
        'hover:not-disabled:not-focus-within:bg-muted hover:not-disabled:not-focus-within:border-input',
        'ease flex field-sizing-content min-h-16 w-full rounded-md border px-2.5 py-1.5 text-base transition-[background,border-color,color,box-shadow] duration-150',
        'focus-visible:border-ring focus-visible:inset-ring-ring focus-visible:z-1 focus-visible:bg-transparent focus-visible:inset-ring',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        'dark:bg-muted dark:aria-invalid:ring-destructive/40',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
