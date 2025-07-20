import { ArrowDownToLineIcon } from 'lucide-react';
import * as Tooltip from '../ui/tooltip';
import { Button, buttonVariants } from '../ui/button';
import styles from './download-button.module.css';
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';

interface DownloadButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  iconOnly?: boolean;
  label: string;
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
