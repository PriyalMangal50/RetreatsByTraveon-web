import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';

export default function PackagesIndex() {
  const cards = [
    { key: 'wellness', title: 'Wellness Retreats', desc: 'Immersive wellness programs and restorative experiences.' },
    { key: 'community', title: 'Community Tours', desc: 'Meaningful community-led journeys and cultural exchanges.' },
    { key: 'corporate', title: 'Corporate Retreats', desc: 'Offsites and team-building programs for organisations.' },
    { key: 'mice', title: 'MICE Tours', desc: 'Meetings, incentives, conferences and events.' },
  ];

  return (
    <div className="min-h-screen pt-28">
      <Navbar />

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Packages</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c) => (
              <div key={c.key} className="bg-white border rounded-lg shadow-sm p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{c.desc}</p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <Link to="/packages/detail" className="text-sm bg-gray-100 px-3 py-2 rounded flex-1 text-center">View Details</Link>
                  <Link to={`/packages/detail`} className="text-sm bg-emerald-500 text-white px-3 py-2 rounded">Enquire</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  );
}
