'use client';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, stagger, LayoutGroup } from 'framer-motion';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
import { HomeIcon, SwatchIcon, ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

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
    },
    {
      title: 'Demos',
      url: '/demos',
      isOpen: undefined,
      items: [
        {
          title: 'Animated Button Icon',
          url: '/demos/button-hover',
        },
        {
          title: 'Tab Indicator',
          url: '/demos/tab-indicator',
        },
        {
          title: 'Toast',
          url: '/demos/toast',
        },
        {
          title: 'Emoji Feedback',
          url: '/demos/emoji-feedback',
        },
      ],
    },
    {
      title: 'Experiments',
      url: '#',
      isOpen: undefined,
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
          title: 'Tailwind Testing',
          url: '/experiments/tailwind',
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
    <Sidebar {...props} variant="sidebar">
      <SidebarHeader className="md:sr-only">
        <span className="text-sm font-medium">bob.fyi/motion-playground</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <LayoutGroup>
            {data.navMain.map((item) =>
              item.items ? (
                <SidebarMenuItem
                  key={item.title}
                  title={item.title}
                  className={cn(pathname.includes(item.url) && '[&*]:text-red-500')}
                >
                  <MCollapsible
                    className={cn('group/collapsible')}
                    // open={open}
                    // onOpenChange={setOpen}
                  >
                    {/* <SidebarMenu className="group/menu"> */}
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        'data-[state=open]:text-sidebar-accent-foreground',
                        pathname.includes(item.url) &&
                          'text-sidebar-accent-foreground data-[state=closed]:bg-sidebar-accent/70 data-[state=closed]:font-medium',
                      )}
                    >
                      <CollapsibleTrigger>
                        <span
                          className={cn(
                            'shadow-sidebar-border grid size-5 place-items-center rounded-full opacity-60',
                            'group-data-open/collapsible:opacity-100',
                            // 'group-data-open/collapsible:bg-accent/50',
                            // 'group-data-open/collapsible:shadow-[inset_0_1px,inset_0_0_0_1px]',
                          )}
                        >
                          <ChevronDownIcon className="ease h-4 w-4 transition-all group-data-open/collapsible:rotate-180" />
                        </span>
                        {item.title}
                        <SidebarMenuBadge className="in-data-[state=open]:hidden">
                          {item.items.length}
                        </SidebarMenuBadge>
                      </CollapsibleTrigger>
                    </SidebarMenuButton>
                    <MCollapsibleContent key={item.title} hidden={false} layout>
                      <MSidebarMenuSub layout>
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
                                  aria-current={pathname === item.url ? 'page' : 'false'}
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
                    isActive={pathname === item.url}
                    className="data-[active=true]:[&>span]:bg-sidebar-primary data-[active=true]:[&>span]:text-sidebar-primary-foreground data-[active=true]:[&>span]:shadow-button-highlight"
                  >
                    <Link href={item.url}>
                      <span className="bg-sidebar-accent text-sidebar-foreground/60 inset-ring-border-alpha grid-stack size-5 rounded-[5px] bg-linear-to-br text-center">
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
