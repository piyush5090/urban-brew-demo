import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
  "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&q=80",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#fcfbf9] py-24 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Life at <span className="text-[#6f4e37]">Urban Brew</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A glimpse into the daily grind, the foam art, and the smiles.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* We duplicate the list to ensure seamless looping */}
        <motion.div
          className="flex gap-6"
          // CHANGE HERE: Animate to -50% instead of -100%
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed: lower = faster, higher = slower
          }}
          // Ensure the width fits the content
          style={{ width: "fit-content" }}
        >
          {/* We duplicate the list twice to ensure we have enough width for -50% calculation */}
          {[...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="relative w-[300px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}