import Link from 'next/link';
import { AlertCircleIcon, CheckCircle2Icon, GalleryHorizontalIcon } from 'lucide-react';
import { ExclamationCircleIcon, InformationCircleIcon, StarIcon } from '@heroicons/react/16/solid';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ButtonExample } from './button-example';
import { ToggleExample } from './toggle-example';
import { DropdownExample } from './dropdown-example';
import { InputExample } from './input-example';
import { TooltipExample } from './tooltip-example';
import { InfoButton } from '@/components/info-button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@radix-ui/react-collapsible';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/components/nav-link';
import { cn } from '@/lib/utils';
import { Code } from '@/components/code';
import { Kbd } from '@/components/kbd';

function PopoverExample() {
  return (
    <div className="mx-auto grid auto-cols-min gap-2 text-center">
      <div className="col-span-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      <div className="col-span-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      <div className="col-span-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      <div className="col-span-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function TooltipExample2() {
  return (
    <div className="wrap flex gap-2 text-center">
      <div className="col-span-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">Place content for the Tooltip here.</TooltipContent>
        </Tooltip>
      </div>
      <div className="col-span-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Place content for the Tooltip here.</TooltipContent>
        </Tooltip>
      </div>
      <div className="col-span-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">Place content for the Tooltip here.</TooltipContent>
        </Tooltip>
      </div>
      <div className="col-span-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">Place content for the Tooltip here.</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
const data = {
  items: [
    {
      title: 'Alert',
      url: '/components#alert',
    },
    {
      title: 'Badge',
      url: '/components#badge',
    },
    {
      title: 'Button',
      url: '/components#button',
    },
    {
      title: 'Card',
      url: '/components#card',
    },
    {
      title: 'Code',
      url: '/components#code',
      isDisabled: true,
    },
    {
      title: 'Dropdown',
      url: '/components#dropdown',
    },
    {
      title: 'Info Button',
      url: '/components#info-button',
    },
    {
      title: 'Input',
      url: '/components#input',
    },
    {
      title: 'Kbd',
      url: '/components#kbd',
      isDisabled: true,
    },
    {
      title: 'Paragraph',
      url: '/components#paragraph',
      isDisabled: true,
    },
    {
      title: 'Popover',
      url: '/components#popover',
    },
    {
      title: 'Tabs',
      url: '/components#tabs',
    },
    {
      title: 'Toggle',
      url: '/components#toggle',
    },
    {
      title: 'Tooltip',
      url: '/components#tooltip',
    },
  ],
};

export default function Components() {
  return (
    <div className="gap-10 sm:grid sm:grid-cols-[1fr_160px]">
      <div
        className={cn(
          'prose z-2',
          // '[&_section]:relative [&_section]:my-8',
          // '[&_section]:before:bg-accent [&_section]:before:absolute [&_section]:before:-inset-3 [&_section]:before:-z-1 [&_section]:before:rounded-2xl',
        )}
      >
        <h1 className="text-3xl font-[675] tracking-tight">Components</h1>
        <h2 id="alert">Alert</h2>
        <section>
          <Alert variant={'success'}>
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
          </Alert>
        </section>

        <section>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
              Please verify your billing information and try again.
            </AlertDescription>
          </Alert>
        </section>
        <hr />

        <h2 id="badge">Badge</h2>
        <section className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Badge variant="default">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="flex gap-2">
            <Badge
              className={cn(
                'bg-cyan-400/15 text-cyan-700',
                'hover:bg-cyan-400/30',
                'dark:bg-cyan-400/20 dark:text-cyan-300',
                'dark:hover:bg-cyan-400/15',
              )}
            >
              Info
            </Badge>
            <Badge
              className={cn(
                'bg-amber-400/30 text-amber-800',
                '[a&]:hover:bg-amber-400/30',
                'dark:bg-amber-400/20 dark:text-amber-400',
                'dark:[a&]:hover:bg-amber-400/15',
              )}
            >
              Info
            </Badge>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">
              <ExclamationCircleIcon className="-ms-0.5 text-amber-600" />
              Warning
            </Badge>
            <Badge variant="outline">
              <ExclamationCircleIcon className="text-destructive -ms-0.5" />
              Error
            </Badge>
            <Badge variant="outline">
              <InformationCircleIcon className="text-blue -ms-0.5" />
              Info
            </Badge>
          </div>
        </section>
        <hr />

        <h2 id="button">Button</h2>
        <ButtonExample />
        <hr />

        <h2 id="card">Card</h2>
        <section className="not-prose">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>
                <Button size="icon">
                  <StarIcon />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        </section>
        <hr />

        <h2 id="code">Code</h2>
        <section>
          <Code>npx run dev</Code>
        </section>
        <hr />

        <h2 id="dropdown">Dropdown Menu</h2>
        <DropdownExample />
        <hr />

        <h2 id="info-button">InfoButton</h2>
        <section>
          <InfoButton>Some more info here</InfoButton>
        </section>
        <hr />

        <h2 id="input">Input</h2>
        <InputExample />
        <hr />

        <h2 id="kbd">Kbd</h2>
        <section className="bg-card flex gap-2 rounded-xl p-6">
          <Kbd>⌘</Kbd> <Kbd>⇧</Kbd> <Kbd>P</Kbd>
        </section>
        <hr />

        <h2 id="tabs">Tabs</h2>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>

            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="profile">Change your Profile here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="projects">
            <GalleryHorizontalIcon className="mx-auto size-6" />
          </TabsContent>
        </Tabs>
        <hr />

        <h2 id="toggle">Toggle</h2>
        <ToggleExample />
        <hr />

        <h2 id="tooltip">Tooltip</h2>
        <TooltipExample2 />
        <hr />

        <h2 className="" id="popover">
          Popover
        </h2>
        <section>
          <PopoverExample />
        </section>
        <hr />
      </div>
      <div>
        <SidebarMenu className="sticky top-20">
          <SidebarGroup>
            <SidebarGroupLabel>Jump to:</SidebarGroupLabel>
            {data.items.map((item) => (
              <SidebarMenuItem key={item.title} title={item.title}>
                <SidebarMenuButton asChild disabled={item.isDisabled} size="sm">
                  <NavLink href={item.url}>{item.title}</NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        </SidebarMenu>
      </div>
    </div>
  );
}
