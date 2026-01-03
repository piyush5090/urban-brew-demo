import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }} // Slide up after delay
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2b2118]"
    >
      {/* Logo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="relative">
            <Coffee className="text-[#ccb69b] w-20 h-20 mb-4" strokeWidth={1.5} />
            {/* Steam Animation */}
            <motion.div 
               animate={{ y: [-5, -15, -5], opacity: [0, 0.7, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-6 bg-[#ccb69b]/50 rounded-full blur-sm"
            />
             <motion.div 
               animate={{ y: [-5, -15, -5], opacity: [0, 0.7, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
               className="absolute -top-4 left-1/3 -translate-x-1/2 w-1 h-4 bg-[#ccb69b]/50 rounded-full blur-sm"
            />
        </div>
        
        <h1 className="text-4xl font-bold text-white tracking-tighter font-serif">
          Urban<span className="text-[#ccb69b]">Brew</span>
        </h1>
        <p className="text-[#ccb69b] text-sm tracking-[0.3em] mt-2 uppercase">
          Experience the Taste
        </p>
      </motion.div>
    </motion.div>
  );
}