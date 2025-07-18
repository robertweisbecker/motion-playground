import { Toggle } from '@/components/ui/toggle';
import { StarIcon } from 'lucide-react';

export function ToggleDemo() {
  return (
    <div className="w-full">
      <h2 className="mb-4">Toggle</h2>
      <div className="flex flex-row gap-2">
        <Toggle variant="base">
          <StarIcon />
        </Toggle>
        <Toggle variant="base">Toggle me</Toggle>
      </div>
    </div>
  );
}
