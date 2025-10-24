"use client";

import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";
import useSettings from "@/hooks/useSettings";
import { useQuery } from "@tanstack/react-query";
import { GetSiteSettingsAPI } from "@/services/Site-Settings/SiteSettings.services";
import { IResponse } from "@/utils/axios/axios";
import { ISiteSettings } from "@/types/site_settings.types";
import { urls } from "@/common/urls";
import Link from "next/link";

const footerTexts = {
  EN: {
    columns: {
      social_media: {
        title: "Social Media",
        follow_us: "Follow Us",
        newsletter: "Newsletter Subscription",
        newsletter_placeholder: "Enter your email",
        direct_contact: "Direct Contact",
        contact_form: "Contact Form",
      },
      contact_us: {
        title: "Contact Us",
        online_contact: "Online Contact",
        email: "Email",
        phone: "Phone",
        address: "Our Address",
        company_address: "Company Address",
        work_hours: "Working Hours",
      },
      useful_links: {
        title: "Useful Links",
        quick_access: "Quick Access",
        guide: "Guide",
        faq: "FAQ",
        terms: "Terms of Use",
      },
    },
  },
  FA: {
    columns: {
      social_media: {
        title: "شبکه های اجتماعی",
        follow_us: "مارا دنبال کنید",
        newsletter: "اشتراک در خبرنامه",
        newsletter_placeholder: "ایمیل خود را وارد کنید",
        direct_contact: "ارتباط مستقیم",
        contact_form: "فرم تماس",
      },
      contact_us: {
        title: "ارتباط با ما",
        online_contact: "تماس اینترنتی",
        email: "ایمیل",
        phone: "تلفن",
        address: "آدرس ما",
        company_address: "آدرس شرکت",
        work_hours: "ساعات کاری",
      },
      useful_links: {
        title: "لینک های مفید",
        quick_access: "دسترسی سریع",
        guide: "راهنما",
        faq: "سوالات متداول",
        terms: "شرایط استفاده",
      },
    },
  },
};

export default function Footer() {
  const { language } = useSettings();

  const { data } = useQuery<IResponse<ISiteSettings>>({
    queryFn: GetSiteSettingsAPI,
    initialData: {
      data: {
        EN: {
          address: "",
          email: "",
          links: [],
          phone: "",
          socials: [],
          trusts: [],
          work_time: "",
        },
        FA: {
          address: "",
          email: "",
          links: [],
          phone: "",
          socials: [],
          trusts: [],
          work_time: "",
        },
      },
      message: "",
      status: 200,
    },
    queryKey: [GetSiteSettingsAPI.name],
  });

  const site_settings = data.data[language];
  const texts = footerTexts[language].columns;

  return (
    <footer className={styles.footer}>
      <div className={styles.right}>
        <div className={styles.logo}>
          <img
            src={"/images/logo.png"}
            alt='Logo'
          />
        </div>
        <div className={styles.slug}>
          {language === "FA" && (
            <img
              src={"/images/slug.png"}
              alt='Slug'
            />
          )}
        </div>
        <div className={styles.items}>
          {site_settings.trusts.map((trust, index) => (
            <Link
              className={styles.item}
              key={index}
              href={`https://${trust.href}`}
              target='_blank'>
              <img
                src={urls.STORAGE(trust.image.path)}
                alt={trust.href}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.left}>
        {/* Social Media */}
        <div className={styles.col}>
          <h2>{texts.social_media.title}</h2>
          <ul className={styles.group}>
            <h3>{texts.social_media.follow_us}</h3>
            <div className={styles.links}>
              {site_settings.socials.map((social, index) => (
                <Link
                  key={index}
                  className={styles.item}
                  href={`https://${social.url}`}
                  target='_blank'>
                  <label>
                    <Icon icon={social.icon} />
                    <span>{social.label}</span>
                  </label>
                </Link>
              ))}
            </div>
          </ul>
          <ul className={styles.group}>
            <h3>{texts.social_media.newsletter}</h3>
            <div className={styles.links}>
              <Link
                className={styles.item}
                href={``}>
                <label>
                  <Icon icon='fa7-solid:blog' />
                  <span>{texts.social_media.newsletter_placeholder}</span>
                </label>
              </Link>
            </div>
          </ul>
          <ul className={styles.group}>
            <h3>{texts.social_media.direct_contact}</h3>
            <div className={styles.links}>
              <Link
                className={styles.item}
                href={`/${language}/contact-us`}>
                <label>
                  <Icon icon='fluent:form-multiple-20-filled' />
                  <span>{texts.social_media.contact_form}</span>
                </label>
              </Link>
            </div>
          </ul>
        </div>

        {/* Contact Us */}
        <div className={styles.col}>
          <h2>{texts.contact_us.title}</h2>
          <ul className={styles.group}>
            <h3>{texts.contact_us.online_contact}</h3>
            <div className={styles.links}>
              <Link
                className={styles.item}
                href={`mailto:${site_settings.email}`}>
                <label>
                  <Icon icon='line-md:email-alt-filled' />
                  <span>{texts.contact_us.email} : </span>
                  <span>{site_settings.email}</span>
                </label>
              </Link>
              <Link
                className={styles.item}
                href={`tel:${site_settings.phone}`}>
                <label>
                  <Icon icon='line-md:email-alt-filled' />
                  <span>{texts.contact_us.phone} : </span>
                  <span className={styles.rtl}>{site_settings.phone}</span>
                </label>
              </Link>
            </div>
          </ul>
          <ul className={styles.group}>
            <h3>{texts.contact_us.address}</h3>
            <div className={styles.links}>
              <Link
                className={styles.item}
                href={``}>
                <label>
                  <Icon icon='line-md:email-alt-filled' />
                  <span>{texts.contact_us.company_address} : </span>
                  <p>{site_settings.address}</p>
                </label>
              </Link>
            </div>
          </ul>
          <ul className={styles.group}>
            <h3>{texts.contact_us.work_hours}</h3>
            <div className={styles.links}>
              <Link
                className={styles.item}
                href={``}>
                <label>
                  <Icon icon='line-md:email-alt-filled' />
                  <span>{site_settings.work_time}</span>
                </label>
              </Link>
            </div>
          </ul>
        </div>

        {/* Useful Links */}
        <div className={styles.col}>
          <h2>{texts.useful_links.title}</h2>
          <ul className={styles.group}>
            <h3>{texts.useful_links.quick_access}</h3>
            <div className={styles.links}>
              {site_settings.links.map((link, index) => (
                <Link
                  key={index}
                  className={styles.item}
                  href={link.href}>
                  <label>
                    <Icon icon={link.icon} />
                    <span>{link.label}</span>
                  </label>
                </Link>
              ))}
            </div>
          </ul>
          <ul className={styles.group}>
            <h3>{texts.useful_links.guide}</h3>
            <div className={styles.links}>
              <Link
                className={styles.item}
                href={""}>
                <label>
                  <Icon icon='mingcute:question-fill' />
                  <span>{texts.useful_links.faq}</span>
                </label>
              </Link>
              <Link
                className={styles.item}
                href={""}>
                <label>
                  <Icon icon='fluent:data-usage-settings-24-filled' />
                  <span>{texts.useful_links.terms}</span>
                </label>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
