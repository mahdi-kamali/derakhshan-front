import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function Solution() {
  const route = useRouter();
  return (
    <motion.section className={styles.solutions}>
      {/* Right Section: Image (Fade & Slide from Right) */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src="/images/solutions/image-1.png" alt="" />
      </motion.div>

      {/* Left Section: Text & Button (Fade In First, Then Slide Down) */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <HighLight
          text="Advanced Packaging Solutions"
          marked="Advanced Packaging Solutions"
        />

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          With state-of-the-art technology and modern facilities, we deliver the
          most elegant and professional packaging for your products. Explore our
          services to elevate your brand.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Button
           title="EXPLORE MORE"
            variant={"primary"}
            icon="none"
            onClick={() => {
              route.push("/en/services");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
