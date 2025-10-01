import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function useSettings() {
  const pathname = usePathname();

  const [language, setLanguage] = useState<"EN" | "FA">("FA");

  useEffect(() => {
    const isFarsi = pathname.includes("/FA/");
    setLanguage(isFarsi ? "FA" : "EN");
  }, [pathname]);

  return {
    language,
  };
}
