import * as React from 'react';
import { cva, type VariantProps, cx } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

const textVariants = cva([''], {
  variants: {
    variant: {
      body: 'text-base leading-6 text-secondary-foreground',
      prose: 'text-base text-foreground leading-8 mt-2 mb-4',
      label: 'text-sm leading-none font-medium',
      small: 'text-muted-foreground text-sm leading-8',
      caption: 'text-muted-foreground text-xs leading-5',
      error: 'text-destructive text-xs leading-5',
    },
  },
  defaultVariants: {
    variant: 'prose',
  },
});

interface TextProps extends React.ComponentProps<'p'> {
  mt?: boolean;
  mb?: boolean;
  asChild?: boolean;
}

export function Paragraph({
  children,
  variant,
  mt,
  mb,
  className,
  asChild = false,
  ...props
}: VariantProps<typeof textVariants> & TextProps) {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp
      className={cx(textVariants({ variant }), [!mt && 'mt-0', !mb && 'mb-0'], className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
