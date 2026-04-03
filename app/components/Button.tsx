import Link from "next/link";

// src/components/Button.tsx
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "white";
  className?: string; // Prop opcional para ajustes finos
}

export default function Button({
  href,
  children,
  variant = "white",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block font-sans text-sm transition-all duration-300 font-medium px-8 py-3";

  const variants = {
    white:
      "bg-brand-white text-brand-black hover:bg-brand-gray hover:text-brand-white",
    solid: "bg-brand-black text-brand-white hover:bg-brand-gray",
    outline:
      "border border-brand-white/30 text-brand-white hover:bg-brand-white hover:text-brand-black",
  };

  // Combinamos o estilo base + a variante + o que vier pela prop className
  return (
    <Link
      href={href}
      prefetch={false}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
