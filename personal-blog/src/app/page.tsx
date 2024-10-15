import { Backdrop } from "@/components/backdrop";
import { Collection } from "@/components/collection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Backdrop />
      <Collection />
      <Footer />
    </div>
  );
}
