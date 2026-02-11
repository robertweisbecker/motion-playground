'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
// import { CheckIcon, ChevronRightIcon, CircleDotIcon } from 'lucide-react';
import {
  CheckIcon,
  ChevronRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import { Kbd } from '../kbd';

const menuClasses = [
  'relative bg-popover text-popover-foreground ring-[0.5px] ring-border-alpha backdrop-blur-sm dark:ring-border-alpha-soft dark:ring-inset',
  'data-[state=closed]:animate-out data-[state=open]:animate-in-instant data-[state=closed]:duration-150 duration-50  delay-0',
  'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
  'data-top:slide-in-from-bottom-2 data-bottom:slide-in-from-top-2 data-left:slide-in-from-right-2 data-right:slide-in-from-left-2',
  'z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[6rem]',
  'origin-(--radix-dropdown-menu-content-transform-origin) duration-300 ease-out-cubic',
  'overflow-x-hidden overflow-y-auto rounded-xl p-1 shadow-lg',
  'backdrop-blur-md',
];

const menuItemClasses = [
  'relative rounded-lg py-1.5 flex cursor-default items-center text-sm outline-hidden select-none',
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:text-popover-foreground/72",
  'peer pe-2 gap-2 ps-2.5 data-[inset]:pl-8',
  'focus:bg-popover-foreground/10 focus:text-popover-foreground data-[state=checked]:text-popover-foreground',
  // 'focus:shadow-dropdown-item',
  'data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:opacity-30',
];

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
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
          menuClasses,
          'min-w-32',
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
      className={cn('group', className)}
      {...props}
    />
  );
}

// const itemClasses = [
//   'before:absolute before:inset-0 before:rounded-lg before:pointer-events-none',
//   'before:opacity-0 before:-z-1',

//   // 'group-hover:first-of-type:before:bg-red-500!',

//   // 'last-of-type:before:-translate-y-1',
//   // 'first-of-type:before:translate-y-1',
//   // 'peer-data-[slot=dropdown-menu-separator]:before:font-bold!',

//   // 'hover:before:opacity-100',
//   // 'focus:before:translate-y-0 hover:before:translate-y-0',
//   // 'peer-hover:before:translate-y-1/4 peer-focus:before:-translate-y-1/4 peer-active:before:translate-y-0',
//   // 'before:transition-[transform,translate]',
//   // 'before:bg-blue-500',
//   // 'before:duration-100 before:ease-in',
//   // 'group:first-child:text-red-500',
//   // 'peer-has-[role="separator"]:text-green-500!',
// ];

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
        menuItemClasses,
        // 'focus:bg-current/8 focus:text-foreground',
        // 'hover:bg-current/16',
        // 'active:bg-current/4',
        'data-[variant=destructive]:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive',
        // 'data-[inset]:pl-8',
        // 'data-[disabled]:cursor-not-allowed data-[disabled]:bg-transparent data-[disabled]:opacity-30',
        // 'peer gap-2 ps-2.5 pe-2',
        // "[&_svg:not([class*='text-'])]:text-muted-foreground",
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
  onSelect,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={true}
      className={cn(
        menuItemClasses,
        'group/checkbox-item',
        'data-[state=checked]:text-popover-foreground',
        // 'gap-2 ps-8',
        // 'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      checked={checked}
      onSelect={(event) => {
        event.preventDefault();
        onSelect?.(event);
      }}
      {...props}
    >
      <span className="pointer-events-none absolute left-2.5 isolate flex size-3.5 items-center justify-center after:absolute after:inset-0 after:-z-1 after:rounded group-hover/checkbox-item:not-group-data-[state=checked]/checkbox-item:after:bg-popover group-hover/checkbox-item:not-group-data-[state=checked]/checkbox-item:after:inset-shadow-2xs group-hover/checkbox-item:not-group-data-[state=checked]/checkbox-item:after:inset-ring group-hover/checkbox-item:not-group-data-[state=checked]/checkbox-item:after:inset-ring-input group-hover/checkbox-item:group-data-[state=checked]/checkbox-item:after:bg-muted">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={true}
      className={cn(menuItemClasses, 'group/radio-item', className)}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckCircleIcon className="size-4 fill-current" />
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
        'peer ps-2.5 pe-8 pt-2 pb-1 text-xs text-popover-foreground/64 data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuSeparator({
  className,
  fullWidth = true,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator> & {
  fullWidth?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        'peer mx-2.5 my-1 h-px bg-popover-foreground/12 shadow-[inset_0_.5px_var(--background)] peer-data-[inset]:ml-8',
        fullWidth ? '-mx-2' : 'mx-2.5',
        className,
      )}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<typeof Kbd>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        '-me-0.5 ml-auto rounded-sm bg-current/10 px-0.5 py-px text-xs font-medium tracking-[.25em] text-current/60 tabular-nums bg-blend-multiply shadow-2xs inset-ring-[0.5px] inset-ring-border-alpha-soft',
        className,
      )}
      {...props}
    >
      {/* <Kbd
        size="sm"
        className={'-me-0.5 ml-auto self-end'}
        data-slot="dropdown-menu-shortcut"
        {...props}
      /> */}
    </span>
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
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
        menuItemClasses,
        'not-focus:data-[state=open]:bg-popover-foreground/5',
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
      sideOffset={0}
      alignOffset={-4}
      className={cn(menuClasses, 'delay-150', className)}
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
