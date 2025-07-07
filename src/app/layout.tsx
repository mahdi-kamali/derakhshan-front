import "@/assets/css/index.scss";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

import styles from "@/app/layout.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Product Page",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
