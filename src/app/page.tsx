import CategorySection from "@/components/home-page/CategorySection/CategorySection";
import Hero from "@/components/home-page/hero/Hero";
import ParallaxArea from "@/components/home-page/ParallaxArea/ParallaxArea";
import DynamicProductCollection from "@/components/shared/DynamicProductCollection/DynamicProductCollection";
// import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Suspense fallback={"Loading..."}> */}
      <DynamicProductCollection
        title='Featured Rides'
        category='featured-products'
      />
      <CategorySection />
      <DynamicProductCollection
        title='Best Sellers'
        category='best-sellers'
        // reverse='reverse'
      />
      <ParallaxArea />
      {/* </Suspense> */}
    </main>
  );
}
