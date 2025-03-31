import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

export default function Footer() {
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
        title: "ارتباط با ما",
        groups: [
          {
            header: "تماس اینترنتی",
            links: [
              {
                label: "تلفن",
                icon: "line-md:phone-filled",
                value: "09374905487",
              },
              {
                label: "ایمیل",
                icon: "line-md:email-alt-filled",
                value: "example@gmail.com",
              },
            ],
          },
          {
            header: "آدرس ما",
            links: [
              {
                label: "مکان ما",
                icon: "mdi:location",
                value: "تهران، خیابان مثال",
              },
            ],
          },
          {
            header: "ساعات کاری",
            links: [
              {
                label: "شنبه - پنجشنبه",
                icon: "line-md:clock",
                value: "9 صبح - 6 عصر",
              },
            ],
          },
        ],
      },
      {
        title: "لینک‌های مفید",
        groups: [
          {
            header: "دسترسی سریع",
            links: [
              { label: "صفحه اصلی", icon: "line-md:home-md", url: "/" },
              { label: "درباره ما", icon: "mdi:about", url: "/about" },
              { label: "خدمات", icon: "line-md:briefcase", url: "services" },
              {
                label: "تماس با ما",
                icon: "line-md:phone-call",
                url: "contact",
              },
            ],
          },
          {
            header: "راهنما",
            links: [
              {
                label: "سوالات متداول",
                icon: "line-md:question-circle",
                url: "/faq",
              },
              {
                label: "شرایط استفاده",
                icon: "line-md:document",
                url: "/terms",
              },
            ],
          },
          {
            header: "پشتیبانی",
            links: [
              {
                label: "مرکز پشتیبانی",
                icon: "material-symbols:contact-support",
                url: "/support",
              },
            ],
          },
        ],
      },
      {
        title: "شبکه‌های اجتماعی",
        groups: [
          {
            header: "ما را دنبال کنید",
            links: [
              {
                label: "تلگرام",
                icon: "line-md:telegram",
                url: "https://t.me/example",
              },
              {
                label: "اینستاگرام",
                icon: "line-md:instagram",
                url: "https://instagram.com/example",
              },
              {
                label: "لینکدین",
                icon: "line-md:linkedin",
                url: "https://linkedin.com/in/example",
              },
              {
                label: "توییتر",
                icon: "line-md:twitter",
                url: "https://twitter.com/example",
              },
            ],
          },
          {
            header: "اشتراک در خبرنامه",
            links: [
              {
                label: "ایمیل خود را وارد کنید",
                icon: "line-md:email",
                value: "newsletter@example.com",
              },
            ],
          },
          {
            header: "ارتباط مستقیم",
            links: [
              { label: "فرم تماس", icon: "mdi:form", url: "/contact-form" },
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
          <img
            src={configs.logo}
            alt='Logo'
          />
        </div>
        <div className={styles.slug}>
          <img
            src={configs.slug}
            alt='Slug'
          />
        </div>
        <div className={styles.items}>
          {configs.nomads.map((nomad, index) => (
            <div
              className={styles.item}
              key={index}>
              <img
                src={nomad}
                alt={`Nomad ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.left}>
        {configs.menu.map((col, colIndex) => (
          <div
            className={styles.col}
            key={colIndex}>
            <h2>{col.title}</h2>
            {col.groups.map((group, groupIndex) => (
              <ul
                className={styles.group}
                key={groupIndex}>
                <h3>{group.header}</h3>
                <div className={styles.links}>
                  {group.links.map((link, linkIndex) => (
                    <li
                      className={styles.item}
                      key={linkIndex}>
                      <label>
                        <Icon icon={link.icon} />
                        <span>{link.label}</span>
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
