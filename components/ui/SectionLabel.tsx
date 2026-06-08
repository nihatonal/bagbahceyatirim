import { cn } from '@/lib/utils';

export default function SectionLabel({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        'mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-luxury text-flora-bronze',
        className
      )}
    >
      <span className="h-px w-8 bg-flora-bronze/70" />
      <span>{children}</span>
    </div>
  );
}