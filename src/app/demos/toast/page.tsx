import { StackedComponent } from '@/components/experimental/stacked-component';
import Toaster from '@/components/experimental/toast';

export default function ToastPage() {
  return (
    <>
      <h1>Experiment: Toast</h1>
      <section>
        <h2 className="mb-4">Stack</h2>
        <StackedComponent length={3} />
      </section>
      <section>
        <h2>Toaster</h2>
        <div className="flex size-[360px] flex-col justify-end overflow-y-auto rounded-2xl border bg-gray-100 p-4">
          <Toaster />
        </div>
      </section>
    </>
  );
}
