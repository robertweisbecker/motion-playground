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
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { HomeIcon, SwatchIcon } from '@heroicons/react/24/outline';

import { ChevronDownIcon } from 'lucide-react';
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
          title: 'Tailwind Testing',
          url: '/experiments/tailwind',
        },
        {
          title: 'CSS Animations',
          url: '/experiments/css-animations',
        },

        {
          title: 'Forms',
          url: '/experiments/forms',
        },
      ],
    },
  ],
};

export function SideNav({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  // const currentPage = pathname === href;
  return (
    <Sidebar {...props} variant="inset">
      {/* <SidebarHeader>
        <span className="text-sm font-semibold">Motion Playground</span>
      </SidebarHeader> */}
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
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
                          // isActive={pathname.includes(item.url)}
                        >
                          <CollapsibleTrigger>
                            <ChevronDownIcon className="size-4 text-gray-400 transition-transform group-data-[state=open]/collapsible:rotate-180" />
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
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>
                        <span className="min-w-[1em]">{item.icon}</span>
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
