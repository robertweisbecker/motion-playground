import { Button, buttonVariants } from '@/components/ui/button';
import { LucideChevronDown, LucideSettings } from 'lucide-react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Code } from '@/components/code';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export function CustomButtonExample() {
  return (
    <div className="flex gap-2 font-medium">
      <button className="bg-warning text-warning-foreground h-9 rounded-lg px-3">
        Warning
      </button>
      <button className="bg-info text-info-foreground h-9 rounded-lg px-3">
        Info
      </button>
      <button className="bg-success text-success-foreground h-9 rounded-lg px-3">
        Success
      </button>
      <button className="bg-highlight text-highlight-foreground h-9 rounded-lg px-3">
        Highlight
      </button>
      <button className="bg-caution text-caution-foreground h-9 rounded-lg px-3">
        Caution
      </button>
      <button className="h-9 rounded-lg bg-destructive px-3 text-destructive-foreground">
        Destructive
      </button>
    </div>
  );
}

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
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
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
              <ChevronDownIcon className="" />
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
    'glass',
    'destructive',
    'invisible',
  ];
  const sizes = ['icon-xs', 'icon-sm', 'icon', 'icon-lg'];
  return (
    <div className="not-prose my-4 flex w-full flex-col gap-8">
      {variants.map((variant) => (
        <div key={variant} className="flex items-start justify-evenly gap-4">
          {sizes.map((size) => (
            <Button
              key={`${variant}-${size}`}
              variant={variant as keyof typeof buttonVariants}
              size={size as keyof typeof buttonVariants}
              iconOnly
            >
              <ChevronDownIcon className="" />
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
