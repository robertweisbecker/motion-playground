'use client';
import { Heading } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LinkOutIcon } from '../../icons/icons';

export default function ThemePage() {
  const hues = [
    'ruby',
    'red',
    'orange',
    'yellow',
    'gold',
    'lime',
    'green',
    'jade',
    'teal',
    'cyan',
    'blue',
    'navy',
    'indigo',
    'violet',
    'purple',
    'magenta',
    'pink',
  ];
  const neutrals = [
    'black',
    'gray',
    'zinc',
    'ash',
    'plum',
    'sand',
    'sage',
    'steel',
    'black-alpha',
    'white-alpha',
    'gray-alpha',
  ];
  const palettes = [...hues, ...neutrals];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Heading as="h1">Theme</Heading>
        <Paragraph className="mt-2 text-muted-foreground">
          Button variants across different color palettes
        </Paragraph>
      </div>

      <div className="flex flex-col gap-4">
        {palettes.map((value) => (
          <div
            key={value}
            data-hue={value}
            className="relative flex flex-wrap gap-2 rounded-lg bg-muted p-4 shadow-xs"
          >
            <Badge className="absolute top-2 right-2">{value}</Badge>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">
              Secondary <LinkOutIcon />
            </Button>
            <Button variant="outline">Outline</Button>
            <Button variant="default">Default</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
