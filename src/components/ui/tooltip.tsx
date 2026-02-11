'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

function TooltipProvider({
  delayDuration = 100,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      skipDelayDuration={1000}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 4,
  collisionPadding = 10,
  side = 'top',
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        side={side}
        className={cn(
          'backdrop-blur-2xs z-100 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-sm bg-neutral-900/80 p-1.5 py-1 text-xs leading-tight font-[450] text-balance text-white fade-in-100 zoom-in-100 text-shadow-xs data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 dark:bg-popover/80 dark:text-popover-foreground data-top:slide-in-from-bottom-1 data-bottom:slide-in-from-top-1 data-left:slide-in-from-right-1 data-right:slide-in-from-left-1',
          'isolate dark:bg-blend-screen',
          // 'dark:[backdrop-filter:blur(3px)_contrast(1.2)]',
          'max-w-3xs',
          'data-[state=instant-open]:data-top:slide-in-from-bottom-0 data-[state=instant-open]:data-bottom:slide-in-from-top-0 data-[state=instant-open]:data-left:slide-in-from-right-0 data-[state=instant-open]:data-right:duration-0 data-[state=instant-open]:data-right:slide-in-from-left-0',
          'shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.12),inset_0px_0.5px_0px_rgb(255_255_255_/_0.04),_inset_0px_0px_0px_1px_rgb(255_255_255_/_0.02),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.24),0_0_0_0.5px_var(--color-black-alpha-700),var(--shadow-md)]',
          // 'peer-hover:data-[side=left]:slide-in-from-right-0',
          'backdrop-blur-sm',
          className,
        )}
        {...props}
      >
        {children}
        {/* <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-gray-900 fill-gray-900" /> */}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
