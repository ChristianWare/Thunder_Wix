import styles from "./CategorySection.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollections } from "@/wix-api/collections";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../../public/icons/arrow.svg";

export default async function CategorySection() {
  const wixClient = await getWixServerClient();

  const collections = await getCollections(wixClient);
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Explore</h2>
          </div>
          <div className={styles.bottom}>
            {collections.map((collection) => (
              <Link
                // href={`/collections/${collection.slug}`}
                href='/'
                key={collection._id}
              >
                <div className={styles.imgContainer}>
                  <div className={styles.imgOverlay}></div>
                  {collection.bannerImage ? (
                    <div className={styles.imgContainer}>
                      <Image
                        src={collection.bannerImage}
                        alt={collection.name || "Collection Banner"}
                        fill
                        className={styles.img}
                      />
                      <Arrow className={styles.arrowii} />
                    </div>
                  ) : (
                    <div className={styles.noImage}>No Image Available</div>
                  )}
                  <div className={styles.collectionNameArrowBox}>
                    <span className={styles.collectionName}>
                      {collection.name}
                    </span>
                    <Arrow className={styles.arrow} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
