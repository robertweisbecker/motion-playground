'use client';

import * as React from 'react';
import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';

import { cn } from '@/lib/utils';
import { resolveRenderProp } from '@/lib/resolve-render';

const HoverCardDelayContext = React.createContext<{
  delay?: number;
  closeDelay?: number;
}>({});

function HoverCard({
  openDelay,
  closeDelay = 500,
  ...props
}: PreviewCardPrimitive.Root.Props & {
  openDelay?: number;
  closeDelay?: number;
}) {
  return (
    <HoverCardDelayContext.Provider value={{ delay: openDelay, closeDelay }}>
      <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
    </HoverCardDelayContext.Provider>
  );
}

function HoverCardTrigger({
  render,
  asChild = false,
  children,
  delay,
  closeDelay,
  ...props
}: PreviewCardPrimitive.Trigger.Props & { asChild?: boolean }) {
  const inherited = React.useContext(HoverCardDelayContext);

  return (
    <PreviewCardPrimitive.Trigger
      data-slot="hover-card-trigger"
      delay={delay ?? inherited.delay}
      closeDelay={closeDelay ?? inherited.closeDelay}
      render={resolveRenderProp(render, asChild, children)}
      {...props}
    >
      {resolveRenderProp(render, asChild, children) ? undefined : children}
    </PreviewCardPrimitive.Trigger>
  );
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 5,
  side = 'bottom',
  alignOffset = 0,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            'bg-popover text-popover-foreground',
            'rounded-xl shadow-popover outline-hidden',
            'isolate z-50 w-80 origin-(--transform-origin) p-2 contain-layout',
            'ring-border-alpha-soft',
            'dark:ring-0 dark:inset-ring dark:inset-ring-border-alpha',
            'data-open:fade-in-0 data-open:zoom-out-95',
            'data-closed:animate-out',
            'data-closed:fade-out-0',
            'data-closed:zoom-in-95',
            'data-bottom:slide-in-from-top-2',
            'data-left:slide-in-from-right-2',
            'data-right:slide-in-from-left-2',
            'data-top:slide-in-from-bottom-2',
            className,
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
