import styles from "./ProductResults.module.css";
import React from "react";
import { getWixServerClient } from "@/lib/wix-client.server";
import { ProductsSort, queryProducts } from "@/wix-api/products";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import { notFound } from "next/navigation";
import CollectionGroup from "../CollectionGroup/CollectionGroup";

interface ProductResultsProps {
  q?: string;
  page: number;
  collectionIds?: string[];
  priceMin?: number;
  priceMax?: number;
  sort?: ProductsSort;
}

export default async function ProductResults({
  q,
  page,
  collectionIds,
  priceMin,
  priceMax,
  sort,
}: ProductResultsProps) {
  // const pageSize = 8;

  const products = await queryProducts(await getWixServerClient(), {
    q,
    // limit: pageSize,
    // skip: (page - 1) * pageSize,
    collectionIds,
    priceMin,
    priceMax,
    sort,
  });

  if (page > (products.totalPages || 1)) notFound();

  return (
    <section>
      <h2 className={styles.heading}>
        {/* {products.totalCount}{" "}
        {products.totalCount === 1 ? "product" : "products"} found */}
        Products
      </h2>
      <CollectionGroup />
      <div className={styles.content}>
        {/* <div>Filter system here...</div> */}
        <div className={styles.products}>
          {products.items.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <h2 className={styles.headingii}>
        You have viewed{" "}
        <span className={styles.count}>{products.totalCount} </span>
        of <span className={styles.count}>{products.totalCount} </span>
        {products.totalCount === 1 ? "product" : "products"}
      </h2>
    </section>
  );
}
