import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function TextareaExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="message">Your message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here."
          className="min-h-[100px]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter a description"
          className="min-h-[80px]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Textarea
          id="disabled"
          placeholder="This textarea is disabled"
          disabled
        />
      </div>
    </div>
  );
}

