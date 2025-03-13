import styles from "./DummyProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../../../../public/images/model2.png";

export default function DummyProductCard() {
  return (
    <Link href={"/"} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3 className={styles.productName}>Turbo Vado 4.0 - Cast Black</h3>
          <span className={styles.model}>Guff</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt=''
              title=''
              priority={true}
              fill
              className={styles.img}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.left}>
              {/* <div className={styles.strikeThrough}>$4,250.00 USD</div> */}
              <div className={styles.price}>
                <>$2,749</>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.btn}>new</div>
              <div className={styles.btnii}>Sale</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
