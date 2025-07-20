import { Button, buttonVariants } from '@/components/ui/button';
import { LucideChevronDown, LucideSettings } from 'lucide-react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Code } from '@/components/ui/code';

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
    <div className="w-full">
      <h2 className="mb-4">Button</h2>
      <div className="align-start grid grid-cols-2 justify-items-start gap-4 rounded-md md:grid-cols-4">
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant={variant as keyof typeof buttonVariants}>
                  <StarIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Code size="inherit">iconOnly</Code>, {variant}
              </TooltipContent>
            </Tooltip>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
