import { ArrowDownToLineIcon } from 'lucide-react';
import * as Tooltip from '../ui/tooltip';
import { Button, buttonVariants } from '../ui/button';
import styles from './download-button.module.css';
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import { Toggle } from '../ui/toggle';
import { CSSProperties } from 'react';

interface DownloadButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconSide?: 'start' | 'end' | undefined;
  hoverIcon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  iconOnly?: boolean;
  label: string;
  activeLabel?: string;
  direction?: 'down' | 'up' | 'left' | 'right';
}

export function DownloadButton({
  icon = <ArrowDownToLineIcon />,
  hoverIcon,
  direction = 'down',
  iconOnly,
  label,
  size,
  ...props
}: DownloadButtonProps) {
  function IconContainer() {
    return (
      <span className={styles.IconWrapper}>
        <span className={cn(`${styles.Icon}`)}>{hoverIcon ? hoverIcon : icon}</span>
        <span className={cn(`${styles.Icon}`)}>{icon}</span>
      </span>
    );
  }
  if (iconOnly) {
    return (
      <Tooltip.Tooltip>
        <Tooltip.TooltipTrigger asChild>
          <Button
            className={styles.DownloadButton}
            data-direction={direction}
            aria-label={label}
            {...props}
          >
            <IconContainer />
          </Button>
        </Tooltip.TooltipTrigger>
        <Tooltip.TooltipContent>{label}</Tooltip.TooltipContent>
      </Tooltip.Tooltip>
    );
  } else
    return (
      <Button className={styles.DownloadButton} data-direction={direction}>
        {(direction === 'left' || direction === 'down') && <IconContainer />}
        {label}
        {(direction === 'right' || direction === 'up') && <IconContainer />}
      </Button>
    );
}

export function AnimatedButton({
  icon = <ArrowDownToLineIcon />,
  hoverIcon,
  activeIcon,
  direction = 'down',
  iconOnly,
  iconSide = 'end',
  label,
  activeLabel,
  size,
  ...props
}: DownloadButtonProps) {
  const iconClasses =
    'col-start-1 row-start-1 duration-200 ease-out transition-[transform,scale,opacity,filter] origin-center';
  function IconContainer() {
    return (
      <span className={cn('group/icon grid')}>
        <span
          className={cn(
            iconClasses,
            'opacity-0',
            'scale-50',
            'blur-xs',
            'group-data-[state=on]/button:scale-100 group-data-[state=on]/button:opacity-100 group-data-[state=on]/button:blur-none',
          )}
        >
          {activeIcon ? activeIcon : icon}
        </span>
        <span
          className={cn(
            iconClasses,
            'opacity-100',
            'scale-100',
            'blur-none',
            'duration-150',
            'group-data-[state=on]/button:scale-50 group-data-[state=on]/button:opacity-0 group-data-[state=on]/button:blur-xs',
            'group-active/button:scale-95',
          )}
        >
          {icon}
        </span>
      </span>
    );
  }
  if (iconOnly) {
    return (
      <Tooltip.Tooltip>
        <Tooltip.TooltipTrigger asChild>
          <Button
            className={cn('group/button')}
            data-direction={direction}
            aria-label={label}
            {...props}
          >
            <IconContainer />
          </Button>
        </Tooltip.TooltipTrigger>
        <Tooltip.TooltipContent>{label}</Tooltip.TooltipContent>
      </Tooltip.Tooltip>
    );
  } else
    return (
      <Toggle className={cn('group/button')} size="lg" data-direction={direction}>
        {iconSide === 'start' && <IconContainer />}

        {activeLabel && (
          <span
            className={cn(
              'ease transform-all duration-200',
              'absolute opacity-0',
              'scale-50',
              'blur-xs',
              'group-data-[state=on]/button:relative group-data-[state=on]/button:scale-100 group-data-[state=on]/button:opacity-100 group-data-[state=on]/button:blur-none',
              iconClasses,
            )}
          >
            {activeLabel}
          </span>
        )}
        <span
          className={cn(
            'ease transform-all duration-200',
            'relative',
            'opacity-100',
            'scale-100',
            'blur-none',
            activeLabel &&
              'group-data-[state=on]/button:absolute group-data-[state=on]/button:scale-50 group-data-[state=on]/button:opacity-0 group-data-[state=on]/button:blur-xs',
            iconClasses,
          )}
        >
          {label}
        </span>
        {iconSide === 'end' && <IconContainer />}
      </Toggle>
    );
}
