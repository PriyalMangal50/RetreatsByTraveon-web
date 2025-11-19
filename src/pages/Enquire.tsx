import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Enquire() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with green background */}
      <section className="w-full bg-[#B3E4BF] relative pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-20 sm:pb-28 md:pt-28 md:pb-48">
          <h2 className="text-3xl font-bold text-black">Details (Community Tours)</h2>
          <p className="mt-3 text-black"></p>

          {/* Big form box overlapping hero and white section */}
          <div className="relative">
            <div className="mx-auto mt-6 md:mt-12 w-full max-w-lg sm:max-w-2xl md:max-w-3xl px-2 sm:px-0">
              <div className="relative z-20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  {/* Top area (will visually sit in hero) */}
                  <div className="bg-transparent px-6 py-8 md:py-10">
                    <h3 className="text-xl font-semibold mb-4"></h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 min-w-0">
                      <div>
                        <label className="block text-sm text-gray-600">Tour Start Date</label>
                        <div className="relative">
                          <input type="date" className="mt-1 w-full min-w-0 border rounded px-3 py-2 pr-10" />
                          <svg className="pointer-events-none absolute inset-y-0 right-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600">Number of Adults</label>
                        <input type="number" min="1" defaultValue={1} className="mt-1 w-full min-w-0 border rounded px-3 py-2" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600">Number of Children</label>
                        <input type="number" min="0" defaultValue={0} className="mt-1 w-full min-w-0 border rounded px-3 py-2" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600">(Optional) Additional Info</label>
                      <input type="text" placeholder="Any short notes" className="mt-1 w-full min-w-0 border rounded px-3 py-2" />
                    </div>
                  </div>

                  {/* Bottom area - visually overlaps into white section below */}
                  <div className="bg-white px-6 pb-8">
                    <div className="mb-4">
                      <label className="block text-sm text-gray-600">Interested In</label>
                      <input type="text" placeholder="E.g., Community Tours, Wellness, Custom" className="mt-1 w-full min-w-0 border rounded px-3 py-2" />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm text-gray-600">Details / Comments (preferred destinations, any health conditions, traveling with children?)</label>
                      <textarea className="mt-1 w-full min-w-0 border rounded px-3 py-2 h-28" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 min-w-0">
                      <div>
                        <label className="block text-sm text-gray-600">Full name</label>
                        <input type="text" className="mt-1 w-full min-w-0 border rounded px-3 py-2" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600">Email</label>
                        <input type="email" className="mt-1 w-full min-w-0 border rounded px-3 py-2" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600">WhatsApp number</label>
                        <input type="tel" className="mt-1 w-full min-w-0 border rounded px-3 py-2" />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="bg-[#00C5C5] text-white px-5 py-2 rounded-md">Submit Enquiry</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* curved divider at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] pointer-events-none">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-28 block" preserveAspectRatio="none">
            <path d="M0 80 C220 40 420 120 640 80 C860 40 1080 120 1320 80 C1380 64 1440 56 1440 56 L1440 120 L0 120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* White section below hero to accommodate lower 25% of the form box visually */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* empty spacer - the form lower area sits into this white region visually */}
        </div>
      </section>

  <FAQ />
  <Subscribe />
      <Footer />
    </div>
  );
}
