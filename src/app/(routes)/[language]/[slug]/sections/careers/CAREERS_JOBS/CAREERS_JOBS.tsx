"use client";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";
import Career from "./components/Career/Career";
import { useQuery } from "@tanstack/react-query";
import { GetCareeersAPI } from "@/services/Careers/careers.services";

export default function CAREERS_JOBS() {
  const router = useRouter();

  const { data } = useQuery({
    queryFn: GetCareeersAPI,
    initialData: {
      data: [],
      message: "",
      status: 200,
    },
    queryKey: [GetCareeersAPI.name],
  });

  const { data: careers } = data;

  return (
    <section className={styles.careers}>
      {careers.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          viewport={{ once: true }}>
          <Career
            career={job}
            isLast={index == 0 ? true : false}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className={styles.bottom}>
        <p> برای ارسال فرم برای استخدام به این صفحه مراجعه فرمایید</p>
        <Button
          title='ارسال فرم'
          variant='primary'
          icon='ep:top-right'
          onClick={() => router.push("/FA/job-form")}
        />
      </motion.div>
    </section>
  );
}
