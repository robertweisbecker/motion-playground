import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarExample() {
  return (
    <>
      <Avatar size={20}>
        <AvatarImage src="https://avatar.vercel.sh/ab" className="" />
      </Avatar>
      <Avatar size={32}>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar size={48}>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar className="">
        <AvatarImage src="https://github.com/robertweisbecker.png" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </>
  );
}
