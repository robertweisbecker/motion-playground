import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { SidebarTrigger } from './ui/sidebar';
import { Badge } from './ui/badge';
import { NavLink } from './nav-link';
import { ModeToggle } from './theme-switcher';
import { LucideChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarIcon } from '@/app/icons/icons';

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 flex shrink-0 items-center justify-between gap-2 gap-x-0 overflow-x-clip rounded-xl px-2 py-2 sm:px-2">
      <SidebarTrigger icon={<SidebarIcon />} />
      <Separator orientation="vertical" className="sm:hidden" />
      <Button asChild variant="ghost" className="sm:hidden">
        <NavLink href="/" label="Home" />
      </Button>
      <Button asChild variant="ghost" className="sm:hidden">
        <NavLink href="/components" label="Components" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="hidden">
            Pages <LucideChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Demos</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <NavLink href="/demos/tab-indicator">Tab Indicator</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink href="/demos/button-hover">Button Hover</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink href="/demos/toast">Toast</NavLink>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Experiments</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <NavLink href="/experiments/card-transitions">Card Transitions</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink href="/experiments/tailwind">Tailwind Playground</NavLink>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="ms-auto">
        <ModeToggle />
        <Badge variant={'outline'} className="fixed right-1 bottom-1 z-50">
          bp:
          <div className="block sm:hidden">base</div>
          <div className="hidden sm:block md:hidden">sm</div>
          <div className="hidden md:block lg:hidden">md</div>
          <div className="hidden lg:block xl:hidden">lg</div>
          <div className="hidden xl:block 2xl:hidden">xl</div>
          <div className="hidden 2xl:block">2xl</div>
        </Badge>
      </span>
      <div
        className={cn(
          'pointer-events-none absolute -inset-10 -z-1',
          'from-card to-card/1 via-card/80 dark:from-background dark:via-background/50',
          'bg-gradient-to-b from-33% via-67% to-100%',
          // 'from-red/90 to-red/0 bg-gradient-to-b',
          'mask-b-from-card mask-b-to-card/0 dark:mask-b-from-background dark:mask-b-to-background/0 mask-b-from-50% mask-b-to-100%',
          'blur-xs backdrop-blur-sm',
        )}
      ></div>
    </header>
  );
}
