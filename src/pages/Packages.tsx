import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import program13 from '../assets/images/program13.png';
import image33 from '../assets/images/image33.png';

export default function Packages() {
  const itinerary = [
    { day: 'Day 1', title: 'Arrival & Welcome', desc: 'Arrive at destination, transfer to resort, welcome dinner and orientation.' },
    { day: 'Day 2', title: 'Exploration & Activities', desc: 'Morning yoga, guided nature walk, cultural excursion and group activities.' },
    { day: 'Day 3', title: 'Workshops & Reflection', desc: 'Wellness workshops, group sharing circles, free time for relaxation.' },
    { day: 'Day 4', title: 'Departure Prep', desc: 'Closing circle, farewell brunch, transfer to departure point.' },
  ];

  return (
  <div className="min-h-screen pt-0">
      <Navbar />
    
      {/* Hero */}
      <section className="w-full relative">
        {/* Background image as cover so the text is readable and overlay works consistently */}
        <div
          className="w-full h-[420px] md:h-[520px] lg:h-[640px] bg-center bg-cover relative"
          style={{ backgroundImage: `url(${program13})` }}
        >
          {/* subtle dark overlay for legibility (covers full hero) */}
          <div className="absolute bg-black/30 z-10"></div>

          {/* title & meta at bottom-left (moved upwards for visual prominence) */}
          <div className="absolute left-6 md:left-16 bottom-8 md:bottom-28 lg:bottom-32 text-white max-w-xl z-20">
            <h1 className="packages-hero-title">Magical Muscat — 5 Days / 4 Nights</h1>

            <div className="mt-4 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                {/* location icon (white) */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" fill="white" />
                  <circle cx="12" cy="11" r="2" fill="white" />
                </svg>
                <span style={{ fontFamily: 'Archivo, serif', fontWeight: 700 }}>Muscat, Oman</span>
              </div>

              <div className="flex items-center gap-2">
                {/* calendar icon (white) */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="4" width="18" height="16" rx="2" fill="white" />
                  <path d="M8 2v4M16 2v4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: 'Archivo, serif', fontWeight: 700 }}>5 Days/4 Nights</span>
              </div>
            </div>
          </div>

          {/* decorative responsive title styles - exact typography per request */}
          <style>{`
            .packages-hero-title{font-family: 'Archivo', serif; font-weight:700; font-style: normal; letter-spacing: -0.02em; line-height: 48px; font-size:36px;}
            @media(max-width:767px){ .packages-hero-title{font-size:20px;} }
          `}</style>

          {/* wavy divider overlapping the next section */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] pointer-events-none">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 block" preserveAspectRatio="none">
              <path d="M0 40 C220 100 420 0 640 40 C860 80 1080 0 1320 40 C1380 52 1440 56 1440 56 L1440 120 L0 120 Z" fill="white" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>About the package</h2>
              <p className="text-gray-700 leading-7" style={{ fontFamily: 'Archivo, serif' }}>This carefully curated journey offers a blend of relaxation and cultural immersion. Expect small group sizes, experienced facilitators, and thoughtfully chosen locations to deepen connection and wellbeing.</p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <li>Guided cultural excursions</li>
                  <li>Daily wellness sessions</li>
                  <li>Locally-sourced meals</li>
                  <li>Small group size (max 12)</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Itinerary</h3>
                <div className="space-y-4">
                  {itinerary.map((it, i) => (
                    <div key={i} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-semibold">{it.day}</div>
                          <div className="text-md font-medium">{it.title}</div>
                        </div>
                        <div className="text-sm text-gray-600">&nbsp;</div>
                      </div>
                      <p className="mt-2 text-gray-700 text-sm">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* FAQ moved to full-width section below so it matches Home layout */}
            </div>

            {/* Right column */}
            <aside className="lg:col-span-1">
              {/* add top padding so the boxes sit below the overlapping image card; keep image offsets unchanged */}
              <div className="bg-gray-50 p-6 pt-44 md:pt-56 lg:pt-64 rounded-lg sticky top-28">
                {/* overlapping image card: half sits in hero (above) and half in this details area */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-24 sm:-top-32 md:-top-48 lg:-top-56 z-40">
                    <div className="relative">
                      <img src={image33} alt="package highlight" className="h-64 md:h-80 lg:h-96 w-auto max-w-none rounded-xl shadow-2xl" />

                        {/* bottom overlay with title, button and price */}
                        <div className="absolute left-0 right-0 bottom-0 text-white px-4 py-3 rounded-b-xl flex flex-col">
                          <div className="text-sm md:text-base font-semibold">Magical Muscat (5D/4N)</div>
                          <div className="mt-3 flex items-center justify-between gap-4">
                            <button className="bg-black text-white text-sm px-3 py-1 rounded">Book Now</button>
                            <div className="text-sm">Starting @ <span className="font-semibold">₹39,999/person</span></div>
                          </div>
                        </div>
                    </div>
                </div>
                {/* Two stacked info boxes shown below the overlapping image card */}
                <div className="flex flex-col gap-4">
                  {/* Available Dates */}
                  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-semibold mb-2">Available Dates</h4>
                    <div className="flex items-center gap-3">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="3" y="5" width="18" height="16" rx="2" stroke="#065f46" strokeWidth="1.2" fill="#f0fdf4" />
                        <path d="M16 3v4M8 3v4" stroke="#065f46" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium" style={{ fontFamily: 'Archivo, serif' }}>10 Nov 2025 - 14 Nov 2025</div>
                        <div className="text-xs text-gray-500">Seats are limited — book early</div>
                      </div>
                    </div>
                  </div>

                  {/* Need Help */}
                  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                    <h4 className="text-sm font-semibold mb-3">Need Help?</h4>

                    <div className="flex items-center gap-3 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.9.38 1.78.77 2.6a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.48-1.48a2 2 0 0 1 2.11-.45c.82.39 1.7.65 2.6.77A2 2 0 0 1 22 16.92z" stroke="#065f46" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <a href="tel:+919876543210" className="text-sm font-medium" style={{ fontFamily: 'Archivo, serif' }}>+91 98765 43210</a>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7" stroke="#065f46" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 8.5l-9 6-9-6" stroke="#065f46" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <a href="mailto:help@example.com" className="text-sm" style={{ fontFamily: 'Archivo, serif' }}>help@example.com</a>
                    </div>

                    <button className="mt-1 w-full bg-emerald-500 text-white py-2 rounded-full">Chat with Us</button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Full-width FAQ section (matches Home) */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>Frequently Asked Questions</h3>
          <FAQ />
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  );
}
