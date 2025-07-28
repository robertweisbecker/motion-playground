import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { Button } from './ui/button';

export function Tag() {
  return (
    <span
      className={cn(
        'text-md/5 inline-flex items-center gap-x-1 rounded-md bg-gray-400/20 px-2 py-1 font-medium sm:text-xs/5',
        'text-gray-600 group-data-hover:bg-gray-400/30',
        'dark:bg-gray-400/10 dark:text-gray-300 dark:group-data-hover:bg-gray-400/15',
        'forced-colors:outline',
      )}
    >
      Tag
      <Button size="xs" iconOnly className="-me-1 size-5 w-5 text-current" variant="link">
        <XMarkIcon />
      </Button>
    </span>
  );
}
