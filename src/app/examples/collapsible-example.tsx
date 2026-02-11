'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import {
  Item,
  ItemTitle,
  ItemContent,
  ItemGroup,
  ItemSeparator,
} from '@/components/ui/item';
import { AnimatePresence, motion } from 'framer-motion';

export function CollapsibleExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="text" className="w-full">
          <ChevronDownIcon
            className={cn(
              'transition-transform duration-150 ease-in',
              isOpen && 'rotate-180',
            )}
          />
          <AnimatePresence mode="popLayout">
            <motion.span
              initial={{ opacity: 0, filter: 'blur(1px)', y: isOpen ? -8 : 8 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(1px)', y: isOpen ? -8 : 8 }}
              transition={{ duration: 0.2 }}
              key={isOpen ? 'openText' : 'closeText'}
            >
              {isOpen ? 'Collapse' : 'Expand'}
            </motion.span>
          </AnimatePresence>
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <ItemGroup>
          <Item>
            <ItemContent>
              <ItemTitle>@radix-ui/colors</ItemTitle>
            </ItemContent>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemContent>
              <ItemTitle>@stitches/react</ItemTitle>
            </ItemContent>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemContent>
              <ItemTitle>@stitches/react</ItemTitle>
            </ItemContent>
          </Item>
        </ItemGroup>
      </CollapsibleContent>
    </Collapsible>
  );
}
