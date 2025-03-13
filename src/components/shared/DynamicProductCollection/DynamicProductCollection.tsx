import styles from "./DynamicProductCollection.module.css";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import Product from "@/components/shared/Product/Product";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import Link from "next/link";
import Arrow from "../../../../public/icons/arrow.svg";
import FalseButton from "@/components/shared/FalseButton/FalseButton";

interface Props {
  title: string;
  category: string;
}

export default async function DynamicProductCollection({
  title,
  category,
}: Props) {
  const wixClient = await getWixServerClient();

  const collection = await getCollectionBySlug(wixClient, `${category}`);
  if (!collection?._id) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>{title} </h2>{" "}
            <div className={styles.bottom}>
              {[...Array(6)].map((_, index) => (
                <Product key={index} isLoading />
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  // Render skeletons if there are no products
  if (!featuredProducts.items.length) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h2 className={styles.heading}>{title} </h2>{" "}
            <div className={styles.bottom}>
              {[...Array(6)].map((_, index) => (
                <Product key={index} isLoading />
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>{title}</h2>
        </div>
        <div className={styles.content}>
          {featuredProducts.items.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          <Link href='/shop' className={styles.viewAllParent}>
            <div className={styles.viewAllTop}>
              <span className={styles.viewAllTitle}>View All</span>
              <Arrow className={styles.arrow} />
            </div>
            <div className={styles.btnContainer}>
              <FalseButton btnType='secondaryii' text='View Collection' />
            </div>
          </Link>
        </div>
      </LayoutWrapper>
    </section>
  );
}
