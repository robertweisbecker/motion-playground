'use client';

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '@/lib/utils';
import { resolveRenderProp } from '@/lib/resolve-render';

function TooltipProvider({
  delay = 100,
  delayDuration,
  ...props
}: TooltipPrimitive.Provider.Props & { delayDuration?: number }) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delayDuration ?? delay}
      {...props}
    />
  );
}

function Tooltip({
  delay,
  delayDuration,
  disableHoverableContent: _disableHoverableContent,
  ...props
}: TooltipPrimitive.Root.Props & {
  delay?: number;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}) {
  return (
    <TooltipProvider delay={delay} delayDuration={delayDuration}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  render,
  asChild = false,
  children,
  ...props
}: TooltipPrimitive.Trigger.Props & { asChild?: boolean }) {
  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      render={resolveRenderProp(render, asChild, children)}
      {...props}
    >
      {resolveRenderProp(render, asChild, children) ? undefined : children}
    </TooltipPrimitive.Trigger>
  );
}

function TooltipContent({
  className,
  sideOffset = 4,
  collisionPadding = 10,
  side = 'top',
  align = 'center',
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset' | 'collisionPadding'
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        className="isolate z-100"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            'backdrop-blur-2xs z-100 w-fit origin-(--transform-origin) rounded-sm bg-neutral-900/80 p-1.5 py-1 text-xs leading-tight font-[450] text-balance text-white fade-in-100 zoom-in-100 text-shadow-xs data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 dark:bg-popover/80 dark:text-popover-foreground data-top:slide-in-from-bottom-1 data-bottom:slide-in-from-top-1 data-left:slide-in-from-right-1 data-right:slide-in-from-left-1',
            'isolate dark:bg-blend-screen',
            'max-w-3xs',
            'shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.12),inset_0px_0.5px_0px_rgb(255_255_255_/_0.04),_inset_0px_0px_0px_1px_rgb(255_255_255_/_0.02),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.24),0_0_0_0.5px_var(--color-black-alpha-700),var(--shadow-md)]',
            'backdrop-blur-sm',
            className,
          )}
          {...props}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
