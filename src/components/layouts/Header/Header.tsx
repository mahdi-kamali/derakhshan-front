import Link from "next/link";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  const navMenu = [
    {
      title: "صفحه اصلی",
      icon: "material-symbols:home",
      path: "/",
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
      path: "/about",
    },
    {
      title: "تماس با ما",
      icon: "ic:baseline-contact-mail",
      path: "/contact",
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
          return (
            <Link href={item.path} key={item.path}>
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
