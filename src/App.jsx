import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />

      <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Results />
      <Testimonials />
      <Pricing />
      <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;