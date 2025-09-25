"use client";

import styles from "./styles.module.scss";

import { useRouter } from "next/navigation";

export default function ImageProduct({
  alt,
  image,
  className,
  routePath,
}: {
  image: string;
  alt?: string;
  className?: string;
  routePath: string;
}) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={alt}
        className={className}
        onClick={() => router.push(routePath)}
      />
    </div>
  );
}
