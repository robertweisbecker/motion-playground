'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { DemoContainer } from '@/components/demo-container';
import { Heading } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';
import { InfoButton } from '@/components/info-button';
import { AlertExample } from '../examples/alert-example';
import { AvatarExample } from '../examples/avatar-example';
import { BadgeExample } from '../examples/badge-example';
import { BrowserExample } from '../examples/browser-example';
import {
  CalendarModeExample,
  CalendarCaptionLayoutExample,
  CalendarButtonVariantExample,
} from '../examples/calendar-example';
import {
  ButtonExample,
  CustomButtonExample,
  IconButtonExample,
} from '../examples/button-example';
import { ButtonGroupExample } from '../examples/button-group-example';
import { CardExample } from '../examples/card-example';
import { CarouselExample } from '../examples/carousel-example';
import { CitationExample } from '../examples/citation-example';
import { CodeExample } from '../examples/code-example';
import { CodeBlockExample } from '../examples/code-block-example';
import { CollapsibleExample } from '../examples/collapsible-example';
import { DescriptionListExample } from '../examples/description-list-example';
import { DrawerExample } from '../examples/drawer-example';
import {
  DropdownExample,
  DropdownCheckboxExample,
  DropdownRadioExample,
} from '../examples/dropdown-example';
import {
  HeadingExampleColor,
  HeadingExampleSize,
  HeadingExampleWithSubtitle,
} from '../examples/heading-example';
import { HoverCardExample } from '../examples/hover-card-example';
import { InlineCitationExample } from '../examples/inline-citation-example';
import { InputExample } from '../examples/input-example';
import { InputGroupExample } from '../examples/input-group-example';
import { ItemExample } from '../examples/item-example';
import { KbdExample } from '../examples/kbd-example';
import { LabelExample } from '../examples/label-example';
import { NavigationMenuExample } from '../examples/navigation-menu-example';
import { ParagraphExample } from '../examples/paragraph-example';
import { PopoverExample } from '../examples/popover-example';
import { SelectExample } from '../examples/select-example';
import { SeparatorExample } from '../examples/separator-example';
import { SheetExample } from '../examples/sheet-example';
import { SliderExample } from '../examples/slider-example';
import { SkeletonExample } from '../examples/skeleton-example';
import { SpinnerExample } from '../examples/spinner-example';
import { SwitchExample } from '../examples/switch-example';
import { TagExample } from '../examples/tag-example';
import { TabsBasicExample } from '../examples/tabs-basic-example';
import { TabsDemo } from '../examples/tabs-example';
import { TextareaExample } from '../examples/textarea-example';
import { ToggleExample } from '../examples/toggle-example';
import { ToggleGroupExample } from '../examples/toggle-group-example';
import { TooltipExample } from '../examples/tooltip-example';
import {
  ToastExample,
  ToastWithActionExample,
  ToastPromiseExample,
  ToastVaryingHeightsExample,
  ToastManualDismissExample,
} from '../examples/toast-example';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Separator } from '@/components/ui/separator';

type NavigationItem = {
  title: string;
  url: string;
  depth: number;
  isDisabled?: boolean;
};

const data: { items: NavigationItem[] } = {
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
      title: 'Browser',
      url: '#browser',
      depth: 1,
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
    },
    {
      title: 'Button Group',
      url: '#button-group',
      depth: 2,
    },
    {
      title: 'Calendar',
      url: '#calendar',
      depth: 1,
    },
    {
      title: 'Card',
      url: '#card',
      depth: 1,
    },
    {
      title: 'Carousel',
      url: '#carousel',
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
      title: 'Code Block',
      url: '#code-block',
      depth: 1,
    },
    {
      title: 'Collapsible',
      url: '#collapsible',
      depth: 1,
    },
    {
      title: 'Drawer',
      url: '#drawer',
      depth: 1,
    },
    {
      title: 'Description List',
      url: '#description-list',
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
      title: 'Hover Card',
      url: '#hover-card',
      depth: 1,
    },
    {
      title: 'Inline Citation',
      url: '#inline-citation',
      depth: 1,
    },
    {
      title: 'Input',
      url: '#input',
      depth: 1,
    },
    {
      title: 'Input Group',
      url: '#input-group',
      depth: 2,
    },
    {
      title: 'Item',
      url: '#item',
      depth: 1,
    },
    {
      title: 'Kbd',
      url: '#kbd',
      depth: 1,
    },
    {
      title: 'Label',
      url: '#label',
      depth: 1,
    },
    {
      title: 'Navigation Menu',
      url: '#navigation-menu',
      depth: 1,
    },
    {
      title: 'Paragraph',
      url: '#paragraph',
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
      title: 'Select',
      url: '#select',
      depth: 1,
    },
    {
      title: 'Separator',
      url: '#separator',
      depth: 1,
    },
    {
      title: 'Slider',
      url: '#slider',
      depth: 1,
    },
    {
      title: 'Sheet',
      url: '#sheet',
      depth: 1,
    },
    {
      title: 'Skeleton',
      url: '#skeleton',
      depth: 1,
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
      title: 'Toast',
      url: '#toast',
      depth: 1,
    },
    {
      title: 'Tabs',
      url: '#tabs',
      depth: 1,
    },
    {
      title: 'Textarea',
      url: '#textarea',
      depth: 1,
    },
    {
      title: 'Toggle',
      url: '#toggle',
      depth: 1,
    },
    {
      title: 'Toggle Group',
      url: '#toggle-group',
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
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start lg:gap-16">
      <SidebarMenu
        id="pageNav"
        className="order-last h-full max-md:hidden md:sticky md:top-16 md:max-h-[calc(100vh_-_--spacing(24))] md:w-[160px] md:shrink-0 md:overflow-y-auto"
      >
        <SidebarGroup className="pt-0 pb-8">
          <SidebarGroupLabel className="sticky top-0 isolate z-1 text-muted-foreground/80 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:h-12 before:bg-linear-to-b before:from-background before:from-50%">
            Jump to:
          </SidebarGroupLabel>
          {data.items.map((item) => (
            <SidebarMenuItem key={item.title} title={item.title}>
              <SidebarMenuButton
                variant="plain"
                disabled={item.isDisabled ?? false}
                size="sm"
                onClick={() => router.replace(item.url, { scroll: true })}
                style={{ '--indent': item.depth } as React.CSSProperties}
                className={cn(item.depth > 1 && 'text-xs font-normal')}
              >
                {item.depth > 1 && (
                  <>
                    <Separator
                      orientation="horizontal"
                      className="max-w-[calc(var(--indent)*0.5ch)]"
                    />
                    {/* <span
                        className={cn('ps-[calc(var(--indent)*0.5ch)]')}
                      ></span> */}
                  </>
                )}
                {item.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarMenu>

      <div className={cn('prose mx-auto w-full min-w-0 lg:max-w-4xl')}>
        <div className="sticky top-8 z-10 mb-6 max-md:block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Jump to component
                <ChevronRightIcon className="size-4 rotate-90" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[60vh] w-[calc(100vw-2rem)] overflow-y-auto">
              {data.items
                .filter((item) => !item.isDisabled && item.depth === 1)
                .map((item) => (
                  <DropdownMenuItem
                    key={item.title}
                    onClick={() => {
                      router.replace(item.url, { scroll: true });
                    }}
                  >
                    {item.title}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Heading as="h1" copy id="components">
          Components
        </Heading>
        <Paragraph variant="lead">Components? Components!</Paragraph>
        <hr />

        <Heading as="h2" copy id="alert">
          Alert
        </Heading>
        <DemoContainer>
          <AlertExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="avatar">
          Avatar
        </Heading>
        <DemoContainer>
          <AvatarExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="badge">
          Badge
        </Heading>
        <DemoContainer>
          <BadgeExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="browser">
          Browser
        </Heading>
        <DemoContainer>
          <BrowserExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="button">
          Button
        </Heading>
        <DemoContainer>
          <ButtonExample />
        </DemoContainer>
        <Heading as="h3" id="custom-button">
          Custom Button
        </Heading>
        <DemoContainer>
          <CustomButtonExample />
        </DemoContainer>
        <Heading as="h3" id="icon-button">
          Icon Button
        </Heading>
        <DemoContainer>
          <IconButtonExample />
        </DemoContainer>
        <Heading as="h3" id="button-group">
          Button Group
        </Heading>
        <DemoContainer>
          <ButtonGroupExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="calendar">
          Calendar
        </Heading>
        <DemoContainer>
          <CalendarModeExample />
        </DemoContainer>
        <Heading as="h3" id="calendar-caption-layout">
          Caption layout
        </Heading>
        <DemoContainer>
          <CalendarCaptionLayoutExample />
        </DemoContainer>
        <Heading as="h3" id="calendar-button-variant">
          Button variant
        </Heading>
        <DemoContainer>
          <CalendarButtonVariantExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="card">
          Card
        </Heading>
        <DemoContainer className="not-prose">
          <CardExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="carousel">
          Carousel
        </Heading>
        <DemoContainer>
          <CarouselExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="citation">
          Citation
        </Heading>
        <DemoContainer>
          <CitationExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="code">
          Code
        </Heading>
        <DemoContainer>
          <CodeExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="code-block">
          Code Block
        </Heading>
        <DemoContainer>
          <CodeBlockExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="collapsible">
          Collapsible
        </Heading>
        <DemoContainer>
          <CollapsibleExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="drawer">
          Drawer
        </Heading>
        <DemoContainer>
          <DrawerExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="description-list">
          Description List
        </Heading>
        <DemoContainer>
          <DescriptionListExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="dropdown">
          Dropdown Menu
        </Heading>
        <DemoContainer>
          <DropdownExample />
        </DemoContainer>
        <Heading as="h3" id="dropdown-checkbox">
          With Checkboxes
        </Heading>
        <DemoContainer>
          <DropdownCheckboxExample />
        </DemoContainer>
        <Heading as="h3" id="dropdown-radio">
          With Radio Items
        </Heading>
        <DemoContainer>
          <DropdownRadioExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="heading">
          Heading
        </Heading>
        <DemoContainer>
          <HeadingExampleSize />
        </DemoContainer>
        <Heading as="h3">With subtitle</Heading>
        <DemoContainer>
          <HeadingExampleWithSubtitle />
        </DemoContainer>
        <Heading as="h3">Color</Heading>
        <DemoContainer>
          <HeadingExampleColor />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="hover-card">
          Hover Card
        </Heading>
        <DemoContainer>
          <HoverCardExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="inline-citation">
          Inline Citation
        </Heading>
        <DemoContainer>
          <InlineCitationExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="input">
          Input
        </Heading>
        <DemoContainer>
          <InputExample />
        </DemoContainer>
        <Heading as="h3" id="input-group">
          Input Group
        </Heading>
        <DemoContainer>
          <InputGroupExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="item">
          Item
        </Heading>
        <DemoContainer className="w-full">
          <ItemExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="kbd">
          Kbd
        </Heading>
        <DemoContainer>
          <KbdExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="label">
          Label
        </Heading>
        <DemoContainer>
          <LabelExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="navigation-menu">
          Navigation Menu
        </Heading>
        <div className="not-prose my-6">
          <NavigationMenuExample />
        </div>
        <hr />

        <Heading as="h2" copy id="paragraph">
          Paragraph
        </Heading>
        <DemoContainer>
          <ParagraphExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="popover">
          Popover
        </Heading>
        <DemoContainer>
          <PopoverExample />
        </DemoContainer>
        <Heading as="h3" id="info-button">
          InfoButton
        </Heading>
        <DemoContainer>
          <InfoButton>Some more info here</InfoButton>
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="select">
          Select
        </Heading>
        <DemoContainer>
          <SelectExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="separator">
          Separator
        </Heading>
        <DemoContainer>
          <SeparatorExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="slider">
          Slider
        </Heading>
        <DemoContainer>
          <SliderExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="sheet">
          Sheet
        </Heading>
        <DemoContainer>
          <SheetExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="skeleton">
          Skeleton
        </Heading>
        <DemoContainer>
          <SkeletonExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="spinner">
          Spinner{' '}
          <Badge variant="default" color="warning" className="ms-1">
            Experimental
          </Badge>
        </Heading>
        <DemoContainer>
          <SpinnerExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="switch">
          Switch
        </Heading>
        <DemoContainer>
          <SwitchExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="tag">
          Tag
        </Heading>
        <DemoContainer>
          <TagExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="tabs">
          Tabs
        </Heading>
        <DemoContainer>
          <TabsBasicExample />
        </DemoContainer>
        <DemoContainer>
          <TabsDemo />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="textarea">
          Textarea
        </Heading>
        <DemoContainer>
          <TextareaExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="toggle">
          Toggle
        </Heading>
        <DemoContainer>
          <ToggleExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="toggle-group">
          Toggle Group
        </Heading>
        <DemoContainer>
          <ToggleGroupExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="tooltip">
          Tooltip
        </Heading>
        <DemoContainer>
          <TooltipExample />
        </DemoContainer>
        <hr />

        <Heading as="h2" copy id="toast">
          Toast
        </Heading>
        <DemoContainer>
          <ToastExample />
        </DemoContainer>
        <Heading as="h3" id="toast-action">
          With Action
        </Heading>
        <DemoContainer>
          <ToastWithActionExample />
        </DemoContainer>
        <Heading as="h3" id="toast-promise">
          Promise
        </Heading>
        <DemoContainer>
          <ToastPromiseExample />
        </DemoContainer>
        <Heading as="h3" id="toast-heights">
          With Varying Heights
        </Heading>
        <DemoContainer>
          <ToastVaryingHeightsExample />
        </DemoContainer>
        <Heading as="h3" id="toast-manual-dismiss">
          Manual Dismiss
        </Heading>
        <DemoContainer>
          <ToastManualDismissExample />
        </DemoContainer>
        <hr />
      </div>
    </div>
  );
}
