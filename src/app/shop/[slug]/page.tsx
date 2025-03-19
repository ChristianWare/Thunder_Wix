import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
  // const categoryName = collection.name || "Category";

  return (
    <main>
      <h1>Individual Category Products Page</h1>
      <h1>Individual Category Products Page</h1>
      <h1>Individual Category Products Page</h1>
      <LayoutWrapper>
        <Suspense fallback={"Loading..."}>
          <Products collectionId={collection._id} />
        </Suspense>
        <br />
        <br />
        <br />
      </LayoutWrapper>
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
    // <div className={styles.container}>
    <div>
      {collectionProducts.items.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
