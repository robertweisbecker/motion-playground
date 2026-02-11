import { Code } from '@/components/code';

export function CodeExample() {
  return (
    <>
      <Code>npx run dev</Code>
      <Code variant="elevated">yarn install</Code>
    </>
  );
}

