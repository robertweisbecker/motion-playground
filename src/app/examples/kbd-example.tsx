import { Kbd } from '@/components/kbd';

export function KbdExample() {
  return (
    <div className="flex gap-1">
      <Kbd>⌘</Kbd> <Kbd>⇧</Kbd> <Kbd>P</Kbd>
    </div>
  );
}

