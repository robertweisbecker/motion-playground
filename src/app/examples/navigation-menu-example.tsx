'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

export function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full flex-col justify-end rounded-xl bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-muted-foreground focus:bg-muted focus:text-muted-foreground"
                    href="/docs"
                  >
                    <div className="text-sm leading-none font-medium">
                      Introduction
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-muted-foreground focus:bg-muted focus:text-muted-foreground"
                    href="/docs/components/alert"
                  >
                    <div className="text-sm leading-none font-medium">
                      Alert
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Displays a callout for user attention.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-muted-foreground focus:bg-muted focus:text-muted-foreground"
                    href="/docs/components/button"
                  >
                    <div className="text-sm leading-none font-medium">
                      Button
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Displays a button or a component that looks like a button.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="ghost" asChild>
            <a href="/docs">Documentation</a>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
