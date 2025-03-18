import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import styles from "./AboutParallaxArea.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Bike from "../../../../public/images/bike.jpg";

export default function AboutParallaxArea() {
  return (
    <section className={styles.container}>
      <ParallaxImage src={Bike} alt='Parallax background' />
      <div className={styles.imgOverlay} />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>
              Our <span className={styles.span}>History </span>&
              <span className={styles.span}>Philosophy</span>
            </h2>
            <div className={styles.bottom}>
              <div className={styles.left}></div>
              <div className={styles.right}>
                <h3 className={styles.title}>Philosophy</h3>
                <p className={styles.copy2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce
                  volutpat ligula purus ut semper ex aliquam sit amet. Aliquam
                  facilisis velit a rutrum congue felis est egestas purus, nec
                  dictum diam lectus id velit sed posuere vestibulum egestas
                  vestibulum, at ullamcorper quam.
                  <br />
                  <br />
                  Praesent quis maximus elit duis tempus, metus ac finibus
                  pulvinar, ligula quam accumsan quam, ut aliquet eros velit
                  vel. Duis ut augue dignissim arcu egestas mattis sed lacinia
                  nunc proin euismod tempus tortor, ut rutrum mauris gravida et
                  in a feugiat turpis. Morbi auctor ac odio id lobortis,
                  praesent eleifend ipsum enim, in hendrerit urna blandit eu.
                </p>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>History</h3>
                <p className={styles.copy2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce
                  volutpat ligula purus ut semper ex aliquam sit amet. Aliquam
                  facilisis velit a rutrum congue felis est egestas purus, nec
                  dictum diam lectus id velit sed posuere vestibulum egestas
                  vestibulum, at ullamcorper quam.
                  <br />
                  <br />
                  Praesent quis maximus elit duis tempus, metus ac finibus
                  pulvinar, ligula quam accumsan quam, ut aliquet eros velit
                  vel. Duis ut augue dignissim arcu egestas mattis sed lacinia
                  nunc proin euismod tempus tortor, ut rutrum mauris gravida et
                  in a feugiat turpis. Morbi auctor ac odio id lobortis,
                  praesent eleifend ipsum enim, in hendrerit urna blandit eu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
