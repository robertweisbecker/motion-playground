import { Button, buttonVariants } from '@/components/ui/button';
import { LucideChevronDown, LucideSettings } from 'lucide-react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Code } from '@/components/code';

export function ButtonExample() {
  const variants = [
    'default',
    'elevated',
    'primary',
    'secondary',
    'outline',
    'ghost',
    'link',
    'destructive',
  ];
  return (
    <div className="not-prose my-4 flex w-full flex-col gap-2">
      <div className="align-start grid grid-cols-3 justify-items-start gap-4 rounded-md">
        {variants.map((variant) => (
          <Fragment key={variant}>
            <Button variant={variant as keyof typeof buttonVariants}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
            <Button variant={variant as keyof typeof buttonVariants}>
              <LucideSettings className="" />
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
            <Button variant={variant as keyof typeof buttonVariants}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
              <LucideChevronDown className="" />
            </Button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function IconButtonExample() {
  const variants = [
    'default',
    'elevated',
    'primary',
    'secondary',
    'outline',
    'ghost',
    'link',
    'destructive',
  ];
  return (
    <div className="not-prose my-4 flex w-full flex-col gap-2">
      <div className="grid grid-cols-3 place-items-center justify-items-center gap-4 rounded-md">
        {variants.map((variant) => (
          <Fragment key={variant}>
            <Button iconOnly size={'xs'} variant={variant as keyof typeof buttonVariants}>
              <LucideChevronDown className="" />
            </Button>
            <Button iconOnly size={'icon'} variant={variant as keyof typeof buttonVariants}>
              <LucideChevronDown className="" />
            </Button>
            <Button iconOnly size={'icon-lg'} variant={variant as keyof typeof buttonVariants}>
              <LucideChevronDown className="" />
            </Button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
