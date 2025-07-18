import * as Menu from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function DropdownMenuDemo() {
  return (
    <Menu.DropdownMenu>
      <Menu.DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </Menu.DropdownMenuTrigger>
      <Menu.DropdownMenuContent className="w-56" align="start">
        <Menu.DropdownMenuLabel>My Account</Menu.DropdownMenuLabel>
        <Menu.DropdownMenuGroup>
          <Menu.DropdownMenuItem>
            Profile
            <Menu.DropdownMenuShortcut>⇧⌘P</Menu.DropdownMenuShortcut>
          </Menu.DropdownMenuItem>
          <Menu.DropdownMenuItem>
            Billing
            <Menu.DropdownMenuShortcut>⌘B</Menu.DropdownMenuShortcut>
          </Menu.DropdownMenuItem>
          <Menu.DropdownMenuItem>
            Settings
            <Menu.DropdownMenuShortcut>⌘S</Menu.DropdownMenuShortcut>
          </Menu.DropdownMenuItem>
          <Menu.DropdownMenuItem>
            Keyboard shortcuts
            <Menu.DropdownMenuShortcut>⌘K</Menu.DropdownMenuShortcut>
          </Menu.DropdownMenuItem>
        </Menu.DropdownMenuGroup>
        <Menu.DropdownMenuSeparator />
        <Menu.DropdownMenuGroup>
          <Menu.DropdownMenuItem>Team</Menu.DropdownMenuItem>
          <Menu.DropdownMenuSub>
            <Menu.DropdownMenuSubTrigger>Invite users</Menu.DropdownMenuSubTrigger>
            <Menu.DropdownMenuPortal>
              <Menu.DropdownMenuSubContent>
                <Menu.DropdownMenuItem>Email</Menu.DropdownMenuItem>
                <Menu.DropdownMenuItem>Message</Menu.DropdownMenuItem>
                <Menu.DropdownMenuSeparator />
                <Menu.DropdownMenuItem>More...</Menu.DropdownMenuItem>
              </Menu.DropdownMenuSubContent>
            </Menu.DropdownMenuPortal>
          </Menu.DropdownMenuSub>
          <Menu.DropdownMenuItem>
            New Team
            <Menu.DropdownMenuShortcut>⌘+T</Menu.DropdownMenuShortcut>
          </Menu.DropdownMenuItem>
        </Menu.DropdownMenuGroup>
        <Menu.DropdownMenuSeparator />
        <Menu.DropdownMenuItem>GitHub</Menu.DropdownMenuItem>
        <Menu.DropdownMenuItem>Support</Menu.DropdownMenuItem>
        <Menu.DropdownMenuItem disabled>API</Menu.DropdownMenuItem>
        <Menu.DropdownMenuSeparator />
        <Menu.DropdownMenuItem>
          Log out
          <Menu.DropdownMenuShortcut>⇧⌘Q</Menu.DropdownMenuShortcut>
        </Menu.DropdownMenuItem>
      </Menu.DropdownMenuContent>
    </Menu.DropdownMenu>
  );
}
