"use client";
import React, { useEffect } from "react";

interface IProps {
  children: React.ReactElement;
}

export default function layout(props: IProps) {
  const { children } = props;

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    html.style.fontFamily = "var(--font-fa-primary)";
    html.lang = "fa";
    html.dir = "rtl";
  }, []);

  return <>{children}</>;
}
