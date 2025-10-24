"use client";
import "@/assets/css/index.scss";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

import ReactQueryProvider from "@/app/prividers/ReactQueryProvider";
import { ToastContainer } from "react-toastify";

import styles from "./layout.module.scss";
import { useParams } from "next/navigation";
import { LanguagesENUM } from "@/types/Language/Language.types";

interface IProps {
  children: React.ReactNode;
  params: Promise<{ language: string }>;
}



export default function RootLayout({ children, params }: IProps) {
  // const { language } = await params;

  const { language }: { language: LanguagesENUM } = useParams();


  return (
    <html lang={language.toUpperCase()}>
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
