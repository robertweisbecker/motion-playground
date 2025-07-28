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

export function HeadingExampleColor() {
  return (
    <>
      <Heading inline color="info" as="h3">
        Heading 2
      </Heading>
      <Heading inline color="warning" as="h3">
        Heading 2
      </Heading>
      <Heading inline color="success" as="h3">
        Heading 2
      </Heading>
    </>
  );
}
