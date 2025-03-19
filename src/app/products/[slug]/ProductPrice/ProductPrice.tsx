import styles from "./ProductPrice.module.css";
import { products } from "@wix/stores";

interface ProductPriceProps {
  product: products.Product;
  selectedVariant: products.Variant | null;
}

export default function ProductPrice({
  product,
  selectedVariant,
}: ProductPriceProps) {
  const priceData = selectedVariant?.variant?.priceData || product.priceData;

  if (!priceData) return null;

  const hasDiscount = priceData.discountedPrice !== priceData.price;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p
          className={`${styles.price} ${
            hasDiscount ? styles.strikethrough : ""
          }`}
        >
          {priceData.formatted?.price}
        </p>
        <div className={styles.detailsBox}>
          <div className={styles.inStock}>
            In Stock <span className={styles.greenDot} />
          </div>
          {hasDiscount && <div className={styles.inStock}>Sale</div>}
        </div>
      </div>
      {hasDiscount && (
        <p className={styles.discountedPrice}>
          {priceData.formatted?.discountedPrice}
        </p>
      )}
    </div>
  );
}
