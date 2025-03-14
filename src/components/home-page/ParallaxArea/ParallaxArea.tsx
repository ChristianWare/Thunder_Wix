"use client";

// import { ReactLenis } from "@studio-freight/react-lenis";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import styles from "./ParallaxArea.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Img1 from "../../../../public/images/parallax.jpg";

export default function ParallaxArea() {
  return (
    // <ReactLenis root={false}>
    <section className={styles.container}>
      <ParallaxImage src={Img1} alt='Parallax background' />
      <div className={styles.imgOverlay} />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>
              Parallax Area Parallax Area Parallax Area
            </h2>
          </div>
        </div>
      </LayoutWrapper>
    </section>
    // </ReactLenis>
  );
}
