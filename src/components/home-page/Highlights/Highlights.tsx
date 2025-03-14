import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Highlights.module.css";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Img1 from "../../../../public/images/highlight.jpg";
import Img2 from "../../../../public/images/helmetBlack.png";
import DummyProductCard from "@/components/shared/DummyProductCard/DummyProductCard";

export default function Highlights() {
  return (
    <section className={styles.container}>
      <ParallaxImage src={Img1} alt='Parallax background' />
      <div className={styles.imgOverlay} />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>Highlights</h2>
            <div className={styles.bottom}>
              <DummyProductCard
                title='Bern Brentwood 2.0 MIPS Helmet'
                src={Img2}
              />
            </div>
            <div className={styles.bottom2}>
              <div className={styles.bottom2Blank}></div>
              <DummyProductCard
                title='Bern Brentwood 2.0 MIPS Helmet'
                src={Img2}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
