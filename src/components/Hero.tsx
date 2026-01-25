import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            IMAGDD 2026
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Innovations in Multimedia, Animation,
          </p>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            and Game Design Development
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>April 23-25, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Xavier Hall, Ateneo de Naga University</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>GDAP Academic Roadshow</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Register Now
              </Button>
            </a>
            <a href="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                View 2025 Gallery
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
