import { AlertCircleIcon, CheckCircle2Icon, GalleryHorizontalIcon } from 'lucide-react';
import { ExclamationCircleIcon, StarIcon } from '@heroicons/react/16/solid';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ButtonExample } from './button-example';
import { ToggleExample } from './toggle-example';
import { DropdownExample } from './dropdown-example';
import { InputExample } from './input-example';
import { TooltipExample } from './tooltip-example';

export default function Components() {
  return (
    <div className="flex max-w-3xl flex-col items-start gap-4">
      <h1>Components</h1>

      <ButtonExample />
      <Separator />

      <h2 className="col-span-2">Alert</h2>
      <Alert variant={'success'}>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>Please verify your billing information and try again.</AlertDescription>
      </Alert>
      <Separator />
      <InputExample />
      <Separator />
      <ToggleExample />
      <Separator />
      <TooltipExample />

      <Separator />
      <h2>Badge</h2>
      <div className="flex gap-2">
        <Badge variant="default">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="outline">
          <ExclamationCircleIcon className="text-amber-600" />
          Warning
        </Badge>
        <Badge variant="outline">
          <ExclamationCircleIcon className="text-destructive" />
          Error
        </Badge>
        <Badge variant="info">Info</Badge>
      </div>

      <Separator />
      <section>
        <h2>Card</h2>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Button size="icon">
                <StarIcon />{' '}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="animation-pulse">
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
      <Separator />
      <section>
        <h2>Dropdown Menu</h2>
        <DropdownExample />
      </section>
      <Separator />
      <section className="w-full">
        <h2>Tabs</h2>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>

            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="profile">Change your Profile here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="projects">
            <GalleryHorizontalIcon className="mx-auto size-6" />
          </TabsContent>
        </Tabs>
      </section>
      <Separator />
    </div>
  );
}
