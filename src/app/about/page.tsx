import AboutHero from "@/components/about-page/AboutHero/AboutHero";
import AboutParallaxArea from "@/components/about-page/AboutParallaxArea/AboutParallaxArea";
import Explain from "@/components/about-page/Explain/Explain";
import Partnership from "@/components/about-page/Partnership/Partnership";
import CategorySection from "@/components/home-page/CategorySection/CategorySection";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import SignUp from "@/components/shared/SignUp/SignUp";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Explain />
      <Partnership />
      <AboutParallaxArea />
      <CategorySection />
      <FinalCTA />
      <SignUp />
      <Footer />
    </main>
  );
}
