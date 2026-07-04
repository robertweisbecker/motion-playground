'use client';

import * as React from 'react';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon } from '@heroicons/react/16/solid';
import {
  CaretDownIcon,
  CaretUpDownIcon,
  CaretUpIcon,
} from '@phosphor-icons/react';

import { Fade } from '../experimental/fade';
import { cn } from '@/lib/utils';
import { inputVariants } from './input';

function Select<Value, Multiple extends boolean | undefined = false>({
  ...props
}: SelectPrimitive.Root.Props<Value, Multiple>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: SelectPrimitive.Group.Props) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: SelectPrimitive.Value.Props) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = 'md',
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: 'sm' | 'md' | 'lg';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        inputVariants({
          // variant: 'default',
          size,
        }),
        // Container
        'relative w-fit items-center justify-between gap-2 pe-8 whitespace-nowrap',
        // 'dark:border-transparent! dark:bg-card dark:shadow-button! dark:inset-shadow-none! dark:outline-transparent!',
        // Placeholder
        'data-placeholder:text-muted-foreground',

        // Value
        '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-baseline *:data-[slot=select-value]:gap-1.5',
        // SVG
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-icon",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <CaretUpDownIcon
            weight="bold"
            className="absolute right-1.5 size-3.5 text-foreground"
          />
        }
      />
    </SelectPrimitive.Trigger>
  );
}

type SelectContentProps = SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  > & {
    position?: 'popper' | 'item-aligned';
  };

function SelectContent({
  className,
  children,
  side = 'bottom',
  sideOffset = 4,
  position = 'item-aligned',
  align = 'center',
  alignOffset = 0,
  ...props
}: SelectContentProps) {
  const alignItemWithTrigger = position !== 'popper';

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            'dark',
            'relative isolate z-50 origin-(--transform-origin) ring ring-border-alpha-soft dark:-outline-offset-1',
            'overflow-hidden rounded-xl bg-popover/90 text-popover-foreground shadow-lg outline !outline-destructive backdrop-blur-xs duration-0 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-90 data-open:zoom-in-95 data-top:slide-in-from-bottom-2 data-bottom:slide-in-from-top-2 data-left:slide-in-from-right-2 data-right:slide-in-from-left-2',
            position === 'popper' &&
              'min-w-[8rem] data-top:-translate-y-1 data-bottom:translate-y-1 data-left:-translate-x-1 data-right:translate-x-1',
            className,
          )}
          {...props}
        >
          <SelectScrollUpButton className="absolute inset-x-0 top-0 z-1" />
          <SelectPrimitive.List
            className={cn(
              'max-h-(--available-height) min-w-[calc(var(--anchor-width)+var(--spacing)*2)] overflow-x-hidden overflow-y-auto p-1',
              position === 'popper' &&
                'h-(--anchor-height) w-full min-w-(--anchor-width) scroll-my-1',
            )}
          >
            {children}
          </SelectPrimitive.List>
          <Fade
            background="var(--color-background)"
            side="bottom"
            blur="2px"
            stop="50%"
          >
            <SelectScrollDownButton />
          </Fade>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn('px-2 py-1.5 text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Checked
        'data-[highlighted]:shadow-dropdown-item data-checked:shadow-dropdown-item data-checked:not-data-[highlighted]:bg-accent not-data-[highlighted]:data-checked:text-foreground',
        "relative flex w-full cursor-default items-center gap-2 rounded-lg py-1.5 ps-3 pe-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:opacity-64 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      render={(renderProps, state) => (
        <div
          {...renderProps}
          data-checked={state.selected ? '' : undefined}
        />
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator className="grid-stack absolute right-0 w-6">
        <CheckIcon className="size-4" />
      </SelectPrimitive.ItemIndicator>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        'relative flex h-6 cursor-default items-center justify-center',
        className,
      )}
      {...props}
    >
      <Fade
        background="var(--color-popover)"
        side="top"
        blur="2px"
        stop="50%"
        className="inset-0 -z-1 h-12"
      />
      <CaretUpIcon weight="fill" className="size-3" />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        'flex h-7 cursor-default items-center justify-center bg-linear-to-b from-transparent',
        className,
      )}
      {...props}
    >
      <CaretDownIcon weight="fill" className="size-3" />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectContent as SelectMenu,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
