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
import { ButtonGroup } from './ui/button-group';
import { InfoButton } from './info-button';

export function Browser({
  children,
  title = 'localhost:3000',
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="aspect-video min-h-96 w-full overflow-hidden rounded-2xl bg-background bg-clip-padding shadow-lg outline outline-outline dark:-outline-offset-1">
      <div className="flex flex-wrap items-center gap-x-2 border-b border-outline px-1.5 py-1 md:flex-nowrap md:p-2">
        <div className="flex gap-1.5 self-start ps-2 pt-2">
          <span className="size-3 rounded-full bg-red-300 inset-ring inset-ring-border-alpha" />
          <span className="size-3 rounded-full bg-yellow-200 inset-ring inset-ring-border-alpha" />
          <span className="size-3 rounded-full bg-green-300 inset-ring inset-ring-border-alpha" />
        </div>
        <div className="flex flex-1 items-center max-md:hidden">
          <Button iconOnly size="icon-sm" variant="ghost" shape="pill">
            <ChevronLeftIcon />
          </Button>
          <Button iconOnly size="icon-sm" variant="ghost" shape="pill">
            <ChevronRightIcon />
          </Button>
          <Button iconOnly size="icon-sm" variant="ghost" shape="pill">
            <ArrowPathIcon />
          </Button>
        </div>
        <div className="order-last flex w-full basis-full items-center justify-between gap-1 rounded-full bg-sidebar p-0.5 md:order-[initial] md:basis-auto dark:ring dark:ring-outline">
          <Button iconOnly size="icon-xs" variant="ghost" shape="pill" asChild>
            <InfoButton>This is a tooltip</InfoButton>
          </Button>
          <Paragraph variant="caption" className="flex-1 px-2 text-center">
            {title}
          </Paragraph>

          <Button iconOnly size="icon-xs" variant="ghost" shape="pill">
            <StarIcon />
          </Button>
        </div>
        <Button iconOnly size="icon-sm" variant="ghost" shape="pill">
          <Avatar
            size={24}
            radius={14}
            className="order-2 ms-auto shrink-0 shadow-none md:order-last md:ms-0"
          >
            <AvatarFallback>
              <UserIcon className="size-3 text-icon" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
      <div className="h-full w-full overflow-y-scroll bg-card">{children}</div>
    </div>
  );
}
