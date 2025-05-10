export const Section = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className="w-full p-5 h-[calc(100dvh-80px)]" {...props}>
      {children}
    </section>
  );
};
