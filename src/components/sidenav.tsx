'use client';
import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

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
} from '@/components/ui/sidebar';
import { HomeIcon, SwatchIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

const data = {
  navMain: [
    {
      title: 'Home',
      url: '/',
      icon: <HomeIcon />,
    },
    {
      title: 'Component Playground',
      url: '/components',
      icon: <SwatchIcon />,
    },
    {
      title: 'Demos',
      url: '/demos',
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
      ],
    },
    {
      title: 'Experiments',
      url: '#',
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

export function SideNav({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);

  return (
    <Sidebar {...props} variant="sidebar">
      <SidebarHeader className="sm:sr-only">
        <span className="text-sm font-medium">bob.fyi/motion-playground</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) =>
                item.items ? (
                  <SidebarMenuItem key={item.title} title={item.title}>
                    <Collapsible defaultOpen className="group/collapsible">
                      <SidebarMenu className="group/menu">
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            pathname.includes(item.url) &&
                              'data-[state=closed]:bg-sidebar-accent/70 data-[state=closed]:text-sidebar-accent-foreground data-[state=closed]:font-medium',
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
                        <CollapsibleContent>
                          <SidebarGroupContent>
                            <SidebarMenuSub>
                              {item.items.map((item) => (
                                <SidebarMenuSubItem key={item.title}>
                                  <SidebarMenuSubButton asChild isActive={pathname === item.url}>
                                    <Link href={item.url}>{item.title}</Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </SidebarGroupContent>
                        </CollapsibleContent>
                      </SidebarMenu>
                    </Collapsible>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem key={item.title} title={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className="data-[active=true]:[&>span]:bg-sidebar-primary data-[active=true]:[&>span]:text-sidebar-primary-foreground data-[active=true]:[&>span]:shadow-button-highlight data-[active=true]:[&>span]:-ring-offset-1 data-[active=true]:[&>span]:ring-1"
                    >
                      <Link href={item.url}>
                        <span className="shadow-button-base size-5 rounded-xs text-center ring-[color-mix(in_oklch,var(--color-sidebar-primary)_80%,var(--color-black))]">
                          {item.icon}
                        </span>
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
