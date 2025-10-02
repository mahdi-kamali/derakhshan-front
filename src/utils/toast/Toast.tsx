import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ShowSuccess = (message: string) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    rtl: true,
  });
};

export const ShowError = (message: string) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    rtl: true,
  });
};
export const ShowQuestion = (props: {
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  const {
    message = "آیا از ادامه فرایند اطمینان دارید؟",
    onCancel,
    onConfirm,
  } = props;
  toast(
    ({ closeToast }) => (
      <div className={styles.toast}>
        <div className={styles.actions}>
          <button
            className={styles.confirm}
            onClick={() => {
              onConfirm();
              closeToast && closeToast();
            }}>
            <span>بله</span>
            <Icon icon='fluent-mdl2:accept' />
          </button>
          <button
            className={styles.cancel}
            onClick={() => {
              onCancel();
              closeToast && closeToast();
            }}>
            <span>خیر</span>
            <Icon icon='line-md:cancel' />
          </button>
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    ),
    {
      position: "top-center",
      style: {
        width: "max-content",
      },
      autoClose: false, // keep it open until user chooses
      closeOnClick: false,
      draggable: false,
    },
  );
};
