"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
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

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <motion.div
        className={styles.background}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <img
          src={configs.background}
          alt=''
        />
      </motion.div>

      {/* Company Image - Fades in first */}
      <motion.div
        className={styles.company}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}>
        <img
          src={configs.company.image}
          alt=''
        />
      </motion.div>

      {/* Agents List */}
      <motion.div
        className={styles.agents}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 2,
        }}>
        <motion.div className={styles.list}>
          {configs.agents.map((agent, index) => (
            <motion.div
              className={styles.agent}
              key={agent.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index + 1, ease :"easeOut" }} // Ensures agents appear one by one after company fades in
              viewport={{ once: true }}>
              <div className={styles.left}>
                <img
                  src={agent.image}
                  alt=''
                />
              </div>
              <div className={styles.right}>
                <div className={styles.name}>{agent.name}</div>
                <div className={styles.roles}>
                  {agent.roles?.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </div>
                <div className={styles.email}>{agent.email}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}>
          <HighLight
            text='فهرست نمایندگی'
            marked='فهرست'
          />
          <p>
            ما یک شرکت چاپ افست با تجربه از سال 1972 هستیم و در بسته بندی لوکس
            تخصص داریم. این افتخار ماست که بسته بندی های سفارشی و منحصر به فرد
            را مطابق با نیاز شما به شما ارائه دهیم.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
