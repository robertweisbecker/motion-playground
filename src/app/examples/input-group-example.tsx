import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ArrowUpIcon, CheckIcon, PlusIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { GradientButton } from '@/components/experimental/button-gradient';

export function InputGroupExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <GradientButton>Glass</GradientButton>
      <Button variant="border">Border</Button>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <MagnifyingGlassIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="rounded-full"
                size="xs"
                iconOnly
                variant="ghost"
              >
                <InformationCircleIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="end">
              This is content in a tooltip.
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="inline-start">
          <MagnifyingGlassIcon />
        </InputGroupAddon>
        <InputGroupAddon align="block-end">
          <Button size="xs" iconOnly>
            <PlusIcon />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="xs">Auto</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start">
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="h-4" />
          <Button variant="elevated" size="xs" iconOnly>
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CheckIcon className="size-3" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
