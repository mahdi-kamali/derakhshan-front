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
              <h2>حسن غفورزاده نوبر</h2>
              <p>موسس شرکت درخشان پاک</p>
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
              <h2>فرشته غفورزاده نوبر </h2>
              <p>قائم مقام مدیر عامل شرکت درخشان پاک</p>
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
            <h2>رحیم غفورزاده نوبر </h2>
            <p>مدیر عامل شرکت درخشان پاک</p>
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
        <HighLight text={"درباره ی ما"} marked="درباره ی ما" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Description>
            شرکت درخشان پاک تبریز، پیشرو در صنعت چاپ و بسته بندی با تجربه ای
            بیشتر از ۸۰ سال آماده ارائه بسته بندی های لوکس و منحصر بفرد مطابق با
            نیاز و سلیقه مشتریان عزیز میباشد. این افتخار ماست که با بهره گیری از
            به روز ترین تکنولوژی ها و امکانات این صنعت، بتوانیم در کنار مشتریان
            خود به عنوان یک شریک تجاری و یک مشاور با تجربه و متخصص در خلق
            بینظیرترین محصولات ، در جهت ارتقای برند آن شرکت محترم گام برداریم.
          </Description>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            title="مشاهده بیشتر"
            variant={"primary"}
            icon="none"
            onClick={() => {
              route.push("/fa/about-us");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
