"use client";

import React, { ReactElement } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface IProps {
  children: ReactElement;
}

const key = process.env.NEXT_PUBLIC_STIE_KEY as string;

export default function ReCaptchaProvider(props: IProps) {
  const { children } = props;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={key}
      language='fa'>
      {children}
    </GoogleReCaptchaProvider>
  );
}
