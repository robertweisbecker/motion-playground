import * as React from 'react';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps, cx } from 'class-variance-authority';
import { MarkdownIcon } from '@/app/icons/icons';
import { cn } from '@/lib/utils';
import { InfoButton } from './info-button';

const textVariants = cva([''], {
  variants: {
    variant: {
      lead: 'not-prose text-muted-foreground text-xl font-[425] leading-snug tracking-tight text-balance',
      body: 'text-sm text-muted-foreground leading-6 not-prose',
      prose: 'text-base text-foreground leading-8 mt-2 mb-4',
      item: 'text-sm/4 font-[450] text-foreground not-prose',
      label: 'text-sm/4 font-medium text-foreground not-prose line-clamp-1',
      small: 'text-muted-foreground text-xs leading-6 not-prose',
      caption: 'text-muted-foreground text-2xs not-prose',
      error:
        'text-error-500 dark:text-error-300 text-xs font-[350] leading-5 not-prose',
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
  render,
  ...props
}: VariantProps<typeof textVariants> & TextProps & useRender.ComponentProps<'p'>) {
  return useRender({
    defaultTagName: 'p',
    render,
    props: mergeProps<'p'>(
      {
        className: cx(
          textVariants({ variant }),
          [!mt && 'mt-0', !mb && 'mb-0'],
          className,
        ),
        children,
      } as React.ComponentProps<'p'>,
      props,
    ),
    state: { slot: 'paragraph', variant },
  });
}

export function KeyValue({
  children,
  label,
  icon = <MarkdownIcon />,
  mt,
  mb,
  className,
  render,
  ...props
}: KeyValueProps & useRender.ComponentProps<'p'>) {
  return useRender({
    defaultTagName: 'p',
    render,
    props: mergeProps<'p'>(
      {
        className: cn('flex gap-1', className),
        children: (
          <>
            <span>{icon}</span>
            <span className={cn(textVariants({ variant: 'label' }))}>
              {label} <InfoButton>Hello</InfoButton>
            </span>
            {children}
          </>
        ),
      } as React.ComponentProps<'p'>,
      props,
    ),
    state: { slot: 'key-value' },
  });
}
