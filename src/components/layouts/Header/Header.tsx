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
import { useQuery } from "@tanstack/react-query";
import { GetNavsAPI } from "@/services/Navs/Navs.services";

export default function Header() {
  const pathName = usePathname();
  const route = useRouter();
  const { language } = useSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const { data } = useQuery({
    queryFn: GetNavsAPI,
    initialData: {
      data: [],
      message: "",
      status: 200,
    },
    queryKey: [GetNavsAPI.name],
  });

  const isMobile = useMediaQuery({ maxWidth: 991 });

  const switchLang = () => {
    setMenuOpen(false);
    const segments = pathName.split("/");
    segments[1] = language == "FA" ? "EN" : "FA";
    const newPath = segments.join("/");
    route.push(newPath);
  };

  const { data: pages } = data;

  return (
    <header className={` ${styles.header} ${language == "EN" && styles.en}`}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img
            src={"/images/logo.png"}
            alt=''
          />
        </div>
      </div>

      <div className={styles.right}>
        <div
          className={styles.menuButton}
          style={!isMobile ? { display: "none" } : {}}>
          <Button
            title=''
            variant='none'
            icon='line-md:menu'
            onClick={handleMenuToggle}></Button>
        </div>

        {
          <AnimatePresence>
            {(!isMobile || menuOpen) && (
              <motion.nav
                key='mobile-menu'
                className={styles.menu}
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{
                  duration: isMobile ? 0.3 : 0,
                  ease: "easeInOut",
                }}>
                <button
                  className={styles.language}
                  onClick={switchLang}>
                  <span>{language == "EN" ? "ENGLISH" : "فارسی"}</span>
                  <Icon icon='clarity:language-solid' />
                </button>
                {pages.map((page) => {
                  const { nav } = page;
                  const isActive = pathName.includes(page.slug);
                  return (
                    <Link
                      href={`/${language}${page.slug}`}
                      key={page._id}
                      className={isActive ? styles.active : ""}
                      onClick={() => setMenuOpen(false)}>
                      <span>
                        {language == "EN" ? page.title_en : page.title}
                      </span>
                      <Icon icon={nav.icon} />
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
