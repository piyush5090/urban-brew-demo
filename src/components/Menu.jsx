export default function Menu() {
  const menuItems = [
    {
      name: "Cappuccino",
      price: "₹120",
      desc: "Rich espresso topped with creamy milk foam.",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    },
    {
      name: "Cold Coffee",
      price: "₹150",
      desc: "Chilled coffee blended with milk & ice.",
      image:
        "https://images.unsplash.com/photo-1525385133512-2f3bdd039054",
    },
    {
      name: "Chocolate Cake",
      price: "₹180",
      desc: "Soft, rich, and freshly baked chocolate cake.",
      image:
        "https://images.unsplash.com/photo-1601972599722-c6d1c9f9f08b",
    },
    {
      name: "Grilled Sandwich",
      price: "₹140",
      desc: "Crispy grilled sandwich with fresh fillings.",
      image:
        "https://images.unsplash.com/photo-1604909053191-3b0f28c52cbb",
    },
  ];

  return (
    <section className="bg-[#f8f5f2] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-[#6f4e37]">Popular Menu</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites loved by our customers —
            freshly prepared every day.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-[#6f4e37] font-bold">
                    {item.price}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="bg-[#6f4e37] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#5a3e2c] transition">
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
}
