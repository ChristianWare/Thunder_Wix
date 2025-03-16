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
      {
        id: 1.3,
        option: "Services",
      },
      {
        id: 1.4,
        option: "Blog",
      },
      {
        id: 1.5,
        option: "Events",
      },
    ],
  },
  {
    id: 2.1,
    title: "Support",
    options: [
      {
        id: 2.2,
        option: "FAQ's",
      },
      {
        id: 2.3,
        option: "Orders & Shipping",
      },
      {
        id: 2.4,
        option: "Returns & Refunds",
      },
      {
        id: 2.5,
        option: "Warrenty & Repair",
      },
      {
        id: 2.5,
        option: "Payments",
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
