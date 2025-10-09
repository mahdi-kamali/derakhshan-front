"use client";

import styles from "./styles.module.scss";

export default function ImageProduct({
  alt,
  image,
  className,
  onClick,
}: {
  image: string;
  alt?: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={alt}
        className={className}
        onClick={onClick}
      />
    </div>
  );
}
