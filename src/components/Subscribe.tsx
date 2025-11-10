import { images } from '../assets';
import { Mail } from 'lucide-react';

export default function Subscribe() {
  return (
    <section
      aria-label="Subscribe"
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${images.program10})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full md:w-2/3">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-md border border-gray-300 px-12 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            className="w-full md:w-auto px-6 py-3 rounded-md bg-gradient-to-r from-teal-400 to-green-600 text-white font-semibold hover:opacity-90 transition"
          >
            Join to Subscribe!
          </button>
        </div>
      </div>
    </section>
  );
}
