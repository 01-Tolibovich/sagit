export const HeadingH2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h2 className={`text-primary text-lg md:text-[22px] font-bold uppercase ${className}`}>
      \\ {children}
    </h2>
  );
};
