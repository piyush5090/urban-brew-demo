import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Moments from "./components/Moments";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; // Import Loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2.5 seconds)
    // In a real app, you might wait for images to load, but for a demo, a timer is perfect.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <div className="antialiased text-gray-900 bg-[#fcfbf9]">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Menu />
          <Gallery />
          <Reviews />
          <Moments />
          <Location />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;