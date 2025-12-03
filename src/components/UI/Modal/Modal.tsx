import MuiModal from "@mui/material/Modal";
import { ReactElement } from "react";

import styles from "./styles.module.scss";
import Button, { IButtonProps } from "../Button/Button";
import { Grow } from "@mui/material";

interface IProps {
  children: () => {
    BODY: ReactElement | ReactElement[];
    FOOTER?: ReactElement;
    ACTIONS: IButtonProps[];
  };
  show?: boolean;
  onClose: () => void;
}

export default function Modal(props: IProps) {
  const { children, show = false, onClose } = props;

  const { BODY, ACTIONS, FOOTER } = children();

  return (
    <MuiModal
      classes={{
        backdrop: styles.backdrop,
      }}
      open={show}
      onClose={onClose}
      closeAfterTransition
      disableEscapeKeyDown={false}>
      <Grow in={show}>
        <div className={styles.content}>
          <div className={styles.children}>{BODY}</div>

          {FOOTER && <div className={styles.footer}>{FOOTER}</div>}

          {ACTIONS.length > 0 && (
            <div className={styles.actions}>
              {ACTIONS.map((action, index) => (
                <Button
                  {...action}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </Grow>
    </MuiModal>
  );
}
