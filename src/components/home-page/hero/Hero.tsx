import styles from "./Hero.module.css";
import LayoutWrapper from "../../shared/LayoutWrapper";

import ScrollHorizontalText from "../../shared/ScrollHorizontalText/ScrollHorizontalText";
import Thunder from "../../../../public/icons/lightning.svg";
// import ProductCard from "@/components/shared/ProductCard/ProductCard";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgOverlay}></div>
          <div className={styles.contentChildren}>
            <div className={styles.left}>
              <h1 className={styles.heading} lang='en'>
                RISE WITH <br /> THE{" "}
                <span className={styles.thunder}>
                  THUNDER
                  <Thunder className={styles.icon} />
                </span>
              </h1>
              <p className={styles.copy}>
                Your shop for bicycles <br /> and e-bikes in SWitzerland.
              </p>
              {/* <Button text='test' btnType='primary' href='/' /> */}
            </div>
            <div className={styles.right}>
              
                {/* <ProductCard key={product.slug} product={product} /> */}
              
            </div>
          </div>
        </div>
        <ScrollHorizontalText text='Returns extends over a period of 14 days' />
      </LayoutWrapper>
    </section>
  );
}
