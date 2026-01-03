import { useState } from "react";
import { motion } from "framer-motion";

// Expanded Mock Data (16 Items)
const allMenuItems = [
  { name: "Signature Cappuccino", price: "₹180", desc: "Rich espresso with velvety micro-foam.", category: "Coffee", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80" },
  { name: "Hazelnut Cold Brew", price: "₹220", desc: "Steeped for 12hrs with roasted hazelnut.", category: "Coffee", image: "https://plus.unsplash.com/premium_photo-1695658864441-ad11e5afad29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Avocado Toast", price: "₹250", desc: "Sourdough, cherry tomatoes, and feta.", category: "Breakfast", image: "https://images.unsplash.com/photo-1628556820645-63ba5f90e6a2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Truffle Mushroom Pasta", price: "₹340", desc: "Creamy white sauce with truffle oil.", category: "Main", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=500&q=80" },
  // Batch 2
  { name: "Berry Smoothie Bowl", price: "₹290", desc: "Mixed berries, granola, and honey.", category: "Breakfast", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&q=80" },
  { name: "Classic Cheesecake", price: "₹210", desc: "New York style with strawberry compote.", category: "Dessert", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&q=80" },
  { name: "Iced Caramel Macchiato", price: "₹200", desc: "Espresso, milk, vanilla, and caramel drizzle.", category: "Coffee", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80" },
  { name: "Grilled Chicken Panini", price: "₹260", desc: "Herb chicken, cheese, and pesto sauce.", category: "Main", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80" },
  // Batch 3
  { name: "Belgian Waffles", price: "₹230", desc: "Served with maple syrup and fresh fruits.", category: "Dessert", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&q=80" },
  { name: "Matcha Latte", price: "₹240", desc: "Premium Japanese matcha with steamed milk.", category: "Coffee", image: "https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Spicy Aglio Olio", price: "₹310", desc: "Spaghetti tossed in garlic, chili, and olive oil.", category: "Main", image: "https://images.unsplash.com/photo-1626844131082-256783844137?w=500&q=80" },
  { name: "Chocolate Brownie", price: "₹160", desc: "Gooey dark chocolate brownie with walnuts.", category: "Dessert", image: "https://images.unsplash.com/photo-1612078960206-1709f1f0c969?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  // Batch 4
  { name: "Mango Iced Tea", price: "₹150", desc: "Refreshing tea infused with mango puree.", category: "Drink", image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500&q=80" },
  { name: "Caesar Salad", price: "₹280", desc: "Romaine lettuce, croutons, and parmesan.", category: "Main", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80" },
  { name: "Affogato", price: "₹190", desc: "Vanilla ice cream drowned in hot espresso.", category: "Dessert", image: "https://images.unsplash.com/photo-1594631661960-34762327295a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Blueberry Muffin", price: "₹120", desc: "Freshly baked soft muffin with crumble top.", category: "Breakfast", image: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?w=500&q=80" },
];

export default function Menu() {
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 items

  const showMoreItems = () => {
    setVisibleCount((prev) => prev + 8); // Load 8 more on click
  };

  return (
    <section id="menu" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#6f4e37] font-bold tracking-widest uppercase text-sm">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Curated for Your Taste</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allMenuItems.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={item.name} // Use unique key
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-3xl h-64 mb-6 cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#6f4e37] z-20">
                  {item.category}
                </span>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />
              </div>
              
              {/* Details */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6f4e37] transition">
                  {item.name}
                </h3>
                <span className="text-lg font-serif font-bold text-[#6f4e37]">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < allMenuItems.length && (
          <div className="mt-16 text-center">
            <button 
              onClick={showMoreItems}
              className="bg-[#6f4e37] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#5a3e2c] transition shadow-lg shadow-[#6f4e37]/20 transform hover:-translate-y-1"
            >
              View More Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
}