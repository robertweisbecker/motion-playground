'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { cn } from '@/lib/utils';

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return (
    <HoverCardPrimitive.Root
      data-slot="hover-card"
      closeDelay={500}
      {...props}
    />
  );
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 5,

  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground',
          'rounded-xl shadow-popover outline-hidden',
          'isolate z-50 w-80 origin-(--radix-hover-card-content-transform-origin) p-2 contain-layout',
          'ring-border-alpha-soft',
          'dark:ring-0 dark:inset-ring dark:inset-ring-border-alpha',
          // 'data-[state=open]:animate-in',
          'data-[state=open]:fade-in-0 data-[state=open]:zoom-out-95',
          'data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0',
          'data-[state=closed]:zoom-in-95',
          'data-bottom:slide-in-from-top-2',
          'data-left:slide-in-from-right-2',
          'data-right:slide-in-from-left-2',
          'data-top:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
