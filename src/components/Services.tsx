import { Leaf, Sun, Wind } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Leaf,
      title: 'Natural Healing',
      description: 'Embrace the power of nature for holistic wellness and rejuvenation'
    },
    {
      icon: Sun,
      title: 'Mindful Living',
      description: 'Learn practices for a more conscious and balanced lifestyle'
    },
    {
      icon: Wind,
      title: 'Inner Peace',
      description: 'Discover tranquility through meditation and breathwork'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">Comprehensive wellness solutions for your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 rounded-xl hover:bg-teal-50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-teal-400 to-lime-400 mb-6">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
