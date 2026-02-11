import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function LabelExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" required>
          Password
        </Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username" info="This will be your public username">
          Username
        </Label>
        <Input id="username" placeholder="Choose a username" />
      </div>
    </div>
  );
}

