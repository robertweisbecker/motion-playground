'use client';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { toggleVariants } from '@/components/ui/toggle';

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
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
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      id={id}
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-orientation={orientation}
      className={cn(
        'group/toggle-group inline-flex w-fit grow-0 items-center self-center',
        'data-[orientation=vertical]:flex-col',
        variant !== 'ghost' && variant !== 'outline' && 'p-0.5',
        variant !== 'outline' && 'gap-px',
        variant === 'ghost' && 'gap-px bg-transparent',
        variant === 'elevated' &&
          'rounded-md bg-sidebar/50 shadow-glass backdrop-blur-xs',
        variant === 'outline' &&
          '-space-x-px rounded-md bg-clip-padding p-0 inset-ring inset-ring-border',
        variant === 'dashed' && 'gap-0 -space-x-px rounded-md p-0',
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
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
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
        'peer [~[data-state="on"]+[data-state="on"]]:rounded-t-none min-w-0 shrink-0 hover:z-1 focus:z-1 focus-visible:z-10 [[data-state="on"]+[data-state="on"]]:[data-state="on"]:rounded-b-none',
        'data-[state=on]:z-2',
        '[&:has(+[data-state=on])]:data-[state=on]:rounded-r-none! [&[data-state=on]+[data-state=on]]:rounded-l-none!',
        // 'peer-data-[state=on]:rounded-l-none',
        (context.variant === 'outline' || context.variant === 'dashed') && [
          'rounded-none',
          'first:rounded-l-[inherit] last:rounded-r-[inherit] [&:has(+[data-state=on])]:data-[state=off]:not-hover:border-r-transparent! [&[data-state=on]+[data-state=off]:not(:hover)]:border-l-transparent!',
        ],
        // context.variant === 'dashed' && [
        //   'rounded-none first:rounded-l-[inherit] first:border-l last:rounded-r-[inherit] [&:has(+[data-state=on])]:data-[state=off]:border-r-transparent! [&[data-state=on]+[data-state=off]]:border-l-transparent!',
        // ],
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

interface Props {
  ariaLabel?: string;
  items: { value: string; label: string; icon?: React.ReactNode }[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const CampsiteToggleGroup = ({
  ariaLabel,
  items,
  onValueChange,
  value,
  className,
}: Props) => {
  const layoutId = React.useId();

  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        '[--toggle-radius:var(--radius-lg)]',
        'inline-flex h-8 flex-1 overflow-visible rounded-(--toggle-radius) bg-accent',
        className,
      )}
      type="single"
      value={value}
      aria-label={ariaLabel}
      onValueChange={onValueChange}
    >
      {items.map((item) => {
        const isActive = item.value === value;
        return (
          <ToggleGroupPrimitive.Item
            key={item.value}
            value={item.value}
            aria-label={item.label}
            className={cn(
              'relative flex-1 rounded-[calc(var(--toggle-radius)-1px)] px-2.5 text-[13px] font-medium text-muted-foreground transition-all duration-150',
              'outline-offset-0 transition-[background-color,color,outline] duration-150',
              'focus-visible:outline-2 focus-visible:outline-ring',
              'before:pointer-events-none before:absolute before:inset-1 before:rounded-sm',
              'hover:text-accent-foreground hover:before:border-border-alpha hover:before:bg-muted',
              // 'before:transition-[inset] before:duration-200 data-toggled:before:inset-px data-toggled:before:rounded-[inherit]',
              {
                'text-foreground': isActive,
              },
            )}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className={cn([
                  'shadow-button',
                  // 'ring ring-border-alpha-soft dark:border-none',
                  // 'dark:shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),var(--shadow-button-base)]',
                  // 'dark:ring-1 dark:ring-neutral-800',
                  'absolute inset-1 rounded-[inherit] bg-card transition-[inset] in-data-toggled:inset-px',
                ])}
                initial={{ inset: '2px' }}
                animate={{ inset: '1px' }}
                whileTap={{ inset: '2px' }}
                transition={{ duration: 0.15 }}
                aria-hidden="true"
              />
            )}
            <span className="pointer-events-none relative">
              {item.icon || item.label}
            </span>
          </ToggleGroupPrimitive.Item>
        );
      })}
    </ToggleGroupPrimitive.Root>
  );
};

export { ToggleGroup, ToggleGroupItem, CampsiteToggleGroup };
