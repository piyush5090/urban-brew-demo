export default function Reviews() {
  const reviews = [
    {
      name: "Rahul S.",
      text: "Amazing coffee and cozy ambience. Perfect place to relax!",
    },
    {
      name: "Neha P.",
      text: "Loved the cold coffee and desserts. Highly recommended.",
    },
    {
      name: "Ankit M.",
      text: "Great service and peaceful vibe. Will visit again.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Customers <span className="text-[#6f4e37]">Say</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Rated <span className="font-semibold">4.7★ on Google</span> by 120+ happy customers
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#f8f5f2] p-6 rounded-2xl shadow hover:shadow-lg transition text-left"
            >
              <div className="flex items-center mb-3">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>

              <p className="text-gray-700 text-sm mb-4">
                “{review.text}”
              </p>

              <p className="font-semibold text-gray-900">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-block border-2 border-[#6f4e37] text-[#6f4e37] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#6f4e37] hover:text-white transition"
          >
            View All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}
