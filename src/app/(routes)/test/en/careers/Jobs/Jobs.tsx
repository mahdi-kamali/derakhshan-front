"use client";
import styles from "./styles.module.scss";
import Job, { IJob } from "./components/Job/Job";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/navigation";

export default function Jobs() {
  const router = useRouter();
  const configs: IJob[] = [
    {
      type: "special",
      title: {
        text: "Printing Services Sales Specialist",
        marked: "Printing Services Sales",
      },
      requirements: [
        "Familiarity with the printing industry and complementary print products",
        "Ability to communicate effectively with customers",
        "Skills in negotiation and service presentation",
        "At least 2 years of relevant work experience",
      ],
      description:
        "We are looking for someone knowledgeable about printing and complementary services (such as lamination, foil stamping, embossing, etc.) who can assist customers in choosing the best solutions and increase service sales.",
      apply: "Submit Application Form",
      image: "/images/careers/image-1.png",
    },
    {
      type: "normal",
      title: {
        text: "Graphic Designer Specialized in Printing Industry",
        marked: "Graphic Designer",
      },
      requirements: [
        "Proficiency in design software such as Adobe Illustrator and CorelDRAW",
        "Familiarity with design principles for printing (resolution, colors, and dimensions)",
        "Creativity in packaging and print product design",
        "At least 2 years of relevant design experience",
      ],
      description:
        "We need a creative graphic designer who can create professional and print-ready designs, including packaging, brochures, and specialized print products.",
      apply: "Submit Application Form",
      image: "/images/careers/image-2.png",
    },
    {
      type: "normal",
      title: {
        text: "Graphic Designer Specialized in Printing Industry",
        marked: "Graphic Designer",
      },
      requirements: [
        "Proficiency in design software such as Adobe Illustrator and CorelDRAW",
        "Familiarity with design principles for printing (resolution, colors, and dimensions)",
        "Creativity in packaging and print product design",
        "At least 2 years of relevant design experience",
      ],
      description:
        "We need a creative graphic designer who can create professional and print-ready designs, including packaging, brochures, and specialized print products.",
      apply: "Submit Application Form",
      image: "/images/careers/image-3.png",
    },
  ];

  return (
    <section className={styles.careers}>
      {configs.length > 0 &&
        configs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Job job={job} isLast={index == 0 ? true : false} />
          </motion.div>
        ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className={styles.bottom}
      >
        <p>Please visit this page to submit your job application form</p>
        <Button
          title="Submit Form"
          variant="primary"
          icon="ep:top-right"
          onClick={() => router.push("/EN/job-form")}
        />
      </motion.div>
    </section>
  );
}
