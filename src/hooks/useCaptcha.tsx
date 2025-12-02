import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface ISolveCaptcha {
  onSuccess: (token: string) => void;
  onFail: () => void;
}

export default function useCaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isSolving, setIsSolving] = useState(false);

  const SolveCaptcha = async (props: ISolveCaptcha) => {
    setIsSolving(true);
    if (!executeRecaptcha) {
      props.onFail();
      setIsSolving(false);
      return null;
    }
    try {
      const token = await executeRecaptcha("submit");
      if (!token) {
        props.onFail();
        return null;
      }
      props.onSuccess(token);
      setIsSolving(false);
      return token;
    } catch (err) {
      props.onFail();
      setIsSolving(false);
    }
  };

  return {
    SolveCaptcha,
    isSolving,
  };
}
