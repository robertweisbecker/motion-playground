import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(['group/card flex w-full flex-col '], {
  variants: {
    variant: {
      default: 'bg-card text-card-foreground',
      inset: 'bg-muted text-foreground inset-ring inset-ring-border',
    },
    size: {
      lg: 'py-6 gap-4 rounded-2xl shadow-lg',
      md: 'py-4 gap-2 rounded-xl shadow-md',
      sm: 'py-2 gap-1 rounded-xl shadow-sm',
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
});

function Card({
  variant = 'default',
  size = 'md',
  className,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header relative grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 gap-y-0 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-2',
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
      className={cn('text-base leading-tight font-medium', className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-description" className={cn('text-sm font-normal', className)} {...props} />
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

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        'text-muted-foreground relative gap-2',
        'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-2',
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
        'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-2',
        className,
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
