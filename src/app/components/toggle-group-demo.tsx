import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="base" type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
