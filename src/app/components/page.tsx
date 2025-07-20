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
import { Toggle } from '@/components/ui/toggle';
import { ButtonDemo } from './button-demo';
import { ToggleGroupDemo } from './toggle-group-demo';
import { ToggleDemo } from './toggle-demo';
import { DropdownMenuDemo } from './dropdown-demo';
import { InputDemo } from './input-demo';
import { TooltipDemo } from './tooltip-demo';

export default function Components() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
      <main className="flex w-full flex-col gap-8 sm:items-start">
        <h1>Components</h1>

        <ButtonDemo />
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
        <InputDemo />
        <Separator />
        <ToggleDemo />
        <Separator />
        <TooltipDemo />

        <Separator />
        <h3>Badge</h3>
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
        <h3>Card</h3>
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
        <Separator />
        <h3>Dropdown Menu</h3>
        <DropdownMenuDemo />
        <Separator />
        <h3>Tabs</h3>
        <section className="w-full">
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
        <h2>Toggle Group</h2>
        <ToggleGroupDemo />
        <Toggle variant={'base'}>Toggle</Toggle>
      </main>
    </div>
  );
}
