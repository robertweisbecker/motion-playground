import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { BoldIcon, ItalicIcon, UnderlineIcon } from '@heroicons/react/16/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';

export function ToggleExample() {
  return (
    <div className="grid w-full grid-cols-2 justify-items-start gap-4">
      <h2 className="col-span-2 mb-4">Toggle</h2>
      <p>Icon</p>

      <Toggle variant="base" className="data-[state=on]:[&_svg]:fill-current">
        <OutlineStarIcon />
      </Toggle>
      <p>Label</p>
      <Toggle variant="base" className="data-[state=on]:[&_svg]:fill-current">
        <OutlineStarIcon /> Favorite
      </Toggle>

      <p>Group</p>
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
    </div>
  );
}
