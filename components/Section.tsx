import { cn } from '@/utils/cn';

export const Section = ({
  children,
  id,
  className,
  ...props
}: {
  children: React.ReactNode;
  id: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      id={id}
      className={cn('w-full p-5 h-[calc(100dvh-80px)]', className)}
      {...props}
    >
      {children}
    </section>
  );
};
