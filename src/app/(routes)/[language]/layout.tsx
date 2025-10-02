import "@/assets/css/index.scss";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

import styles from "@/app/layout.module.scss";
import ReactQueryProvider from "@/app/prividers/ReactQueryProvider";
import ToastProvider from "@/providers/Toast.provider";
import { ToastContainer } from "react-toastify";

interface IProps {
  children: React.ReactNode;
  params: { language: string };
}

export const metadata = {};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: IProps) {
  const { language } = await params;
  return (
    <html lang={language}>
      <ReactQueryProvider>
        <body className={styles.layout}>
          <Header />
          {children}
          <Footer />
          <ToastContainer limit={2000} />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
