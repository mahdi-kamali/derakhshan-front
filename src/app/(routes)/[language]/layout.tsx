import "@/assets/css/index.scss";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

import ReactQueryProvider from "@/app/prividers/ReactQueryProvider";
import { ToastContainer } from "react-toastify";

import styles from "./layout.module.scss";

interface IProps {
  children: React.ReactNode;
  params: Promise<{ language: string }>;
}

export const metadata = {};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: IProps) {
  const { language } = await params;

  return (
    <ReactQueryProvider>
      <body className={styles.layout}>
        <Header />
        {children}
        <Footer />
        <ToastContainer limit={2000} />
      </body>
    </ReactQueryProvider>
  );
}
