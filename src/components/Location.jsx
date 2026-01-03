import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section id="location" className="bg-[#fcfbf9] py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#6f4e37] font-bold tracking-widest uppercase text-sm">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Find Your <br />
              <span className="text-[#6f4e37]">Corner of Peace</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Tucked away from the city noise, we are located in the heart of the art district. Come for the coffee, stay for the vibe.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-[#6f4e37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Address</h4>
                  <p className="text-gray-600">123 Artisan Avenue, Creative Block,<br />New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-[#6f4e37]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Contact</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">hello@urbanbrew.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-[#6f4e37]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full bg-white p-2 rounded-[2rem] shadow-2xl rotate-1 hover:rotate-0 transition duration-500"
          >
            <iframe
              title="Urban Brew Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.066497554988!2d77.20902131508246!3d28.627772982419463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35fc964319%3A0x889a8039601362d!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1626084473854!5m2!1sen!2sin"
              className="w-full h-full rounded-[1.8rem]"
              loading="lazy"
              allowFullScreen=""
            />
            
            {/* Floating Direction Button */}
            <a 
              href="https://goo.gl/maps/placeholder" 
              target="_blank" 
              rel="noreferrer"
              className="absolute bottom-6 left-6 bg-[#6f4e37] text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:bg-[#5a3e2c] transition"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}