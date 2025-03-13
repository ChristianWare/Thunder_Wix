import styles from "./Nav.module.css";
import NavLinks from "./NavLinks/NavLinks";
import NavbarIcons from "./NavbarIcons/NavbarIcons";

export function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <NavLinks />
        <NavbarIcons />
      </div>
    </header>
  );
}
