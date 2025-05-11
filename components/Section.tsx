export const Section = ({
  children,
  id,
  ...props
}: {
  children: React.ReactNode;
  id: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section id={id} className="w-full p-5 h-[calc(100dvh-80px)]" {...props}>
      {children}
    </section>
  );
};
