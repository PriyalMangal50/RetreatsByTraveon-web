import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import image33 from '../assets/images/image33.png';
import image30 from '../assets/images/image30.png';

export default function Blogs() {
  return (
    <div className="min-h-screen pt-28">
      <Navbar />
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Blogs</h2>
            <p className="text-gray-600 mt-2">Read our latest articles and stories</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Link to="/blogs/blog1" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img src={image33} alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog 1</h3>
                <p className="text-gray-600">A reflective piece on immersive wellness experiences.</p>
              </div>
            </Link>
            <Link to="/blogs/blog2" className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="h-56 sm:h-64 overflow-hidden">
                <img src={image30} alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog 2</h3>
                <p className="text-gray-600">Highlights and reflections from recent retreats.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </div>
  );
}
