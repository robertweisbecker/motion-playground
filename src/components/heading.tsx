import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: boolean;
  lines?: number;
  inline?: boolean;
}

const headingVariants = cva(
  [
    ' scroll-32 lg:scroll-18 [&+hr]:my-16 [&+[data-slot="separator"]]:my-16 first:mt-0 last:mb-0 [&+p]:mt-2 [&+*]:mt-6',
  ],
  {
    variants: {
      size: {
        h1: [
          'mb-2 text-2xl sm:text-3xl leading-normal font-semibold tracking-tight text-balance',

          // 'first-of-type:not-only:pb-8 first-of-type:not-only:border-b',
        ],
        h2: [' mt-20 text-2xl font-semibold tracking-tight [&+h3]:mt-6 [&~hr]:mt-16'],
        h3: [
          'text-lg font-medium leading-loose tracking-tight text-balance mt-16',
          // 'has-[+h4]:text-xs has-[+h4]:leading-loose has-[+h4]:font-medium has-[+h4]:font-mono has-[+h4]:tracking-widest has-[+h4]:uppercase has-[+h4]:text-muted-foreground',
        ],
        h4: ' text-base font-[550] tracking-snug leading-tight mt-12 opacity-90',
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
        true: 'text-muted-foreground font-medium',
      },
      color: {
        default: 'text-foreground',
        info: 'text-blue-800',
        error: 'text-red-800',
        warning: 'text-yellow-700 dark:text-yellow-400',
        success: 'text-green-800 dark:text-green-500',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);

// type HeadingElement = React.ComponentRef<'h1'>;

export function Heading({
  children,
  className,
  as: Tag = 'h2',
  size,
  weight,
  color,
  lines,
  inline,
  asChild = false,
  ref,
  ...props
}: React.ComponentProps<'h2'> & VariantProps<typeof headingVariants> & HeadingProps) {
  const sizeFallback = size ? size : Tag;
  return (
    <Slot
      data-accent-color={color}
      {...props}
      className={cn(
        headingVariants({ size: sizeFallback, weight, color }),
        'not-prose',
        lines && `line-clamp-${lines}`,
        inline ? 'my-0!' : '',
        className,
      )}
    >
      {asChild ? children : <Tag>{children}</Tag>}
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
