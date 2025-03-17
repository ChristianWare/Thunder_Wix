import Advantages from "@/components/home-page/Advantages/Advantages";
import BlogSection from "@/components/home-page/BlogSection/BlogSection";
import CategorySection from "@/components/home-page/CategorySection/CategorySection";
import Hero from "@/components/home-page/hero/Hero";
import Highlights from "@/components/home-page/Highlights/Highlights";
import ParallaxArea from "@/components/home-page/ParallaxArea/ParallaxArea";
import DynamicProductCollection from "@/components/shared/DynamicProductCollection/DynamicProductCollection";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import SignUp from "@/components/shared/SignUp/SignUp";
// import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <DynamicProductCollection
        title='Featured Rides'
        category='featured-products'
      />
      <CategorySection />
      <DynamicProductCollection
        title='Best Sellers'
        category='best-sellers'
      /> */}
      {/* <ParallaxArea />
      <Advantages />
      <BlogSection />
      <Highlights />
      <FinalCTA />
      */}
      <SignUp />
      <Footer />
    </main>
  );
}
