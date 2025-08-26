import { useRef, createRef } from 'react';
import { useHover } from 'usehooks-ts';
import { cn } from '@/lib/utils';

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';

interface InfoButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: React.ComponentProps<typeof Button>['size'];
  variant?: React.ComponentProps<typeof Button>['variant'];
}

export function InfoButton({
  children,
  variant = 'invisible',
  size = 'icon',
  className,
  ...props
}: InfoButtonProps) {
  // hoverRef = createRef<HTMLButtonElement>();
  // const hoverRef = useRef(null);
  // const isHover = useHover(hoverRef);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          // ref={hoverRef}
          iconOnly
          size={size}
          variant={variant}
          className={cn(
            'group rounded-full text-[1.5em] data-[state=open]:[&_svg]:fill-current/20',
            className,
          )}
        >
          <InformationCircleIcon className="peer text-info-400 dark:text-info-300" />
        </Button>
      </PopoverTrigger>
      <PopoverContent {...props}>{children}</PopoverContent>
    </Popover>
  );
}
