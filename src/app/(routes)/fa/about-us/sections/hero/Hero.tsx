"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import HighLight from "@/components/UI/HighLight/HighLight";

export default function Hero() {
  const configs = {
    background: "/images/about-us/background.png",
    company: {
      image: "/images/about-us/hero.png",
    },

    agents: [
      {
        name: "رحیم غفورزاده نبر",
        image: "/images/about-us/image-3.png",
        roles: ["مدیرعامل و مدیر کل شرکت درخشان پک"],
        email: "ceo@dppack.com",
      },
      {
        name: "حسن غفورزاده نبر",
        image: "/images/about-us/image-2.png",
        roles: ["بنیان‌گذار شرکت درخشان پک"],
      },
      {
        name: "فرشته نبر",
        image: "/images/about-us/image-1.png",
        roles: ["مشاور درخشان پک"],
      },
    ],
  };

  const [name, setName] = useState("");

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img
          src={configs.background}
          alt=''
        />
      </div>
      <div className={styles.company}>
        <img
          src={configs.company.image}
          alt=''
        />
      </div>

      <div className={styles.agents}>
        <div className={styles.list}>
          {configs.agents.map((agent) => {
            return (
              <div className={styles.agent}>
                <div className={styles.left}>
                  <img
                    src={agent.image}
                    alt=''
                  />
                </div>
                <div className={styles.right}>
                  <div className={styles.name}>{agent.name}</div>
                  <div className={styles.roles}>
                    {agent.roles?.map((role) => {
                      return <span>{role}</span>;
                    })}
                  </div>
                  <div className='email'>{agent.email}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.info}>
          <HighLight
            text='فهرست نمایندگی'
            marked='فهرست'
          />
          <p>
            ما یک شرکت چاپ افست با تجربه از سال 1972 هستیم و در بسته بندی لوکس
            تخصص داریم. این افتخار ماست که بسته بندی های سفارشی و منحصر به فرد
            را مطابق با نیاز شما به شما ارائه دهیم.
          </p>
        </div>
      </div>
    </section>
  );
}
