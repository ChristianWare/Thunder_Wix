import Link from "next/link";
import styles from "./Logo.module.css";
import Thunder from "../../../../public/icons/lightning.svg";

export default function Logo() {
  return (
    <Link href='/' className={styles.logo}>
      <span className={styles.span}>thundertrails</span>
      <Thunder className={styles.icon} />
    </Link>
  );
}
