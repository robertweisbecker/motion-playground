import * as React from 'react';
import { cva, type VariantProps, cx } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { MarkdownIcon } from '@/app/icons/icons';
import { cn } from '@/lib/utils';
import { InfoButton } from './info-button';

const textVariants = cva([''], {
  variants: {
    variant: {
      lead: 'text-muted-foreground text-xl font-[425] leading-snug tracking-tight text-balance',
      body: 'text-md text-secondary-foreground not-prose',
      prose: 'text-base text-foreground leading-8 mt-2 mb-4',
      item: 'text-md font-[450] text-foreground not-prose',
      label: 'text-sm leading-none font-medium text-foreground not-prose line-clamp-1',
      small: 'text-secondary-foreground text-sm leading-6 not-prose',
      caption: 'text-muted-foreground text-xs leading-5 not-prose',
      error: 'text-error-500 dark:text-error-300 text-xs leading-5 not-prose',
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

interface KeyValueProps extends TextProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
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

export function KeyValue({
  children,
  label,
  icon = <MarkdownIcon />,
  mt,
  mb,
  className,
  asChild = false,
  ...props
}: KeyValueProps) {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp {...props} className={cn('flex gap-1', className)}>
      <Slot>{icon}</Slot>
      <span className={cn(textVariants({ variant: 'label' }))}>
        {label} <InfoButton>Hello</InfoButton>
      </span>
      {children}
    </Comp>
  );
}
