import Hero from "../components/Hero";
import PackagesSection from "../components/PackagesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <PackagesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}

export default Home;