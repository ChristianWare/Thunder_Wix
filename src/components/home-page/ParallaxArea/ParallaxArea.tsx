import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ParallaxArea.module.css";

export default function ParallaxArea() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgOverlay} />
          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>Parallax Area</h2>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
