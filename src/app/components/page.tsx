'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { cn } from '@/lib/utils';
import { Code } from '@/components/code';
import { Kbd } from '@/components/kbd';
import { PageNav } from './toc';
import { DemoContainer } from '@/components/demo-container';

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

const data = {
  items: [
    {
      title: 'Alert',
      url: '#alert',
      depth: 1,
    },
    {
      title: 'Badge',
      url: '#badge',
      depth: 1,
    },
    {
      title: 'Button',
      url: '#button',
      depth: 1,
    },
    {
      title: 'Card',
      url: '#card',
      depth: 1,
    },
    {
      title: 'Code',
      url: '#code',
      depth: 1,
    },
    {
      title: 'Dropdown',
      url: '#dropdown',
      depth: 1,
    },

    {
      title: 'Input',
      url: '#input',
      depth: 1,
    },
    {
      title: 'Kbd',
      url: '#kbd',
      depth: 1,
    },
    {
      title: 'Paragraph',
      url: '#paragraph',
      isDisabled: true,
      depth: 1,
    },
    {
      title: 'Popover',
      url: '#popover',
      depth: 1,
    },
    {
      title: 'Info Button',
      url: '#info-button',
      depth: 2,
    },
    {
      title: 'Tabs',
      url: '#tabs',
      depth: 1,
    },
    {
      title: 'Toggle',
      url: '#toggle',
      depth: 1,
    },
    {
      title: 'Tooltip',
      url: '#tooltip',
      depth: 1,
    },
  ],
};

export default function Components() {
  const router = useRouter();
  return (
    <div className="gap-16 pb-50 sm:grid sm:grid-cols-[160px_1fr]">
      <div className="sticky top-20">
        <SidebarMenu id="pageNav">
          <SidebarGroup>
            <SidebarGroupLabel>Jump to:</SidebarGroupLabel>
            {data.items.map((item) => (
              <SidebarMenuItem key={item.title} title={item.title}>
                <SidebarMenuButton
                  disabled={item.isDisabled}
                  size="sm"
                  onClick={() => router.replace(item.url, { scroll: true })}
                  style={{ '--indent': item.depth } as React.CSSProperties}
                >
                  {/* <NavLink href={item.url}>{item.title}</NavLink> */}
                  <span className={cn(item.depth > 1 && 'pl-[calc(var(--indent)*0.5rem)]')}>
                    {item.title}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroup>
        </SidebarMenu>
      </div>
      <div className={cn('prose')}>
        <h1 className="text-3xl font-[675] tracking-tight">Components</h1>
        <h2 id="alert">Alert</h2>
        <DemoContainer>
          <Alert variant={'success'}>
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
          </Alert>
          <br />
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
              Please verify your billing information and try again.
            </AlertDescription>
          </Alert>
        </DemoContainer>

        <hr />

        <h2 id="badge">Badge</h2>
        <DemoContainer>
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
        </DemoContainer>
        <hr />

        <h2 id="button">Button</h2>
        <DemoContainer>
          <ButtonExample />
        </DemoContainer>
        <hr />

        <h2 id="card">Card</h2>
        <DemoContainer className="not-prose">
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
        </DemoContainer>
        <hr />

        <h2 id="code">Code</h2>
        <DemoContainer>
          <Code>npx run dev</Code>
        </DemoContainer>
        <hr />

        <h2 id="dropdown">Dropdown Menu</h2>
        <DemoContainer>
          <DropdownExample />
        </DemoContainer>
        <hr />

        <h2 id="input">Input</h2>
        <DemoContainer>
          <InputExample />
        </DemoContainer>
        <hr />

        <h2 id="kbd">Kbd</h2>
        <DemoContainer>
          <Kbd>⌘</Kbd> <Kbd>⇧</Kbd> <Kbd>P</Kbd>
        </DemoContainer>
        <hr />

        <h2 className="" id="popover">
          Popover
        </h2>
        <DemoContainer>
          <PopoverExample />
        </DemoContainer>
        <h3 id="info-button">InfoButton</h3>
        <DemoContainer>
          <InfoButton>Some more info here</InfoButton>
        </DemoContainer>
        <hr />

        <h2 id="tabs">Tabs</h2>
        <DemoContainer>
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
        </DemoContainer>
        <hr />

        <h2 id="toggle">Toggle</h2>
        <DemoContainer>
          <ToggleExample />
        </DemoContainer>
        <hr />

        <h2 id="tooltip">Tooltip</h2>
        <DemoContainer>
          <TooltipExample />
        </DemoContainer>
        <hr />
      </div>
    </div>
  );
}
