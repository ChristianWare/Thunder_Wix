import styles from "./ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../../../types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.slug}`} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3 className={styles.productName}>{product.name}</h3>
          <span className={styles.model}>{product.category}</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.imgContainer}>
            <Image
              src={product.images[1]}
              alt={product.name}
              title={product.name}
              priority={true}
              fill
              className={styles.img}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.left}>
              {/* <div className={styles.strikeThrough}>$4,250.00 USD</div> */}
              <div className={styles.price}>
                {product.stock > 0 ? (
                  <>${product.price}</>
                ) : (
                  <span className={styles.outofStock}>Out of Stock</span>
                )}
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
