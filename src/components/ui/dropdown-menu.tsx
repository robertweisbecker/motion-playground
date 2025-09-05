'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
// import { CheckIcon, ChevronRightIcon, CircleDotIcon } from 'lucide-react';
import { CheckIcon, ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';
import { Kbd } from '../kbd';

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cn(
        '[&>svg]:last:-mx-1 [&>svg]:last:transition-transform data-[state=open]:[&>svg]:last:rotate-180',
      )}
      {...props}
    />
  );
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'dark:inset-ring-border-alpha-soft ring-border-alpha text-foreground bg-popover/60 relative ring-[0.5px] backdrop-blur-sm dark:inset-ring',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2", "data-[side=left]:slide-in-from-right-2", "data-[side=right]:slide-in-from-left-2", "data-[side=top]:slide-in-from-bottom-2',
          'z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem]',
          'origin-(--radix-dropdown-menu-content-transform-origin)',
          'overflow-x-hidden overflow-y-auto rounded-xl p-1 shadow-2xl',
          'backdrop-blur-md',
          // 'after:shadow-button after:border-alpha after:absolute after:inset-1 after:-z-1 after:rounded-[inherit] after:border-2 after:blur-[2px]',

          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group
      data-slot="dropdown-menu-group"
      className={cn('group', 'peer-has:[role="separator"]:bg-green-500', className)}
      {...props}
    />
  );
}

const itemClasses = [
  'before:absolute before:inset-0 before:rounded-lg before:pointer-events-none',
  'before:opacity-0 before:-z-1',

  // 'group-hover:first-of-type:before:bg-red-500!',

  // 'last-of-type:before:-translate-y-1',
  // 'first-of-type:before:translate-y-1',
  // 'peer-data-[slot=dropdown-menu-separator]:before:font-bold!',

  // 'hover:before:opacity-100',
  // 'focus:before:translate-y-0 hover:before:translate-y-0',
  // 'peer-hover:before:translate-y-1/4 peer-focus:before:-translate-y-1/4 peer-active:before:translate-y-0',
  // 'before:transition-[transform,translate]',
  // 'before:bg-blue-500',
  // 'before:duration-100 before:ease-in',
  // 'group:first-child:text-red-500',
  // 'peer-has-[role="separator"]:text-green-500!',
];

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        'focus:text-foreground focus:bg-current/8',
        'hover:bg-current/16',
        'active:bg-current/4',
        'data-[variant=destructive]:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive',
        'data-[inset]:pl-8',
        'data-[disabled]:pointer-events-none data-[disabled]:text-current/40',
        'peer relative flex cursor-default items-center gap-2 rounded-lg py-1.5 ps-2.5 pe-2 text-sm outline-hidden select-none',
        "[&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // itemClasses,
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        'focus:bg-current/10 focus:text-current',
        'relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm outline-hidden select-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        'focus:bg-current/10 focus:text-current',
        'peer relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm outline-hidden select-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckCircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'peer text-muted-foreground ps-2.5 pt-2 pb-1.5 text-xs font-[550] data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('peer bg-border-alpha mx-2.5 my-1 h-px', className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <>
      <span
        data-slot="dropdown-menu-shortcut"
        className={cn(
          'inset-ring-border-alpha-soft -me-0.5 ml-auto rounded-sm bg-current/10 px-0.5 py-px text-xs font-medium tracking-[.25em] text-current/60 tabular-nums bg-blend-multiply shadow-2xs inset-ring-[0.5px]',
          className,
        )}
        {...props}
      />
      {/* <Kbd size="sm">{props.children}</Kbd> */}
    </>
  );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        'peer focus:text-foreground relative flex cursor-default items-center rounded-md px-2 py-1.5 text-sm outline-hidden select-none focus:bg-current/8 data-[inset]:pl-8 data-[state=open]:text-current not-focus:data-[state=open]:bg-current/5',
        // itemClasses,
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'data-[state=open]:animate-in',
        'data-[state=closed]:animate-out',
        // 'data-[state=open]:fade-in-100',
        'data-[state=closed]:fade-out-0',
        // 'data-[state=open]:zoom-in-95',
        'data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-0',
        'data-[side=right]:slide-in-from-left-0',
        'data-[side=top]:slide-in-from-bottom-2',
        'opacity-100 data-[state=open]:opacity-100',
        'data-[state=closed]:-translate-x-2 data-[state=open]:translate-x-0',

        'ease transition-[transform,translate,opacity] duration-200',
        'z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-xl p-1 shadow-2xl',
        // 'text-popover-foreground dark:ring-border bg-inherit backdrop-blur-md dark:ring-1 dark:ring-inset',
        'mx-0.5 -my-1',
        'ring-border-alpha-soft bg-popover/60 ring-1 backdrop-blur-md dark:ring-inset',
        className,
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
