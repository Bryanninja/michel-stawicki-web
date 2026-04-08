"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const userLang = navigator.language;

    if (userLang.toLowerCase().includes("en")) {
      router.replace("/en");
    } else {
      router.replace("/pt");
    }
  }, [router]);

  return (
    <div className="h-screen w-screen bg-[#111111] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}
