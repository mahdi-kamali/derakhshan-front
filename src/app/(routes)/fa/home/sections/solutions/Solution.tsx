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
        <HighLight text="راهکار بسته بندی پیشرفته" marked="بسته بندی" />

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          افتخار ما این است که صفر تا صد تمام خدمات چاپ و بسته بندی در ۳ بخش پیش
          ازچاپ، چاپ و پس از چاپ همه بصورت یکجا ارائه میگردد و این اطمینان خاطر
          به مشتریان عزیز داده میشود که سفارشات با کیفیتی عالی و در زمان مناسب
          تحویل داده خواهد شد. ما با تکنولوژی روز و امکانات مدرن ، لوکس ترین و
          حرفه ای ترین بسته بندی را برای محصولات شما ارائه میدهیم . خدمات ما را
          کاوش کنید تا برند خود را ارتقا دهید.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Button
            title="مشاهده بیشتر"
            variant={"primary"}
            icon="none"
            onClick={() => {
              route.push("/fa/services");
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
