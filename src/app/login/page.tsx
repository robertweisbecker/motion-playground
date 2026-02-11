import { GalleryVerticalEnd } from 'lucide-react';

import { LoginForm } from '@/components/login-form';
import { ApertureIcon } from '@phosphor-icons/react/dist/ssr';

export default function LoginPage() {
  return (
    <div className="from-background to-accent via-accent/40 flex flex-col items-center justify-center gap-6 bg-linear-65 from-18% via-70% p-6">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="#"
          className="text-foreground bg-accent/80 flex items-center gap-2 self-center rounded-xl p-2 font-medium shadow-xs"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <ApertureIcon weight="fill" />
          </div>
          Acme Inc.
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
