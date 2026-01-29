import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Facebook } from "lucide-react";

export default function Footer() {
  const logoRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      logoRefs.current.forEach((ref) => {
        if (ref) ref.classList.add("visible");
      });
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
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const footerLogos = [
    {
      src: "/imagdd_old_logo.jpg",
      alt: "Imagdd",
      rounded: true,
      url: "https://gdap.org.ph/",
    },
    {
      src: "/adnu.png",
      alt: "Ateneo de Naga University",
      rounded: true,
      url: "https://www.adnu.edu.ph/",
    },
    { src: "/ncf.jpg", alt: "NCF", rounded: true, url: "https://ncf.edu.ph/" },
    {
      src: "/biscast.jpg",
      alt: "BISCAST",
      rounded: true,
      url: "https://www.biscast.edu.ph/",
    },
    {
      src: "/ryneMedia.jpg",
      alt: "Ryne Media",
      rounded: true,
      url: "https://www.rynemedia.com/",
    },
    {
      src: "/[LOGO] CITY SEAL.png",
      alt: "City of Naga Seal",
      rounded: false,
      url: "https://www2.naga.gov.ph/naga-city-profile/",
    },
    {
      src: "/[LOGO] IKA AKO KITA AN NAGA.png",
      alt: "Ika Ako Kita An Naga",
      rounded: false,
      url: "https://www2.naga.gov.ph/",
    },
    {
      src: "/[LOGO] NCIB-ITPO.png",
      alt: "NCIB-ITPO",
      rounded: false,
      url: "https://www2.naga.gov.ph/investor-main/about-the-ncib/#gsc.tab=0",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About IMAGDD</h3>
            <p className="text-gray-400 text-sm">
              GDAP Academic Roadshow 2026 - Innovations in Multimedia,
              Animation, and Game Design Development. A three-day roadshow
              bringing together creative minds, industry professionals, and
              future innovators.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="mb-3">
                <p className="text-white font-semibold">Ryan Abecina</p>
                <p className="text-xs" style={{ color: "#ffcc01" }}>
                  GDAP NAGA President
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:ryanabecina01@gmail.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  ryanabecina01@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:09395792253"
                  className="hover:text-yellow-400 transition-colors"
                >
                  0939 579 2253
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/RmFFfJxhhXa9DknP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  <span>
                    Ateneo de Naga University
                    <br />
                    Ateneo Avenue, Bagumbayan Sur, Naga City
                    <br />
                    Camarines Sur, Philippines 4400.
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Facebook size={16} />
                <a
                  href="https://www.facebook.com/profile.php?id=61573611815276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a
                href="/"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Home
              </a>
              <a
                href="/gallery"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Gallery
              </a>
              <a
                href="/register"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Participant Registration
              </a>
              <a
                href="/sponsors"
                className="block text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Partner Logos */}
          <div className="mb-8">
            <p className="text-center text-sm text-gray-500 mb-4">
              In Partnership With
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {footerLogos.map((logo, index) => (
                <a
                  key={index}
                  ref={(el) => {
                    logoRefs.current[index] = el;
                  }}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-animate-scale block transition-all duration-300 hover:scale-110"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`h-20 w-auto opacity-60 hover:opacity-100 transition-opacity ${logo.rounded ? "rounded-full" : ""}`}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <div
                className="flex flex-wrap justify-center gap-2 text-sm"
                style={{ color: "#ffcc01" }}
              >
                <span>#IMAGDD2026</span>
                <span>#GDAPNaga</span>
                <span>#AdNU</span>
                <span>#NCF</span>
                <span>#BISCAST</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              &copy; 2026 IMAGDD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
