import { Check } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: 'Essential',
      price: '$599',
      duration: '3 Days',
      features: [
        'Daily Yoga Sessions',
        'Guided Meditation',
        'Healthy Meals',
        'Accommodation',
        'Nature Walks'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Premium',
      price: '$1,299',
      duration: '7 Days',
      features: [
        'All Essential Features',
        'Spa Treatments',
        'Personal Wellness Coach',
        'Nutrition Consultation',
        'Yoga Props Included',
        'Airport Transfer'
      ],
      color: 'from-teal-600 to-lime-500',
      featured: true
    },
    {
      name: 'Ultimate',
      price: '$2,499',
      duration: '14 Days',
      features: [
        'All Premium Features',
        'Private Sessions',
        'Customized Program',
        'Ayurvedic Treatments',
        'Excursions',
        'Lifetime Support'
      ],
      color: 'from-lime-500 to-lime-600'
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Packages</h2>
          <p className="text-gray-600 text-lg">Choose the perfect retreat package for your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                pkg.featured ? 'ring-4 ring-teal-500 scale-105 md:scale-110' : ''
              } hover:shadow-2xl transition-all duration-300`}
            >
              {pkg.featured && (
                <div className="bg-gradient-to-r from-teal-500 to-lime-500 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${pkg.color} hover:scale-105 transition-transform duration-200`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
