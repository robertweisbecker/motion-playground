import { Toggle } from '@/components/ui/toggle';
import {
  CampsiteToggleGroup,
  ToggleGroup,
  ToggleGroupItem,
} from '@/components/ui/toggle-group';

import { BoldIcon, ItalicIcon, UnderlineIcon } from '@heroicons/react/16/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { SidebarClosedIcon, SidebarOpenIcon } from '../icons/icons';
import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/20/solid';
import { FigmaIcon } from 'lucide-react';
import { Paragraph } from '@/components/paragraph';

export function ToggleExample() {
  const [toggled, setToggled] = React.useState(false);
  const [value, setValue] = React.useState('image');
  return (
    <div className="flex flex-col gap-2">
      <Paragraph>Variants</Paragraph>
      <div className="mb-4 flex items-center gap-2">
        <Toggle variant="default">Default</Toggle>
        <Toggle variant="ghost">Ghost</Toggle>
        <Toggle variant="outline">Outline</Toggle>
        <Toggle variant="dashed">Dashed</Toggle>
      </div>
      <div className="not-prose grid w-full grid-cols-2 justify-items-start gap-4">
        <p>Icon</p>
        <Toggle
          variant="ghost"
          className="data-[state=on]:[&_svg]:fill-current"
        >
          <OutlineStarIcon />
        </Toggle>
        <p>Label</p>
        <Toggle
          variant="ghost"
          className="data-[state=on]:[&_svg]:fill-current"
        >
          <OutlineStarIcon /> Favorite
        </Toggle>
        <p>Group</p>
        <ToggleGroup variant="ghost" type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        + Outline
        <ToggleGroup variant="outline" type="multiple">
          <ToggleGroupItem value="bold-outline" aria-label="Toggle bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic-outline" aria-label="Toggle italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough-outline"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        + Dashed
        <ToggleGroup variant="dashed" type="multiple">
          <ToggleGroupItem value="bold-outline" aria-label="Toggle bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic-outline" aria-label="Toggle italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough-outline"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        Campsite
        <div className="bg-white p-1 dark:bg-black">
          <CampsiteToggleGroup
            onValueChange={(value) => {
              setValue(value);
            }}
            value={value}
            items={[
              { value: 'image', label: 'Image', icon: <PhotoIcon /> },
              { value: 'embed', label: 'Video', icon: <VideoCameraIcon /> },
              { value: 'image2', label: 'Image' },
              { value: 'embed2', label: 'Video' },
            ]}
          />
        </div>
        Change icon
        <Toggle
          variant="ghost"
          size="lg"
          pressed={toggled}
          onPressedChange={setToggled}
        >
          {toggled ? <SidebarOpenIcon /> : <SidebarClosedIcon />}
        </Toggle>
      </div>
    </div>
  );
}
