export default function Moments() {
  const moments = [
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    "https://images.unsplash.com/photo-1515169067865-5387ec356754",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1521334884684-d80222895322",
    "https://images.unsplash.com/photo-1541532713592-79a0317b6b77",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Celebrate Your <span className="text-[#6f4e37]">Moments</span> With Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From birthday parties to corporate gatherings,
            Urban Brew Café is the perfect place for every celebration.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {moments.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={img}
                alt="Cafe moments"
                className="h-48 w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="mt-16 bg-[#f8f5f2] rounded-3xl p-8 md:p-12 shadow">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">
            Book Your Event
          </h3>
          <p className="mt-2 text-center text-gray-600">
            Fill in the details and we’ll get back to you shortly.
          </p>

          <form className="mt-8 grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
            />

            <input
              type="date"
              className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
            />

            <select
              className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
            >
              <option>Event Type</option>
              <option>Birthday Party</option>
              <option>Anniversary</option>
              <option>Corporate Meeting</option>
              <option>Friends Get-together</option>
            </select>

            <textarea
              placeholder="Additional Message (Optional)"
              rows="4"
              className="md:col-span-2 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
            />

            <div className="md:col-span-2 text-center">
              <button
                type="button"
                className="bg-[#6f4e37] text-white px-10 py-3 rounded-full text-lg font-medium hover:bg-[#5a3e2c] transition"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
