"use client";

import { LanguagesENUM } from "@/types/Language/Language.types";
import { useParams } from "next/navigation";
import React, { ReactElement } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface IProps {
  children: ReactElement;
}

const key = process.env.NEXT_PUBLIC_STIE_KEY as string;

export default function ReCaptchaProvider(props: IProps) {
  const { language }: { language: LanguagesENUM } = useParams();

  const { children } = props;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={key}
      language={language.toLocaleLowerCase()}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
