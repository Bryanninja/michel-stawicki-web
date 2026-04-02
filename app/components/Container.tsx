// src/components/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full 
        px-6 md:px-12 lg:px-20
        max-w-[1440px] 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
