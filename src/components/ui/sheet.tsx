'use client';

import * as React from 'react';
import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { resolveRenderProp } from '@/lib/resolve-render';
import { Button } from './button';

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  render,
  asChild = false,
  children,
  ...props
}: SheetPrimitive.Trigger.Props & { asChild?: boolean }) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      render={resolveRenderProp(render, asChild, children)}
      {...props}
    >
      {resolveRenderProp(render, asChild, children) ? undefined : children}
    </SheetPrimitive.Trigger>
  );
}

function SheetClose({
  render,
  asChild = false,
  children,
  ...props
}: SheetPrimitive.Close.Props & { asChild?: boolean }) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      render={resolveRenderProp(render, asChild, children)}
      {...props}
    >
      {resolveRenderProp(render, asChild, children) ? undefined : children}
    </SheetPrimitive.Close>
  );
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        'absolute inset-0 z-50 bg-black/20 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0',
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          'fixed z-50 m-3 flex max-h-[calc(100%-var(--spacing)*6)] flex-col gap-4 rounded-[28px] bg-card shadow-lg outline outline-border-alpha transition ease-in-out data-closed:animate-out data-closed:duration-300 data-open:animate-in data-open:duration-500 dark:-outline-offset-1',
          side === 'right' &&
            'inset-y-0 right-0 h-full w-3/4 data-closed:slide-out-to-right data-open:slide-in-from-right sm:max-w-sm',
          side === 'left' &&
            'inset-y-0 left-0 h-full w-3/4 data-closed:slide-out-to-left data-open:slide-in-from-left sm:max-w-sm',
          side === 'top' &&
            'inset-x-0 top-0 h-auto data-closed:slide-out-to-top data-open:slide-in-from-top',
          side === 'bottom' &&
            'inset-x-0 bottom-0 h-auto data-closed:slide-out-to-bottom data-open:slide-in-from-bottom',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className="absolute top-2 right-2"
          render={
            <Button shape="pill" size="icon" iconOnly />
          }
        >
          <XIcon />
        </SheetPrimitive.Close>
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 px-5 pt-4', className)}
      {...props}
    />
  );
}

function SheetBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-body"
      className={cn('flex flex-col gap-4 px-5', className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
