"use client";

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
    <img
      src={image}
      alt={alt}
      className={className}
      onClick={() => router.push(routePath)}
    />
  );
}
