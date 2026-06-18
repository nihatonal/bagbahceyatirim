import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16',
        className
      )}
    >
      {children}
    </div>
  );
}