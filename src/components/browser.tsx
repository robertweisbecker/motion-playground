import { Paragraph } from './paragraph';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowPathIcon,
  StarIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Browser({
  children,
  title = 'localhost:3000',
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="aspect-video min-h-96 w-full overflow-hidden rounded-2xl bg-background bg-clip-padding shadow-lg outline outline-border-alpha dark:-outline-offset-1">
      <div className="flex flex-wrap items-center gap-x-2 border-b border-outline bg-card px-1.5 py-1 md:flex-nowrap md:p-2">
        <div className="flex gap-1.5 self-start ps-2 pt-2 md:pt-3">
          <span className="size-2.5 rounded-full bg-red-300 inset-ring inset-ring-border-alpha" />
          <span className="size-2.5 rounded-full bg-yellow-200 inset-ring inset-ring-border-alpha" />
          <span className="size-2.5 rounded-full bg-green-300 inset-ring inset-ring-border-alpha" />
        </div>
        <div className="hidden w-full flex-1 items-center gap-1.5 md:flex">
          <Button variant="invisible" size="xs" iconOnly shape="pill">
            <ChevronLeftIcon className="size-3 text-icon" />
          </Button>
          <Button variant="invisible" size="xs" iconOnly shape="pill">
            <ChevronRightIcon className="size-3 text-icon" />
          </Button>
          <Button variant="invisible" size="xs" iconOnly shape="pill">
            <ArrowPathIcon className="size-3 text-icon" />
          </Button>
        </div>
        <div className="order-last flex w-full basis-full items-center justify-between gap-1 rounded-full bg-muted p-1 md:order-[initial] md:basis-auto dark:ring dark:ring-outline">
          <Paragraph variant="caption" className="flex-1 px-2">
            {title}
          </Paragraph>
          <Button variant="invisible" size="xs" iconOnly shape="pill">
            <StarIcon className="size-3 text-icon" />
          </Button>
          <Button variant="invisible" size="xs" iconOnly shape="pill">
            <BookmarkIcon className="size-3 text-icon" />
          </Button>
        </div>
        <Avatar
          size={24}
          inset={2}
          radius={12}
          className="order-2 my-1 ms-auto shrink-0 shadow-none md:order-last md:ms-0"
        >
          <AvatarFallback>
            <UserIcon className="size-3 text-icon" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="h-full w-full overflow-y-scroll">{children}</div>
    </div>
  );
}
