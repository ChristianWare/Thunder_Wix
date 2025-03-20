import ContactHero from "@/components/contact-page/ContactHero/ContactHero";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import SignUp from "@/components/shared/SignUp/SignUp";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <FinalCTA />
      <SignUp />
      <Footer />
    </main>
  );
}
