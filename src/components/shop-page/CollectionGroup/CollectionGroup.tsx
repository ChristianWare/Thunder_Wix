import Button from "@/components/shared/Button/Button";
import styles from "./CollectionGroup.module.css";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollections } from "@/wix-api/collections";

export default async function CollectionGroup() {
  const wixClient = await getWixServerClient();

  const collections = await getCollections(wixClient);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Button btnType='primaryii' text='All Products' href='/shop' />
        {collections.map((collection) => (
          <Button
            href={`/shop/${collection.slug}`}
            key={collection._id}
            btnType='primaryiii'
          >
            {collection.name}
          </Button>
        ))}
      </div>
    </section>
  );
}
