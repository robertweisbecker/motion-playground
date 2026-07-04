'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface LabelProps extends React.ComponentProps<'label'> {
  label?: string;
  info?: React.ReactNode;
  required?: boolean;
}

function Label({
  className,
  children,
  label,
  info,
  required,
  ...props
}: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        'flex items-center gap-1 text-sm font-[450] text-foreground select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:text-gray-alpha-400 peer-disabled:cursor-not-allowed peer-disabled:text-gray-alpha-400',
        className,
      )}
      {...props}
    >
      {label || children}
      {required ? <span className="text-destructive">*</span> : null}
      {info && (
        <Popover>
          <PopoverTrigger
            render={
              <Button
                size="xs"
                iconOnly
                variant="invisible"
                className="lucide-duo -my-1"
              />
            }
          >
            <InformationCircleIcon />
          </PopoverTrigger>
          <PopoverContent
            className="text-sm"
            sideOffset={-4}
            align="end"
            side="top"
          >
            {info}
          </PopoverContent>
        </Popover>
      )}
    </label>
  );
}

export { Label };
