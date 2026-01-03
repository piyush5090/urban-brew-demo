import { motion } from "framer-motion";
import { Coffee, Wifi, Clock, Armchair } from "lucide-react";

const features = [
  {
    title: "Artisan Coffee",
    desc: "Sourced from the finest estates, roasted to perfection for that rich aroma.",
    icon: <Coffee size={32} />,
  },
  {
    title: "Cozy Workspaces",
    desc: "Ergonomic seating and a quiet atmosphere designed for deep focus.",
    icon: <Armchair size={32} />,
  },
  {
    title: "Blazing Fast Wi-Fi",
    desc: "Stream, call, or upload without a glitch. Your office away from the office.",
    icon: <Wifi size={32} />,
  },
  {
    title: "Open Until Midnight",
    desc: "Late night study session? We are here with caffeine and good vibes.",
    icon: <Clock size={32} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This makes them appear one by one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#6f4e37] font-bold tracking-widest uppercase text-sm">The Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            More Than Just <span className="text-[#6f4e37]">Coffee</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We’ve curated every detail to ensure you leave feeling better than when you walked in.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }} // Lift effect on hover
              className="bg-[#fcfbf9] p-8 rounded-[2rem] border border-transparent hover:border-[#6f4e37]/20 hover:shadow-xl transition-all duration-300 group text-center"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 mx-auto bg-[#6f4e37]/10 rounded-full flex items-center justify-center text-[#6f4e37] mb-6 group-hover:bg-[#6f4e37] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}