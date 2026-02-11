'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export function DrawerExample() {
  return (
    <div className="mx-auto grid auto-cols-min gap-2 text-center">
      <div className="col-span-2">
        <Drawer direction="top">
          <DrawerTrigger asChild>
            <Button variant="secondary">Top</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Top Drawer</DrawerTitle>
              <DrawerDescription>This drawer opens from the top.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <p className="text-sm text-muted-foreground">
                Content for the top drawer goes here.
              </p>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="col-span-1">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="secondary">Left</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Left Drawer</DrawerTitle>
              <DrawerDescription>This drawer opens from the left.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <p className="text-sm text-muted-foreground">
                Content for the left drawer goes here.
              </p>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="col-span-1">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="secondary">Right</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Right Drawer</DrawerTitle>
              <DrawerDescription>This drawer opens from the right.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <p className="text-sm text-muted-foreground">
                Content for the right drawer goes here.
              </p>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="col-span-2">
        <Drawer direction="bottom">
          <DrawerTrigger asChild>
            <Button variant="secondary">Bottom</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Bottom Drawer</DrawerTitle>
              <DrawerDescription>This drawer opens from the bottom.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <p className="text-sm text-muted-foreground">
                Content for the bottom drawer goes here.
              </p>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

