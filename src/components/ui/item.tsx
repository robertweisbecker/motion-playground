import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { resolveRenderProp } from '@/lib/resolve-render';
import { Separator } from '@/components/ui/separator';

function ItemGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn('group/item-group flex flex-col', className)}
      {...props}
    />
  );
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn(className)}
      {...props}
    />
  );
}

const itemVariants = cva(
  'group/item flex items-start border border-transparent transition-colors [a]:hover:bg-secondary/50 [a]:hover:text-secondary-foreground [a]:hover:border-secondary [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'bg-transparent border-border-alpha',
        muted: 'bg-muted',
      },
      size: {
        default: 'p-4 gap-4 rounded-2xl',
        sm: 'p-2.5 gap-2 text-sm rounded-xl text-sm',
      },
      inline: {
        true: 'flex-row w-fit gap-2 items-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Item({
  className,
  variant = 'default',
  size = 'default',
  render,
  asChild = false,
  inline = false,
  children,
  ...props
}: useRender.ComponentProps<'div'> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const resolvedRender = resolveRenderProp(render, asChild, children);
  return useRender({
    defaultTagName: 'div',
    render: resolvedRender,
    props: mergeProps<'div'>(
      {
        'data-slot': 'item',
        'data-variant': variant,
        'data-size': size,
        className: cn(itemVariants({ variant, size, inline, className })),
        children: resolvedRender ? undefined : children,
      } as React.ComponentProps<'div'>,
      props,
    ),
    state: {
      slot: 'item',
      variant,
      size,
      inline,
    },
  });
}

const itemMediaVariants = cva(
  'relative flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:[data-variant=icon]:top-0.5',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-8 ring-1 ring-border-alpha rounded-md shadow-xs bg-card text-card-foreground [&_svg:not([class*='size-'])]:size-3.5",
        'icon-frame': [
          "size-10 bg-card overflow-hidden shadow-2xs  rounded-lg bg-clip-padding border-border-alpha-soft border-4  bg-card text-card-foreground [&_svg:not([class*='size-'])]:size-3.5",
        ],
        image:
          'size-12 rounded-md overflow-hidden [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function ItemMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none',
        className,
      )}
      {...props}
    />
  );
}

function ItemTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'flex w-fit items-center gap-2 leading-tight font-medium text-foreground',
        className,
      )}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'line-clamp-2 text-sm font-normal text-balance text-muted-foreground',
        '[&>a]:underline [&>a]:decoration-current/30 [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className,
      )}
      {...props}
    />
  );
}

function ItemActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-actions"
      className={cn('flex items-center gap-2 rounded-[inherit]', className)}
      {...props}
    />
  );
}

function ItemHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'flex basis-full items-center justify-between gap-2 leading-none text-foreground',
        className,
      )}
      {...props}
    />
  );
}

function ItemFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'flex basis-full items-end justify-between gap-2 text-xs leading-tight',
        className,
      )}
      {...props}
    />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
};
