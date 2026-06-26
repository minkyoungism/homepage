import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Archive from "@/components/Archive";
import Testimonials from "@/components/Testimonials";
import Media from "@/components/Media";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <About />
        <Offers />
        <Archive />
        <Testimonials />
        <Media />
        <LeadForm />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
