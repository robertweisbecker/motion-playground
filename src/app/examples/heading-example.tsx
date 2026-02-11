import { Heading } from '@/components/heading';

export function HeadingExampleSize() {
  return (
    <div className="flex flex-col gap-1">
      <Heading inline as="h1">
        Heading 1
      </Heading>

      <Heading inline as="h2">
        Heading 2
      </Heading>

      <Heading inline as="h3">
        Heading 3
      </Heading>

      <Heading inline as="h4">
        Heading 4
      </Heading>

      <Heading inline as="h5">
        Heading 5
      </Heading>

      <Heading inline as="h6">
        Heading 6
      </Heading>
    </div>
  );
}

export function HeadingExampleWithSubtitle() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-2">
        <Heading inline as="h1">
          Title 1
          <Heading inline sub size="h2">
            Subtitle
          </Heading>
        </Heading>
      </div>
      <div className="flex items-baseline gap-2">
        <Heading inline as="h2">
          Title 2
        </Heading>
        <Heading inline sub as="h2">
          Subtitle
        </Heading>
      </div>
      <div className="flex items-baseline gap-2">
        <Heading inline as="h3">
          Title 3
        </Heading>
        <Heading inline sub as="h3">
          Subtitle
        </Heading>
      </div>
    </div>
  );
}

export function HeadingExampleColor() {
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
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Heading as="h2" sub className="mb-4">
          Colored Hues
        </Heading>
        <div className="flex flex-col gap-2">
          {hues.map((hue) => (
            <div key={hue} className="flex items-baseline gap-2">
              <Heading inline hue={hue} as="h3">
                {hue.charAt(0).toUpperCase() + hue.slice(1)}
              </Heading>
              <Heading inline hue={hue} sub as="h3">
                with Subtle
              </Heading>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Heading as="h2" sub className="mb-4">
          Neutral Hues
        </Heading>
        <div className="flex flex-col gap-2">
          {neutrals.map((neutral) => (
            <div key={neutral} className="flex items-baseline gap-2">
              <Heading inline hue={neutral} as="h3">
                {neutral.charAt(0).toUpperCase() + neutral.slice(1)}
              </Heading>
              <Heading inline hue={neutral} sub as="h3">
                with Subtle
              </Heading>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
