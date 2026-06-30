'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from './ui/separator';
import { EyeClosedIcon, EyeIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { Toggle } from './ui/toggle';
import React from 'react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card size="lg">
        <CardHeader className="text-center">
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Log in below</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-1">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-xs text-blue underline-offset-2 hover:underline dark:text-blue-400"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                selectableSlot
                endSlot={
                  <Button
                    size="xs"
                    iconOnly
                    variant="ghost"
                    onClick={(e) => {
                      setShowPassword(!showPassword);
                      e.preventDefault();
                    }}
                  >
                    {showPassword ? (
                      <EyeClosedIcon weight="duotone" />
                    ) : (
                      <EyeIcon weight="duotone" />
                    )}
                  </Button>
                }
              />
            </div>
            <Button type="submit" className="w-full" variant="elevated">
              Log in
            </Button>
          </form>
        </CardContent>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <Separator />
          <span className="shrink-0">or continue with</span>
          <Separator />
        </div>

        <CardContent>
          <Button variant="inverse" className="w-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-3.5"
            >
              <path
                d="M15.4297 5.90625C15.5938 5.90625 15.8477 5.92578 16.1914 5.96484C16.543 5.99609 16.9414 6.08203 17.3867 6.22266C17.832 6.36328 18.2852 6.58984 18.7461 6.90234C19.207 7.21484 19.6328 7.65234 20.0234 8.21484C19.9844 8.23828 19.8359 8.34375 19.5781 8.53125C19.3281 8.71875 19.043 8.99219 18.7227 9.35156C18.4023 9.70312 18.1211 10.1523 17.8789 10.6992C17.6445 11.2383 17.5273 11.8828 17.5273 12.6328C17.5273 13.4922 17.6758 14.2188 17.9727 14.8125C18.2773 15.4062 18.6289 15.8867 19.0273 16.2539C19.4336 16.6211 19.793 16.8906 20.1055 17.0625C20.4258 17.2266 20.5977 17.3125 20.6211 17.3203C20.6133 17.3516 20.5547 17.5273 20.4453 17.8477C20.3359 18.1602 20.1641 18.5664 19.9297 19.0664C19.7031 19.5586 19.4062 20.0742 19.0391 20.6133C18.7031 21.0898 18.3555 21.5469 17.9961 21.9844C17.6445 22.4219 17.2578 22.7773 16.8359 23.0508C16.4219 23.332 15.9531 23.4727 15.4297 23.4727C15.0312 23.4727 14.6914 23.4258 14.4102 23.332C14.1289 23.2383 13.8594 23.1289 13.6016 23.0039C13.3516 22.8867 13.0742 22.7812 12.7695 22.6875C12.4648 22.5938 12.0859 22.5469 11.6328 22.5469C11.0391 22.5469 10.543 22.6211 10.1445 22.7695C9.75391 22.9258 9.38281 23.082 9.03125 23.2383C8.67969 23.3945 8.26562 23.4727 7.78906 23.4727C7.0625 23.4727 6.42188 23.1875 5.86719 22.6172C5.32031 22.0469 4.75781 21.3594 4.17969 20.5547C3.73438 19.9141 3.32812 19.1758 2.96094 18.3398C2.59375 17.5039 2.30078 16.6172 2.08203 15.6797C1.86328 14.7422 1.75391 13.8047 1.75391 12.8672C1.75391 11.3672 2.03906 10.1016 2.60938 9.07031C3.17969 8.03125 3.91016 7.24609 4.80078 6.71484C5.69141 6.17578 6.61719 5.90625 7.57812 5.90625C8.08594 5.90625 8.5625 5.99609 9.00781 6.17578C9.46094 6.35547 9.88281 6.53516 10.2734 6.71484C10.6641 6.88672 11.0195 6.97266 11.3398 6.97266C11.6445 6.97266 12.0039 6.88672 12.418 6.71484C12.832 6.53516 13.2891 6.35547 13.7891 6.17578C14.2969 5.99609 14.8438 5.90625 15.4297 5.90625ZM14.6094 4.00781C14.2188 4.48438 13.7266 4.87891 13.1328 5.19141C12.5469 5.50391 11.9922 5.66016 11.4688 5.66016C11.3594 5.66016 11.2539 5.64844 11.1523 5.625C11.1445 5.59375 11.1328 5.53906 11.1172 5.46094C11.1094 5.38281 11.1055 5.29688 11.1055 5.20312C11.1055 4.60937 11.2344 4.03125 11.4922 3.46875C11.75 2.90625 12.0469 2.4375 12.3828 2.0625C12.7969 1.57031 13.3203 1.16016 13.9531 0.832031C14.5938 0.503906 15.207 0.328125 15.793 0.304688C15.8164 0.4375 15.8281 0.589844 15.8281 0.761719C15.8281 1.36328 15.7148 1.94922 15.4883 2.51953C15.2617 3.08203 14.9688 3.57812 14.6094 4.00781Z"
                fill="currentColor"
              />
            </svg>
            Log in with Apple
          </Button>
          <Button className="w-full">
            <Image
              width={14}
              height={14}
              className="icon size-3.5"
              src="https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1755835725776"
              alt=""
              aria-hidden
            />
            Log in with Google
          </Button>
        </CardContent>

        <CardFooter>
          <div className="mx-auto text-center text-xs">
            Don't have an account?{' '}
            <a href="#" className="link">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
      <div className="text-center text-2xs text-balance text-muted-foreground *:[a]:text-secondary-foreground *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-foreground">
        By clicking continue, you agree to our{' '}
        <a href="#" className="link text-foreground">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="link text-foreground">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
