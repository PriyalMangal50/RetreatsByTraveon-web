import { useRef, useEffect } from 'react';
import SharedBackground from '../components/SharedBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import Programs from '../components/Programs';
import Why from '../components/Why';
import ImageCTA from '../components/ImageCTA';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Latest from '../components/Latest';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import { images } from '../assets';

export default function WellnessRetreats() {
  // Healing tools data and drag-to-scroll refs/handlers
  const healingTools = [
    { img: images.programs[13], title: 'Dance Movement Therapy', desc: '' },
    { img: images.programs[0], title: 'Yoga & Breathwork', desc: '' },
    { img: images.programs[2], title: 'Sound Healing & 7 Chakra Healingy', desc: '' },
    { img: images.programs[3], title: 'Yoga & Forest Bathing', desc: '' },
    { img: images.programs[4], title: 'Ayurvedic Therapies', desc: '' },
    { img: images.programs[14], title: 'Breathwork & Release', desc: '' },
    { img: images.programs[12], title: 'Journal Writing & Art Therapy', desc: '' },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const pausedRef = useRef(false);

  const onMouseDown = (e: any) => {
    if (!sliderRef.current) return;
    isDownRef.current = true;
    sliderRef.current.classList.add('cursor-grabbing');
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    if (!sliderRef.current) return;
    isDownRef.current = false;
    sliderRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseUp = () => {
    if (!sliderRef.current) return;
    isDownRef.current = false;
    sliderRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseMove = (e: any) => {
    if (!isDownRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const onTouchStart = (e: any) => {
    if (!sliderRef.current) return;
    isDownRef.current = true;
    startXRef.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const onTouchMove = (e: any) => {
    if (!isDownRef.current || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const onTouchEnd = () => {
    isDownRef.current = false;
  };

  // Auto-scroll right -> left continuously. We duplicate items in render to allow seamless reset.
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let rafId: number;
    let lastTime: number | null = null;
    const speedPxPerMs = 0.03; // pixels per ms; tweak for faster/slower

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!pausedRef.current && !isDownRef.current) {
        // advance scrollLeft to move content from right to left
        slider.scrollLeft += speedPxPerMs * delta;

        // when we've scrolled past half (because content duplicated), reset back
        const half = slider.scrollWidth / 2;
        if (slider.scrollLeft >= half) {
          slider.scrollLeft = slider.scrollLeft - half;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="min-h-screen pt-28">
      <SharedBackground />
      <Navbar />
      <Hero
        titleOverride={(
          <span style={{ fontFamily: 'Cormorant, serif', fontWeight: 600, fontStyle: 'italic', fontSize: '80px', lineHeight: '68px', letterSpacing: '-3%', textTransform: 'capitalize', display: 'inline-block' }}>
            Wellness Retreats
          </span>
        )}
        subtitleOverride={(
          'Immersive wellness programs and restorative experiences designed to renew teams and individuals.'
        )}
        showBadge={false}
      />
      <TrustedBy />
      {/* India's Best Wellness Retreat for Institution */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-8">
            <h2 style={{ margin: 0, textAlign: 'center' }}>
              <span style={{
                  fontFamily: 'Archivo, serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '40px',
                  lineHeight: '42px',
                  letterSpacing: '-4%',
                  margin: 0,
                  background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
              }}>India's</span>
              <span style={{
                fontFamily: 'Archivo, serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '42px',
                letterSpacing: '-4%',
                marginLeft: 8
              }}> Best Wellness Retreat for </span>
              <span style={{
                fontFamily: 'Archivo, serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '42px',
                letterSpacing: '-4%',
                background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                marginLeft: 8
              }}>Institutions</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', lineHeight: '22px' }}>
              Whether seeking personal renewal, team growth, cultural connection, or business excellence,
              <br /> we create experiences that leave lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent">
            {(() => {
              const content = [
                {
                  label: 'Holistic wellness zones',
                  desc: 'Rejuvenate your mind, body, and spirit with curated wellness experiences',
                  img: images.programs[7],
                },
                {
                  label: 'Workshops and Sharing Circles',
                  desc: 'Build stronger teams and drive innovation through transformative offsites.',
                  img: images.programs[8],
                },
                {
                  label: 'Joyful Evening Celebrations',
                  desc: 'Connect with local cultures and communities through meaningful travel',
                  img: images.programs[9],
                },
              ];

              return content.map((c, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden h-64">
                  <img src={c.img} alt={c.label} className="w-full h-full object-cover" />

                  <div className="absolute top-4 left-4 bg-white/60 px-3 py-1 rounded"> 
                    <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '24px', letterSpacing: '-2%' }}>{c.label}</span>
                  </div>

                  <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '22px', color: '#ffffff', margin: 0 }}>{c.desc}</h3>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
      
      {/* Why Wellness Retreat? section with background image and right-side overlay image */}
      <section
        className="relative py-12 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${images.image10})`, minHeight: 320 }}
      >
        {/* Background now uses images.program10 (image10) — removed the overlay images */}

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-stretch" style={{ minHeight: 320 }}>
            <div className="w-full md:w-[60%] flex items-center">
              <div>
                <h3 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '40px', lineHeight: '48px', letterSpacing: '-4%', marginBottom: 12, color: '#ffffff', marginTop: '-8px' }}>
                  <span style={{ display: 'inline-block' }}>Why Wellness&nbsp;</span>
                  <span style={{
                    fontFamily: 'Cormorant, serif',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: '48px',
                    lineHeight: '48px',
                    letterSpacing: '-5%',
                    textTransform: 'capitalize',
                    background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>Retreat? </span>
                </h3>
                <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', lineHeight: '28px', letterSpacing: '-2%', color: '#ffffff' }}>
                  Wellness retreats give teams and individuals space to disconnect, reflect and re-energize. We design evidence-backed programs that blend movement, mindfulness, nature immersion and group facilitation to bring lasting positive change.
                </p>
              </div>
            </div>

            <div className="hidden md:block md:flex-1" />
          </div>
        </div>
      </section>
      {/* Featured Packages section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12 text-left">
            <h2 style={{ margin: 0 }}>
              <span style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '48px',
                letterSpacing: '-3%',
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: 8
              }}>Featured</span>
              <span style={{
                fontFamily: 'Cormorant, serif',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '48px',
                lineHeight: '48px',
                letterSpacing: '-4%',
                textTransform: 'capitalize',
                background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                verticalAlign: 'middle'
              }}>Packages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(() => {
              const featured = [
                {
                  img: images.programs[10] || images.image7,
                  price: '28,999',
                  duration: '4D/3N',
                  title: 'Nirvana — A Holistic Wellness Retreat',
                  desc: 'Mahé, Seychelles — restorative therapies, group coaching and guided mindfulness.'
                },
                {
                  img: images.programs[11] || images.image7,
                  price: '26,999',
                  duration: '4D/3N',
                  title: 'Inner Journey — Meditation & Healing',
                  desc: 'Mahé, Seychelles — teacher-led meditations, sound healing and breathwork.'
                },
                {
                  img: images.programs[12] || images.image7,
                  price: '39,999',
                  duration: '6D/5N',
                  title: 'Seychelles Expedition — Group Departure',
                  desc: 'Mahé, Seychelles — guided nature immersion, cultural programs and deep-rest packages.'
                }
              ];

              return featured.map((f, i) => (
                <div key={i} className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                  <div className="w-full h-56 md:h-72 lg:h-80 overflow-hidden relative">
                    <img src={f.img} alt={`package-${i}`} className="w-full h-full object-cover" />

                    {/* Price badge - top left */}
                    <div className="absolute left-3 top-3 bg-[#FFEB86] rounded-full px-3 py-2 text-sm" style={{ minWidth: 96 }}>
                      <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, fontWeight: 400 }}>Starting @</div>
                      <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 18, fontWeight: 700 }}>{f.price}</div>
                    </div>

                    {/* Duration badge - bottom right */}
                    <div className="absolute right-3 bottom-3 bg-white rounded-full px-3 py-2 text-sm shadow" style={{ minWidth: 96 }}>
                      <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 12, fontWeight: 700 }}>{f.duration}</div>
                      <div style={{ fontFamily: 'Lato, sans-serif', fontSize: 11, fontWeight: 400 }}>Tour Duration</div>
                    </div>
                  </div>

                  <div className="p-4 flex-1">
                    <div className="text-base md:text-lg font-bold" style={{ fontFamily: 'Lato, sans-serif' }}>{f.title}</div>
                    <div className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Archivo, sans-serif' }}>{f.desc}</div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-200 text-black py-2 rounded">View Details</button>
                      <Link to="/enquire" className="flex-1 bg-black text-white py-2 rounded text-center">Enquire Now</Link>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
{/* Our Powerful Healing Tools - horizontal swipeable carousel */}
      <section className="w-full py-16" style={{ background: '#DBF3E0' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-4 text-center">
            <h2 style={{ margin: 0, display: 'inline-block' }}>
              <span style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '40px',
                letterSpacing: '-2%',
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: 8
              }}>Our Powerful</span>
              <span style={{
                fontFamily: 'Cormorant, serif',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '36px',
                lineHeight: '40px',
                letterSpacing: '-3%',
                background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                verticalAlign: 'middle'
              }}>Healing Tools</span>
            </h2>
            <p className="mt-3 text-gray-700 mx-auto" style={{ fontFamily: 'Archivo, sans-serif', fontSize: 16, lineHeight: '22px', maxWidth: 720 }}>An array of powerful, science-backed & ancient tools designed to heal and transform</p>
          </div>

          <div className="mt-6 -mx-4">
            <div
              ref={sliderRef}
              className="flex gap-6 px-4 py-4 overflow-x-auto hide-scrollbar cursor-grab"
              onMouseDown={onMouseDown}
              onMouseLeave={() => { onMouseLeave(); pausedRef.current = false; }}
              onMouseUp={() => { onMouseUp(); pausedRef.current = false; }}
              onMouseMove={onMouseMove}
              onTouchStart={(e) => { onTouchStart(e); pausedRef.current = true; }}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseEnter={() => { pausedRef.current = true; }}
            //   onMouseLeaveCapture={() => { pausedRef.current = false; }}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* duplicate items to create a seamless continuous scroll */}
              {[...healingTools, ...healingTools].map((t, idx) => (
                <div key={idx} className="flex-shrink-0 rounded-lg overflow-hidden relative w-[300px] h-[420px]">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover block" />

                  {/* gradient overlay at bottom with white text */}
                  <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>{t.title}</div>
                    <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.95)', marginTop: 6 }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      <Programs />
      <Why />
      <ImageCTA />
      <Testimonials />
      <FAQ />
      <Latest />
      <Subscribe />
      <Footer />
    </div>
  );
}
