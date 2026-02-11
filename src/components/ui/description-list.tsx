import * as React from 'react';

import { cn } from '@/lib/utils';

const DescriptionList = React.forwardRef<
  HTMLDListElement,
  React.ComponentPropsWithRef<'dl'>
>(function DescriptionList({ className, ...props }, ref) {
  return (
    <dl
      ref={ref}
      className={cn(
        '@container/description-list',
        'grid grid-cols-[min(50%,--spacing(80))_auto] @2xs/description-list:grid-cols-1',
        className,
      )}
      {...props}
    />
  );
});

const DescriptionTerm = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<'dt'>
>(function DescriptionTerm({ className, ...props }, ref) {
  return (
    <dt
      ref={ref}
      className={cn(
        'col-start-1 border-border-alpha pt-3 text-muted-foreground first:border-none sm:border-t sm:border-border-alpha @max-sm/description-list:border-t @xs/description-list:py-3 @xs/description-list:pe-3',
        '@max-xs/description-list:col-span-2',
        className,
      )}
      {...props}
    />
  );
});

const DescriptionDetails = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<'dd'>
>(function DescriptionDetails({ className, ...props }, ref) {
  return (
    <dd
      ref={ref}
      className={cn(
        'pb-3 text-foreground nth-2:border-none',
        '@max-xs/description-list:border-border-alpha @max-xs/description-list:pt-1',
        '@xs/description-list:border-t @xs/description-list:pt-3',
        '@max-xs/description-list:col-span-2',
        className,
      )}
      {...props}
    />
  );
});

export { DescriptionList, DescriptionTerm, DescriptionDetails };

// export const CatalystDescriptionListExample = () => {
//   return (
//     <dl className="grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,--spacing(80))_auto] sm:text-sm/6">
//       <dt className="col-start-1 border-t border-border-alpha pt-3 text-zinc-500 first:border-none sm:border-t sm:border-border-alpha sm:py-3 dark:text-muted-foreground sm:dark:border-border-alpha">
//         Customer
//       </dt>
//       <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-border-alpha sm:py-3 sm:nth-2:border-none dark:text-foreground dark:sm:border-border-alpha">
//         Michael Foster
//       </dd>
//     </dl>
//   );
// };
