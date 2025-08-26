import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(['group/card flex w-full flex-col '], {
  variants: {
    variant: {
      default: 'bg-card text-card-foreground',
      inset: 'bg-muted text-foreground inset-ring-[0.5px] inset-ring-border shadow-none!',
    },
    size: {
      lg: 'py-6 gap-5 rounded-2xl shadow-lg',
      md: 'py-4 gap-3 rounded-xl shadow-md',
      sm: 'py-3 gap-3 rounded-lg shadow-md',
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
});

// function Card({
//   variant = 'default',
//   size = 'md',
//   className,
//   ref,
//   ...props
// }: React.ComponentProps<'div'> & React.Ref<'div'> & VariantProps<typeof cardVariants>) {
//   return (
//     <div
//       ref={ref}
//       data-slot="card"
//       data-size={size}
//       className={cn(cardVariants({ variant, size }), className)}
//       {...props}
//     />
//   );
// }
const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'> & VariantProps<typeof cardVariants>
>(function Card({ variant = 'default', size = 'md', className, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-slot="card"
      data-size={size}
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  );
});

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header relative grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 gap-y-0 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-3',
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'leading-tight font-medium',
        'group-data-[size=lg]/card:text-xl group-data-[size=md]/card:text-base group-data-[size=sm]/card:text-sm',
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        'text-muted-foreground my-1 text-sm font-normal group-data-[size=sm]/card:text-xs',
        className,
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 -me-1 -mt-1 inline-flex items-center justify-center self-start justify-self-end',
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ref, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn(
        'text-muted-foreground relative gap-2',
        'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-3',
        className,
      )}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'text-muted-foreground flex items-center gap-2 text-sm [.border-t]:pt-2',
        'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-3',
        className,
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
