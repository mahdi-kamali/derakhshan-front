"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState, useEffect } from "react";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

import useSettings from "@/hooks/useSettings";
import Button from "@/components/UI/Button/Button";

import styles from "./styles.module.scss";

export default function Header() {
  const pathName = usePathname();
  const route = useRouter();
  const { language } = useSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 991 });

  const switchLang = () => {
    const segments = pathName.split("/");
    segments[1] = language == "fa" ? "en" : "fa";
    const newPath = segments.join("/");
    route.push(newPath);
  };

  if (!hasMounted) return null;

  const navMenu = [
    {
      title: "HOME",
      titleFa: "صفحه اصلی",
      icon: "material-symbols:home",
      path: "/home",
    },
    {
      title: "PRODUCTS",
      titleFa: "محصولات",
      icon: "ph:shopping-bag",
      path: "/products",
    },
    {
      title: "SERVICES",
      titleFa: "خدمات",
      icon: "tabler:settings",
      path: "/services",
    },
    {
      title: "CAREERS",
      titleFa: "فرصت های شغلی",
      icon: "mdi:briefcase-outline",
      path: "/careers",
    },
    {
      title: "ABOUT US",
      titleFa: "درباره ی ما",
      icon: "mdi:information-outline",
      path: "/about-us",
    },
    {
      title: "CONTACT US",
      titleFa: "تماس با ما",
      icon: "ic:baseline-contact-mail",
      path: "/contact-us",
    },
  ];

  return (
    <header className={` ${styles.header} ${language == "en" && styles.en}`}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={"/images/logo.png"} alt="" />
        </div>
      </div>

      <div className={styles.right}>
        <div
          className={styles.menuButton}
          style={!isMobile ? { display: "none" } : {}}
        >
          <Button
            title=""
            variant="none"
            icon="line-md:menu"
            onClick={handleMenuToggle}
          ></Button>
        </div>

        {
          <AnimatePresence>
            {(!isMobile || menuOpen) && (
              <motion.nav
                key="mobile-menu"
                className={styles.menu}
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: isMobile ? 0.3 : 0, ease: "easeInOut" }}
              >
                <button className={styles.language} onClick={switchLang}>
                  <span>{language == "en" ? "ENGLISH" : "فارسی"}</span>
                  <Icon icon="clarity:language-solid" />
                </button>
                {navMenu.map((item) => {
                  const isActive = pathName.includes(item.path);
                  return (
                    <Link
                      href={`/${language}${item.path}`}
                      key={item.path}
                      className={isActive ? styles.active : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>
                        {language == "en" ? item.title : item.titleFa}
                      </span>
                      <Icon icon={item.icon} />
                    </Link>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>
        }
      </div>
    </header>
  );
}
