import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Regular Customer",
      text: "I’ve worked from cafes all over the city, but the vibe here is unmatched. The hazelnut brew is my daily fuel.",
      rating: 5,
    },
    {
      name: "Priya Kapoor",
      role: "Food Blogger",
      text: "Absolutely Instagram-worthy interiors! But more importantly, the cheesecake is to die for. 10/10 recommend.",
      rating: 5,
    },
    {
      name: "Ankit Verma",
      role: "Freelancer",
      text: "Fast Wi-Fi, great music that isn't too loud, and staff that actually remembers your order. My go-to spot.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-[#6f4e37] font-bold tracking-widest uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
              Loved by Locals, <br />
              <span className="text-[#6f4e37]">Praised by Travelers.</span>
            </h2>
          </div>
          <div className="flex gap-4 items-center">
             <div className="text-5xl font-bold text-gray-900">4.9</div>
             <div>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className="text-gray-500 text-sm">Based on 250+ Google Reviews</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f8f5f2] p-8 rounded-3xl relative hover:-translate-y-2 transition duration-300"
            >
              <Quote className="absolute top-8 right-8 text-[#6f4e37]/20 w-12 h-12" />
              
              <div className="flex text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>

              <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}