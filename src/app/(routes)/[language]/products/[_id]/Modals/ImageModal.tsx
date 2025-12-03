import { urls } from "@/common/urls";
import Modal from "@/components/UI/Modal/Modal";
import { IProduct } from "@/types/products.types";
import React from "react";

import styles from "./styles.module.scss";

interface IProps {
  show: boolean;
  onClose: () => void;
  image: string;
}

export default function ImageModal(props: IProps) {
  const { show, onClose, image } = props;

  return (
    <Modal
      onClose={() => {
        onClose();
      }}
      show={show}>
      {() => {
        return {
          ACTIONS: [
            {
              title: "بستن",
              variant: "danger",
              onClick() {
                onClose();
              },
              icon: "mingcute:close-fill",
            },
          ],
          BODY: (
            <div className={styles.image}>
              <img src={urls.STORAGE(image)} />
            </div>
          ),
        };
      }}
    </Modal>
  );
}
