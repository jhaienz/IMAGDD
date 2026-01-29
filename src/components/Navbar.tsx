import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Register", href: "/register" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="IMAGDD Logo" className="h-14 w-auto" />
              <span className="text-2xl font-bold" style={{ color: '#ffcc01' }}>
                IMAGDD 2026
              </span>
            </a>
            <div className="hidden md:flex items-center gap-3 border-l border-gray-200 pl-4">
              <img src="/[LOGO] CITY SEAL.png" alt="City of Naga Seal" className="h-14 w-auto" />
              <img src="/[LOGO] IKA AKO KITA AN NAGA.png" alt="Ika Ako Kita An Naga" className="h-14 w-auto" />
              <img src="/[LOGO] NCIB-ITPO.png" alt="NCIB-ITPO" className="h-14 w-auto" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7">
                <Menu
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-yellow-50 rounded-md font-medium text-lg transition-all duration-300 ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
