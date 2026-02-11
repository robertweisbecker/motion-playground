'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import { inputVariants } from './input';
import {
  CaretDownIcon,
  CaretUpDownIcon,
  CaretUpIcon,
} from '@phosphor-icons/react';
import { Fade } from '../experimental/fade';

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = 'md',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
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
        'data-[placeholder]:text-muted-foreground',

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
        asChild
        className="absolute right-1.5 text-foreground"
      >
        <CaretUpDownIcon weight="bold" className="size-3.5" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  sideOffset = 4,
  position = 'item-aligned',
  align = 'center',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'dark',
          'relative isolate z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) ring ring-border-alpha-soft dark:-outline-offset-1',
          'overflow-x-hidden overflow-y-auto rounded-xl bg-popover/90 text-popover-foreground shadow-lg outline !outline-destructive backdrop-blur-xs duration-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-90 data-[state=open]:zoom-in-95 data-top:slide-in-from-bottom-2 data-bottom:slide-in-from-top-2 data-left:slide-in-from-right-2 data-right:slide-in-from-left-2',
          position === 'popper' &&
            'min-w-[8rem] data-top:-translate-y-1 data-bottom:translate-y-1 data-left:-translate-x-1 data-right:translate-x-1',
          className,
        )}
        position={position}
        align={align}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectScrollUpButton className="absolute inset-x-0 top-0 z-1" />
        <SelectPrimitive.Viewport
          className={cn(
            'min-w-[calc(var(--radix-select-trigger-width)+var(--spacing)*2) p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-(--radix-select-trigger-width) scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <Fade
          background="var(--color-background)"
          side="bottom"
          blur="2px"
          stop="50%"
        >
          <SelectScrollDownButton />
        </Fade>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
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
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Checked
        'data-[highlighted]:shadow-dropdown-item data-[state=checked]:shadow-dropdown-item data-[state=checked]:not-data-[highlighted]:bg-accent not-data-[highlighted]:data-[state=checked]:text-foreground',
        "relative flex w-full cursor-default items-center gap-2 rounded-lg py-1.5 ps-3 pe-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:opacity-64 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
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
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
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
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
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
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'flex h-7 cursor-default items-center justify-center bg-linear-to-b from-transparent',
        className,
      )}
      {...props}
    >
      <CaretDownIcon weight="fill" className="size-3" />
    </SelectPrimitive.ScrollDownButton>
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
