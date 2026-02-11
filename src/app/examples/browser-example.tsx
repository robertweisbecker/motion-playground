import { Browser } from '@/components/browser';
import { Code } from '@/components/code';
import { Heading } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';

export function BrowserExample() {
  return (
    <Browser>
      <div className="p-4">
        <Heading size="h2">Browser Example</Heading>
        <Paragraph variant="prose">This is a browser example</Paragraph>
      </div>
    </Browser>
  );
}
