import Thunder from "../../public/icons/lightning.svg";
import styles from "./LoadingPage.module.css";

export default function LoadingPage() {
  return (
    <div className={styles.container}>
      <Thunder className={styles.thunderIcon} />
    </div>
  );
}
