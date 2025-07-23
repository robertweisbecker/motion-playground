export function DemoContainer({ children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className="bg-muted mt-2 mb-8 flex min-h-60 flex-col items-center justify-center gap-2 rounded-[24px] border border-dashed p-8 sm:-mx-4"
      {...props}
    >
      <span className="mx-auto">{children}</span>
    </div>
  );
}
