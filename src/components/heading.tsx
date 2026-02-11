'use client';
import { cn } from '@/lib/utils';
import { LinkIcon as PhLinkIcon } from '@phosphor-icons/react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Button } from './ui/button';
import { CopyButton } from './copy-button';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: boolean;
  lines?: number;
  inline?: boolean;
  copy?: boolean;
  url?: string;
  id?: string;
  hue?: string;
}

const headingVariants = cva(
  [
    'scroll-32 lg:scroll-18 [&+hr]:my-16 [&+[data-slot="separator"]]:my-16 first:mt-0 last:mb-0 [&+p]:mt-2 [&+*]:mt-6',
  ],
  {
    variants: {
      size: {
        h1: [
          'mb-2 text-3xl leading-none font-semibold tracking-tight text-balance',

          // 'first-of-type:not-only:pb-8 first-of-type:not-only:border-b',
        ],
        h2: [
          ' mt-20 text-2xl font-medium tracking-tight [&+h3]:mt-6 [&~hr]:mt-16',
        ],
        h3: [
          'text-lg font-medium leading-normal tracking-tight text-balance mt-16',
          // 'has-[+h4]:text-xs has-[+h4]:leading-loose has-[+h4]:font-medium has-[+h4]:font-mono has-[+h4]:tracking-widest has-[+h4]:uppercase has-[+h4]:text-muted-foreground',
        ],
        h4: ' text-base font-medium tracking-snug leading-tight mt-12 opacity-90',
        h5: ' text-sm font-[450] leading-normal tracking-normal mt-12 ',
        h6: 'text-xs leading-loose font-medium font-mono tracking-widest uppercase opacity-80',
      },
      sub: {
        true: 'font-normal text-muted-foreground',
        false: 'text-foreground',
      },
    },
    defaultVariants: {
      sub: false,
    },
  },
);

type HeadingSize = VariantProps<typeof headingVariants>['size'];

type HeadingContextValue = {
  isNested: boolean;
  parentSize?: HeadingSize;
};

const HeadingContext = React.createContext<HeadingContextValue>({
  isNested: false,
});

// className="line-clamp-1 line-clamp-2 line-clamp-3 line-clamp-4 line-clamp-5 line-clamp-6"

export function Heading({
  children,
  className,
  as: headingTag = 'h2',
  size,
  sub,
  hue,
  lines,
  inline,
  asChild = false,
  url,
  ref,
  copy,
  id,
  ...props
}: React.ComponentProps<'h2'> &
  VariantProps<typeof headingVariants> &
  HeadingProps) {
  const { isNested, parentSize } = React.useContext(HeadingContext);
  const tag = isNested ? 'span' : headingTag;
  const sizeFallback = size
    ? size
    : isNested && parentSize
      ? parentSize
      : headingTag;

  const elementChildren = (
    <>
      {children}{' '}
      {copy && (
        <CopyButton
          content={id ? `#${id}` : (children as string)}
          copyUrl={!!id}
          variant="ghost"
          size={'icon-xs'}
          iconOnly
          icon={<PhLinkIcon type="fill" />}
          className={cn(
            'pointer-events-none inline translate-y-2 scale-75 align-baseline opacity-0 transition-all duration-200 group-hover/heading:pointer-events-auto group-hover/heading:translate-y-0 group-hover/heading:scale-100 group-hover/heading:opacity-100',
          )}
        />
      )}
    </>
  );

  const content = (
    <Slot
      data-hue={hue}
      id={id}
      {...props}
      className={cn(
        headingVariants({ size: sizeFallback, sub }),
        'group/heading not-prose',
        copy && 'relative',
        lines && `line-clamp-${lines} max-w-full truncate`,
        inline ? 'my-0!' : '',
        className,
      )}
    >
      {asChild ? children : React.createElement(tag, {}, elementChildren)}
    </Slot>
  );

  return (
    <HeadingContext.Provider
      value={{ isNested: true, parentSize: sizeFallback }}
    >
      {content}
    </HeadingContext.Provider>
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
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      The Joke Tax
    </h3>
  );
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
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
  );
}
export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
      it&apos;s only fair that they should pay for the privilege.&quot;
    </blockquote>
  );
}
export function TypographyLead() {
  return (
    <p className="text-xl text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  );
}
export function TypographyLarge({ children }: { children: React.ReactNode }) {
  return <p className="text-lg font-medium">{children}</p>;
}
