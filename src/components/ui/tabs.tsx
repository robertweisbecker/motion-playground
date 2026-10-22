'use client';

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';

import { cn } from '@/lib/utils';

interface CustomTabsProps {
  stretch?: boolean;
  vertical?: boolean;
  bordered?: boolean;
}

function Tabs({
  className,
  vertical,
  bordered,
  ...props
}: TabsPrimitive.Root.Props & CustomTabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        'focus-within:overflow-visible',
        vertical && 'sm:grid sm:grid-cols-[auto_1fr] sm:gap-2',
        bordered &&
          'bg-card ring-border -mx-4 w-[calc(100%_+_--spacing(8))] rounded-lg shadow-xs ring-1',
        className,
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  bordered,
  vertical,
  ...props
}: TabsPrimitive.List.Props & CustomTabsProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'rounded-inherit group text-md relative z-0 flex gap-0 rounded-t-lg px-0.5 py-0 font-medium',
        'overflow-auto',
        bordered &&
          'shadow-border divide-border-border divide-border divide-dashed shadow-[inset_0_-1px]',
        vertical && 'sm:w-min sm:flex-col',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  stretch,
  className,
  vertical,
  ...props
}: TabsPrimitive.Tab.Props & CustomTabsProps) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        'peer text-muted-foreground relative flex h-10 cursor-pointer items-center justify-center gap-1.5 px-4 break-keep whitespace-nowrap transition-[opacity,scale,translate,background] select-none',
        'hover:text-foreground',
        'before:ease dark:before:shadow-white-alpha-25 before:absolute before:inset-x-1 before:inset-y-1.5 before:-z-1 before:rounded-sm before:transition-[opacity,scale,translate,background] before:duration-200 dark:data-active:before:shadow-[inset_0_1px]',
        'data-active:before:bg-secondary data-active:text-secondary-foreground',
        'after:bg-border/75 after:absolute after:inset-x-[-0.5px] after:h-[1em] after:w-px first:after:content-none',
        'data-[inactive]:after:-z-1',
        'before:pointer-events-none before:translate-x-3/4 before:scale-x-125 peer-data-active:before:-translate-x-3/4 first:before:origin-left first:before:translate-x-1/2 last:before:origin-right last:before:-translate-x-1/2',
        'data-active:before:translate-x-0 data-active:before:scale-x-100',
        vertical && [
          'sm:before:translate-y-3/4 sm:before:scale-y-125 sm:peer-data-active:before:-translate-y-3/4 sm:first:before:origin-top sm:first:before:translate-y-1/2 sm:last:before:origin-bottom sm:last:before:-translate-y-1/2',
          'sm:data-active:before:translate-y-0 sm:data-active:before:scale-y-100',
          'sm:before:translate-x-[initial]! sm:before:scale-x-[initial]!',
          'sm:after:hidden',
          'sm:px-2 sm:before:inset-x-0 sm:before:inset-y-1',
        ],
        '**:data-[slot=icon]:-ms-1',
        stretch && 'w-full flex-1',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  bordered,
  ...props
}: TabsPrimitive.Panel.Props & CustomTabsProps) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn('rounded-b-inherit w-full flex-1', bordered && 'px-4 py-2', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
