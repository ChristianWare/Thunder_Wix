import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./FinalCTA.module.css";

const data = [
  {
    id: 1,
    title: "Our Workshop",
  },
  {
    id: 2,
    title: "Bike Leasing",
  },
  {
    id: 3,
    title: "Leasing for Companies",
  },
  {
    id: 4,
    title: "Book your Appointment",
  },
  {
    id: 5,
    title: "Financing",
  },
  {
    id: 5,
    title: "Test Rides",
  },
  {
    id: 7,
    title: "Events",
  },
];

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Unleash the full potential of your bike with us.
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <p className={styles.copy}>
                Ride with confidence and enjoy every pedal stroke – we make it
                possible.
              </p>
              <div className={styles.btnContainer}>
                <Button btnType='primary' href='/' text='Our Services' />
              </div>
            </div>
            <div className={styles.bottomRight}>
              <ul className={styles.dataBox}>
                {data.map((x) => (
                  <li key={x.id} className={styles.title}>
                    <span className={styles.index}>{x.id}</span> {x.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
