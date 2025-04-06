import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function useSettings() {
  const pathname = usePathname();

  const [language, setLanguage] = useState<"en" | "fa">("fa");

  useEffect(() => {
    const isFarsi = pathname.includes("/fa/");
    setLanguage(isFarsi ? "fa" : "en");
  }, [pathname]);

  return {
    language,
  };
}
