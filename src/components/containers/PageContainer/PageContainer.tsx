import { ReactElement } from "react";

interface IProps {
  children: React.ReactElement | ReactElement[] | any;
  title: string;
  className?: string;
}

export default function PageContainer(props: IProps) {
  const { children, title, className } = props;

  return (
    <div className={className}>
      <title>{title}</title>
      {children}
    </div>
  );
}
