/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageTitle}>
        <p>筑波大学管弦楽団 2024 新歓ウェブサイト</p>
      </div>
      <img
        className={styles.logo}
        src="logo.png"
        alt="筑波大学 管弦楽団 ロゴ"
      />
      <p className={styles.description}>
        新歓 Web 製作中！
        <br />
        完成までもうしばらくお待ちください🔥
      </p>
    </div>
  );
}
