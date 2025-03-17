import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutHero.module.css";
import Thunder from "../../../../public/icons/lightning.svg";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Img1 from "../../../../public/images/parallax.jpg";

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <ParallaxImage src={Img1} alt='' />
          <div className={styles.imgOverlay}></div>
          <div className={styles.contentChildren}>
            <div className={styles.left}>
              <h1 className={styles.heading} lang='en'>
                About Us{" "}
                <span className={styles.thunder}>
                  <Thunder className={styles.icon} />
                </span>
              </h1>
            </div>
            <div className={styles.right}>
              <p className={styles.copy}>Next Stop: Adventure </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
