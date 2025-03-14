import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./FinalCTA.module.css";

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
            <div className={styles.bottomRight}>map data here...</div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
