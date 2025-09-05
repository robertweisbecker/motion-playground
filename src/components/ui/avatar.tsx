'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';
import { Badge } from './badge';

interface CustomAvatarProps {
  radius?: number;
  inset?: number;
  size?: number;
  round?: boolean;
  status?: 'neutral' | 'brand' | 'info' | 'highlight' | 'success' | 'warning' | 'error';
  showInitialsShadow?: boolean;
}

function Avatar({
  className,
  children,
  inset = 2,
  radius = 4,
  status,
  size,
  showInitialsShadow = false,
  round,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & CustomAvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      style={
        {
          '--avatar-radius': round ? 'var(--avatar-size)' : `${radius}px`,
          '--avatar-inset': `${inset}px`,
          '--avatar-inset-radius': 'calc(var(--avatar-radius) - var(--avatar-inset))',
          '--avatar-size': size ? `${size}px` : '',
          width: 'var(--avatar-size, 2rem)',
          height: 'var(--avatar-size, 2rem)',
        } as React.CSSProperties
      }
      className={cn(
        'not-prose',
        'isolate aspect-square drop-shadow-xs',
        'relative shrink-0',
        'rounded-[var(--avatar-radius)]',
        status && !round && 'rounded-br-[calc(var(--avatar-radius)+var(--avatar-inset))]',
        size ? 'size-10' : 'size-[var(--avatar-size)]',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'absolute inset-0 block size-full',
          'rounded-[inherit] shadow-sm',
          // 'outline-border-alpha-soft outline-[0.5px] outline-offset-[0.5px]',
          'bg-card relative overflow-hidden p-[var(--avatar-inset)]',
          // 'inset-ring-[2px] inset-ring-border-alpha/0',
          status &&
            'mask-radial mask-b-from-black mask-b-from-100% mask-b-to-black mask-radial-from-100% mask-exclude mask-alpha',
          // 'mask-radial-at-[calc(100%-var(--avatar-inset)-var(--avatar-radius))_calc(100%-var(--avatar-inset)-var(--avatar-radius))]',
          // 'mask-radial-[20%_20%]',

          status &&
            'mask-radial-at-[calc(87.5%-var(--avatar-inset)+.5px)_calc(87.5%-var(--avatar-inset)+.5px)]',
          'mask-radial-[17.5%_17.5%]',
        )}
        // style={{'--tw-mask-radial-position': 'calc(88% - (var(--avatar-inset) * 1.5)) calc(88% - (var(--avatar-inset)*1.5))'} as React.CSSProperties}
      >
        {children}
      </div>
      {status && (
        <Badge
          size="dot"
          color={status}
          className={cn(
            'shadow-black-alpha-100 absolute -z-10 size-[25%] shadow-[0_0_0.5px_var(--color-foreground),_2px_3px_4px_1px_var(--color-black-alpha-50),0_2px_1px_-1px_var(--color-black-alpha-200),var(--shadow-sm)]',
            // 'ring-2 ring-red/10',
            // 'right-[var(--avatar-inset)] bottom-[var(--avatar-inset)]',
            'right-0 bottom-0',
            'm-[var(--avatar-inset)]',
          )}
        />
      )}
    </AvatarPrimitive.Root>
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
  children,
  showInitialsShadow,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & CustomAvatarProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      data-content={children as string}
      className={cn(
        'bg-secondary text-secondary-foreground grid-stack relative isolate size-full h-full rounded-[var(--avatar-inset-radius)] text-center leading-none! tracking-tight',
        // 'bg-linear-to-b from-67% dark:bg-linear-to-t',
        'text-[length:calc(var(--avatar-size)/2)] font-medium text-shadow-[0_-.5px_--alpha(var(--color-card)/50%),0_.33px_2px_--alpha(currentColor/10%)] dark:font-normal dark:text-shadow-[0_-.5px_0px_--alpha(var(--color-white)/60%),-.25px_0px_0px_var(--color-gray-600),var(--text-shadow-sm)]',
        // 'dark:text-shadow-black',
        'from-muted to-popover bg-radial-[circle_at_50%_0%] via-transparent bg-size-[50%] bg-center',
        'shadow-[inset_0_.5px_.5px_0_rgba(255,255,255,.1),inset_0_0_1px_.5px_rgba(255,255,255,.02),inset_0_-4px_4px_-3px_rgba(0,0,0,0.025)]',
        showInitialsShadow && [
          'after:text-muted-foreground after:absolute after:-z-1 after:size-full after:origin-bottom-right after:-translate-x-[.33em] after:-translate-y-[calc(1em+var(--avatar-inset))] after:scale-x-75 after:scale-y-75 after:rotate-x-180 after:rotate-z-25 after:-skew-30',
          'after:mask-t-to-transparent after:mask-t-to-75% after:text-center after:leading-loose after:tracking-tight after:opacity-100 after:blur-[.67px] after:content-[attr(data-content)]',
          'dark:after:translate-x-0 dark:after:translate-y-[.67em] dark:after:scale-x-105 dark:after:scale-y-50 dark:after:rotate-x-180 dark:after:rotate-z-45 dark:after:-skew-x-0 dark:after:skew-y-0 dark:after:mask-b-to-transparent dark:after:opacity-100 dark:after:blur-[.5px]',
        ],
        // rotate(180deg) rotateZ(18deg) skew(60deg,-20deg) translateY(-32%) translateX(21%) scaleY(.75) scaleX(.9)

        // top: calc(100% - 1em);
        // height: 100%;
        // translate: 0;
        // transform-origin: -200% 40%;
        // width: 100%;
        // text-align: center;'
        className,
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
}

function AvatarCutout() {
  return (
    <div className="after:ring-border-alpha relative isolate size-5 rounded-lg drop-shadow-xs after:absolute after:-inset-0 after:-z-1 after:rounded-[inherit] after:border-0 after:ring-0">
      <div className="mask-radial inset-ring-border-alpha/0 bg-card relative block size-full rounded-sm mask-b-from-black mask-b-from-100% mask-b-to-black mask-radial-[20%_20%] mask-radial-from-100% mask-radial-at-[85%_85%] mask-exclude mask-alpha inset-ring-[2px]" />
      <div className="absolute right-[0%] bottom-[0%] m-[2.5%] size-[25%] rounded-full bg-red-300 inset-ring-0 inset-ring-green-300" />
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback, AvatarCutout };
