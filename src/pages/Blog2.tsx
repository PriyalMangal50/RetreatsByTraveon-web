import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import image30 from '../assets/images/image33.png';
import image31 from '../assets/images/image33.png';
import image33 from '../assets/images/image33.png';

export default function Blog2() {
  const recent = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    img: i % 3 === 0 ? image30 : i % 3 === 1 ? image31 : image33,
    title: `Recent blog ${i + 1}`,
  }));

  return (
    <div className="min-h-screen pt-0">
      <Navbar />

      {/* Hero with green background and curved bottom */}
      <section className="w-full relative bg-[#B3E4BF]">
  <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-28">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-4 sm:mt-6 mb-6 text-center sm:text-left leading-tight max-w-2xl mx-auto sm:mx-0">
              Featured Blogs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 w-full">
              <div className="w-full">
                <img src={image30} alt="feat1" className="w-full h-48 object-cover rounded-md" />
                <div className="mt-2 text-sm text-black">Born from a vision of weaving wellness, adventure, and purpose into everyday living, Traveon is more than a retreat planner — we’re architects of transformation.</div>
              </div>

              <div className="w-full">
                <img src={image31} alt="feat2" className="w-full h-48 object-cover rounded-md" />
                <div className="mt-2 text-sm text-black">Born from a vision of weaving wellness, adventure, and purpose into everyday living, Traveon is more than a retreat planner — we’re architects of transformation.</div>
              </div>

              <div className="w-full">
                <img src={image33} alt="feat3" className="w-full h-48 object-cover rounded-md" />
                <div className="mt-2 text-sm text-black">Born from a vision of weaving wellness, adventure, and purpose into everyday living, Traveon is more than a retreat planner — we’re architects of transformation.</div>
              </div>
            </div>

          </div>
        </div>

        {/* curved SVG divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-28 block" preserveAspectRatio="none">
            <path d="M0 80 C220 20 420 120 640 80 C860 40 1080 120 1320 80 C1380 64 1440 56 1440 56 L1440 120 L0 120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Recent Blogs section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6">Recent Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((r) => (
              <div key={r.id} className="bg-white rounded-md overflow-hidden shadow-sm">
                <img src={r.img} alt={r.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="font-medium">{r.title}</div>
                  <div className="text-sm text-gray-600 mt-2">Short excerpt for {r.title} to give readers an idea of the post.</div>
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
