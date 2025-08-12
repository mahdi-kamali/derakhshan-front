"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import HighLight from "@/components/UI/HighLight/HighLight";
import Button from "@/components/UI/Button/Button";

export default function Hero() {
  const configs = {
    background: "/images/about-us/background.png",
    company: {
      image: "/images/about-us/hero.png",
    },
    agents: [
      {
        name: "Hassan Ghafoorzadeh Nobar",
        image: "/images/about-us/image-2.png",
        roles: ["Founder of Derakhshan Pak Company"],
      },
      {
        name: "Rahim Ghafoorzadeh Nobar",
        image: "/images/about-us/image-3.png",
        roles: ["CEO of Derakhshan Pak Company"],
        email: "ceo@dppack.com",
      },
      {
        name: "Fereshteh Nobar",
        image: "/images/about-us/image-1.png",
        roles: ["Deputy CEO of Derakhshan Pak"],
      },
    ],
    stories: [
      {
        title: {
          text: "1945 - Company Establishment",
          marked: "Establishment",
        },
        image: "/images/about-us/stories/image-1.png",
        description:
          "In 1945, our grandfather, Hassan Ghafoorzadeh Nobar, laid the foundations of our modern and fully equipped packaging company in Tabriz. We take pride and joy in looking back at our 71-year company history. Welcome to a journey through time that shows what can be achieved through strong will and innovation.",
      },
      {
        title: {
          text: "1979 - Second Generation",
          marked: "Second",
        },
        image: "/images/about-us/stories/image-2.png",
        description:
          "As a family-owned business, Rahim Ghafoorzadeh Nobar, representing the second generation, understood the importance of maintaining quality while meeting customer demands. In 1979, he expanded the company to 12,000 square meters.",
      },
      {
        title: {
          text: "2014 - Globalization and Digitalization",
          marked: "Digitalization",
        },
        image: "/images/about-us/stories/image-3.png",
        description:
          "Globalization and digitalization have made the world smaller and expanded Derakhshan Pack's business reach. Fereshteh Ghafoorzadeh Nobar, the third generation of the family, joined the company after beginning her academic studies in Germany and Iran—bringing new value to our customers.",
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
        transition={{ duration: 1 }}
      >
        <img src={configs.background} alt="" />
      </motion.div>
      {/* Company Image - Fades in first */}
      <motion.div
        className={styles.company}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.5, delay: 0, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <img src={configs.company.image} alt="" />
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
          duration: 5,
          delay: 0,
        }}
      >
        <motion.div className={styles.list}>
          {configs.agents.map((agent, index) => (
            <motion.div
              className={styles.agent}
              key={agent.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index + 0.5, ease: "easeOut" }} // Ensures agents appear one by one after company fades in
              viewport={{ once: true }}
            >
              <div className={styles.left}>
                <img src={agent.image} alt="" />
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
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <HighLight text="AGENT LIST" marked="LIST" />
          <p>
            We are an offset printing company with experience since 1972,
            specializing in luxury packaging. It is our honor to offer you
            custom and unique packaging tailored to your needs.
          </p>
        </motion.div>
      </motion.div>
      <section className={styles.stories}>
        {configs.stories.map((story, index) => (
          <motion.div
            className={styles.item}
            key={story.image}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.right}>
              <img src={story.image} alt="" />
            </div>
            <div className={styles.left}>
              <HighLight text={story.title.text} marked={story.title.marked} />
              <p>{story.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
}
