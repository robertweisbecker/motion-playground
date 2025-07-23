'use client';

import * as React from 'react';
// import { IconMenu3 } from "@tabler/icons-react"
import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '0% 0% -60% 0%', threshold: 1 },
    );

    for (const id of itemIds ?? []) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      }
    };
  }, [itemIds]);

  return activeId;
}

export function PageNav({
  items,
  variant = 'list',
  className,
}: {
  items: {
    title?: string;
    url: string;
    depth?: number;
    isDisabled?: boolean;
  }[];
  variant?: 'dropdown' | 'list';
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const itemIds = React.useMemo(() => items.map((item) => item.url.replace('#', '')), [items]);
  const activeHeading = useActiveItem(itemIds);

  if (!items?.length) {
    return null;
  }

  if (variant === 'dropdown') {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className={cn('h-8 md:h-7', className)}>
            <Bars3BottomLeftIcon /> On This Page
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="no-scrollbar max-h-[70svh]">
          {items.map((item) => (
            <DropdownMenuItem
              key={item.url}
              asChild
              onClick={() => {
                setOpen(false);
              }}
              data-depth={item.depth}
              className="data-[depth=3]:pl-6 data-[depth=4]:pl-8"
            >
              <a href={item.url}>{item.title}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const itemClasses =
    'pl-[calc(var(--depth)*0.5rem)] rounded-l-none w-full border-l text-left justify-start text-[0.8rem] no-underline transition-colors data-[active=true]:font-[475]';

  return (
    <SidebarMenu className={cn('mt-0 flex flex-col gap-0 overflow-y-auto px-4 text-xs', className)}>
      <SidebarGroupLabel className="text-muted-foreground bg-background sticky top-0 h-6 text-xs">
        <Bars3BottomLeftIcon /> Jump to:
      </SidebarGroupLabel>
      <SidebarGroupContent className="shadow-border shadow-[inset_1px_0]">
        {items.map((item) => (
          <SidebarMenuItem key={item.url} style={{ '--depth': item.depth } as React.CSSProperties}>
            {item.isDisabled ? (
              <SidebarMenuButton disabled={item.isDisabled} size="sm" className={itemClasses}>
                {item.title}
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton asChild size="sm">
                <a
                  // key={item.url}
                  href={item.url}
                  className={cn(itemClasses, 'border-l data-[active=true]:border-l-current')}
                  data-active={item.url === `#${activeHeading}`}
                  data-depth={item.depth}
                >
                  {item.title}
                </a>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarGroupContent>
    </SidebarMenu>
  );
}
