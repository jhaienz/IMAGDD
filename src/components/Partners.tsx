export default function Partners() {
  const partners = [
    { name: 'GDAP', logo: '/logo.png' },
    { name: 'Ateneo de Naga University', logo: '/adnu.png' },
    { name: 'NCF', logo: '/ncf.jpg' },
    { name: 'BISCAST', logo: '/biscast.jpg' },
    { name: 'Ryne Media', logo: '/ryneMedia.jpg' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hosted & Organized By
          </h2>
          <p className="text-lg text-gray-600">
            In partnership with leading institutions and organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
