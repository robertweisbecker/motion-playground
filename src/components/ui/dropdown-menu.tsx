'use client';

import * as React from 'react';
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';

import { cn } from '@/lib/utils';
import { Kbd } from '../kbd';

const menuClasses = [
  'relative bg-popover text-popover-foreground ring-[0.5px] ring-border-alpha backdrop-blur-sm dark:ring-border-alpha-soft dark:ring-inset',
  'data-closed:animate-out data-open:animate-in-instant data-closed:duration-150 duration-50  delay-0',
  'data-closed:fade-out-0 data-closed:zoom-out-95 data-open:fade-in-0 data-open:zoom-in-95',
  'data-top:slide-in-from-bottom-2 data-bottom:slide-in-from-top-2 data-left:slide-in-from-right-2 data-right:slide-in-from-left-2',
  'z-50 max-h-(--available-height) min-w-[6rem]',
  'origin-(--transform-origin) duration-300 ease-out-cubic',
  'overflow-x-hidden overflow-y-auto rounded-xl p-1 shadow-lg',
  'backdrop-blur-md',
];

const menuItemClasses = [
  'relative rounded-lg py-1.5 flex cursor-default items-center text-sm outline-hidden select-none',
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='size-'])]:text-popover-foreground/72",
  'peer pe-2 gap-2 ps-2.5 data-[inset]:pl-8',
  'focus:bg-popover-foreground/10 focus:text-popover-foreground data-checked:text-popover-foreground',
  // 'focus:shadow-dropdown-item',
  'data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:opacity-30',
];

type AsChildProps = {
  asChild?: boolean;
  children?: React.ReactNode;
};

type DropdownMenuContentProps = MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >;

type DropdownMenuItemProps = MenuPrimitive.Item.Props &
  AsChildProps & {
    inset?: boolean;
    label?: string;
    onSelect?: MenuPrimitive.Item.Props['onClick'];
    textValue?: string;
    variant?: 'default' | 'destructive';
  };

type DropdownMenuCheckboxItemProps = MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean;
  label?: string;
  onSelect?: MenuPrimitive.CheckboxItem.Props['onClick'];
  textValue?: string;
};

type DropdownMenuRadioItemProps = MenuPrimitive.RadioItem.Props & {
  inset?: boolean;
  label?: string;
  onSelect?: MenuPrimitive.RadioItem.Props['onClick'];
  textValue?: string;
};

type DropdownMenuSubTriggerProps = MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
  label?: string;
  textValue?: string;
};

function getChildRenderProps(
  asChild: boolean | undefined,
  children: React.ReactNode,
) {
  if (!asChild) {
    return { children };
  }

  if (!React.isValidElement(children)) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        'Dropdown menu parts using `asChild` require a single React element child.',
      );
    }

    return { children };
  }

  return { render: children };
}

function composeEventHandlers<EventType>(
  onClick?: (event: EventType) => void,
  onSelect?: (event: EventType) => void,
) {
  if (!onClick && !onSelect) {
    return undefined;
  }

  return (event: EventType) => {
    onClick?.(event);
    onSelect?.(event);
  };
}

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
  asChild = false,
  children,
  className,
  ...props
}: MenuPrimitive.Trigger.Props & AsChildProps) {
  return (
    <MenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cn(
        '[&>svg]:last:-mx-1 [&>svg]:last:transition-transform data-popup-open:[&>svg]:last:rotate-180',
        className,
      )}
      {...props}
      {...getChildRenderProps(asChild, children)}
    />
  );
}

function DropdownMenuContent({
  align = 'center',
  alignOffset = 0,
  className,
  side = 'bottom',
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50 outline-none"
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            menuClasses,
            'min-w-32',
            // 'after:shadow-button after:border-alpha after:absolute after:inset-1 after:-z-1 after:rounded-[inherit] after:border-2 after:blur-[2px]',
            className,
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ className, ...props }: MenuPrimitive.Group.Props) {
  return (
    <MenuPrimitive.Group
      data-slot="dropdown-menu-group"
      className={cn('group', className)}
      {...props}
    />
  );
}

// const itemClasses = [
//   'before:absolute before:inset-0 before:rounded-lg before:pointer-events-none',
//   'before:opacity-0 before:-z-1',
//
//   // 'group-hover:first-of-type:before:bg-red-500!',
//
//   // 'last-of-type:before:-translate-y-1',
//   // 'first-of-type:before:translate-y-1',
//   // 'peer-data-[slot=dropdown-menu-separator]:before:font-bold!',
//
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
  asChild = false,
  children,
  className,
  inset,
  label,
  onClick,
  onSelect,
  textValue,
  variant = 'default',
  ...props
}: DropdownMenuItemProps) {
  return (
    <MenuPrimitive.Item
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
        // 'data-disabled:cursor-not-allowed data-disabled:bg-transparent data-disabled:opacity-30',
        // 'peer gap-2 ps-2.5 pe-2',
        // "[&_svg:not([class*='text-'])]:text-muted-foreground",
        // itemClasses,
        className,
      )}
      label={label ?? textValue}
      onClick={composeEventHandlers(onClick, onSelect)}
      {...props}
      {...getChildRenderProps(asChild, children)}
    />
  );
}

function DropdownMenuCheckboxItem({
  children,
  className,
  closeOnClick = false,
  inset = true,
  label,
  onClick,
  onSelect,
  textValue,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        menuItemClasses,
        'group/checkbox-item',
        'data-checked:text-popover-foreground',
        // 'gap-2 ps-8',
        // 'data-disabled:pointer-events-none data-disabled:opacity-50',
        className,
      )}
      closeOnClick={closeOnClick}
      label={label ?? textValue}
      onClick={composeEventHandlers(onClick, onSelect)}
      {...props}
    >
      <span className="pointer-events-none absolute left-2.5 isolate flex size-3.5 items-center justify-center after:absolute after:inset-0 after:-z-1 after:rounded group-hover/checkbox-item:not-group-data-checked/checkbox-item:after:bg-popover group-hover/checkbox-item:not-group-data-checked/checkbox-item:after:inset-shadow-2xs group-hover/checkbox-item:not-group-data-checked/checkbox-item:after:inset-ring group-hover/checkbox-item:not-group-data-checked/checkbox-item:after:inset-ring-input group-hover/checkbox-item:group-data-checked/checkbox-item:after:bg-muted">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  children,
  className,
  closeOnClick = false,
  inset = true,
  label,
  onClick,
  onSelect,
  textValue,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(menuItemClasses, 'group/radio-item', className)}
      closeOnClick={closeOnClick}
      label={label ?? textValue}
      onClick={composeEventHandlers(onClick, onSelect)}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenuPrimitive.RadioItemIndicator>
          <CheckCircleIcon className="size-4 fill-current" />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.GroupLabel
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
}: MenuPrimitive.Separator.Props & {
  fullWidth?: boolean;
}) {
  return (
    <MenuPrimitive.Separator
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

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  children,
  className,
  inset,
  label,
  textValue,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        menuItemClasses,
        'not-focus:data-popup-open:bg-popover-foreground/5',
        className,
      )}
      label={label ?? textValue}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
  align = 'start',
  alignOffset = -3,
  className,
  side = 'right',
  sideOffset = 0,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      align={align}
      alignOffset={alignOffset}
      className={cn(menuClasses, 'delay-150', className)}
      side={side}
      sideOffset={sideOffset}
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
