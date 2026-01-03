export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  ];

  return (
    <section className="bg-[#f8f5f2] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Cafe <span className="text-[#6f4e37]">Gallery</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Take a look at our cozy interiors, delicious coffee,
          and the vibe that makes Urban Brew special.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={img}
                alt="Cafe gallery"
                className="h-48 w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
