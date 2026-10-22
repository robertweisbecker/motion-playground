'use client';

import { Switch as SwitchPrimitive } from '@base-ui/react/switch';

import { cn } from '@/lib/utils';

function Switch({
  className,
  ...props
}: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn([
        'peer group/switch rounded-full transition-all',
        'inline-flex h-7 w-11 shrink-0 items-center p-0.5',
        'inset-shadow-2xs inset-ring inset-ring-border-alpha data-unchecked:bg-icon',
        'transition-colors',
        'hover:inset-ring-border-alpha-strong hover:data-unchecked:bg-icon-hover',
        'active:data-unchecked:bg-icon-active',
        'data-checked:bg-primary',
        'active:data-checked:bg-primary-active',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        'data-disabled:cursor-not-allowed data-disabled:bg-muted',
        className,
      ])}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn([
          'pointer-events-none block size-6',
          'shadow-2xs ring ring-black-alpha-100',
          'relative self-end',
          'data-checked:bg-white',
          'bg-white/90 group-hover/switch:bg-white',
          'inset-ring-1 inset-ring-white/5',
          'rounded-[calc(--spacing(6)/2)] transition-[translate,width,height] ease-out-quint group-active/switch:w-7 data-checked:translate-x-2/3 data-unchecked:translate-x-0',
          'group-active/switch:data-checked:translate-x-[calc(--spacing(3))]',
        ])}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
