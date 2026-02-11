'use client';

import { Heading } from '@/components/heading';
import { DemoContainer } from '@/components/demo-container';
import { cn } from '@/lib/utils';
import { Code } from '@/components/code';

type ShadowDemo = {
  name: string;
  className: string;
  description?: string;
};

const defaultShadows: ShadowDemo[] = [
  {
    name: '2xs',
    className: 'shadow-2xs',
    description: '',
  },
  {
    name: 'xs',
    className: 'shadow-xs',
    description: '',
  },
  {
    name: 'sm',
    className: 'shadow-sm',
    description: '',
  },
  {
    name: 'md',
    className: 'shadow-md',
    description: '',
  },
  {
    name: 'lg',
    className: 'shadow-lg',
    description: '',
  },
  {
    name: 'xl',
    className: 'shadow-xl',
    description: '',
  },
  {
    name: '2xl',
    className: 'shadow-2xl',
    description: '',
  },
];

const insetShadows: ShadowDemo[] = [
  {
    name: 'inset-shadow-2xs',
    className: 'inset-shadow-2xs',
    description: 'Extra extra small inset shadow',
  },
  {
    name: 'inset-shadow-xs',
    className: 'inset-shadow-xs',
    description: 'Extra small inset shadow',
  },
  {
    name: 'inset-shadow-sm',
    className: 'inset-shadow-sm',
    description: 'Small inset shadow',
  },
  {
    name: 'inset-shadow-pressed',
    className: 'inset-shadow-pressed',
    description: 'Pressed state inset shadow',
  },
];

const outlinedShadows: ShadowDemo[] = [
  {
    name: 'shadow-outlined',
    className: 'shadow-outlined',
    description: 'Outlined shadow',
  },
  {
    name: 'inset-shadow-outlined',
    className: 'inset-shadow-outlined',
    description: 'Inset outlined shadow',
  },
];

const componentShadows: ShadowDemo[] = [
  {
    name: 'shadow-button',
    className: 'shadow-button',
    description: 'Button shadow',
  },
  {
    name: 'shadow-button-base',
    className: 'shadow-button-base',
    description: 'Base button shadow',
  },
  {
    name: 'shadow-button-primary',
    className: 'shadow-button-primary',
    description: 'Primary button shadow',
  },
  {
    name: 'shadow-button-inset',
    className: 'shadow-button-inset',
    description: 'Inset button shadow',
  },
  {
    name: 'shadow-button-highlight',
    className: 'shadow-button-highlight',
    description: 'Button highlight shadow',
  },
  {
    name: 'shadow-select-item',
    className: 'shadow-select-item',
    description: 'Select item shadow',
  },
  {
    name: 'shadow-dropdown-item',
    className: 'shadow-dropdown-item',
    description: 'Dropdown item shadow',
  },
  {
    name: 'shadow-popover',
    className: 'shadow-popover',
    description: 'Popover shadow',
  },
];

const glassShadows: ShadowDemo[] = [
  {
    name: 'shadow-glass',
    className: 'shadow-glass',
    description: 'Glass effect shadow',
  },
  {
    name: 'shadow-glass-1',
    className: 'shadow-glass-1',
    description: 'Glass effect shadow variant 1',
  },
  {
    name: 'shadow-glass-light',
    className: 'shadow-glass-light',
    description: 'Light glass effect shadow',
  },
];

function ShadowCard({ shadow }: { shadow: ShadowDemo }) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          'z-1 h-32 w-full rounded-lg bg-card p-4',
          shadow.className,
        )}
      >
        <div className="text-sm font-medium text-card-foreground">
          {shadow.name}
        </div>
        {shadow.description && (
          <div className="mt-1 text-xs text-muted-foreground">
            {shadow.description}
          </div>
        )}
      </div>
      <Code size="inherit" className="ms-2 block">
        .{shadow.className}
      </Code>
    </div>
  );
}

export default function ShadowsPage() {
  return (
    <div className="prose">
      <Heading as="h1">Shadows</Heading>
      <p className="text-muted-foreground">
        A comprehensive showcase of all shadow utilities available in the design
        system.
      </p>

      <Heading as="h2" id="default-shadows">
        Default Shadows
      </Heading>
      <p className="text-muted-foreground">
        Standard shadow sizes from extra extra small to large.
      </p>
      <DemoContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-8">
          {defaultShadows.map((shadow) => (
            <ShadowCard key={shadow.name} shadow={shadow} />
          ))}
        </div>
      </DemoContainer>

      <Heading as="h2" id="inset-shadows">
        Inset Shadows
      </Heading>
      <p className="text-muted-foreground">
        Inset shadows for pressed states and depth effects.
      </p>
      <DemoContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insetShadows.map((shadow) => (
            <ShadowCard key={shadow.name} shadow={shadow} />
          ))}
        </div>
      </DemoContainer>

      <Heading as="h2" id="custom-shadows">
        Custom Shadows
      </Heading>
      <p className="text-muted-foreground">
        Specialized shadows for specific components and effects.
      </p>

      <Heading as="h3" id="outlined-shadows">
        Outlined
      </Heading>
      <p className="text-muted-foreground">
        Outlined shadows for borders and outlines.
      </p>
      <DemoContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outlinedShadows.map((shadow) => (
            <ShadowCard key={shadow.name} shadow={shadow} />
          ))}
        </div>
      </DemoContainer>

      <Heading as="h3" id="component-shadows">
        Components
      </Heading>
      <p className="text-muted-foreground">
        Shadows designed for specific UI components like buttons, dropdowns, and
        popovers.
      </p>
      <DemoContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {componentShadows.map((shadow) => (
            <ShadowCard key={shadow.name} shadow={shadow} />
          ))}
        </div>
      </DemoContainer>
      <DemoContainer>
        <div className="flex gap-4 rounded-xl bg-background p-4 text-foreground">
          <div className="h-fit rounded-md bg-white/5 px-3 py-2 text-foreground shadow-select-item">
            Select Item
          </div>
          <div className="h-fit rounded-md bg-white/5 px-3 py-2 text-foreground shadow-dropdown-item">
            Dropdown Item
          </div>
          <div className="w-72 rounded-lg bg-popover p-1 shadow-popover">
            <div className="rounded-md px-3 py-1">Item</div>
            <div className="rounded-md bg-accent px-3 py-1 text-foreground shadow-select-item">
              Select Item
            </div>
            <div className="rounded-md px-3 py-1">Item</div>
            <div className="rounded-md px-3 py-1">Item</div>
          </div>
          <div className="w-72 rounded-lg bg-card p-1 shadow-popover">
            <div className="rounded-md px-3 py-1">Item</div>
            <div className="rounded-md bg-accent px-3 py-1 text-foreground shadow-dropdown-item">
              Dropdown Item
            </div>
            <div className="rounded-md px-3 py-1">Item</div>
            <div className="rounded-md px-3 py-1">Item</div>
          </div>
        </div>
      </DemoContainer>
      <Heading as="h3" id="glass-shadows">
        Glass
      </Heading>
      <p className="text-muted-foreground">
        Glass morphism effect shadows with frosted glass appearance.
      </p>
      <DemoContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {glassShadows.map((shadow) => (
            <ShadowCard key={shadow.name} shadow={shadow} />
          ))}
        </div>
      </DemoContainer>
    </div>
  );
}
