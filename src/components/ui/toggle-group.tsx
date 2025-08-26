'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { toggleVariants } from '@/components/ui/toggle';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'ghost',
  round: false,
});

function ToggleGroup({
  className,
  variant,
  size,
  round,
  orientation = 'horizontal',
  children,
  id,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      id={id}
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-orientation={orientation}
      className={cn(
        'group/toggle-group inline-flex w-auto grow-0 items-center self-center rounded-lg p-0.5',
        'data-[orientation=vertical]:flex-col',
        variant === 'ghost' && 'bg-muted ring-border-alpha gap-px ring-[0.5px]',
        variant === 'elevated' && 'bg-popover dark:shadow-glass gap-px shadow-sm backdrop-blur-xs',
        variant === 'default' && 'gap-px p-0',
        round && 'rounded-full',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, round }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant = 'ghost',
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
          round: context.round,
        }),
        'peer min-w-0 shrink-0 focus:z-10 focus-visible:z-10',
        // 'peer-data-[state=on]:rounded-l-none',
        variant === 'outline' &&
          'first:rounded-l-inherit last:rounded-r-inherit rounded-none border-l-0 first:border-l',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
