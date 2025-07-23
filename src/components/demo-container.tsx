export function DemoContainer({ children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className="bg-muted mt-2 mb-8 flex min-h-60 content-center items-center justify-center rounded-[24px] border border-dashed p-8 sm:-mx-10"
      {...props}
    >
      {children}
    </div>
  );
}
