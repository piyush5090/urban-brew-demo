import { Facebook, Instagram, Twitter, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2b2118] text-[#e5e5e5] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Coffee className="text-[#ccb69b]" size={32} />
            <span className="text-2xl font-bold text-white tracking-tighter">
              Urban<span className="text-[#ccb69b]">Brew</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting memories one cup at a time. We are dedicated to sourcing the finest beans and serving them with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#ccb69b] transition">Home</a></li>
            <li><a href="#menu" className="hover:text-[#ccb69b] transition">Our Menu</a></li>
            <li><a href="#gallery" className="hover:text-[#ccb69b] transition">Gallery</a></li>
            <li><a href="#location" className="hover:text-[#ccb69b] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Visit</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>123 Artisan Avenue, ND</li>
            <li>+91 98765 43210</li>
            <li>hello@urbanbrew.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">Get the latest offers and menu updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-[#3a2e24] text-white px-4 py-3 rounded-l-lg focus:outline-none w-full border border-transparent focus:border-[#ccb69b] transition"
            />
            <button className="bg-[#ccb69b] text-[#2b2118] px-4 py-3 rounded-r-lg font-bold hover:bg-white transition">
              →
            </button>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a href="#" className="bg-[#3a2e24] p-2 rounded-full hover:bg-[#ccb69b] hover:text-[#2b2118] transition"><Instagram size={20} /></a>
            <a href="#" className="bg-[#3a2e24] p-2 rounded-full hover:bg-[#ccb69b] hover:text-[#2b2118] transition"><Facebook size={20} /></a>
            <a href="#" className="bg-[#3a2e24] p-2 rounded-full hover:bg-[#ccb69b] hover:text-[#2b2118] transition"><Twitter size={20} /></a>
          </div>
        </div>

      </div>
      
      {/* Copyright & Portfolio Link */}
      <div className="border-t border-[#3a2e24] mt-16 pt-8 text-center text-gray-500 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Urban Brew Café. All rights reserved. 
          Designed by{" "}
          <a 
            href="https://piyush-portfolio-25.netlify.app/" // REPLACE WITH YOUR URL
            target="_blank" 
            rel="noreferrer"
            className="text-[#ccb69b] hover:text-white transition font-bold"
          >
            @piyushgovindani
          </a>
        </p>
      </div>
    </footer>
  );
}