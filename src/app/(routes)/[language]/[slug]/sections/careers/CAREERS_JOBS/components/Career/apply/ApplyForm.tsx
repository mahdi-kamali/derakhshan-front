import { LanguagesENUM } from "@/types/Language/Language.types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import { ReactElement, useState } from "react";
import AplyAnimation from "@/assets/animations/apply";
import { useMutation } from "@tanstack/react-query";
import { ApplyToCareerAPI } from "@/services/Careers/careers.services";
import Groups from "./Groups/Groups";
import LeaningAnimation from "@/assets/animations/learning/LeaningAnimation";
import { IField } from "@/components/UI/Fields/Field.types";
import Button from "@/components/UI/Button/Button";

export interface IGroupField {
  title: string;
  icon: ReactElement;
  fields: IField[];
  info: {
    title: string;
    description: string;
    animation: ReactElement;
  };
}

interface IProps {
  onFlip: () => void;
  career_id: string;
}

export default function ApplyForm(props: IProps) {
  const { onFlip, career_id } = props;

  const { mutate: ApplyCareer } = useMutation({
    mutationFn: ApplyToCareerAPI,
    onSuccess(data, variables, onMutateResult, context) {
      onFlip();
    },
  });

  return (
    <form className={styles.form}>
      <Groups />
      <div className={styles.actions}>
       
      </div>
    </form>
  );
}
