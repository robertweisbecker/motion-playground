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
import { Toggle } from './ui/toggle';
import React from 'react';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
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
            <div className="">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" size="lg" />
            </div>
            <div className="grid gap-0">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="text-blue ml-auto text-xs underline-offset-2 hover:underline dark:text-blue-400"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                size="lg"
                selectableSlot
                endSlot={
                  <Button
                    size="sm"
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
            <Button type="submit" className="w-full" size="lg" variant="elevated">
              Log in
            </Button>
          </form>
        </CardContent>
        <CardContent>
          <div className="text-muted-foreground flex items-center gap-4 text-xs">
            <Separator />
            <span className="shrink-0">or continue with</span>
            <Separator />
          </div>

          <Button variant="outline" className="w-full" size="lg">
            <svg
              height="44"
              viewBox="0 0 14 44"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
            </svg>
            Log in with Apple
          </Button>
          <Button variant="outline" className="w-full" size="lg">
            <img
              width="14"
              height="14"
              src="https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1755835725776"
            />
            Log in with Google
          </Button>
        </CardContent>

        <CardFooter>
          <div className="text-center text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue">
              Sign up
            </a>
          </div>
        </CardFooter>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-foreground *:[a]:text-secondary-foreground text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{' '}
        <a href="#" className="link">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="link">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
