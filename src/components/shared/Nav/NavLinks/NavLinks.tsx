"use client";

import styles from "./NavLinks.module.css";
import Logo from "../../Logo/Logo";
import Link from "next/link";
// import SearchBar from '../../SearchBar/SearchBar';
import { useEffect, useState } from "react";
import Plus from "../../../../../public/icons/plus.svg";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Shop",
      href: "/shop",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    // {
    //   text: "Account",
    //   href: "/account",
    // },
    // {
    //   text: "Cart",
    //   href: "/cart",
    // },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        {isOpen && (
          <div
            className={`${styles.overlay} ${
              isOverlayVisible ? styles.visible : ""
            }`}
            onClick={() => {
              setIsOpen(false);
              setIsOverlayVisible(false);
            }}
          ></div>
        )}
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </span>
        <Logo />
      </div>
      <div className={styles.right}>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          {/* <div className={styles.searchContainer}>
              <SearchBar closeMenu={() => setIsOpen(false)} />
            </div> */}
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={styles.navItemContainer}
              onClick={() => setIsOpen(false)}
            >
              <Link href={navItem.href} className={styles.navItem}>
                {navItem.text}
              </Link>
              <Plus className={styles.plus} />
            </li>
          ))}
        </ul>
      </div>
      {/* <div className={styles.navIconsContainer}>
          <NavbarIcons />
        </div> */}
    </nav>
  );
}
