import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, User, Clock } from "lucide-react";

export default function Moments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const moments = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
    "https://plus.unsplash.com/premium_photo-1693266696734-f7cad111728e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
    "https://images.unsplash.com/photo-1731596153101-834fb20c1d49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80",
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === moments.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? moments.length - 1 : prev - 1));
  };

  // Animation variants for the slide effect
  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <section id="moments" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#6f4e37] font-bold tracking-widest uppercase text-sm">Celebrations</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Make Your <span className="text-[#6f4e37]">Moments</span> Special
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From intimate birthdays to grand reunions, we provide the perfect backdrop for your memories.
          </p>
        </div>

        {/* ---------------- SLIDESHOW CAROUSEL ---------------- */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 group">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={moments[currentIndex]}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Celebration moment"
            />
          </AnimatePresence>

          {/* Overlay Gradient for Text Readability (Optional) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Navigation Buttons (Hidden on mobile, visible on hover/desktop) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#6f4e37] p-3 rounded-full transition-all duration-300 md:opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-[#6f4e37] p-3 rounded-full transition-all duration-300 md:opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {moments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------------- BOOKING FORM ---------------- */}
        <div className="mt-20">
          <div className="bg-[#f8f5f2] rounded-[2.5rem] p-8 md:p-16 shadow-xl relative overflow-hidden">
             {/* Decorative Circle */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#6f4e37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="text-center mb-10 relative z-10">
              <h3 className="text-3xl font-bold text-gray-900">Book Your Event</h3>
              <p className="mt-2 text-gray-600">Tell us about your plan, and we'll handle the rest.</p>
            </div>

            <form className="relative z-10 grid gap-6 md:grid-cols-2">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-[#6f4e37]/20 focus:outline-none transition"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📞</div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-[#6f4e37]/20 focus:outline-none transition"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-[#6f4e37]/20 focus:outline-none transition text-gray-500"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🎉</div>
                <select className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-[#6f4e37]/20 focus:outline-none transition appearance-none text-gray-500">
                  <option>Event Type</option>
                  <option>Birthday Party</option>
                  <option>Anniversary</option>
                  <option>Corporate Meeting</option>
                  <option>Reunion</option>
                </select>
              </div>

              <textarea
                placeholder="Any special requests? (Cake, Decor, Music...)"
                rows="4"
                className="md:col-span-2 w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-[#6f4e37]/20 focus:outline-none transition resize-none"
              />

              <div className="md:col-span-2 text-center mt-4">
                <button
                  type="button"
                  className="bg-[#6f4e37] text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-[#5a3e2c] transition shadow-xl shadow-[#6f4e37]/20 transform hover:-translate-y-1"
                >
                  Send Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}