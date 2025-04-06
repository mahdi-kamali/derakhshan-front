import Head from "next/head";
import { ReactElement } from "react";

interface IProps {
  children: React.ReactElement | ReactElement[];
  title: string;
}

export default function PageContainer(props: IProps) {
  const { children, title } = props;

  return (
    <div>
      <title>{title}</title>

      {children}
    </div>
  );
}
