"use client";

import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";
import useSettings from "@/hooks/useSettings";
export default function Footer() {
  const { language } = useSettings();

  const configs = {
    logo: "/images/logo.png",
    slug: "/images/slug.png",
    nomads: [
      "/images/footer/image-1.png",
      "/images/footer/image-2.png",
      "/images/footer/image-3.png",
    ],
    menu: [
      {
        title: "CONTACT",
        titleFa: "ارتباط با ما",
        groups: [
          {
            header: "Internet Contact",
            headerFa: "تماس اینترنتی",
            links: [
              {
                label: "Phone",
                labelFa: "تلفن",
                icon: "line-md:phone-filled",
                value: "09374905487",
              },
              {
                label: "Email",
                labelFa: "ایمیل",
                icon: "line-md:email-alt-filled",
                value: "example@gmail.com",
              },
            ],
          },
          {
            header: "Our Address",
            headerFa: "آدرس ما",
            links: [
              {
                label: "Our Location",
                labelFa: "مکان ما",
                icon: "mdi:location",
                value: "تهران، خیابان مثال",
              },
            ],
          },
          {
            header: "Working Hours",
            headerFa: "ساعات کاری",
            links: [
              {
                label: "Saturday - Thursday",
                labelFa: "شنبه - پنجشنبه",
                icon: "line-md:clock",
                value: "9 صبح - 6 عصر",
              },
            ],
          },
        ],
      },
      {
        title: "Useful Links",
        titleFa: "لینک‌های مفید",
        groups: [
          {
            header: "Quick Access",
            headerFa: "دسترسی سریع",
            links: [
              {
                label: "Home",
                labelFa: "صفحه اصلی",
                icon: "line-md:home-md",
                url: "/",
              },
              {
                label: "About Us",
                labelFa: "درباره ما",
                icon: "mdi:about",
                url: "/about",
              },
              {
                label: "Services",
                labelFa: "خدمات",
                icon: "line-md:briefcase",
                url: "services",
              },
              {
                label: "Contact Us",
                labelFa: "تماس با ما",
                icon: "line-md:phone-call",
                url: "contact",
              },
            ],
          },
          {
            header: "Guide",
            headerFa: "راهنما",
            links: [
              {
                label: "FAQ",
                labelFa: "سوالات متداول",
                icon: "line-md:question-circle",
                url: "/faq",
              },
              {
                label: "Terms of Use",
                labelFa: "شرایط استفاده",
                icon: "line-md:document",
                url: "/terms",
              },
            ],
          },
          {
            header: "Support",
            headerFa: "پشتیبانی",
            links: [
              {
                label: "Support Center",
                labelFa: "مرکز پشتیبانی",
                icon: "material-symbols:contact-support",
                url: "/support",
              },
            ],
          },
        ],
      },
      {
        title: "Social Media",
        titleFa: "شبکه‌های اجتماعی",
        groups: [
          {
            header: "Follow Us",
            headerFa: "ما را دنبال کنید",
            links: [
              {
                label: "Telegram",
                labelFa: "تلگرام",
                icon: "line-md:telegram",
                url: "https://t.me/example",
              },
              {
                label: "Instagram",
                labelFa: "اینستاگرام",
                icon: "line-md:instagram",
                url: "https://instagram.com/example",
              },
              {
                label: "LinkedIn",
                labelFa: "لینکدین",
                icon: "line-md:linkedin",
                url: "https://linkedin.com/in/example",
              },
              {
                label: "Twitter",
                labelFa: "توییتر",
                icon: "line-md:twitter",
                url: "https://twitter.com/example",
              },
            ],
          },
          {
            header: "Newsletter Subscription",
            headerFa: "اشتراک در خبرنامه",
            links: [
              {
                label: "Enter your email",
                labelFa: "ایمیل خود را وارد کنید",
                icon: "line-md:email",
                value: "newsletter@example.com",
              },
            ],
          },
          {
            header: "Direct Contact",
            headerFa: "ارتباط مستقیم",
            links: [
              {
                label: "Contact Form",
                labelFa: "فرم تماس",
                icon: "mdi:form",
                url: "/contact-form",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.right}>
        <div className={styles.logo}>
          <img src={configs.logo} alt="Logo" />
        </div>
        <div className={styles.slug}>
          {language == "fa" && <img src={configs.slug} alt="Slug" />}
        </div>
        {language == "fa" && (
          <div className={styles.items}>
            {configs.nomads.map((nomad, index) => (
              <div className={styles.item} key={index}>
                <img src={nomad} alt={`Nomad ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.left}>
        {configs.menu.map((col, colIndex) => (
          <div className={styles.col} key={colIndex}>
            <h2>{language == "en" ? col.title : col.titleFa}</h2>
            {col.groups.map((group, groupIndex) => (
              <ul className={styles.group} key={groupIndex}>
                <h3>{language == "en" ? group.header : group.headerFa}</h3>
                <div className={styles.links}>
                  {group.links.map((link, linkIndex) => (
                    <li className={styles.item} key={linkIndex}>
                      <label>
                        <Icon icon={link.icon} />
                        <span>
                          {language == "en" ? link.label : link.labelFa}
                        </span>
                      </label>
                    </li>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
