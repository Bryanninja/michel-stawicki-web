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
    <div className={`max-w-[1440px] mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
}
