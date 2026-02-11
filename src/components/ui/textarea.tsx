import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({
  className,
  unstyled = false,
  ...props
}: React.ComponentProps<'textarea'> & { unstyled?: boolean }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        [
          unstyled
            ? 'resize-none border-none outline-0'
            : [
                'bg-background outline -outline-offset-1 outline-border-alpha placeholder:text-muted-foreground',
                'hover:not-disabled:not-focus-within:bg-background hover:not-disabled:not-focus-within:outline-input-alpha',
                'ease flex min-h-16 rounded-lg transition-[background,border-color,color,box-shadow] duration-150',
                'focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-ring',
                'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
                'inset-shadow-2xs dark:aria-invalid:ring-destructive/40',
                'min-w-3xs',
              ],
        ],
        'field-sizing-content w-full text-base md:text-sm',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'min-h-16 px-2.5 py-1.5',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
