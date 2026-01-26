import { Gamepad2, Palette, Film, Code, Trophy, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Explore the latest trends and tools in game development and interactive experiences.',
  },
  {
    icon: Palette,
    title: 'Digital Art & Design',
    description: 'Discover cutting-edge techniques in digital art, 3D modeling, and visual design.',
  },
  {
    icon: Film,
    title: 'Animation & Multimedia',
    description: 'Learn about the latest in 2D/3D animation, motion graphics, and multimedia production.',
  },
  {
    icon: Code,
    title: 'Industry Talks',
    description: 'Inspiring talks and insightful discussions from industry professionals and leaders.',
  },
  {
    icon: Trophy,
    title: 'Networking',
    description: 'Meaningful connections that bridge creativity, technology, and industry growth.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Technology',
    description: 'Discover emerging technologies and innovations shaping the future of creative tech.',
  },
];

export default function EventDescription() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About IMAGDD 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get ready to level up and step into a dynamic space where technology meets imagination.
            The <strong>GDAP Academic Roadshow 2026</strong> proudly presents <strong>IMAGDD</strong>:
            Innovations in Multimedia, Animation, and Game Design Development.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed">
            Happening on <strong>April 23–25, 2026</strong>, at the <strong>Xavier Hall, Ateneo de Naga University</strong>,
            this three-day roadshow brings together creative minds, industry professionals, and future innovators
            to explore the latest trends, tools, and opportunities in game development and interactive media.
            Expect inspiring talks, insightful discussions, and meaningful connections that bridge creativity,
            technology, and industry growth.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 leading-relaxed">
            Whether you're building games, designing worlds, investing in ideas, or simply passionate about
            interactive media, IMAGDD 2026 is your chance to learn, connect, and help shape the future of
            the game and creative tech industry.
          </p>
          <p className="text-2xl font-bold text-red-600 mt-6">
            Game on. The future starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-red-600">For Participants</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Inspiring talks from industry professionals and leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Insightful discussions on latest trends and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Networking with creative minds and future innovators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Learn about opportunities in game development and interactive media</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-600">For Industry & Sponsors</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Connect with emerging talent and future game developers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Showcase your products and services to passionate creators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Build meaningful partnerships within the creative tech community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Sponsorship opportunities to support the next generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
