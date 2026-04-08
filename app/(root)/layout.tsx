// Arquivo: app/(root)/layout.tsx
import "../globals.css";

export const metadata = {
  title: "Michel Stawicki",
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-[#111111]">{children}</body>
    </html>
  );
}
