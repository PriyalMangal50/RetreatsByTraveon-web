import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import image33 from '../assets/images/image33.png';
import image30 from '../assets/images/image30.png';

export default function Blog1() {
  // Note: repository doesn't include image34.png; using image33.png as substitute.
  return (
    <div className="min-h-screen pt-28">
      <Navbar />

      {/* Content section under white navbar */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Left column - 25% */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="text-sm text-gray-700 space-y-4">
                <div className="font-semibold">Blogs</div>
                <div className="text-xs text-gray-500">Date Published</div>
                <div>26 August 2024</div>

                <div className="mt-4 text-xs text-gray-500">Written by</div>
                <div className="font-medium">Dr. Piyush Bharadwaj</div>
              </div>
            </aside>

            {/* Middle column - 50% */}
            <main className="col-span-12 lg:col-span-6">
              <h1 className="text-2xl font-semibold text-black mb-4">Born from a vision of weaving wellness, adventure, and purpose into everyday living</h1>
              <img src={image33} alt="article" className="w-full h-64 object-cover rounded-lg mb-6" />

              <div className="prose prose-lg text-gray-800">
                <p>We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.</p>
                <p>We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.</p>
                <p>We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.</p>
                <p>We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.</p>
                <p>We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.</p>
              </div>
            </main>

            {/* Right column - 25% */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="font-semibold mb-4">Featured Blogs</div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img src={image30} alt="feat1" className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <div className="text-sm font-medium">A gentle guide to morning rituals</div>
                    <div className="text-xs text-gray-500">June 2024</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={image30} alt="feat2" className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <div className="text-sm font-medium">Mindful travel: what to pack</div>
                    <div className="text-xs text-gray-500">May 2024</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={image30} alt="feat3" className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <div className="text-sm font-medium">Retreat reflections: stories</div>
                    <div className="text-xs text-gray-500">April 2024</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      
      <Subscribe />
      <Footer />
    </div>
  );
}
