import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { GalleryHorizontalIcon } from 'lucide-react';

export function TabsBasicExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="profile">Change your Profile here.</TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
      <TabsContent value="projects">
        <GalleryHorizontalIcon className="mx-auto size-6" />
      </TabsContent>
    </Tabs>
  );
}

