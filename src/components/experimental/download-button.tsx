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
  const baseIconClasses =
    'col-start-1 row-start-1 duration-150 ease-out transition-[transform,scale,opacity,filter] origin-center group-active/button:scale-75';
  const baseLabelClasses = ' ease transition-[filter,blur,opacity] duration-100';
  const hiddenLabelClasses = ['opacity-0', 'scale-100', 'blur-xs'];
  const visibleLabelClasses = ['opacity-100', 'scale-100', 'blur-none'];

  function IconContainer() {
    return (
      <span className={cn('group/icon grid', iconSide === 'end' && 'ml-auto')}>
        <div
          className={cn(
            baseIconClasses,
            'opacity-0 group-data-[state=on]/button:opacity-100',
            'scale-50 group-data-[state=on]/button:scale-100',
            'blur-xs group-data-[state=on]/button:blur-none',
          )}
        >
          {activeIcon ? activeIcon : icon}
        </div>
        <div
          className={cn(
            baseIconClasses,
            'opacity-100 group-data-[state=on]/button:opacity-0',
            'scale-100 group-data-[state=on]/button:scale-50',
            'blur-none group-data-[state=on]/button:blur-xs',
          )}
        >
          {icon}
        </div>
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
      <Toggle className={cn('group/button relative')} size="lg" data-direction={direction}>
        {iconSide === 'start' && <IconContainer />}
        <div className="relative">
          {activeLabel && (
            <span
              className={cn(
                baseLabelClasses,
                'absolute left-0',
                hiddenLabelClasses,
                visibleLabelClasses.map((value) => `group-data-[state=on]/button:${value}`),
              )}
            >
              {activeLabel}
            </span>
          )}
          <span
            data-content={activeLabel ? activeLabel : ''}
            className={cn(
              baseLabelClasses,
              visibleLabelClasses,

              activeLabel && [
                'after:invisible after:block after:h-0 after:content-[attr(data-content)]',
                // 'group-data-[state=on]/button:absolute group-data-[state=on]/button:scale-50 group-data-[state=on]/button:opacity-0 group-data-[state=on]/button:blur-xs',
                hiddenLabelClasses.map((value) => `group-data-[state=on]/button:${value}`),
                // visibleLabelClasses.map((value) => `group-data-[state=off]/button:${value}`),
              ],
            )}
          >
            {label}
          </span>
        </div>

        {iconSide === 'end' && <IconContainer />}
      </Toggle>
    );
}
