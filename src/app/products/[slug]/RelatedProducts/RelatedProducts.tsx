// RelatedProducts.tsx
import React from "react";
import { getRelatedProducts } from "@/wix-api/products";
import { getWixServerClient } from "@/lib/wix-client.server";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import styles from "./RelatedProducts.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

interface RelatedProductsProps {
  productId: string;
}

async function fetchRelatedProducts(productId: string) {
  const wixClient = await getWixServerClient();
  return await getRelatedProducts(wixClient, productId);
}

export default async function RelatedProducts({
  productId,
}: RelatedProductsProps) {
  const relatedProducts = await fetchRelatedProducts(productId);

  if (!relatedProducts.length) return null;

  return (
    <LayoutWrapper>
      <div className={styles.content}>
        <h2 className={styles.heading}>Related </h2>
        <div className={styles.bottom}>
          {relatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
}
