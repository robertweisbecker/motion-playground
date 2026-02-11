import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { StarIcon } from '@heroicons/react/20/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';

export function CardExample() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Button size="icon">
              <StarIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
          <Button>Action</Button>
        </CardFooter>
      </Card>
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        <Card size="sm">
          <CardMedia src="https://avatar.vercel.sh/a" alt="Card Image">
            <CardAction>
              <Button size="icon" variant="media">
                <OutlineStarIcon />
              </Button>
            </CardAction>
          </CardMedia>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card size="sm">
          <CardMedia src="https://avatar.vercel.sh/b" alt="Card Image">
            <CardAction>
              <Toggle
                size="sm"
                variant="default"
                className="dark data-[state=on]:[&_svg]:fill-yellow-400 data-[state=on]:[&_svg]:stroke-yellow-400"
              >
                <OutlineStarIcon />
              </Toggle>
            </CardAction>
          </CardMedia>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
