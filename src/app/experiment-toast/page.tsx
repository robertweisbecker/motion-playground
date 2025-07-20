import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { DownloadButton } from '@/components/experiments/download-button';
import {
  ArrowDownToLineIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpFromLineIcon,
} from 'lucide-react';
import { StackedComponent } from '@/components/experiments/stacked-component';
import Toaster from '@/components/experiments/toast';

export default function ToastPage() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl p-8 pb-20 sm:p-20">
      <main className="flex w-full flex-col gap-4">
        <h1>Experiment: Toast</h1>
        <section>
          <h2>Stack</h2>
          <StackedComponent length={3} />
        </section>
        <section>
          <h2>Toaster</h2>
          <div className="flex size-[360px] flex-col justify-end overflow-y-auto rounded-2xl border bg-gray-50 p-4">
            <Toaster />
          </div>
        </section>
      </main>
    </div>
  );
}
