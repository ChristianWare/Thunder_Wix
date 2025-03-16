import LayoutWrapper from "../LayoutWrapper";
import styles from "./Footer.module.css";

const data = [
  {
    id: 1,
    title: "Bikes",
  },
  {
    id: 2,
    title: "Bikes",
  },
  {
    id: 3,
    title: "Bikes",
  },
  {
    id: 4,
    title: "Bikes",
  },
  {
    id: 5,
    title: "Outlet",
  },
];

const dataii = [
  {
    id: 1.1,
    title: "Explore",
    options: [
      {
        id: 1.2,
        option: "About Us",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>footer here</div>
      </LayoutWrapper>
    </footer>
  );
}
