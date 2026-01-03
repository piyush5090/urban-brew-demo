export default function Hero() {
  return (
    <section className="bg-[#f8f5f2] min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-[#6f4e37] uppercase mb-3">
            Welcome to Urban Brew Café
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Perfect Coffee Spot <br />
            in <span className="text-[#6f4e37]">Your City</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-xl">
            Freshly brewed coffee, cozy ambience, and delicious bites —
            the perfect place to relax, work, or catch up with friends.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+911234567890"
              className="bg-[#6f4e37] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#5a3e2c] transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[#6f4e37] text-[#6f4e37] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#6f4e37] hover:text-white transition"
            >
              💬 WhatsApp Order
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Cafe coffee"
            className="rounded-3xl shadow-xl w-full object-cover h-[420px]"
          />
        </div>

      </div>
    </section>
  );
}
