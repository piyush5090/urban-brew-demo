export default function Location() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find <span className="text-[#6f4e37]">Us Here</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Easily locate Urban Brew Café and get directions with a single click.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">

          {/* Map */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow">
            <iframe
              title="Urban Brew Location"
              src="https://www.google.com/maps?q=Connaught%20Place%20New%20Delhi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address + CTA */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Urban Brew Café
            </h3>

            <p className="mt-3 text-gray-600">
              123 Coffee Street,<br />
              Your City, India
            </p>

            <p className="mt-4 text-gray-600">
              Open Daily: <span className="font-medium">9:00 AM – 11:00 PM</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6f4e37] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#5a3e2c] transition"
              >
                📍 Get Directions
              </a>

              <a
                href="tel:+911234567890"
                className="border-2 border-[#6f4e37] text-[#6f4e37] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#6f4e37] hover:text-white transition"
              >
                📞 Call Cafe
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
