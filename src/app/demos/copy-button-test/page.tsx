'use client';

import { CopyButton } from '@/components/copy-button';
import { DemoContainer } from '@/components/demo-container';
import { Heading } from '@/components/heading';
import { Paragraph } from '@/components/paragraph';
import { CodeBlock } from '@/components/code-block';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { useState, useEffect } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@phosphor-icons/react';
import { WarningOctagonIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

function ToastItem({
  toast,
  index,
}: {
  toast: Toast;
  index: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Alert
      variant={toast.type === 'success' ? 'success' : 'destructive'}
      size="default"
      icon={
        toast.type === 'success' ? (
          <CheckCircleIcon weight="duotone" />
        ) : (
          <WarningOctagonIcon weight="duotone" />
        )
      }
      className={cn(
        'shadow-lg transition-[transform,opacity] duration-[400ms] ease-out',
        'transform-gpu',
        mounted
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0',
      )}
      style={{
        transformOrigin: 'bottom',
      }}
      data-mounted={mounted}
    >
      <AlertTitle>{toast.message}</AlertTitle>
    </Alert>
  );
}

function ToastContainer({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 min-w-[300px] max-w-md">
      {toasts.map((toast, index) => (
        <ToastItem key={toast.id} toast={toast} index={index} />
      ))}
    </div>
  );
}

export default function CopyButtonTestPage() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [toastId, setToastId] = useState(0);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = toastId;
    setToastId((prev) => prev + 1);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const testTexts = [
    'Hello, World!',
    'This is a longer text that should be copied successfully.',
    'Special characters: !@#$%^&*()',
    'Multi-line\ntext\nwith\nnewlines',
    'Unicode: 🎉 🚀 ✨',
  ];

  return (
    <div className="prose max-w-4xl mx-auto p-8">
      <ToastContainer toasts={toasts} />
      <Heading>CopyButton Test Page</Heading>
      <Paragraph>
        This page tests the CopyButton component to ensure it copies text
        successfully. Use the textareas below to paste and verify the copied
        content.
      </Paragraph>

      <Heading size="h3">Basic Copy Button</Heading>
      <DemoContainer>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <CopyButton
              content={testTexts[0]}
              onCopy={() => {
                showToast(`Copied: "${testTexts[0]}"`);
              }}
              onError={(err) => {
                showToast(`Error: ${err.message}`, 'error');
              }}
            />
            <span className="text-sm text-muted-foreground">
              Click to copy: &quot;{testTexts[0]}&quot;
            </span>
          </div>
          <textarea
            className="w-full min-h-[80px] rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Paste here to verify (Cmd+V / Ctrl+V)"
          />
        </div>
      </DemoContainer>

      <Heading size="h3">With Custom Icon</Heading>
      <DemoContainer>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <CopyButton
              content={testTexts[1]}
              icon={<ClipboardDocumentIcon className="w-4 h-4" />}
              onCopy={() => {
                showToast(`Copied: "${testTexts[1]}"`);
              }}
              onError={(err) => {
                showToast(`Error: ${err.message}`, 'error');
              }}
            />
            <span className="text-sm text-muted-foreground">
              Click to copy: &quot;{testTexts[1]}&quot;
            </span>
          </div>
          <textarea
            className="w-full min-h-[80px] rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Paste here to verify (Cmd+V / Ctrl+V)"
          />
        </div>
      </DemoContainer>

      <Heading size="h3">With Children</Heading>
      <DemoContainer>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <CopyButton
              content={testTexts[2]}
              onCopy={() => {
                showToast(`Copied: "${testTexts[2]}"`);
              }}
              onError={(err) => {
                showToast(`Error: ${err.message}`, 'error');
              }}
            >
              Copy Special Characters
            </CopyButton>
            <span className="text-sm text-muted-foreground">
              Click to copy: &quot;{testTexts[2]}&quot;
            </span>
          </div>
          <textarea
            className="w-full min-h-[80px] rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Paste here to verify (Cmd+V / Ctrl+V)"
          />
        </div>
      </DemoContainer>

      <Heading size="h3">Code Block Integration</Heading>
      <DemoContainer>
        <div className="space-y-4">
          <CodeBlock
            code={`const greeting = "Hello, World!";
console.log(greeting);`}
            language="typescript"
          />
          <textarea
            className="w-full min-h-[100px] rounded-md border border-border bg-background px-3 py-2 text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="Paste code here to verify (Cmd+V / Ctrl+V)"
          />
        </div>
      </DemoContainer>

      <Heading size="h3">Multiple Test Cases</Heading>
      <DemoContainer>
        <div className="space-y-6">
          {testTexts.map((text, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-4">
                <CopyButton
                  content={text}
                  size="sm"
                  onCopy={() => {
                    showToast(`Copied: "${text.substring(0, 30)}${text.length > 30 ? '...' : ''}"`);
                  }}
                  onError={(err) => {
                    showToast(`Error: ${err.message}`, 'error');
                  }}
                />
                <span className="text-sm text-muted-foreground flex-1 truncate">
                  {text}
                </span>
              </div>
              <textarea
                className="w-full min-h-[60px] rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                placeholder={`Paste test ${index + 1} here to verify`}
              />
            </div>
          ))}
        </div>
      </DemoContainer>

      <Heading size="h3">Instructions</Heading>
      <Paragraph>
        Click any copy button above, then paste (Cmd+V / Ctrl+V) into the
        corresponding textarea to verify the text was copied correctly. Success
        messages will appear as toast notifications in the bottom-right corner.
      </Paragraph>
    </div>
  );
}

