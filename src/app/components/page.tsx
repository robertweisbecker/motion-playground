'use client';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AlertCircleIcon, CheckCircle2Icon, GalleryHorizontalIcon } from 'lucide-react';
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  StarIcon,
} from '@heroicons/react/16/solid';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button, buttonVariants } from '@/components/ui/button';
import { PopoverExample } from './popover-example';
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

import { Badge } from '@/components/ui/badge';
import { ButtonExample, IconButtonExample } from './button-example';
import { ToggleExample } from './toggle-example';
import { DropdownExample } from './dropdown-example';
import { InputExample } from './input-example';
import { TooltipExample } from './tooltip-example';
import { InfoButton } from '@/components/info-button';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { Code } from '@/components/code';
import { Kbd } from '@/components/kbd';
// import { PageNav } from './toc';
import { DemoContainer } from '@/components/demo-container';
import { Heading } from '@/components/heading';
import { HeadingExampleColor, HeadingExampleSize } from './heading-example';
import { Loader, Spinner } from '@/components/experimental/spinner';
import { Avatar, AvatarCutout, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { KeyValue, Paragraph } from '@/components/paragraph';
import { Separator } from '@/components/ui/separator';
import { Citation } from '@/components/experimental/citation';
import { TabsDemo } from './tabs-example';

import {
  AtomIcon,
  BellIcon,
  CircleWavyQuestionIcon,
  ExclamationMarkIcon,
  FolderOpenIcon,
  CheckCircleIcon as PhCheckCircleIcon,
  WarningIcon,
} from '@phosphor-icons/react';
import { AlertExample } from './alert-example';
import { Switch } from '@/components/ui/switch';
import { Tag } from '@/components/tag';
import { CampsiteButton } from '@/components/ui/campsite-button';

const data = {
  items: [
    {
      title: 'Alert',
      url: '#alert',
      depth: 1,
    },
    {
      title: 'Avatar',
      url: '#avatar',
      depth: 1,
    },
    {
      title: 'Badge',
      url: '#badge',
      depth: 1,
    },
    {
      title: 'Pill',
      url: '#badge',
      isDisabled: true,
      depth: 2,
    },
    {
      title: 'Dot',
      url: '#badge',
      isDisabled: true,
      depth: 2,
    },
    {
      title: 'Button',
      url: '#button',
      depth: 1,
    },
    {
      title: 'Icon Button',
      url: '#icon-button',
      depth: 2,
      isDisabled: true,
    },
    {
      title: 'Card',
      url: '#card',
      depth: 1,
    },
    {
      title: 'Citation',
      url: '#citation',
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
      title: 'Heading',
      url: '#heading',
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
      isDisabled: false,
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
      title: 'Spinner',
      url: '#spinner',
      depth: 1,
    },
    {
      title: 'Switch',
      url: '#switch',
      depth: 1,
    },
    {
      title: 'Tag',
      url: '#tag',
      depth: 1,
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
    <div className="gap-8 pb-50 sm:grid sm:grid-cols-[1fr_160px] md:gap-16">
      <div className="order-last">
        <SidebarMenu id="pageNav" className="w- sticky top-20">
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

      <div className={cn('prose col-start-1 mx-auto w-full max-w-4xl')}>
        <Heading as="h1" copy>
          Components
        </Heading>
        <Paragraph variant="lead">Components? Components!</Paragraph>
        <hr />
        <h2 id="alert">Alert</h2>
        <DemoContainer>
          <AlertExample />
        </DemoContainer>
        <hr />

        <h2 id="avatar">Avatar</h2>
        <DemoContainer>
          <Avatar size={20}>
            <AvatarImage src="https://avatar.vercel.sh/ab" className="" />

            {/* <AvatarFallback>RW</AvatarFallback> */}
          </Avatar>
          <Avatar size={32}>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar size={48}>
            {/* <AvatarImage
              src="https://avatar.vercel.sh/a"
              className="mask-linear-90 mask-linear-from-60% mask-linear-to-80% mask-radial-from-100% mask-radial-at-bottom-right mask-add"
            /> */}
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </DemoContainer>

        <h2 id="badge">Badge</h2>
        <h3>Hello</h3>
        <DemoContainer>
          <div className="flex gap-2">
            <Badge variant="default">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="flex gap-2">
            <Badge color="highlight">
              <InformationCircleIcon />
              Highlight
            </Badge>
            <Badge color="info">
              <InformationCircleIcon />
              Info
            </Badge>
            <Badge color="warning">
              <ExclamationTriangleIcon />
              Warning
            </Badge>
            <Badge color="error">
              <ExclamationCircleIcon />
              Error
            </Badge>
            <Badge color="success">
              <CheckCircleIcon />
              Success
            </Badge>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">
              <InformationCircleIcon className="text-highlight-400 -ms-0.5" />
              Highlight
            </Badge>
            <Badge variant="outline">
              <InformationCircleIcon className="text-info-400 -ms-0.5" />
              Info
            </Badge>
            <Badge variant="outline">
              <ExclamationTriangleIcon className="text-warning-400 -ms-0.5" />
              Warning
            </Badge>
            <Badge variant="outline">
              <ExclamationCircleIcon className="text-error-400 -ms-0.5" />
              Error
            </Badge>
            <Badge variant="outline">
              <CheckCircleIcon className="text-success-400 -ms-0.5" />
              Success
            </Badge>
          </div>
        </DemoContainer>
        <hr />
        {/* <div className="grid grid-cols-4 justify-items-center gap-4">
          <CampsiteButton variant="flat">Flat</CampsiteButton>
          <CampsiteButton variant="text">Text</CampsiteButton>
          <CampsiteButton variant="none">None</CampsiteButton>
          <CampsiteButton variant="plain">Plain</CampsiteButton>
          <CampsiteButton variant="base">Base</CampsiteButton>
          <CampsiteButton variant="primary">Primary</CampsiteButton>
          <CampsiteButton variant="destructive">Destructive</CampsiteButton>
          <CampsiteButton variant="onboarding">Onboarding</CampsiteButton>
          <CampsiteButton variant="important">Important</CampsiteButton>
          <CampsiteButton variant="brand">Brand</CampsiteButton>
        </div> */}

        <h2 id="button">Button</h2>
        <DemoContainer>
          <ButtonExample />
        </DemoContainer>
        <DemoContainer>
          <IconButtonExample />
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

        <h2 id="citation">Citation</h2>
        <DemoContainer>
          <Citation />
        </DemoContainer>
        <hr />

        <h2 id="code">Code</h2>
        <DemoContainer>
          <Code>npx run dev</Code>
          <Code variant="elevated">yarn install</Code>
        </DemoContainer>
        <hr />

        <h2 id="dropdown">Dropdown Menu</h2>
        <DemoContainer>
          <DropdownExample />
        </DemoContainer>
        <hr />

        <Heading as="h2">Heading</Heading>
        <DemoContainer>
          <HeadingExampleSize />
        </DemoContainer>
        <Heading as="h3">Color</Heading>
        <DemoContainer>
          <HeadingExampleColor />
        </DemoContainer>

        <h2 id="input">Input</h2>
        <DemoContainer>
          <InputExample />
        </DemoContainer>
        <hr />

        <h2 id="kbd">Kbd</h2>
        <DemoContainer>
          <div className="flex gap-1">
            <Kbd>⌘</Kbd> <Kbd>⇧</Kbd> <Kbd>P</Kbd>
          </div>
        </DemoContainer>
        <hr />

        <h2 id="paragraph">Paragraph</h2>
        <DemoContainer>
          <KeyValue label="hello">Hello</KeyValue>
          <Paragraph variant="lead">
            Lead - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus
            varius blandit sit amet non magna.
          </Paragraph>
          <Paragraph variant="prose">
            Prose - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus
            varius blandit sit amet non magna.
          </Paragraph>
          <Paragraph variant="body">
            Body - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus
            varius blandit sit amet non magna.
          </Paragraph>
          <Paragraph variant="small">
            Body Small - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus
            varius blandit sit amet non magna.
          </Paragraph>

          <Separator />
          <Paragraph variant="item">Item - Lorem ipsum dolor sit amet...</Paragraph>
          <Paragraph variant="label">
            Label - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus
            varius blandit sit amet non magna.
          </Paragraph>
          <Paragraph variant="caption">
            Caption - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus
            varius blandit sit amet non magna.
          </Paragraph>
          <Paragraph variant="error">
            Error - Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus
            varius blandit sit amet non magna.
          </Paragraph>
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

        <h2 id="spinner">
          Spinner{' '}
          <Badge variant="default" color="warning" className="ms-1">
            Experimental
          </Badge>
        </h2>
        <DemoContainer>
          <Spinner />
          <Loader />
        </DemoContainer>

        <h2 id="switch">Switch</h2>
        <DemoContainer>
          <Switch>Hello</Switch>
        </DemoContainer>

        <h2 id="tag">Tag</h2>
        <DemoContainer>
          <Tag
            showAvatar
            avatarInitials="M"
            onClose={() => {
              alert('action click');
            }}
          >
            mga@email.com
          </Tag>
        </DemoContainer>

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

        <DemoContainer>
          <TabsDemo />
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
