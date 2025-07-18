'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { LucideInfo } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  label?: string;
  info?: React.ReactNode;
  required?: boolean;
}

function Label({ className, label, info, required, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'group-data-[disabled=true]:text-muted-foreground peer-disabled:text-muted-foreground text-foreground flex items-center gap-2 text-sm font-medium select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {label || props.children}
      {required ? <span className="text-destructive">*</span> : null}
      {info && (
        <Popover>
          <PopoverTrigger asChild>
            <Button size="xs" variant="ghost" className="-m-1 ms-auto">
              <LucideInfo />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="text-sm" sideOffset={1} align="end">
            {info}
          </PopoverContent>
        </Popover>
      )}
    </LabelPrimitive.Root>
  );
}

export { Label };
