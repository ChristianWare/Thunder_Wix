import CategorySection from "@/components/home-page/CategorySection/CategorySection";
import FeaturedProducts from "@/components/home-page/FeaturedProducts/FeaturedProducts";
import Hero from "@/components/home-page/hero/Hero";
import DynamicProductCollection from "@/components/shared/DynamicProductCollection/DynamicProductCollection";
// import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Suspense fallback={"Loading..."}> */}
      <FeaturedProducts />
      <CategorySection />
      <DynamicProductCollection title='Best Sellers' category='best-sellers' />
      {/* </Suspense> */}
    </main>
  );
}

// async function FeaturedProducts() {
//   await delay(1000);

//   return "Featured Products";
// }
