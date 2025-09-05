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
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        'text-md/5 inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-1 font-[450] shadow-sm sm:text-sm/5',
        // 'bg-gray-400/20',
        // 'text-gray-600 group-data-hover:bg-gray-400/30',
        // 'dark:bg-gray-400/10 dark:text-gray-300 dark:group-data-hover:bg-gray-400/15',
        'bg-black-alpha-75',
        'text-neutral-600 group-hover:bg-gray-600',
        // 'dark:bg-gray-400/10 dark:text-gray-300 dark:group-data-hover:bg-gray-400/15',
        'forced-colors:outline',
      )}
      {...props}
    >
      {showAvatar && (
        <Avatar size={24} className="-my-0.5 -ms-1" radius={4}>
          <AvatarFallback>{avatarInitials}</AvatarFallback>
          <AvatarImage></AvatarImage>
        </Avatar>
      )}
      {children}

      {onClose && (
        <Button
          size="xs"
          iconOnly
          className="-mx-1 -my-2 size-5 w-5 text-current"
          variant="ghost"
          onClick={onClose}
        >
          <XMarkIcon className="size-4" />
        </Button>
      )}
    </span>
  );
}
