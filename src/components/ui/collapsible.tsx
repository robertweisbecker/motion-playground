'use client';

import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';

import { cn } from '@/lib/utils';
import { resolveRenderProp } from '@/lib/resolve-render';

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  render,
  asChild = false,
  children,
  ...props
}: CollapsiblePrimitive.Trigger.Props & { asChild?: boolean }) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      render={resolveRenderProp(render, asChild, children)}
      {...props}
    >
      {resolveRenderProp(render, asChild, children) ? undefined : children}
    </CollapsiblePrimitive.Trigger>
  );
}

function CollapsibleContent({
  className,
  ...props
}: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      {...props}
      className={cn(
        'overflow-hidden',
        'data-closed:animate-collapse',
        'data-open:animate-expand',
        className,
      )}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
