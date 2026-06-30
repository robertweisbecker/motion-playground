import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Button, buttonVariants } from '@/components/ui/button';

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2 [&>button[data-variant=outline]]:mask-[inset(1px_1px_0_1px)]",
  {
    variants: {
      orientation: {
        horizontal:
          'data-[variant=elevated]:gap-px [&>button:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>[data-variant=outline]]:not-first:-ms-px!  [&>[data-variant=outline]]:not-first:not-last:[clip-path:inset(0_0.5px)] [&>[data-variant=outline]]:first:[clip-path:inset(0_.5px_0_0)] [&>[data-variant=outline]]:last:[clip-path:inset(0_0_0_.5px)] [&_button]:first:origin-right [&_button]:last:origin-left',
        vertical:
          'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

const ButtonGroupContext = React.createContext<
  VariantProps<typeof buttonVariants>
>({
  size: 'md',
  variant: 'default',
  shape: 'default',
});

function ButtonGroup({
  className,
  variant,
  size,
  shape,
  orientation = 'horizontal',
  children,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof buttonGroupVariants> &
  VariantProps<typeof buttonVariants>) {
  const injectedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child) || child.type !== Button) return child;
    const prev = child.props as {
      variant?: unknown;
      size?: unknown;
      shape?: unknown;
    };
    return React.cloneElement(child, {
      variant: prev.variant ?? variant,
      size: prev.size ?? size,
      shape: prev.shape ?? shape,
    } as React.ComponentProps<typeof Button>);
  });

  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      data-size={size}
      data-variant={variant}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    >
      <ButtonGroupContext.Provider value={{ size, variant, shape }}>
        {injectedChildren}
      </ButtonGroupContext.Provider>
    </div>
  );
}

const buttonGroupTextVariants = cva(
  'flex items-center border bg-background text-muted-foreground ',
  {
    variants: {
      size: {
        xl: [
          'min-h-11 px-4 text-base gap-1.5 rounded-xl',
          '[&_svg:not([class*="size-"])]:size-6',
        ],
        lg: [
          'min-h-button-lg px-3 text-base gap-1 rounded-lg',
          '[&_svg:not([class*="size-"])]:size-5',
        ],
        md: [
          'min-h-button px-2.5 text-sm gap-1 rounded-lg',
          '[&_svg:not([class*="size-"])]:size-4',
        ],
        sm: [
          'min-h-button-sm px-2 text-sm gap-1 rounded-md',
          '[&_svg:not([class*="size-"])]:size-3.5',
        ],
        xs: [
          'min-h-6 px-2 text-xs gap-1.5 rounded-md',
          '[&_svg:not([class*="size-"])]:size-3.5',
        ],
        'icon-inline': 'size-6 rounded-sm',
        icon: 'w-button h-button rounded-lg aspect-square text-base',
        'icon-lg':
          'w-9 h-9 rounded-lg aspect-square text-lg [&_svg:not([class*="size-"])]:size-5',
        'icon-xs': 'size-6 rounded-sm',
        'icon-sm': 'size-8 rounded-md',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

function ButtonGroupText({
  className,
  asChild = false,
  size = 'md',
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean;
  size?: VariantProps<typeof buttonVariants>['size'];
}) {
  const context = React.useContext(ButtonGroupContext);
  const sizeFallback = context.size || size;
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        buttonGroupTextVariants({ size: sizeFallback ?? size }),
        className,
      )}
      {...props}
    />
  );
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
        className,
      )}
      {...props}
    />
  );
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  ButtonGroupContext,
  buttonGroupVariants,
};
