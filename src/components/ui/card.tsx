import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';

const cardVariants = cva(
  [
    'group/card flex w-full flex-col py-(--card-padding) rounded-(--card-radius) gap-[calc(var(--card-padding)/1.2)] ',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-card text-card-foreground dark:inset-ring dark:inset-ring-outline',
        inset: 'bg-accent text-foreground inset-ring-[0.5px] inset-ring-border',
      },
      size: {
        lg: '[--card-radius:var(--radius-3xl)] [--card-padding:--spacing(6)] sm:[--card-radius:var(--radius-2xl)]',
        md: '[--card-radius:var(--radius-2xl)]  [--card-padding:--spacing(4)] sm:[--card-radius:var(--radius-xl)]',
        sm: '[--card-radius:var(--radius-xl)]  [--card-padding:--spacing(3)]',
      },
      defaultVariants: {
        variant: 'default',
        size: 'md',
      },
    },
    compoundVariants: [
      {
        size: 'lg',
        variant: 'default',
        className: 'shadow-md dark:shadow-black/32',
      },
      {
        size: 'md',
        variant: 'default',
        className: 'shadow-sm dark:shadow-black/32',
      },
      {
        size: 'sm',
        variant: 'default',
        className: 'shadow-xs dark:shadow-black/32',
      },
    ],
  },
);

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
>(function Card(
  { variant = 'default', size = 'md', className, ...props },
  ref,
) {
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

function CardMedia({
  src,
  alt,
  className,
  children,
  aspectRatio,
  ...props
}: React.ComponentProps<'div'> & {
  src: string;
  alt: string;
  aspectRatio?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      data-slot="card-media"
      className={cn(
        '@container/card-media relative w-full basis-full',
        '-mt-(--card-padding) flex-none',
        '**:data-[slot="card-action"]:absolute **:data-[slot="card-action"]:top-[calc(var(--card-padding)/1.5)] **:data-[slot="card-action"]:right-[calc(var(--card-padding)/1.5)]',
        '[&_[data-slot="card-action"]>button]:rounded-tr-[calc(var(--card-radius)-calc(var(--card-padding)/1.5)+--spacing(1))]',
        'overflow-hidden rounded-t-[inherit]',
        !src && 'grid place-items-center p-6',
        className,
      )}
      style={{ aspectRatio: !aspectRatio && src ? '2/1' : aspectRatio }}
      {...props}
    >
      {src && (
        <Image
          className="size-full object-cover"
          src={src}
          alt={alt}
          {...(!aspectRatio
            ? { width: 400, height: 200, sizes: '(max-width: 768px) 100vw, 400px' }
            : { fill: true, sizes: '(max-width: 768px) 100vw, 400px' })}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        />
      )}
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header relative grid auto-rows-min items-start gap-1.5 gap-y-1 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6',
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
        '-mt-0.5 leading-tight font-medium text-foreground',
        'group-data-[size=lg]/card:text-xl group-data-[size=md]/card:text-lg group-data-[size=sm]/card:text-base',
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
        'text-sm font-normal text-muted-foreground group-data-[size=sm]/card:text-xs',
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

function CardContent({
  className,
  ref,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn(
        'relative my-1 flex flex-1 flex-col gap-3 group-data-[size=sm]/card:text-sm',
        // 'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-3',
        'gap-[calc(var(--card-padding)/2)] px-(--card-padding)',
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
        'grid items-center text-sm sm:flex sm:flex-wrap [&_p]:text-muted-foreground',
        'sm:justify-end',
        // 'gap-2 [.border-t]:pt-[2',
        // 'group-data-[size=lg]/card:px-6 group-data-[size=md]/card:px-4 group-data-[size=sm]/card:px-3',
        'gap-[calc(var(--card-padding)/3)] px-(--card-padding) [.border-t]:pt-[calc(var(--card-padding)/2)]',
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardMedia,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
