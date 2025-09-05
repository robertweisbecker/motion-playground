'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { LucideInfo } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  label?: string;
  info?: React.ReactNode;
  required?: boolean;
}

function Label({ className, children, label, info, required, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'group-data-[disabled=true]:text-gray-alpha-400 peer-disabled:text-gray-alpha-400 text-secondary-foreground flex items-center gap-1 py-1 text-sm font-[450] select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {label || children}
      {required ? <span className="text-destructive">*</span> : null}
      {info && (
        <Popover>
          <PopoverTrigger asChild>
            <Button size="xs" iconOnly variant="ghost" className="lucide-duo -my-1">
              <InformationCircleIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="text-sm" sideOffset={-4} align="end" side="top">
            {info}
          </PopoverContent>
        </Popover>
      )}
    </LabelPrimitive.Root>
  );
}

export { Label };
