import { CodeBlock } from '@/components/code-block';

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

export function CodeBlockExample() {
  return <CodeBlock code={code} language="jsx" />;
}
