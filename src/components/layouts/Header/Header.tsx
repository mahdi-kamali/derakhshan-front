"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import useSettings from "@/hooks/useSettings";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  const { language } = useSettings();

  const navMenu = [
    {
      title: "صفحه اصلی",
      icon: "material-symbols:home",
      path: "/home",
    },
    {
      title: "سرویس ها",
      icon: "tabler:settings",
      path: "/services",
    },
    {
      title: "محصولات",
      icon: "ph:shopping-bag",
      path: "/products",
    },
    {
      title: "فرصت های شغلی",
      icon: "mdi:briefcase-outline",
      path: "/careers",
    },
    {
      title: "درباره ی ما",
      icon: "mdi:information-outline",
      path: "/about-us",
    },
    {
      title: "تماس با ما",
      icon: "ic:baseline-contact-mail",
      path: "/contact-us",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img
            src={"/images/logo.png"}
            alt=''
          />
        </div>
      </div>
      <nav className={styles.mid}>
        {navMenu.map((item) => {
          const isActive = pathName.includes(item.path);

          const classs = [isActive && styles.active].join(" ");

          return (
            <Link
              href={`/${language}${item.path}`}
              key={item.path}
              className={classs}>
              <span>{item.title}</span>
              <Icon icon={item.icon} />
            </Link>
          );
        })}
      </nav>
      <div className={styles.right}>
        <div className={styles.language}>
          <span>فارسی</span>
          <Icon icon='clarity:language-solid' />
        </div>
        <Icon icon='line-md:menu' />
      </div>
    </header>
  );
}
