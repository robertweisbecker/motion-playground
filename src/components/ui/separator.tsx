'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        // 'min-w-0 bg-border-alpha dark:border-[groove]',
        // 'data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=horizontal]:[&:not([class*="my-"])]:my-2',
        // 'data-[orientation=vertical]:mx-2 data-[orientation=vertical]:my-auto data-[orientation=vertical]:h-[calc(100%-0.5em)] data-[orientation=vertical]:max-h-full data-[orientation=vertical]:w-px',

        'min-w-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:min-h-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch',

        className,
      )}
      {...props}
    />
  );
}

export { Separator };
