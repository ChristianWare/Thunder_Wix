import styles from "./Advantages.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Circle from "../../../../public/icons/circle.svg";

const data = [
  {
    id: 1,
    title: "experience and expertise",
  },
  {
    id: 2,
    title: "Comprehensive Services",
  },
  {
    id: 3,
    title: "Customer Satisfaction",
  },
  {
    id: 4,
    title: "Fast and reliable repaires",
  },
  {
    id: 5,
    title: "Preventattive maintainance",
  },
  {
    id: 6,
    title: "Community and Passion",
  },
];

export default function Advantages() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Your <br /> Advantages
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.space} />
          <div className={styles.databox}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <Circle className={styles.icon} />
                <h3 className={styles.title}>{x.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
