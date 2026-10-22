'use client';

import * as React from 'react';
import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type NavigationMenuProps = NavigationMenuPrimitive.Root.Props &
  Pick<
    NavigationMenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  > & {
    viewport?: boolean;
  };

type NavigationMenuPositionerProps = Omit<
  NavigationMenuPrimitive.Positioner.Props,
  'children'
>;

type NavigationMenuLinkProps = NavigationMenuPrimitive.Link.Props & {
  asChild?: boolean;
};

function NavigationMenu({
  className,
  children,
  viewport = true,
  align = 'start',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 6,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      />
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: NavigationMenuPrimitive.List.Props) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuPrimitive.Item.Props) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = cva(
  'inline-flex h-button-height w-max items-center justify-center rounded-lg bg-transparent px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-popup-open:hover:bg-accent data-popup-open:text-accent-foreground data-popup-open:focus:bg-accent data-popup-open:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1',
);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        navigationMenuTriggerStyle(),
        'group/navigation-menu-trigger',
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuPrimitive.Icon
        aria-hidden="true"
        className="relative top-[1px] ml-1 flex size-3 shrink-0 items-center justify-center transition duration-300 data-popup-open:rotate-180"
      >
        <ChevronDownIcon className="size-3" />
      </NavigationMenuPrimitive.Icon>
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'h-full w-full p-2 pr-2.5 md:w-auto',
        'transition-[opacity,transform,translate] duration-200',
        'data-starting-style:opacity-0 data-ending-style:opacity-0',
        'data-starting-style:data-[activation-direction=left]:translate-x-[-50%]',
        'data-starting-style:data-[activation-direction=right]:translate-x-[50%]',
        'data-ending-style:data-[activation-direction=left]:translate-x-[50%]',
        'data-ending-style:data-[activation-direction=right]:translate-x-[-50%]',
        'group-data-[viewport=false]/navigation-menu:top-full',
        'group-data-[viewport=false]/navigation-menu:mt-1.5',
        'group-data-[viewport=false]/navigation-menu:overflow-hidden',
        'group-data-[viewport=false]/navigation-menu:rounded-2xl',
        'group-data-[viewport=false]/navigation-menu:bg-popover',
        'group-data-[viewport=false]/navigation-menu:text-popover-foreground',
        'group-data-[viewport=false]/navigation-menu:shadow-xl',
        'group-data-[viewport=false]/navigation-menu:duration-200',
        'group-data-[viewport=false]/navigation-menu:data-open:animate-in',
        'group-data-[viewport=false]/navigation-menu:data-open:fade-in-0',
        'group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95',
        'group-data-[viewport=false]/navigation-menu:data-closed:animate-out',
        'group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0',
        'group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95',
        '**:data-[slot=navigation-menu-link]:focus:ring-0',
        '**:data-[slot=navigation-menu-link]:focus:outline-none',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  className,
  side = 'bottom',
  sideOffset = 6,
  align = 'start',
  alignOffset = 0,
  ...props
}: NavigationMenuPositionerProps) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        data-slot="navigation-menu-positioner"
        className={cn(
          'isolate z-50 flex justify-center',
          'h-[var(--positioner-height)] w-full max-w-[var(--available-width)] md:w-[var(--positioner-width)]',
          'transition-[top,left,right,bottom] duration-200 data-instant:transition-none',
          className,
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup
          className={cn(
            'origin-[var(--transform-origin)] relative mt-1.5 h-[var(--popup-height)] w-full overflow-hidden rounded-xl bg-card text-card-foreground shadow-xl outline-none md:w-[var(--popup-width)]',
            'transition-[width,height,opacity,transform] duration-200',
            'data-open:animate-in data-open:zoom-in-90',
            'data-closed:animate-out data-closed:zoom-out-95',
            'group-data-[viewport=false]/navigation-menu:mt-0',
            'group-data-[viewport=false]/navigation-menu:rounded-none',
            'group-data-[viewport=false]/navigation-menu:bg-transparent',
            'group-data-[viewport=false]/navigation-menu:text-inherit',
            'group-data-[viewport=false]/navigation-menu:shadow-none',
          )}
        >
          <NavigationMenuPrimitive.Viewport
            data-slot="navigation-menu-viewport"
            className="relative size-full overflow-hidden"
          />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}

const NavigationMenuViewport = NavigationMenuPositioner;

function NavigationMenuLink({
  className,
  asChild = false,
  children,
  ...props
}: NavigationMenuLinkProps) {
  const linkClassName = cn(
    "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-muted hover:text-muted-foreground focus:bg-muted focus:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-active:bg-muted/50 data-active:text-muted-foreground data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
    className,
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;

    return (
      <NavigationMenuPrimitive.Link
        data-slot="navigation-menu-link"
        render={(renderProps) =>
          React.cloneElement(child, {
            ...renderProps,
            className: cn(
              linkClassName,
              renderProps.className,
              child.props.className,
            ),
          })
        }
        {...props}
      />
    );
  }

  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={linkClassName}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden opacity-0 transition-opacity duration-200 data-popup-open:opacity-100',
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Icon>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuPositioner,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
