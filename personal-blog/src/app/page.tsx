import HomePage from "./home-page/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <HomePage />
    </div>
  );
}
