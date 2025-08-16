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
        roles: ["Founder of Derakhshan Pack Company"],
      },
      {
        name: "Rahim Ghafoorzadeh Nobar",
        image: "/images/about-us/image-3.png",
        roles: ["CEO of Derakhshan Pack Company"],
        email: "ceo@dppack.com",
      },
      {
        name: "Fereshteh Ghafoorzadeh Nobar",
        image: "/images/about-us/image-1.png",
        roles: ["Deputy CEO of Derakhshan Pack"],
      },
    ],
    stories: [
      {
        title: {
          text: "First Generation",
          marked: "First Generation",
        },
        image: "/images/about-us/stories/image-1.png",
        description:
          "Establishment of the CompanyMr. Hassan Ghafurzadeh Nobar, as the founder of the Derakhshan Printing brand, established a fully equipped printing and packaging facility in Tabriz in 1945. With his continuous efforts, he was able to become one of the most successful in this industry and become a familiar and popular name in the city of Tabriz and the country. We look back with pride on our 80-year history.",
      },
      {
        title: {
          text: "Second Generation",
          marked: "Second Generation",
        },
        image: "/images/about-us/stories/image-2.png",
        description:
          "Mr. Rahim Ghafurzadeh Nobar, in 1979, after completing his studies in business administration from Tehran Tabatabayi University and backed by several years of experience in this industry, with his father's guidance, creative thinking, and passion and perseverance, decided to continue his father's career. Considering his understanding of the importance and high status of printing and packaging, and considering the industrialization of Iran, especially Tabriz as one of the main industrial hubs of the country and also the capital of sweets and chocolate, he started importing advanced and automatic European printing and packaging machines so that they could deliver orders to customers with the best quality and at the same time in the fastest time. The quality of the final product and accurate consultation, in addition to providing the most unique packaging in the world, made this company known as the best in the field of printing and packaging. In this regard, after several years of study, he started to expand the company with an infrastructure of 12,000 square meters and import new machinery. At the same time, advanced and automatic hard box boxes machines entered the company extensively and completely.",
      },
      {
        title: {
          text: "Third Generation",
          marked: "Third Generation",
        },
        image: "/images/about-us/stories/image-3.png",
        description:
          "Ms. Fereshteh Ghafurzadeh Nobar, after completing her undergraduate studies in Industrial Engineering and her master's degree in Business Management from Tabriz University, joined the company in 2014 alongside her father to continue the activities of the Derakhshan Printing brand, while benefiting from experienced professors in the printing industry in Germany and obtaining academic degrees from prestigious universities in the industry, and began her activity in order to advance the company's goals.",
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
