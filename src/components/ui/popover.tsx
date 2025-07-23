'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/lib/utils';

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = -2,
  children,
  // arrowPadding = 12,
  arrowPadding,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        arrowPadding={10}
        className={cn(
          'ring-border-soft text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-80 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover z-50 flex max-w-64 min-w-14 origin-(--radix-popover-content-transform-origin) items-center rounded-xl px-3 py-2 text-sm leading-tight ring outline-hidden',
          'data-[side=left]:min-h-14 data-[side=right]:min-h-14',
          // 'shadow-[0_4px_64px_14px_rgb(0_0_0_/_8%),_var(--shadow-lg)]',
          'drop-shadow-popover/50 shadow-lg drop-shadow-sm',
          'data-[side=left]:rounded-r-[0.8125rem] data-[side=right]:rounded-l-[0.8125rem]',
          className,
        )}
        {...props}
      >
        {children}
        <PopoverPrimitive.PopoverArrow asChild width="38" height="12">
          <ArrowSvg />
        </PopoverPrimitive.PopoverArrow>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

// function ArrowSvg(props: React.ComponentProps<'svg'>) {
//   return (
//     <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
//       <path
//         d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
//         className="fill-[canvas]"
//       />
//       <path
//         d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
//         className="fill-gray-200 dark:fill-none"
//       />
//       <path
//         d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
//         className="dark:fill-gray-300"
//       />
//     </svg>
//   );
// }

// function ArrowSvg(props: React.ComponentProps<'svg'>) {
//   return (
//     <svg
//       width="56"
//       height="13"
//       viewBox="0 0 56 13"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       // {...props}
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M56 0.00194945C53.9596 0.00194927 51.9198 -0.00655192 49.8794 0.0119501C47.9265 0.0299521 45.7408 0.0554549 43.8403 0.657026C41.7874 1.3071 40.4283 2.44374 39.0609 3.7814C38.0764 4.74351 36.1426 6.79626 35.201 7.78738C34.4303 8.59997 32.9218 10.2062 32.0981 10.9833C31.0612 11.9609 29.7796 13 27.9994 13C26.2193 13 24.9382 11.9609 23.9019 10.9843C23.0782 10.2077 21.5697 8.60047 20.7984 7.78837C19.858 6.79726 17.9242 4.74451 16.9391 3.7824C15.5693 2.44474 14.2126 1.3081 12.1603 0.658024C10.2592 0.0579521 8.07292 0.0309487 6.12124 0.0129464C4.08023 -0.00555598 2.04041 0.00294485 1.07263e-06 0.00294467"
//         className="fill-popover"
//       />
//     </svg>
//   );
// }

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="38"
      height="12"
      viewBox="0 0 44 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 0C42.0471 0.018002 39.7408 0.0554623 37.8403 0.657034C35.7874 1.30711 34.4283 2.44375 33.0609 3.78141C32.0764 4.74352 30.1426 6.79627 29.201 7.78738C28.4304 8.59998 26.9218 10.2062 26.0981 10.9833C25.0613 11.9609 23.7796 13 21.9994 13C20.2193 13 18.9382 11.9609 17.9019 10.9843C17.0783 10.2077 15.5697 8.60048 14.7984 7.78838C13.858 6.79726 11.9242 4.74452 10.9392 3.7824C9.56936 2.44474 8.21266 1.30811 6.16033 0.658031C4.25928 0.0579595 2.07295 0.0309561 0.121281 0.0129537C0.121281 0.0129537 2.04045 0.00295216 3.81467e-05 0.00295198"
        // fill="var(--color-popover)"
        className="fill-popover"
      />
      <path
        d="M44 1C42.0172 1.01828 39.8751 1.06204 38.1426 1.61035C36.3135 2.18956 35.0891 3.19568 33.7598 4.49609C32.9364 5.30081 31.4259 6.89407 30.4072 7.96875L30.4062 7.96973C30.2295 8.15621 30.0677 8.32722 29.9268 8.47559L29.6328 8.78613C28.8218 9.64309 27.535 11.0026 26.7842 11.7109L26.3662 12.0947C25.3373 13.0079 23.9227 14 21.999 14C19.8005 13.9998 18.2681 12.7036 17.2158 11.7119L16.8682 11.375C16.1253 10.6429 15.103 9.56374 14.4072 8.8291C14.2846 8.69967 14.1723 8.58083 14.0732 8.47656L12.1631 6.46582C11.4447 5.71443 10.7239 4.97048 10.2402 4.49805C8.90754 3.19663 7.68665 2.19044 5.8584 1.61133L5.85938 1.61035C4.12565 1.06317 2.09308 1.03097 0.112305 1.0127H0V1H7.0752C8.63713 1.67081 9.78416 2.65405 10.9395 3.78223C11.8011 4.62382 13.3887 6.30008 14.4023 7.37012L14.7988 7.78809C14.9036 7.89838 15.022 8.02362 15.1504 8.15918C15.9673 9.0218 17.1906 10.3133 17.9023 10.9844C18.9385 11.9608 20.2193 12.9998 21.999 13C23.779 13 25.0608 11.9609 26.0977 10.9834C26.826 10.2962 28.0905 8.96047 28.9062 8.09863L29.2012 7.78711C29.3366 7.64456 29.4924 7.47987 29.6631 7.2998L29.6699 7.29297C30.686 6.221 32.2195 4.60316 33.0605 3.78125C34.2131 2.65379 35.3606 1.67082 36.9219 1H44Z"
        className="fill-border-soft"
      />
    </svg>
  );
}
