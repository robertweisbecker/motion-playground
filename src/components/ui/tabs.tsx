'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

interface CustomTabsProps {
  stretch?: boolean;
}

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        // 'flex flex-col gap-2',
        'bg-card ring-border w-[calc(100% + --spacing(4) * 2)] -mx-4 overflow-clip rounded-lg shadow-xs ring-1 focus-within:overflow-visible',
        className,
      )}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'shadow-border/50 rounded-inherit group divide-border-border relative z-0 flex flex-row gap-0 divide-solid rounded-t-lg px-0.5 py-0 font-medium shadow-[inset_0_-1px]',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  stretch,
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & CustomTabsProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'peer text-muted-foreground relative flex h-10 cursor-pointer items-center justify-center px-4 break-keep whitespace-nowrap transition-[opacity,scale,translate,background] select-none',
        'hover:text-foreground',
        'before:ease dark:before:shadow-border before:absolute before:inset-x-1 before:inset-y-1.5 before:-z-1 before:rounded-xs before:transition-[opacity,scale,translate,background] before:duration-200 dark:data-[state=active]:before:shadow-[0_-1px]',
        'before:pointer-events-none before:translate-x-3/4 before:scale-x-125 peer-data-[state=active]:before:-translate-x-3/4 first:before:origin-left first:before:translate-x-1/2 last:before:origin-right last:before:-translate-x-1/2',
        'data-[state=active]:before:bg-accent data-[state=active]:text-foreground data-[state=active]:before:translate-x-0 data-[state=active]:before:scale-x-100',
        'after:bg-border/75 after:absolute after:inset-x-[-0.5px] after:h-[1em] after:w-px first:after:content-none',
        stretch && 'w-full grow',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('rounded-b-inherit w-full flex-1 px-4 py-2', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
