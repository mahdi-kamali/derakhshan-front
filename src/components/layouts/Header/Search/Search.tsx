import { Icon } from "@iconify/react/dist/iconify.js";

import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";
import useRedirect from "@/hooks/useRedirect";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const { GoCategory } = useRedirect();

  const { language }: { language: LanguagesENUM } = useParams();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    GoCategory(language).list(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    GoCategory(language).list(search);
  };

  return (
    <form
      className={styles.search}
      onSubmit={onSubmit}>
      <Icon icon='material-symbols:search' />
      <input
        type='text'
        onChange={onChange}
        placeholder={
          language === LanguagesENUM.FA ? "جتسجو کنید.." : "Search...."
        }
        dir={language === LanguagesENUM.FA ? "rtl" : "ltr"}
      />
    </form>
  );
}
