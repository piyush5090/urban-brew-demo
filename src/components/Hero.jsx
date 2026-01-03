import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fcfbf9]">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6f4e37]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-[#6f4e37]/30 rounded-full text-xs font-bold tracking-widest text-[#6f4e37] uppercase mb-4 bg-[#6f4e37]/5">
            Est. 2024 • Urban Brew
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1]">
            Experience <br />
            <span className="text-[#6f4e37] italic">Coffee</span> Like <br />
            Never Before
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
            Artisan blends, cozy corners, and the perfect ambiance for your daily reset. Taste the difference in every cup.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="bg-[#6f4e37] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a3e2c] transition shadow-xl shadow-[#6f4e37]/30"
            >
              View Menu
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/911234567890"
              className="flex items-center gap-2 text-[#6f4e37] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#6f4e37]/5 transition"
            >
              Order via WhatsApp →
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image with Float Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
              alt="Artisan Coffee"
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <span className="text-green-600 text-xl">🌿</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Beans</p>
                <p className="text-sm font-bold text-gray-900">100% Organic</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}