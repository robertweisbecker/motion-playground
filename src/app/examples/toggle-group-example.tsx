'use client';

import { Label } from '@/components/ui/label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export function ToggleGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full basis-full">
        <Label htmlFor="toggle-group-icon-single" className="w-full basis-full">
          Single
        </Label>
        <ToggleGroup id="toggle-group-icon-single" type="single">
          <ToggleGroupItem
            id="toggle-group-icon-single-bold"
            value="bold"
            aria-label="Toggle bold"
          >
            <BoldIcon className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            id="toggle-group-icon-single-italic"
            value="italic"
            aria-label="Toggle italic"
          >
            <ItalicIcon className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            id="toggle-group-icon-single-underline"
            value="underline"
            aria-label="Toggle underline"
          >
            <UnderlineIcon className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          Italic
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          Underline
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="left" aria-label="Left aligned">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Center aligned">
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right aligned">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
