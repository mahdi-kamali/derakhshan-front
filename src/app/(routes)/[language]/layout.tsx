import "@/assets/css/index.scss";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

import styles from "@/app/layout.module.scss";

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
      <body className={styles.layout}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
