import styles from "./DummyProductCard.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  src: StaticImageData;
  href: string;
}

export default function DummyProductCard({ title, src, href = "" }: Props) {
  return (
    <Link href={href} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3 className={styles.productName}>{title}</h3>
          <span className={styles.model}>E-Bikes</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.imgContainer}>
            <Image
              src={src}
              alt=''
              title=''
              priority={true}
              fill
              className={styles.img}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.left}>
              <div className={styles.strikeThrough}>$2,199</div>
              <div className={styles.price}>
                <>$1,199</>
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
