'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

interface CustomAvatarProps {
  radius?: number;
  inset?: number;
  size?: number;
  round?: boolean;
}

function Avatar({
  className,
  inset = 1,
  size,
  round,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & CustomAvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      style={
        {
          '--avatar-radius': round ? 'var(--avatar-size)' : `calc(var(--avatar-size) * .25)`,
          '--avatar-inset': `${inset}px`,
          '--avatar-inset-radius': 'calc(var(--avatar-radius) - var(--avatar-inset))',
          '--avatar-size': size ? `${size}px` : '',
        } as React.CSSProperties
      }
      className={cn(
        'relative flex aspect-square shrink-0 overflow-hidden',
        'ring-border-alpha ring-[0.5px]',
        'p-[var(--avatar-inset)] shadow-2xs',
        'rounded-[var(--avatar-radius)]',
        // round ? 'rounded-[var(--avatar-radius)]' : 'rounded-full',
        size ? 'size-10' : 'size-[var(--avatar-size)]',
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full rounded-[var(--avatar-inset-radius)]', className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'text-secondary-foreground bg-card flex size-full items-center justify-center rounded-[var(--avatar-inset-radius)]',
        // 'bg-linear-to-b from-67% dark:bg-linear-to-t',
        'text-lg font-medium dark:text-shadow-black dark:text-shadow-xs',
        'from-black-alpha-100 via-black-alpha-25 bg-radial-[circle_at_50%_100%] to-transparent to-90%',
        'shadow-[inset_0_.5px_.5px_0_rgba(255,255,255,.08)]',
        // 'shadow-button-base',
        className,
      )}
      {...props}
    />
  );
}

function AvatarCutout() {
  return (
    <div className="after:ring-border-alpha relative isolate size-5 rounded-lg drop-shadow-xs after:absolute after:-inset-0 after:-z-1 after:rounded-[inherit] after:border-0 after:ring-0">
      <div className="mask-radial inset-ring-border-alpha/0 bg-card relative block size-full rounded-sm mask-b-from-black mask-b-from-100% mask-b-to-black mask-radial-[20%_20%] mask-radial-from-100% mask-radial-at-[85%_85%] mask-exclude mask-alpha inset-ring-[2px]" />
      <div className="absolute right-[0%] bottom-[0%] m-[2.5%] size-[25%] rounded-full bg-green-200 inset-ring-0 inset-ring-green-300" />
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
