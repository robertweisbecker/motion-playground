import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { BoldIcon, ItalicIcon, UnderlineIcon } from '@heroicons/react/16/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { SidebarClosedIcon, SidebarOpenIcon } from '../icons/icons';

export function ToggleExample() {
  const [toggled, setToggled] = React.useState(false);
  return (
    <div className="not-prose grid w-full grid-cols-2 justify-items-start gap-4">
      <p>Icon</p>

      <Toggle variant="ghost" className="data-[state=on]:[&_svg]:fill-current">
        <OutlineStarIcon />
      </Toggle>
      <p>Label</p>
      <Toggle variant="ghost" className="data-[state=on]:[&_svg]:fill-current">
        <OutlineStarIcon /> Favorite
      </Toggle>

      <Toggle variant="ghost" size="lg" pressed={toggled} onPressedChange={setToggled}>
        {toggled ? <SidebarOpenIcon /> : <SidebarClosedIcon />}
      </Toggle>

      <p>Group</p>
      <ToggleGroup variant="ghost" type="multiple">
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
