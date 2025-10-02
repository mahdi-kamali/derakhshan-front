import { ReactElement } from "react";
import { ToastContainer, toast } from "react-toastify";

interface IProps {
  children: ReactElement;
}

export default function ToastProvider(props: IProps) {
  const { children } = props;
  return (
    <>
      {children}
      <ToastContainer limit={2000} />
    </>
  );
}
