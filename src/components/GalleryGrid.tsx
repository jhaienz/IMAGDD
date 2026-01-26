import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Sample gallery data - replace with actual IMAGDD 2025 images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop',
    alt: 'Game Development Workshop',
    category: 'Workshops',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop',
    alt: 'Animation Showcase',
    category: 'Exhibitions',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop',
    alt: 'VR Gaming Demo',
    category: 'Demos',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1574192324001-ee41e18ed679?w=800&auto=format&fit=crop',
    alt: '3D Modeling Session',
    category: 'Workshops',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&auto=format&fit=crop',
    alt: 'Networking Event',
    category: 'Events',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop',
    alt: 'Keynote Speaker',
    category: 'Events',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&auto=format&fit=crop',
    alt: 'Digital Art Exhibition',
    category: 'Exhibitions',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&auto=format&fit=crop',
    alt: 'Game Testing Area',
    category: 'Demos',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&auto=format&fit=crop',
    alt: 'Awards Ceremony',
    category: 'Events',
  },
];

const categories = ['All', 'Workshops', 'Exhibitions', 'Demos', 'Events'];

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer aspect-video"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold">{image.alt}</p>
                <p className="text-gray-300 text-sm">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              <p className="text-gray-400">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
