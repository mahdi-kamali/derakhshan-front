import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function useCaptcha() {
  const [visible, setVisible] = useState(false);

  const [isSolved, setIsSolved] = useState(false);

  const SolveCaptcha = () => {
    setVisible(true);
  };

  const key = "6LeUwB0sAAAAAOHee2rXagWCCxC9MyGhFidrPyZo";

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
