import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import NavLinks from "./NavLinks/NavLinks";
import NavbarIcons from "./NavbarIcons/NavbarIcons";

export function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <NavLinks />
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
        <NavbarIcons />
      </div>
    </header>
  );
}
