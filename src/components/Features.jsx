export default function Features() {
  const features = [
    {
      title: "Freshly Brewed Coffee",
      desc: "Premium beans brewed fresh for the perfect taste every time.",
      icon: "☕",
    },
    {
      title: "Cozy Ambience",
      desc: "A calm and comfortable space to relax or work peacefully.",
      icon: "🛋️",
    },
    {
      title: "Free Wi-Fi",
      desc: "High-speed internet for work meetings or casual browsing.",
      icon: "📶",
    },
    {
      title: "Open Till Late",
      desc: "Perfect hangout spot for late evening coffee cravings.",
      icon: "🕒",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why People Love <span className="text-[#6f4e37]">Urban Brew</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We focus on quality, comfort, and a great experience —
          making every visit memorable.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8f5f2] p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
