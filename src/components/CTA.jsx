export default function CTA() {
  return (
    <section className="bg-[#6f4e37] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold">
          Visit Urban Brew Café Today
        </h2>

        <p className="mt-4 text-lg text-[#f8f5f2] max-w-2xl mx-auto">
          Fresh coffee, cozy ambience, and a perfect place to unwind.
          We can’t wait to serve you!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+911234567890"
            className="bg-white text-[#6f4e37] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#f1eae4] transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-[#6f4e37] transition"
          >
            💬 WhatsApp Order
          </a>
        </div>

      </div>
    </section>
  );
}
