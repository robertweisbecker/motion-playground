import { Button, buttonVariants } from '@/components/ui/button';
import { LucideChevronDown, LucideSettings } from 'lucide-react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Code } from '@/components/code';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export function ButtonExample() {
  const variants = [
    'default',
    'elevated',
    'primary',
    'secondary',
    'outline',
    'ghost',
    'link',
    'glass',
    'destructive',
  ];
  const sizes = ['sm', 'md', 'lg'];
  return (
    <div className="not-prose my-4 flex w-full flex-col gap-8">
      <Button shape="pill">Hello</Button>

      {variants.map((variant) => (
        <div key={variant} className="flex items-start justify-around gap-4">
          {sizes.map((size) => (
            <Button
              key={`${variant}-${size}`}
              variant={variant as keyof typeof buttonVariants}
              size={size as keyof typeof buttonVariants}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
              <ChevronDownIcon className="" />
            </Button>
          ))}
        </div>
      ))}
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
