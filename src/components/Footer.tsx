import { Mail, MapPin, Phone, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-linear-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              About IMAGDD
            </h3>
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
                <span>
                  Xavier Hall
                  <br />
                  Ateneo de Naga University
                  <br />
                  Naga City, Philippines
                </span>
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
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <img
                src="/imagdd_old_logo.jpg"
                alt="Imagdd"
                className="h-12 w-auto rounded-full"
              />
              <img
                src="/adnu.png"
                alt="Ateneo de Naga University"
                className="h-12 w-auto rounded-full"
              />
              <img
                src="/ncf.jpg"
                alt="NCF"
                className="h-12 w-auto rounded-full"
              />
              <img
                src="/biscast.jpg"
                alt="BISCAST"
                className="h-12 w-auto rounded-full"
              />
              <img
                src="/ryneMedia.jpg"
                alt="Ryne Media"
                className="h-12 w-auto rounded-full"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <div className="flex flex-wrap justify-center gap-2 text-sm text-yellow-400">
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
