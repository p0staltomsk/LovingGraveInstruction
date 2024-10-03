import styles from "./page.module.css";
import { Rpg } from "@/components/rpg";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Rpg />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://v0.dev/r/z5mLNcc4rHd"
          target="_blank"
          rel="noopener noreferrer"
        >
          z5mLNcc4rHd
        </a>
      </footer>
    </div>
  );
}
