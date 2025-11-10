import SharedBackground from '../components/SharedBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import Programs from '../components/Programs';
import Why from '../components/Why';
import ImageCTA from '../components/ImageCTA';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import HealingTools from '../components/HealingTools';
import { images } from '../assets';

export default function MICETours() {
  const offerings = [
    { img: images.programs[2], title: 'Team-Building Experiences', desc: 'Experiential programs focused on collaboration, problem solving, and trust-building.' },
    { img: images.programs[3], title: 'Wellness & Knowledge Sessions', desc: '' },
    { img: images.programs[4], title: 'Strategic Workshops & Knowledge Sessions', desc: '' },
    { img: images.programs[5], title: 'Cultural & Experiential Activities', desc: '' },
  ];

  const approachSteps = [
    {
      title: 'Consultation & Planning',
      description: 'Understand your goals, team dynamics, and desired outcomes',
      img: images.programs[13],
    },
    {
      title: 'Customized Itinerary',
      description: 'Curate workshops, activities, wellness sessions, and',
      img: images.programs[7],
    },
    {
      title: 'Execution & Support',
      description: 'Professional on-ground management and seamless',
      img: images.programs[8],
    },
    {
      title: 'Evaluation & Feedback',
      description: 'Measure impact and ensure lasting benefits for your team',
      img: images.programs[9],
    },
  ];

  return (
    <div className="min-h-screen pt-28">
      <SharedBackground />
      <Navbar />

      <Hero
        titleOverride={(
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight"
            style={{ fontFamily: 'Cormorant, serif', fontWeight: 600, fontStyle: 'italic', letterSpacing: '-3%', textTransform: 'capitalize' }}>
            MICE Tours
          </span>
        )}
        subtitleOverride={(
          <span className="block max-w-3xl mx-auto text-sm md:text-base" style={{ fontFamily: 'Archivo, serif' }}>
            Bespoke MICE programs that inspire connection, learning and measurable outcomes for organisations.
          </span>
        )}
        showBadge={false}
      />

      <TrustedBy />

      {/* Our Corporate Retreat Offerings - white background with image cards + bottom overlay */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 style={{ marginBottom: 8, textAlign: 'center', whiteSpace: 'nowrap' }}>
            <span style={{
              fontFamily: 'Archivo, serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '40px',
              lineHeight: '42px',
              letterSpacing: '-4%',
              display: 'inline-block'
            }}>Our MICE&nbsp;</span>

            <span style={{
              fontFamily: 'Cormorant, serif',
              fontWeight: 600,
              fontStyle: 'italic',
              fontSize: '48px',
              lineHeight: '42px',
              letterSpacing: '-5%',
              textTransform: 'capitalize',
              background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>Offerings</span>
          </h2>
          <p className="text-gray-700 mb-8" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, fontSize: 18, lineHeight: '24px', letterSpacing: '0%', textAlign: 'center' }}>
            Tailored programs that inspire growth, collaboration, and well-being for every organisation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 justify-center">
            {offerings.map((o, i) => (
              <div key={i} className="overflow-hidden shadow-md bg-white border border-gray-200 rounded-xl w-full">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <img src={o.img} alt={o.title} className="w-full h-full object-cover block" />

                  {/* bottom overlay: bold title + 1-2 line description */}
                  <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-left">
                    <div style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff' }}>{o.title}</div>
                    <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.95)', marginTop: 6 }}>{o.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Ordinary Offsites section with program20 background */}
      <section
        className="w-full py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.programs[16]})` }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-transparent max-w-2xl text-left text-white">
            <h3 className="mb-3 sm:mb-4" style={{ marginBottom: 12, whiteSpace: 'nowrap' }}>
              <span style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '48px',
                letterSpacing: '-4%',
                color: '#ffffff',
                display: 'inline-block'
              }}>
                Business Objectives
              </span>

              <span style={{ width: 8, display: 'inline-block' }} />

              <span style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '48px',
                letterSpacing: '-4%',
                color: '#ffffff',
                display: 'inline-block'
              }}>
                Immersive
              </span>

              <span style={{ width: 8, display: 'inline-block' }} />

              <span style={{
                background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'Cormorant, serif',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '48px',
                lineHeight: '48px',
                letterSpacing: '-5%',
                textTransform: 'capitalize',
                display: 'inline-block'
              }}>
                Experiences
              </span>
            </h3>

            <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', letterSpacing: '-2%', marginBottom: 16 }}>
At Retreats by Traveon, our MICE Tours are designed to combine business objectives with immersive travel experiences. We create programs that integrate corporate meetings, incentive trips, conferences, and team-building events with cultural exploration, wellness, and leisure—ensuring participants are engaged, motivated, and inspired.
            </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 md:px-0">
              {[
                { img: images.programs[17], title: 'Tailored Programs', desc: 'Retreats that strengthen relationships, boost engagement, and enhance team performance with lasting results.' },
                { img: images.programs[17], title: 'Seamless Logistics', desc: 'Interactive facilitation grounded in research to meet your learning objectives.' },
                { img: images.programs[17], title: 'Immersive Well-being', desc: 'Wellness-focused activities that recharge participants and improve focus.' },
                { img: images.programs[17], title: 'Impactful Outcomes', desc: 'Clear goals and follow-up that translate retreat learnings into workplace impact.' },
              ].map((p, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-md">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm md:text-base" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>{p.title}</div>
                    <div className="text-xs md:text-sm" style={{ fontFamily: 'Archivo, serif', color: 'rgba(255,255,255,0.9)', marginTop: 6 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  {/* Our Powerful Healing Tools — added back here as a self-contained component */}
  <HealingTools />
      
      <Features />
      <Programs />
      <Why />
      <ImageCTA />
      
           {/* Our Approach — 4 step process grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 style={{ marginBottom: 8, textAlign: 'center' }}>
            <span style={{
              fontFamily: 'Archivo, serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '40px',
              lineHeight: '42px',
              letterSpacing: '-4%',
              display: 'inline-block'
            }}>Our&nbsp;</span>

            <span style={{
              fontFamily: 'Cormorant, serif',
              fontWeight: 600,
              fontStyle: 'italic',
              fontSize: '48px',
              lineHeight: '42px',
              letterSpacing: '-5%',
              background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>Approach</span>
          </h2>

          <p className="text-gray-700 mb-12" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, fontSize: 18, lineHeight: '24px', letterSpacing: '0%', textAlign: 'center' }}>
            A systematic process ensuring every retreat delivers maximum impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
            {approachSteps.map((step, i) => {
              const isTop = i % 2 === 1; // 2nd and 4th cards have content at top
              return (
                <div
                  key={i}
                  className="overflow-hidden border border-gray-200 shadow-lg"
                  style={{ borderRadius: 16, background: 'transparent' }}
                >
                  <div className="relative w-full h-full aspect-[3/4]">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover block" />

                    {/* Top or Bottom content overlay — use light semi-transparent gradient so text is black (no white band). */}
                    {isTop ? (
                      <div className="absolute left-0 right-0 top-0 p-5 pb-16 bg-gradient-to-b from-white/90 via-white/70 to-transparent text-left">
                        <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: 18, color: '#0b0b0b', margin: 0 }}>
                          {step.title}
                        </p>
                        <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 14, color: 'rgba(0,0,0,0.85)', marginTop: 4, lineHeight: '20px' }}>
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div className="absolute left-0 right-0 bottom-0 p-5 pt-16 bg-gradient-to-t from-white/90 via-white/70 to-transparent text-left">
                        <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: 18, color: '#0b0b0b', margin: 0 }}>
                          {step.title}
                        </p>
                        <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: 14, color: 'rgba(0,0,0,0.85)', marginTop: 4, lineHeight: '20px' }}>
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />      <Subscribe />
      <Footer />
    </div>
  );
}
