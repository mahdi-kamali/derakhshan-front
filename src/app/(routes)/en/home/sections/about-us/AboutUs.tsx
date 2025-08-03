import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import Description from "@/components/UI/Section/Description/Description";
import { useRouter } from "next/navigation";
export default function AboutUs() {
  const route = useRouter();
  return (
    <motion.section className={styles.aboutUs}>
      {/* Right Section: Team Members */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.col}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Founder */}
          <motion.div
            className={styles.first}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <div className={styles.info}>
              <h2>HASSAN GHAFOURZADEH<br /> NOBAR</h2>
              <p>Founder of Derakhshan Pack Co.</p>
            </div>
            <img src="/images/about-us/image-2.png" />
          </motion.div>

          {/* Second Member */}
          <motion.div
            className={styles.second}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className={styles.info}>
              <h2>FERESHTEH NOBAR</h2>
              <p>Derakhshan Pack Consultant</p>
            </div>
            <img src="/images/about-us/image-1.png" />
          </motion.div>
        </motion.div>

        {/* Third Member */}
        <motion.div
          className={styles.third}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.info}>
            <h2>RAHIM GHAFOURZADEH<br /> NOBAR</h2>
            <p>CEO and General Manager Of Derakhshan Pack Co.</p>
          </div>
          <img src="/images/about-us/image-3.png" />
        </motion.div>
      </motion.div>

      {/* Left Section: About Us Text */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <HighLight text={"ABOUT US"} marked="ABOUT US" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Description>
            we are an experienced Offset Printing Company since 1972 and we are
            specialized in Luxury Packaging.It is our honour to offer you
            customized and unique packaging according to your requirements.
          </Description>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            title="EXPLORE MORE"
            variant={"primary"}
            icon="none"
            onClick={() => {
              route.push("/en/about-us");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
