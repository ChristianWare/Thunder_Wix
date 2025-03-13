import styles from "./NavbarIcons.module.css";
import Cart from "../../../../../public/icons/cart.svg";
// import Link from "next/link";
// import Button from "../Button/Button";

export default async function NavbarIcons() {
  return (
    <div className={styles.container}>
      <div className={styles.accountContainer}>
        {/* {session ? (
          <Link href='/account'>My Account</Link>
        ) : (
          <Link href='sign-in'>Sign In</Link>
        )} */}
        Sign In
      </div>
      <div className={styles.cartParent}>
        <Cart className={styles.icon} />
        <span className={styles.counter}>
          {/* {totalQuantity < 10 ? totalQuantity : "9+"} */}0
        </span>
      </div>
    </div>
  );
}
