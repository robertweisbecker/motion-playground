'use client';
import { cn } from '@/lib/utils';
import { LinkIcon as PhLinkIcon } from '@phosphor-icons/react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Button } from './ui/button';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: boolean;
  lines?: number;
  inline?: boolean;
  copy?: boolean;
}

const headingVariants = cva(
  [
    'scroll-32 lg:scroll-18 [&+hr]:my-16 [&+[data-slot="separator"]]:my-16 first:mt-0 last:mb-0 [&+p]:mt-2 [&+*]:mt-6',
  ],
  {
    variants: {
      size: {
        h1: [
          'mb-2 text-2xl sm:text-3xl leading-normal font-semibold tracking-tight text-balance',

          // 'first-of-type:not-only:pb-8 first-of-type:not-only:border-b',
        ],
        h2: [' mt-20 text-xl sm:text-2xl font-semibold tracking-tight [&+h3]:mt-6 [&~hr]:mt-16'],
        h3: [
          'text-[1.25rem] font-medium leading-normal tracking-tight text-balance mt-16',
          // 'has-[+h4]:text-xs has-[+h4]:leading-loose has-[+h4]:font-medium has-[+h4]:font-mono has-[+h4]:tracking-widest has-[+h4]:uppercase has-[+h4]:text-muted-foreground',
        ],
        h4: ' text-base font-medium tracking-snug leading-tight mt-12 opacity-90',
        h5: ' text-sm font-[550] leading-normal tracking-normal mt-12 ',
        h6: 'text-xs leading-loose font-medium font-mono tracking-widest uppercase opacity-80',
      },
      weight: {
        400: 'font-normal',
        500: 'font-medium',
        600: 'font-semibold',
        700: 'font-bold',
        800: 'font-extrabold',
        900: 'font-black',
      },
      muted: {
        true: 'font-medium',
        false: '',
      },
      color: {
        default: 'text-foreground',
        muted: 'text-muted-foreground',
        info: 'text-info-600 dark:text-info-300',
        error: 'text-error-600 dark:text-error-300',
        warning: 'text-warning-600 dark:text-warning-300',
        success: 'text-success-600 dark:text-success-300',
      },
    },
    compoundVariants: [
      {
        color: 'default',
        muted: true,
        className: 'text-muted-foreground',
      },
      {
        color: 'info',
        muted: true,
        className: 'text-info-500',
      },
      {
        color: 'error',
        muted: true,
        className: 'text-error-500',
      },
      {
        color: 'warning',
        muted: true,
        className: 'text-warning-500',
      },
      {
        color: 'success',
        muted: true,
        className: 'text-success-500',
      },
    ],
    defaultVariants: {
      color: 'default',
    },
  },
);

// className="line-clamp-1 line-clamp-2 line-clamp-3 line-clamp-4 line-clamp-5 line-clamp-6"

export function Heading({
  children,
  className,
  as: Tag = 'h2',
  size,
  weight,
  muted,
  color,
  lines,
  inline,
  asChild = false,
  ref,
  copy,
  ...props
}: React.ComponentProps<'h2'> & VariantProps<typeof headingVariants> & HeadingProps) {
  const sizeFallback = size ? size : Tag;
  return (
    <Slot
      data-accent-color={color}
      {...props}
      className={cn(
        headingVariants({ size: sizeFallback, weight, color, muted }),
        'not-prose group/heading',
        copy && 'relative',
        lines && `line-clamp-${lines} max-w-full truncate`,
        inline ? 'my-0!' : '',
        className,
      )}
    >
      {asChild ? (
        children
      ) : (
        <Tag>
          {children}{' '}
          {copy && (
            <Button
              iconOnly
              variant="invisible"
              size="sm"
              className={cn(
                'animate-out group-hover/heading:repeat-0 group-hover/heading:animate-fadeIn',
                // 'ease ms-1 origin-left -translate-x-1 scale-80 align-middle opacity-0 transition-[opacity,scale,translate] duration-50',
                // 'group-hover/heading:translate-none group-hover/heading:scale-100 group-hover/heading:opacity-100',
              )}
            >
              <PhLinkIcon type="fill" size="1em" />
            </Button>
          )}
        </Tag>
      )}
    </Slot>
  );
}

export function Heading1() {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      Taxing Laughter: The Joke Tax Chronicles
    </h1>
  );
}
export function Heading2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      The People of the Kingdom
    </h2>
  );
}
export function Heading3() {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Joke Tax</h3>;
}
export function Heading4() {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      People stopped telling jokes
    </h4>
  );
}
export function TypographyP() {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of his ways and
      repealed the joke tax.
    </p>
  );
}
export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that
      they should pay for the privilege.&quot;
    </blockquote>
  );
}
export function TypographyLead() {
  return (
    <p className="text-muted-foreground text-xl">
      A modal dialog that interrupts the user with important content and expects a response.
    </p>
  );
}
export function TypographyLarge() {
  return <div className="text-lg font-medium">Are you absolutely sure?</div>;
}
