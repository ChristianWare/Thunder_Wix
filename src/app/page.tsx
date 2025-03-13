import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <h1>Yo</h1>
      <Suspense fallback={"Loading..."}>
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}

// async function FeaturedProducts() {
//   await delay(1000);

//   return "Featured Products";
// }
