'use client';

import * as React from 'react';
import { Popover as PopoverPrimitive } from '@base-ui/react/popover';

import { cn } from '@/lib/utils';
import { resolveRenderProp } from '@/lib/resolve-render';

function Popover({ ...props }: PopoverPrimitive.Root.Props) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  render,
  asChild = false,
  children,
  ...props
}: PopoverPrimitive.Trigger.Props & { asChild?: boolean }) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      render={resolveRenderProp(render, asChild, children)}
      {...props}
    >
      {resolveRenderProp(render, asChild, children) ? undefined : children}
    </PopoverPrimitive.Trigger>
  );
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  alignOffset = 0,
  side = 'bottom',
  children,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            '[--popover-border:var(--outline)]',
            '[--popover-arrow-start:var(--popover-border)]',
            '[--popover-arrow-middle:var(--popover-border)]',
            '[--popover-arrow-end:var(--popover-border)]',
            '[--popover-arrow-highlight:color-mix(in_oklch,var(--popover-border),white_20%)]',
            'dark:data-right:[--popover-arrow-middle:var(--popover-arrow-highlight)] dark:data-right:[--popover-arrow-start:var(--popover-arrow-highlight)]',
            'dark:data-left:[--popover-arrow-end:var(--popover-arrow-highlight)] dark:data-left:[--popover-arrow-middle:var(--popover-arrow-highlight)]',
            'dark:data-bottom:[--popover-arrow-end:var(--popover-arrow-highlight)] dark:data-bottom:[--popover-arrow-middle:var(--popover-arrow-highlight)]',
            'z-50',
            'origin-(--transform-origin)',
            'flex flex-col items-center gap-1',
            'max-h-(--available-height)',
            'max-w-64 min-w-14',
            'data-left:min-h-14 data-right:min-h-14',
            'p-3',
            'rounded-xl',
            'bg-popover text-popover-foreground',
            'shadow-[0_4px_64px_14px_rgb(0_0_0_/_8%),_var(--shadow-sm)] drop-shadow-xl dark:inset-shadow-outlined dark:drop-shadow-black-alpha-500',
            'group/popover',
            'data-left:rounded-e-[1.25rem] data-right:rounded-s-[1.25rem]',
            'data-top:rounded-b-[1.25rem] data-bottom:rounded-t-[1.25rem]',
            'data-open:animate-in data-open:blur-in-[1px] data-open:zoom-in-98',
            'data-closed:animate-out data-closed:fade-out-0 data-closed:blur-out-sm data-closed:zoom-out-98',
            'data-bottom:slide-in-from-top-1 data-closed:data-bottom:slide-out-to-top-10',
            'data-left:slide-in-from-right-2 data-closed:data-left:slide-out-to-right-4',
            'data-right:slide-in-from-left-2 data-closed:data-right:slide-out-to-left-3',
            'data-top:slide-in-from-bottom-1 data-closed:data-top:slide-out-to-bottom-4',
            'data-closed:duration-150 data-open:duration-25',
            className,
          )}
          {...props}
        >
          {children}
          <PopoverPrimitive.Arrow
            className="flex"
            render={<ArrowSvg />}
          />
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<'div'>) {
  return <div data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="38"
      height="12"
      viewBox="0 0 44 14"
      fill="none"
      className="dark:-m-px"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 0C42.0471 0.018002 39.7408 0.0554623 37.8403 0.657034C35.7874 1.30711 34.4283 2.44375 33.0609 3.78141C32.0764 4.74352 30.1426 6.79627 29.201 7.78738C28.4304 8.59998 26.9218 10.2062 26.0981 10.9833C25.0613 11.9609 23.7796 13 21.9994 13C20.2193 13 18.9382 11.9609 17.9019 10.9843C17.0783 10.2077 15.5697 8.60048 14.7984 7.78838C13.858 6.79726 11.9242 4.74452 10.9392 3.7824C9.56936 2.44474 8.21266 1.30811 6.16033 0.658031C4.25928 0.0579595 2.07295 0.0309561 0.121281 0.0129537C0.121281 0.0129537 2.04045 0.00295216 3.81467e-05 0.00295198"
        className="fill-popover"
      />
      <path
        d="M44 1C42.0172 1.01828 39.8751 1.06204 38.1426 1.61035C36.3135 2.18956 35.0891 3.19568 33.7598 4.49609C32.9364 5.30081 31.4259 6.89407 30.4072 7.96875L30.4062 7.96973C30.2295 8.15621 30.0677 8.32722 29.9268 8.47559L29.6328 8.78613C28.8218 9.64309 27.535 11.0026 26.7842 11.7109L26.3662 12.0947C25.3373 13.0079 23.9227 14 21.999 14C19.8005 13.9998 18.2681 12.7036 17.2158 11.7119L16.8682 11.375C16.1253 10.6429 15.103 9.56374 14.4072 8.8291C14.2846 8.69967 14.1723 8.58083 14.0732 8.47656L12.1631 6.46582C11.4447 5.71443 10.7239 4.97048 10.2402 4.49805C8.90754 3.19663 7.68665 2.19044 5.8584 1.61133L5.85938 1.61035C4.12565 1.06317 2.09308 1.03097 0.112305 1.0127H0V1H7.0752C8.63713 1.67081 9.78416 2.65405 10.9395 3.78223C11.8011 4.62382 13.3887 6.30008 14.4023 7.37012L14.7988 7.78809C14.9036 7.89838 15.022 8.02362 15.1504 8.15918C15.9673 9.0218 17.1906 10.3133 17.9023 10.9844C18.9385 11.9608 20.2193 12.9998 21.999 13C23.779 13 25.0608 11.9609 26.0977 10.9834C26.826 10.2962 28.0905 8.96047 28.9062 8.09863L29.2012 7.78711C29.3366 7.64456 29.4924 7.47987 29.6631 7.2998L29.6699 7.29297C30.686 6.221 32.2195 4.60316 33.0605 3.78125C34.2131 2.65379 35.3606 1.67082 36.9219 1H44Z"
        className="fill-[url(#myLinearGradient)]"
      />
      <defs>
        <linearGradient id="myLinearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="10%"
            stopColor="var(--popover-arrow-start,var(--popover-border))"
          />
          <stop
            offset="50%"
            stopColor="var(--popover-arrow-middle,var(--popover-border))"
          />
          <stop
            offset="100%"
            stopColor="var(--popover-arrow-end,var(--popover-border))"
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
