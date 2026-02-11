'use client';

import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import AutoHeight from 'embla-carousel-auto-height';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { SlashIcon } from '@heroicons/react/20/solid';
import { DotIcon, CircleIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
// import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import React, {
  type ComponentProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Button } from '../ui/button';
// import { Separator } from '../ui/separator';
import { LinkOutIcon } from '@/app/icons/icons';

export type InlineCitationProps = ComponentProps<'span'>;

export const InlineCitation = ({
  className,
  ...props
}: InlineCitationProps) => (
  <span
    className={cn('group inline items-center gap-1', className)}
    {...props}
  />
);

export type InlineCitationTextProps = ComponentProps<'span'>;

export const InlineCitationText = ({
  className,
  ...props
}: InlineCitationTextProps) => (
  <span
    className={cn(
      'ease transition-colors duration-150 group-hover:bg-secondary group-hover:text-foreground',
      className,
    )}
    {...props}
  />
);

export type InlineCitationCardProps = ComponentProps<typeof HoverCard>;

export const InlineCitationCard = (props: InlineCitationCardProps) => (
  <HoverCard closeDelay={1000} openDelay={200} {...props} />
);

export type InlineCitationCardTriggerProps = ComponentProps<typeof Badge> & {
  sources: string[];
};

export const InlineCitationCardTrigger = ({
  sources,
  className,
  ...props
}: InlineCitationCardTriggerProps) => (
  <HoverCardTrigger asChild>
    <Badge
      className={cn('ml-1 rounded-full', className)}
      variant="outline"
      {...props}
      asChild
    >
      {sources.length ? (
        <a>
          {new URL(sources[0]).hostname}{' '}
          {sources.length > 1 && `+${sources.length - 1}`}
        </a>
      ) : (
        'unknown'
      )}
    </Badge>
  </HoverCardTrigger>
);

export type InlineCitationCardBodyProps = ComponentProps<'div'>;

export const InlineCitationCardBody = ({
  className,
  ...props
}: InlineCitationCardBodyProps) => (
  <HoverCardContent
    side="bottom"
    align="end"
    className={cn('relative w-80 p-1 md:w-105', className)}
    {...props}
  />
);

const CarouselApiContext = createContext<CarouselApi | undefined>(undefined);

const useCarouselApi = () => {
  const context = useContext(CarouselApiContext);
  return context;
};

export type InlineCitationCarouselProps = ComponentProps<typeof Carousel>;

export const InlineCitationCarousel = ({
  className,
  children,
  ...props
}: InlineCitationCarouselProps) => {
  const [api, setCarouselApi] = useState<CarouselApi>();
  // const plugin = React.useRef(AutoHeight());
  return (
    <CarouselApiContext.Provider value={api}>
      <Carousel
        className={cn('w-full', className)}
        setApi={setCarouselApi}
        {...props}
        // plugins={[plugin.current]}
        plugins={[AutoHeight({})]}
        opts={{
          duration: 20,
          loop: true,
        }}
      >
        {children}
      </Carousel>
    </CarouselApiContext.Provider>
  );
};

export type InlineCitationCarouselContentProps = ComponentProps<'div'>;

export const InlineCitationCarouselContent = (
  props: InlineCitationCarouselContentProps,
) => <CarouselContent {...props} className={cn('', props.className)} />;

export type InlineCitationCarouselItemProps = ComponentProps<'div'>;

export const InlineCitationCarouselItem = ({
  className,
  ...props
}: InlineCitationCarouselItemProps) => (
  <CarouselItem
    className={cn('w-full space-y-2 p-3 pl-6', className)}
    {...props}
  />
);

export type InlineCitationCarouselHeaderProps = ComponentProps<'div'>;

export const InlineCitationCarouselHeader = ({
  className,
  children,
  ...props
}: InlineCitationCarouselHeaderProps) => (
  <div
    className={cn(
      'flex items-center justify-between gap-0.5 rounded-lg bg-radial-[at_50%_-100%] from-accent/50 to-transparent p-0.5',
      className,
    )}
    {...props}
  >
    {/* {sources.length && (
        <>
        <InlineCitationCarouselPrev />
          <InlineCitationCarouselNext />
        </>
      )} */}
    {children}
  </div>
);

export type InlineCitationCarouselIndexProps = ComponentProps<
  'div' & typeof Badge
>;

export const InlineCitationCarouselIndex = ({
  children,
  className,
  ...props
}: InlineCitationCarouselIndexProps) => {
  const api = useCarouselApi();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="grid-stack">
      <Badge
        variant="outline"
        className={cn('mx-1 font-normal opacity-0', className)}
        {...props}
      >
        {current}
        <SlashIcon className="text-border" />
        {count}
      </Badge>
      <ol className="flex items-center gap-2">
        {new Array(count).fill(0).map((_, index) => (
          <li key={index + 1} className="leading-[0]">
            <Button
              data-currentslide={`${current}`}
              id={`carousel-control-${index + 1}`}
              variant="invisible"
              iconOnly
              onClick={() => api.scrollTo(index)}
              className={cn(
                current === index + 1
                  ? 'text-foreground'
                  : 'text-foreground/50',
              )}
            >
              <CircleIcon
                // weight={current === index + 1 ? 'fill' : 'regular'}
                weight="fill"
                style={
                  {
                    '--currentSlide': JSON.stringify(current),
                    '--slideNumber': `${index + 1}`,
                    '--slidesAway':
                      'abs(var(--currentSlide) - var(--slideNumber))',
                    '--slideOpacityIncrement': `calc(1 / ${count})`,
                    opacity:
                      'calc(1 - var(--slideOpacityIncrement) * var(--slidesAway))',
                    transitionDelay: 'calc(var(--slidesAway) * 50ms)',
                    transform:
                      'scale(calc(1 - var(--slidesAway) * var(--slideOpacityIncrement)))',
                    // translateY: 'calc(var(--slideOpacityIncrement) *var(--slidesAway))',
                    // opacity: `calc(100% - (abs(${index} - ${current}) / ${count} * 100%))`,
                    // opacity: `calc(100% - calc(100% / ${count}) * abs(${index} - ${current}))`,
                  } as React.CSSProperties
                }
                className={cn(
                  'icon size-2 transition-all ease-in',
                  // current === index + 1 ? 'scale-100 fill-current' : 'scale-75',
                )}
              />
              <p className="sr-only">`Go to slide ${index + 1}`</p>
            </Button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export type InlineCitationCarouselPrevProps = ComponentProps<'button'>;

export const InlineCitationCarouselPrev = ({
  className,
  ...props
}: InlineCitationCarouselPrevProps) => {
  const api = useCarouselApi();

  const handleClick = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  return (
    // <Button
    //   aria-label="Previous"
    //   className={cn('shrink-0', className)}
    //   onClick={handleClick}
    //   type="button"
    //   variant="invisible"
    //   iconOnly
    //   {...props}
    // >
    //   <ArrowLeftIcon
    //   // className="text-muted-foreground size-4"
    //   />
    // </Button>
    <CarouselPrevious
      inline={true}
      variant="elevated"
      size="xs"
      iconOnly
      className={cn('shrink-0', className)}
      {...props}
    />
  );
};

export type InlineCitationCarouselNextProps = ComponentProps<'button'>;

export const InlineCitationCarouselNext = ({
  className,
  ...props
}: InlineCitationCarouselNextProps) => {
  const api = useCarouselApi();

  const handleClick = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  return (
    // <Button
    //   aria-label="Next"
    //   className={cn('shrink-0', className)}
    //   onClick={handleClick}
    //   type="button"
    //   variant="invisible"
    //   iconOnly
    //   {...props}
    // >
    //   <ArrowRightIcon
    //   // className="text-muted-foreground size-4"
    //   />
    // </Button>
    <CarouselNext
      inline={true}
      size="icon-inline"
      variant="elevated"
      className={cn('shrink-0', className)}
      {...props}
    />
  );
};

export type InlineCitationSourceProps = ComponentProps<'div'> & {
  title?: string;
  url?: string;
  description?: string;
};

export const InlineCitationSource = ({
  title,
  url,
  description,
  className,
  children,
  ...props
}: InlineCitationSourceProps) => (
  <div className={cn('space-y-2 text-sm', className)} {...props}>
    <div>
      {title && (
        <p className="truncate text-sm font-medium text-popover-foreground">
          {title}
        </p>
      )}
      {url && (
        <Button
          asChild
          variant="link"
          size="xs"
          className="text-xs text-muted-foreground"
        >
          <a
            target="_blank"
            href={url}
            // className="text-muted-foreground hover:text-secondary-foreground truncate text-xs font-medium break-all hover:underline"
          >
            {url}
            <LinkOutIcon />
          </a>
        </Button>
      )}
    </div>
    {description && (
      <p className="line-clamp-3 text-xs text-muted-foreground">
        {description}
      </p>
    )}
    {/* <Separator className="" /> */}
    {children}
  </div>
);

export type InlineCitationQuoteProps = ComponentProps<'blockquote'>;

export const InlineCitationQuote = ({
  children,
  className,
  ...props
}: InlineCitationQuoteProps) => (
  <>
    <blockquote
      className={cn(
        // 'text-foreground bg-muted/50',
        'relative mt-3 rounded-e-lg py-0.5 ps-2.5 pe-1 font-serif text-xs font-light text-muted-foreground italic before:absolute before:inset-y-1 before:start-0 before:w-[.1875rem] before:rounded-full before:bg-secondary',
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
    {/* <div className="text-secondary-foreground border-wavy grid w-fit max-w-full grid-cols-1 grid-rows-1 place-content-center border-2 border-double border-current/50 font-light italic">
      <div className="bg-popover relative col-start-1 row-start-1 mx-2 -my-1" />
      <div className="z-1 col-start-1 row-start-1 grid px-3 py-1">{children}</div>
    </div> */}
  </>
);
