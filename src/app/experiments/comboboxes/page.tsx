'use client';

import { Combobox } from '@base-ui/react/combobox';
import { useState } from 'react';
import { Heading } from '@/components/heading';
import { DemoContainer } from '@/components/demo-container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { XMarkIcon, CheckIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Tag } from '@/components/tag';
import { Label } from '@/components/ui/label';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Papaya',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tangerine',
  'Watermelon',
];

export default function ComboboxesPage() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div>
      <Heading as="h1">Comboboxes</Heading>
      <DemoContainer>
        <div className="w-full max-w-sm space-y-2">
          <Combobox.Root value={value} onValueChange={setValue}>
            <div className="relative">
              <Combobox.Input className="min-h-button rounded-lg ps-3.5 shadow-sm ring ring-border-alpha" />
              <Combobox.Trigger
                render={
                  <Button
                    variant="invisible"
                    size="icon"
                    // className="absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2"
                    aria-label="Open combobox"
                  >
                    <ChevronDownIcon />
                  </Button>
                }
              />
            </div>
            <Combobox.Portal>
              <Combobox.Positioner>
                <Combobox.Popup
                  className={cn(
                    'z-50 min-w-[--available-width] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
                    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
                  )}
                >
                  <Combobox.List className="max-h-32 overflow-auto">
                    {items.map((item) => (
                      <Combobox.Item
                        key={item}
                        value={item}
                        className={cn(
                          'relative flex cursor-default items-center rounded-sm px-3 py-1.5 text-sm outline-none select-none',
                          'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
                          'data-disabled:pointer-events-none data-disabled:opacity-50',
                        )}
                      >
                        {item}
                      </Combobox.Item>
                    ))}
                  </Combobox.List>
                </Combobox.Popup>
              </Combobox.Positioner>
            </Combobox.Portal>
          </Combobox.Root>
          {value && (
            <p className="text-sm text-muted-foreground">
              Selected: <strong>{value}</strong>
            </p>
          )}
        </div>
      </DemoContainer>
      <ExampleMultipleCombobox />
      <ExampleInputGroupCombobox />
    </div>
  );
}

function ExampleMultipleCombobox() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const id = React.useId();

  return (
    <Combobox.Root items={langs} multiple>
      {/* <Combobox.Backdrop
        className={cn(
          'fixed inset-0 z-100 bg-linear-to-b from-black/15 to-black/40 data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:duration-150 data-[state=open]:fade-in-0',
          'backdrop-blur-[.5px]',
        )}
      /> */}
      <div className="mb-4 flex max-w-md flex-col gap-1">
        <Label htmlFor={id} label="Programming languages" />
        <Combobox.Chips
          className="group/combobox relative flex min-h-button w-64 flex-wrap items-center gap-1 rounded-lg py-1 ps-1 pe-6 inset-shadow-2xs outline -outline-offset-1 outline-border-alpha transition-[background-color] focus-within:bg-card focus-within:outline-2 focus-within:outline-blue-500 hover:bg-card min-[500px]:w-88"
          ref={containerRef}
        >
          <Combobox.Value>
            {(value: ProgrammingLanguage[]) => (
              <React.Fragment>
                {value.map((language) => (
                  <Combobox.Chip
                    key={language.id}
                    aria-label={language.value}
                    render={
                      <Tag className="group/tag relative focus:bg-primary focus:text-primary-foreground">
                        {language.value}
                        <Combobox.ChipRemove
                          aria-label="Remove"
                          render={
                            <Button
                              variant="ghost"
                              size="icon-xs"
                              iconOnly
                              className="-mx-1 -my-1 text-muted-foreground hover:text-current"
                            >
                              <XMarkIcon />
                            </Button>
                          }
                        ></Combobox.ChipRemove>
                      </Tag>
                    }
                  ></Combobox.Chip>
                ))}
                <Combobox.Input
                  id={id}
                  placeholder={value.length > 0 ? '' : 'e.g. TypeScript'}
                  className="min-h-[calc(var(--spacing-button)---spacing(2))] min-w-12 flex-1 basis-1/3 rounded-md border-0 bg-transparent indent-1.5 text-base outline-none sm:text-sm"
                ></Combobox.Input>
              </React.Fragment>
            )}
          </Combobox.Value>
          <Combobox.Trigger className="absolute top-0 right-0 size-button cursor-text">
            <ChevronDownIcon className="-mt-0.5 size-5 text-icon" />
          </Combobox.Trigger>
        </Combobox.Chips>
      </div>

      <Combobox.Portal>
        <Combobox.Positioner
          className="z-50 outline-none"
          sideOffset={4}
          alignOffset={-4}
          anchor={containerRef}
        >
          <Combobox.Popup className="max-h-[min(var(--available-height),16rem)] w-[calc(var(--anchor-width)+--spacing(2))] max-w-(--available-width) origin-(--transform-origin) scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-xl bg-popover text-foreground shadow-lg outline outline-outline transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 dark:-outline-offset-1">
            <Combobox.Empty className="px-4 py-2 text-sm text-muted-foreground empty:m-0 empty:p-0">
              No languages found.
            </Combobox.Empty>
            <Combobox.List className="p-1">
              {(language: ProgrammingLanguage) => (
                <Combobox.Item
                  key={language.id}
                  className="grid cursor-default grid-cols-[1fr_auto] items-center gap-2 py-2 ps-2.5 pe-2 text-sm outline-none select-none data-active:bg-muted data-active:text-muted-foreground data-highlighted:relative data-highlighted:rounded-md data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                  value={language}
                >
                  <span className="col-start-1">{language.value}</span>
                  <Combobox.ItemIndicator className="col-start-2">
                    <CheckIcon className="size-4" />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

function ExampleInputGroupCombobox() {
  return (
    <Combobox.Root>
      <InputGroup>
        <Combobox.Input render={<InputGroupInput />} />
        <InputGroupAddon>
          <Combobox.Trigger
            render={
              <Button variant="invisible" size="icon" iconOnly>
                <ChevronDownIcon />
              </Button>
            }
          />
        </InputGroupAddon>
      </InputGroup>
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Popup className="max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-xl bg-popover text-foreground shadow-xl outline outline-outline transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 dark:-outline-offset-1 dark:outline-border-alpha">
            <Combobox.Empty className="px-4 py-2 text-sm text-muted-foreground empty:m-0 empty:p-0">
              No languages found.
            </Combobox.Empty>
            <Combobox.List className="p-1">
              {(language: ProgrammingLanguage) => (
                <Combobox.Item
                  key={language.id}
                  className="grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-1.5 pr-8 pl-3 text-sm outline-none select-none data-highlighted:relative data-highlighted:rounded-md data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                  value={language}
                >
                  <Combobox.ItemIndicator className="col-start-1">
                    <CheckIcon className="size-3" />
                  </Combobox.ItemIndicator>
                  <span className="col-start-2">{language.value}</span>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

interface ProgrammingLanguage {
  id: string;
  value: string;
}

const langs: ProgrammingLanguage[] = [
  { id: 'js', value: 'JavaScript' },
  { id: 'ts', value: 'TypeScript' },
  { id: 'py', value: 'Python' },
  { id: 'java', value: 'Java' },
  { id: 'cpp', value: 'C++' },
  { id: 'cs', value: 'C#' },
  { id: 'php', value: 'PHP' },
  { id: 'ruby', value: 'Ruby' },
  { id: 'go', value: 'Go' },
  { id: 'rust', value: 'Rust' },
  { id: 'swift', value: 'Swift' },
];
