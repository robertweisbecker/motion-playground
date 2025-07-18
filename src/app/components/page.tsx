import Image from 'next/image';
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  LucideGalleryHorizontal,
  LucideStar,
} from 'lucide-react';

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
  const buttonDemo = [
    'primary',
    'secondary',
    'outline',
    'destructive',
    'default',
    'elevated',
    'ghost',
    'link',
  ];
  return (
    <div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
      <main className="flex w-full flex-col gap-8 sm:items-start">
        <h1>Components</h1>

        <ButtonDemo />
        <Separator />
        <h3>Callout / Alert</h3>
        <div className="grid w-full items-start gap-4">
          <Alert variant={'success'}>
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
              <p>Please verify your billing information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
        <InputDemo />
        <Separator />
        <ToggleDemo />
        <Separator />
        <TooltipDemo />

        <Separator />
        <h3>Badge</h3>
        <div className="flex gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="destructive" size="dot">
            Destructive
          </Badge>
          <Badge variant="default" color="info" size="dot">
            info
          </Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="outline" color="info">
            Badge
          </Badge>
          <Badge variant="outline" color="error">
            Badge
          </Badge>
          <Badge variant="outline" color="warning">
            Badge
          </Badge>
          <Badge variant="subtle" color="info">
            Badge
          </Badge>
          <Badge variant="subtle" color="error">
            Badge
          </Badge>
          <Badge variant="subtle" color="warning">
            Badge
          </Badge>
        </div>
        <Separator />
        <h3>Card</h3>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <Button size="icon">
                <LucideStar />{' '}
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
              <LucideGalleryHorizontal className="mx-auto size-6" />
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
