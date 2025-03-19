import Footer from "@/components/shared/Footer/Footer";
import styles from "./CategoryProductsPage.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import SignUp from "@/components/shared/SignUp/SignUp";
import CollectionGroup from "@/components/shop-page/CollectionGroup/CollectionGroup";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import LoadingPage from "@/app/loading";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Updated generateMetadata function
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params; // Await the params to access the slug
  const collection = await getCollectionBySlug(
    await getWixServerClient(),
    slug
  );

  if (!collection) notFound();

  const banner = collection.media?.mainMedia?.image;

  return {
    title: collection.name,
    description: collection.description,
    openGraph: {
      images: banner ? [{ url: banner.url }] : [],
    },
  };
}

export default async function CategoryProductsPage({ params }: PageProps) {
  const { slug } = await params; // Await the params to access the slug
  const collection = await getCollectionBySlug(
    await getWixServerClient(),
    slug
  );

  if (!collection?._id) notFound();

  // const banner = collection.media?.mainMedia?.image?.url || "";
  const categoryName = collection.name || "Category";

  return (
    <main>
      <LayoutWrapper>
        <div className={styles.container}>
          <h2 className={styles.heading}>{categoryName}</h2>
          <CollectionGroup currentSlug={slug} />
          <Suspense fallback={<LoadingPage />}>
            <Products collectionId={collection._id} />
          </Suspense>
        </div>
      </LayoutWrapper>
      <SignUp />
      <Footer />
    </main>
  );
}

interface ProductProps {
  collectionId: string;
}

// Updated Products component
async function Products({ collectionId }: ProductProps) {
  const collectionProducts = await queryProducts(await getWixServerClient(), {
    collectionIds: collectionId,
  });

  if (!collectionProducts.length) notFound();

  return (
    <>
      <div className={styles.products}>
        {collectionProducts.items.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <h2 className={styles.headingii}>
        You have viewed{" "}
        <span className={styles.count}>{collectionProducts.length}</span>
        of <span className={styles.count}>{collectionProducts.length}</span>
        products{" "}
      </h2>
    </>
  );
}
