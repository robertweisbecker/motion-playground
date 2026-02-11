'use client';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, stagger, LayoutGroup } from 'framer-motion';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import {
  HomeIcon,
  SwatchIcon,
  ChevronDownIcon,
  Squares2X2Icon,
  RectangleStackIcon,
  PaintBrushIcon,
  PlayIcon,
  BoltIcon,
  Bars3Icon,
  BellIcon,
  FaceSmileIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const data = {
  navMain: [
    {
      title: 'Home',
      url: '/',
      icon: <HomeIcon />,
    },
    {
      title: 'Components',
      url: '/components',
      icon: <Squares2X2Icon />,
    },
    {
      title: 'Colors',
      url: '/colors',
      icon: <SwatchIcon />,
      isGroup: true,
      items: [
        {
          title: 'Palettes',
          url: '/colors',
          icon: <RectangleStackIcon />,
        },
        {
          title: 'Theming',
          url: '/colors/theme',
          icon: <PaintBrushIcon />,
        },
      ],
    },
    {
      title: 'Demos',
      url: '/demos',
      icon: <PlayIcon />,
      isOpen: true,
      items: [
        {
          title: 'Icon Effects',
          url: '/demos/button-hover',
          icon: <BoltIcon />,
        },
        {
          title: 'Tab Indicator',
          url: '/demos/tab-indicator',
          icon: <Bars3Icon />,
        },
        {
          title: 'Toast',
          url: '/demos/toast',
          icon: <BellIcon />,
        },
        {
          title: 'Emoji Feedback',
          url: '/demos/emoji-feedback',
          icon: <FaceSmileIcon />,
        },
        {
          title: 'Shadows',
          url: '/demos/shadows',
          icon: <Square3Stack3DIcon />,
        },
      ],
    },
    {
      title: 'Experiments',
      url: '#',
      isOpen: true,
      items: [
        {
          title: 'Framer Motion',
          url: '/experiments/framer-motion',
        },
        {
          title: 'CSS Animations',
          url: '/experiments/css-animations',
        },
        {
          title: 'Forms',
          url: '/experiments/forms',
        },
        {
          title: 'Comboboxes',
          url: '/experiments/comboboxes',
        },
        {
          title: 'Tailwind Testing',
          url: '/experiments/tailwind',
        },
        {
          title: 'Timeline',
          url: '/experiments/timeline',
        },
      ],
    },
  ],
};

const collapsibleContentVariants = {
  collapsed: { height: '0' },
  expanded: {
    height: '--radix-collapsible-content-height',
  },
};

export function SideNav({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const CollapseVariants = {
    collapsed: { opacity: 0, height: null },
    expanded: {
      opacity: 1,
      height: 'auto',
      transition: {
        delayChildren: 0.1,
      },
    },
  };
  const pathname = usePathname();
  console.log(pathname);
  const MCollapsibleContent = motion.create(CollapsibleContent);
  const MCollapsible = motion.create(Collapsible);
  const MSidebarMenuSub = motion.create(SidebarMenuSub);
  const [open, setOpen] = React.useState(false);

  return (
    <Sidebar {...props} variant="inset">
      <SidebarHeader className="md:sr-only">
        <span className="text-sm font-medium">bob.fyi/motion-playground</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <LayoutGroup>
            {data.navMain.map((item) =>
              item.isGroup ? (
                <SidebarGroup key={item.title}>
                  <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                  <SidebarGroupAction>
                    <ChevronDownIcon />
                  </SidebarGroupAction>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.items?.map((subItem) => (
                        <SidebarMenuItem
                          key={subItem.title}
                          title={subItem.title}
                        >
                          <SidebarMenuButton
                            variant="elevated"
                            asChild
                            isActive={pathname === subItem.url}
                            className="truncate"
                          >
                            <Link href={subItem.url}>
                              {subItem.icon ? (
                                <span
                                  className={cn(
                                    'grid-stack size-5 -translate-x-px rounded-[5px] bg-accent text-icon',
                                    'in-data-[active=true]:bg-current/1 in-data-[active=true]:text-sidebar-foreground in-data-[active=true]:shadow-button-highlight',
                                  )}
                                >
                                  {subItem.icon}
                                </span>
                              ) : (
                                <span className="size-5 -translate-x-px" />
                              )}

                              {subItem.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ) : item.items ? (
                <SidebarMenuItem key={item.title} title={item.title}>
                  <MCollapsible
                    className={cn('group/collapsible')}
                    defaultOpen={pathname.includes(item.url)}
                  >
                    {/* <SidebarMenu className="group/menu"> */}
                    <SidebarMenuButton asChild>
                      <CollapsibleTrigger>
                        <span
                          className={cn(
                            'grid size-5 place-items-center rounded-[5px] text-icon',
                            'group-data-open/collapsible:opacity-100',
                            'group-data-open/collapsible:bg-accent/0 group-data-open/collapsible:text-sidebar-foreground',
                            // 'group-data-open/collapsible:shadow-[inset_0_1px,inset_0_0_0_1px]',
                          )}
                        >
                          <ChevronDownIcon className="ease size-4 transition-all group-data-open/collapsible:rotate-180" />
                        </span>
                        {item.title}
                        <SidebarMenuBadge>{item.items.length}</SidebarMenuBadge>
                      </CollapsibleTrigger>
                    </SidebarMenuButton>
                    <MCollapsibleContent key={item.title}>
                      <MSidebarMenuSub>
                        <AnimatePresence mode="popLayout">
                          {item.items.map((item, index) => (
                            <motion.div
                              initial={{
                                // y: -2 * index,
                                origin: 'top',
                                y: -5 * index,
                                opacity: 0.8,
                                // height: 0,
                              }}
                              animate={{ opacity: 1, y: 0, height: 'initial' }}
                              exit={{ y: -10 * index, opacity: 0 }}
                              transition={{ delay: 0.01 * index, bounce: 0 }}
                              key={item.title}
                            >
                              <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === item.url}
                                  aria-current={
                                    pathname === item.url ? 'page' : 'false'
                                  }
                                >
                                  <Link href={item.url}>{item.title}</Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </MSidebarMenuSub>
                    </MCollapsibleContent>
                    {/* </SidebarMenu> */}
                  </MCollapsible>
                </SidebarMenuItem>
              ) : (
                <SidebarMenuItem key={item.title} title={item.title}>
                  <SidebarMenuButton
                    asChild
                    variant="elevated"
                    isActive={pathname === item.url}
                    // className="data-[active=true]:[&>span]:bg-primary data-[active=true]:[&>span]:text-primary-foreground data-[active=true]:[&>span]:shadow-button-highlight"
                  >
                    <Link href={item.url}>
                      <span
                        className={cn(
                          'grid-stack size-5 -translate-x-px rounded-[5px] bg-muted text-icon',
                          'in-data-[active=true]:bg-sidebar-accent in-data-[active=true]:text-sidebar-accent-foreground in-data-[active=true]:shadow-button',
                        )}
                      >
                        {item.icon}
                      </span>
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ),
            )}
          </LayoutGroup>
        </SidebarMenu>
      </SidebarContent>
      {/* <SidebarRail className="group in-data-[state=collapsed]:data-[collapsible=offcanvas]:translate-x-1/2">
        <div
          className={cn(
            'bg-popover text-foreground ease z-50 my-auto grid size-4 place-items-center rounded-full opacity-0 shadow-md transition-[opacity,scale] duration-200 in-data-[state=expanded]:scale-50',
            'group-hover:scale-100 group-hover:opacity-100',
            'in-data-[state=collapsed]:rotate-180 in-data-[state=collapsed]:opacity-100',
          )}
        >
          <ChevronLeftIcon />
        </div>
      </SidebarRail> */}
    </Sidebar>
  );
}
