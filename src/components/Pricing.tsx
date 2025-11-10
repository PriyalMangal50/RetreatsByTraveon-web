import { Check, X } from 'lucide-react';

export default function Pricing() {
  const features = [
    { name: 'Daily Yoga Sessions', essential: true, premium: true, ultimate: true },
    { name: 'Guided Meditation', essential: true, premium: true, ultimate: true },
    { name: 'Healthy Meals', essential: true, premium: true, ultimate: true },
    { name: 'Accommodation', essential: true, premium: true, ultimate: true },
    { name: 'Nature Walks', essential: true, premium: true, ultimate: true },
    { name: 'Spa Treatments', essential: false, premium: true, ultimate: true },
    { name: 'Personal Wellness Coach', essential: false, premium: true, ultimate: true },
    { name: 'Nutrition Consultation', essential: false, premium: true, ultimate: true },
    { name: 'Airport Transfer', essential: false, premium: true, ultimate: true },
    { name: 'Private Sessions', essential: false, premium: false, ultimate: true },
    { name: 'Customized Program', essential: false, premium: false, ultimate: true },
    { name: 'Ayurvedic Treatments', essential: false, premium: false, ultimate: true },
    { name: 'Excursions', essential: false, premium: false, ultimate: true },
    { name: 'Lifetime Support', essential: false, premium: false, ultimate: true }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Our Packages</h2>
          <p className="text-gray-600 text-lg">Find the perfect fit for your wellness journey</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-teal-500 to-lime-500">
                  <th className="px-6 py-4 text-left text-white font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Essential</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Premium</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Ultimate</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-gray-900 font-medium">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.essential ? (
                        <Check className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.ultimate ? (
                        <Check className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-100">
                  <td className="px-6 py-6 text-gray-900 font-bold text-lg">Price</td>
                  <td className="px-6 py-6 text-center text-2xl font-bold text-gray-900">$599</td>
                  <td className="px-6 py-6 text-center text-2xl font-bold text-gray-900">$1,299</td>
                  <td className="px-6 py-6 text-center text-2xl font-bold text-gray-900">$2,499</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
