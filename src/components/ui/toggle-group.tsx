'use client';

import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { Toggle as TogglePrimitive } from '@base-ui/react/toggle';
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

type LegacyToggleGroupProps = {
  type?: 'single' | 'multiple';
  value?: string | readonly string[];
  defaultValue?: string | readonly string[];
  onValueChange?: (value: string) => void;
};

function normalizeToggleGroupValue(
  value: string | readonly string[] | undefined,
): string[] | undefined {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === 'string') {
    return value ? [value] : [];
  }
  return [...value];
}

function ToggleGroup({
  className,
  variant,
  size,
  round,
  orientation = 'horizontal',
  children,
  id,
  type,
  value,
  defaultValue,
  onValueChange,
  multiple: multipleProp,
  ...props
}: Omit<ToggleGroupPrimitive.Props, 'value' | 'defaultValue' | 'onValueChange'> &
  VariantProps<typeof toggleVariants> &
  LegacyToggleGroupProps) {
  const multiple = type === 'multiple' || multipleProp;
  const normalizedValue = normalizeToggleGroupValue(value);
  const normalizedDefaultValue = normalizeToggleGroupValue(defaultValue);

  return (
    <ToggleGroupPrimitive
      id={id}
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-orientation={orientation}
      multiple={multiple}
      value={normalizedValue}
      defaultValue={normalizedDefaultValue}
      onValueChange={(nextValue) => {
        if (!onValueChange) {
          return;
        }
        if (multiple) {
          onValueChange(nextValue.join(',') as string);
          return;
        }
        onValueChange(nextValue[0] ?? '');
      }}
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
        round && 'rounded-full',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, round }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant = 'ghost',
  size,
  value,
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <TogglePrimitive
      value={value}
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
          round: context.round,
        }),
        'peer [~[data-pressed]+[data-pressed]]:rounded-t-none min-w-0 shrink-0 hover:z-1 focus:z-1 focus-visible:z-10 [[data-pressed]+[data-pressed]]:[data-pressed]:rounded-b-none',
        'data-pressed:z-2',
        '[&:has(+[data-pressed])]:data-pressed:rounded-r-none! [&[data-pressed]+[data-pressed]]:rounded-l-none!',
        (context.variant === 'outline' || context.variant === 'dashed') && [
          'rounded-none',
          'first:rounded-l-[inherit] last:rounded-r-[inherit] [&:has(+[data-pressed])]:data-[pressed=false]:not-hover:border-r-transparent! [&[data-pressed]+[data-pressed=false]:not(:hover)]:border-l-transparent!',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
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
    <ToggleGroupPrimitive
      className={cn(
        '[--toggle-radius:var(--radius-lg)]',
        'inline-flex h-8 flex-1 overflow-visible rounded-(--toggle-radius) bg-accent',
        className,
      )}
      value={value ? [value] : []}
      aria-label={ariaLabel}
      onValueChange={(nextValue) => onValueChange(nextValue[0] ?? '')}
    >
      {items.map((item) => {
        const isActive = item.value === value;
        return (
          <TogglePrimitive
            key={item.value}
            value={item.value}
            aria-label={item.label}
            className={cn(
              'relative flex-1 rounded-[calc(var(--toggle-radius)-1px)] px-2.5 text-[13px] font-medium text-muted-foreground transition-all duration-150',
              'outline-offset-0 transition-[background-color,color,outline] duration-150',
              'focus-visible:outline-2 focus-visible:outline-ring',
              'before:pointer-events-none before:absolute before:inset-1 before:rounded-sm',
              'hover:text-accent-foreground hover:before:border-border-alpha hover:before:bg-muted',
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
                  'absolute inset-1 rounded-[inherit] bg-card transition-[inset] in-data-pressed:inset-px',
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
          </TogglePrimitive>
        );
      })}
    </ToggleGroupPrimitive>
  );
};

export { ToggleGroup, ToggleGroupItem, CampsiteToggleGroup };
