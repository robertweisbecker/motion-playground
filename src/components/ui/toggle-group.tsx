'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { toggleVariants } from '@/components/ui/toggle';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'default',
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
        'group/toggle-group inline-flex w-auto grow-0 items-center self-center rounded-lg',
        'data-[orientation=vertical]:flex-col',
        variant !== 'ghost' && variant !== 'outline' && 'p-0.5',
        variant !== 'outline' && 'gap-px',
        variant === 'ghost' && 'gap-px bg-transparent',
        variant === 'elevated' && 'bg-card dark:shadow-glass shadow-sm backdrop-blur-xs',
        variant === 'outline' && 'inset-ring-input rounded-md p-0 inset-ring',
        // variant === 'default' && 'gap-px',
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
        'peer min-w-0 shrink-0 focus:z-1 focus-visible:z-10 [&:data-toggled]:data-toggled:rounded-b-none [&data-toggled+data-toggled]:rounded-t-none',
        'data-[state=on]:z-2',
        '[&:has(+[data-state=on])]:data-[state=on]:rounded-r-none! [&[data-state=on]+[data-state=on]]:rounded-l-none!',
        // 'peer-data-[state=on]:rounded-l-none',
        context.variant === 'outline' &&
          'rounded-none not-first:-ms-px first:rounded-l-[inherit] first:border-l last:rounded-r-[inherit] active:bg-transparent',
        // 'data-pressed:inset-ring data-[state=on]:inset-ring-current',
        // 'data-[variant=outline]:rounded-none data-[variant=outline]:border-[initial] data-[variant=outline]:first:rounded-l-[inherit] data-[variant=outline]:last:rounded-r-[inherit]',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
