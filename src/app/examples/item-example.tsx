import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item';
import { Paragraph } from '@/components/paragraph';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from '@heroicons/react/20/solid';
import { CheckCircleIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const people = [
  {
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    email: 'shadcn@vercel.com',
  },
  {
    username: 'maxleiter',
    avatar: 'https://github.com/maxleiter.png',
    email: 'maxleiter@vercel.com',
  },
  {
    username: 'evilrabbit',
    avatar: 'https://github.com/evilrabbit.png',
    email: 'evilrabbit@vercel.com',
  },
];

import { Badge } from '@/components/ui/badge';

export function ItemExample() {
  return (
    <>
      <Item inline variant="outline" size="sm" className="rounded-full">
        <Badge variant="default" className="mx-2" shape="pill" size="dot">
          New
        </Badge>
        <ItemContent className="flex-row gap-2 text-sm">
          <ItemTitle>Announcement</ItemTitle>
          <ItemDescription>Announcement</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="invisible">Go →</Button>
        </ItemActions>
      </Item>

      <Item variant="muted">
        <ItemHeader>
          <Paragraph variant="label">Item Header</Paragraph>
          <Button iconOnly variant="invisible">
            <EllipsisHorizontalIcon />
          </Button>
        </ItemHeader>
        <ItemMedia variant="icon-frame">
          <InformationCircleIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Title</ItemTitle>
          <ItemDescription>Item</ItemDescription>
        </ItemContent>
        <ItemFooter>
          <Paragraph variant="caption">Item Footer</Paragraph>{' '}
          <Button variant="elevated">Action</Button>
        </ItemFooter>
      </Item>

      <div className="flex flex-col gap-6">
        <Item>
          <ItemContent>
            <ItemTitle>Default Variant</ItemTitle>
            <ItemDescription>
              Standard styling with subtle background and borders.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Outline Variant</ItemTitle>
            <ItemDescription>
              Outlined style with clear borders and transparent background.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </ItemActions>
        </Item>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle>Muted Variant</ItemTitle>
            <ItemDescription>
              Subdued appearance with muted colors for secondary content.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Open
            </Button>
          </ItemActions>
        </Item>

        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Basic Item</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline" size="sm" asChild>
          <a href="#">
            <ItemMedia>
              <CheckCircleIcon className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Your profile has been verified.</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </a>
        </Item>
      </div>
      <Card className="max-w-lg py-0" size="lg">
        <ItemGroup>
          {people.map((person, index) => (
            <React.Fragment key={person.username}>
              <Item>
                <ItemMedia variant="image">
                  <Avatar size={44} radius={8}>
                    <AvatarImage src={person.avatar} className="grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-1">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription>
                    <a href="">{person.email}</a>
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button
                    variant="elevated"
                    size="icon"
                    className="rounded-full"
                  >
                    <PlusIcon />
                  </Button>
                </ItemActions>
              </Item>
              {index !== people.length - 1 && <ItemSeparator />}
            </React.Fragment>
          ))}
        </ItemGroup>
      </Card>
    </>
  );
}
