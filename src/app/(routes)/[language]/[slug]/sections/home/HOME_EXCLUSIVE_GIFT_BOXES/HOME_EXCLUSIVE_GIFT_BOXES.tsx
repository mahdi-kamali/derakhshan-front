"use client";
import HighLight from "@/components/UI/HighLight/HighLight";
import styles from "./styles.module.scss";
import Button from "@/components/UI/Button/Button";
import { motion } from "framer-motion";
import Description from "@/components/UI/Section/Description/Description";
import { useRouter } from "next/navigation";
import { ISection } from "@/types/sections.types";
import { urls } from "@/common/urls";
import { LanguagesENUM } from "@/types/Language/Language.types";
import Component from "./Component/Component";

interface IProps {
  section: Extract<ISection, { type: "HOME_EXCLUSIVE_GIFT_BOXES" }>;
  language: LanguagesENUM;
}

export default function HOME_EXCLUSIVE_GIFT_BOXES(props: IProps) {
  const { section, language } = props;
  const route = useRouter();

  return <Component {...props} />;
}
