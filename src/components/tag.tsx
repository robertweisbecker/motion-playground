import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';

interface TagProps extends React.ComponentProps<'span'> {
  onClose?: () => void;
  isDisabled?: boolean;
  isSelected?: boolean;
  showAvatar?: boolean;
  avatarInitials?: string;
}
export function Tag({
  className,
  children,
  showAvatar,
  avatarInitials,
  onClose,
  isSelected,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center gap-x-1.5 rounded-sm px-1.5 py-1 text-sm font-[450] shadow-2xs outline-[0.5px] outline-muted',
        'bg-muted text-foreground dark:bg-neutral-700',
        'forced-colors:outline',
        isSelected && 'bg-secondary text-secondary-foreground outline-primary',
        className,
      )}
      {...props}
    >
      {showAvatar && (
        <Avatar size={24} className="-my-0.5 -ms-1" radius={4} inset={1.5}>
          <AvatarFallback>{avatarInitials}</AvatarFallback>
          <AvatarImage></AvatarImage>
        </Avatar>
      )}
      {children}

      {onClose && (
        <Button
          size="icon-xs"
          iconOnly
          className="-mx-1 -my-2 text-current"
          variant="ghost"
          onClick={onClose}
        >
          <XMarkIcon className="size-4" />
        </Button>
      )}
    </span>
  );
}
