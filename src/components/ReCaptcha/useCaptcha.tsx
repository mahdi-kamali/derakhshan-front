import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function useCaptcha() {
  const [visible, setVisible] = useState(false);

  const [isSolved, setIsSolved] = useState(false);

  const SolveCaptcha = () => {
    setVisible(true);
  };

  const key = "6LcyzB0sAAAAAL1gLBws7CPdr_KVBGXs9lEOFEBi";

  const ReCaptcha = () => (
    <ReCAPTCHA
      sitekey={key}
      onChange={(event) => {
        setIsSolved(true);
        setVisible(false);
      }}
      size={visible ? "normal" : "invisible"}
      onExpired={() => {
        setIsSolved(false);
      }}
    />
  );

  return {
    isSolved,
    ReCaptcha,
    SolveCaptcha,
    isCaptchaVisible: visible,
  };
}
