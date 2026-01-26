import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-400 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gray-900">
            IMAGDD 2026
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light text-gray-800">
            Innovations in Multimedia, Animation,
          </p>
          <p className="text-2xl md:text-3xl mb-8 font-light text-gray-800">
            and Game Design Development
          </p>

          {/* Main Tagline */}
          <div className="mb-10">
            <p className="text-3xl md:text-5xl font-extrabold text-red-600 leading-tight">
              LEARN, CREATE,<br />AND CONNECT<br />WITH INDUSTRY EXPERTS
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base text-gray-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-700" />
              <span className="font-semibold">April 23-25, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-700" />
              <span className="font-semibold">Xavier Hall, Ateneo de Naga University</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-700" />
              <span className="font-semibold">GDAP Academic Roadshow</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/register">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-bold text-lg px-8">
                Register Now
              </Button>
            </a>
            <a href="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold text-lg px-8">
                View 2025 Gallery
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
