import { useEffect, useRef } from "react";

export default function Partners() {
  const partners = [
    { name: "GDAP", logo: "/logo.png", url: "https://gdap.org.ph/" },
    {
      name: "Ateneo de Naga University",
      logo: "/adnu.png",
      url: "https://www.adnu.edu.ph/",
    },
    { name: "NCF", logo: "/ncf.jpg", url: "https://ncf.edu.ph/" },
    {
      name: "BISCAST",
      logo: "/biscast.jpg",
      url: "https://www.biscast.edu.ph/",
    },
    {
      name: "Ryne Media",
      logo: "/ryneMedia.jpg",
      url: "https://www.rynemedia.com/",
    },
    {
      name: "City of Naga",
      logo: "/[LOGO] CITY SEAL.png",
      url: "https://www2.naga.gov.ph/naga-city-profile/",
    },
    {
      name: "Ika Ako Kita An Naga",
      logo: "/[LOGO] IKA AKO KITA AN NAGA.png",
      url: "https://www2.naga.gov.ph/",
    },
    {
      name: "NCIB-ITPO",
      logo: "/[LOGO] NCIB-ITPO.png",
      url: "https://www2.naga.gov.ph/investor-main/about-the-ncib/#gsc.tab=0",
    },
  ];

  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      logoRefs.current.forEach((ref) => {
        if (ref) ref.classList.add("visible");
      });
      if (headerRef.current) headerRef.current.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "50px 0px 0px 0px",
      },
    );

    const timeoutId = setTimeout(() => {
      logoRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
      if (headerRef.current) observer.observe(headerRef.current);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="scroll-animate text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hosted & Organized By
          </h2>
          <p className="text-lg text-gray-600">
            In partnership with leading institutions and organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              ref={(el) => {
                logoRefs.current[index] = el;
              }}
              className="scroll-animate-scale flex items-center justify-center p-4 transition-all duration-300 hover:scale-110"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <a
                href={partner.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 w-auto object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
