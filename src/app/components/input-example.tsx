import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Paragraph } from '@/components/ui/paragraph';

export function InputExample() {
  return (
    <div className="w-full">
      <h2 className="mb-4">Input</h2>
      <div className="flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <p className="text-xs">Description</p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="text-input" info={"Here's some info"}>
            Label
          </Label>
          <Input type="text" id="text-input" placeholder="Placeholder" />
          <Paragraph variant="caption">Description</Paragraph>
        </div>
      </div>
    </div>
  );
}
