import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export function PopoverExample() {
  return (
    <div className="mx-auto grid auto-cols-min gap-2 text-center">
      <div className="col-span-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      <div className="col-span-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      <div className="col-span-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      <div className="col-span-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
