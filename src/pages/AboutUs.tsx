import SharedBackground from '../components/SharedBackground';

import Navbar from '../components/Navbar';

import Hero from '../components/Hero';

import Subscribe from '../components/Subscribe';
import b8 from '../assets/images/b8.jpg';
import Footer from '../components/Footer';

import { images } from '../assets';
import { ArrowRight } from 'lucide-react';
import b6 from '../assets/images/b6.jpg';
import a1 from '../assets/images/a1.jpg';
import a2 from '../assets/images/a2.jpg';
import a3 from '../assets/images/a3.png';
import a4 from '../assets/images/a4.jpg';
// image23 removed (unused)

import about1 from '../assets/images/about1.jpg';

import about2 from '../assets/images/about2.jpg';

import team1 from '../assets/images/image30.png';

import image31 from '../assets/images/image31.png';



export default function AboutUs() {

  const arcImages = [

    images.programs[10],

    images.programs[11],

    images.programs[12],

    images.programs[13],

    images.programs[14],

  ];



  return (

    <div className="min-h-screen pt-28">

      <SharedBackground />

      <Navbar />

      {/* Use the shared site Hero so About page matches Home, but replace the badge text with "About Us" */}

      <section className="w-full">

        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Custom badge to replace Hero's default badge */}

          <div className="inline-block mb-2 relative mt-20">

            <div

              style={{

                background: 'linear-gradient(91.87deg, #35F1F1 0%, #94F81A 50.48%, #00FF3C 100%)',

                padding: '3px',

                borderRadius: '9999px',

                display: 'inline-block'

              }}

            >

              <div

                style={{

                  background: 'linear-gradient(90deg, #00282A 0%, #033520 100%)',

                  borderRadius: '9999px',

                  padding: '8px 16px'

                }}

              >

                <span className="text-white font-medium">About Us</span>

              </div>

            </div>

          </div>

        </div>



        {/* Render the shared Hero but hide its internal badge and provide custom title/subtitle */}

          <div className="about-hero">

            <style>{`
              .about-hero .inline-flex.items-center.gap-3{display:none !important}
              .about-hero .absolute.bottom-0{display:none !important}

              /* Ensure hero title is visible on small screens */
              .about-hero .about-hero-title { display: inline-block; margin-top: -8px; }
              .about-hero .about-hero-subtitle { display: block; margin-top: 12px; }

              @media(min-width:640px) {
                .about-hero .about-hero-title { margin-top: -48px; }
                .about-hero .about-hero-subtitle { margin-top: 24px; }
              }

              @media(min-width:1024px) {
                .about-hero .about-hero-title { margin-top: -120px; }
                .about-hero .about-hero-subtitle { margin-top: 36px; }
              }
            `}</style>


            <Hero

            showBadge={false}

            titleOverride={(

              <span className="about-hero-title" style={{ display: 'inline-block' }}>

              <span className="about-title" style={{

                  fontFamily: 'Cormorant, serif',

                  fontWeight: 700,

                  fontStyle: 'italic',
                  fontSize: '50px',

                  lineHeight: '48px',

                  letterSpacing: '-5%',

                  textTransform: 'capitalize',

                  display: 'inline-block',

                  textAlign: 'center'

                }}>

                Traveon

              </span>



              <span style={{ width: 8, display: 'inline-block' }} />



              <span style={{

                fontFamily: 'Lato, sans-serif',

                fontWeight: 700,

                fontStyle: 'normal',

                fontSize: '40px',

                lineHeight: '48px',

                letterSpacing: '-2%',

                display: 'inline-block'

              }}>

                — Your Pathway to Growth &amp; Connection

              </span>

            </span>

          )}

          subtitleOverride={(

            <span className="about-hero-subtitle" style={{

              fontFamily: 'Archivo, serif',

              fontWeight: 400,

              fontStyle: 'normal',

              fontSize: '18px',

              lineHeight: '28px',

              letterSpacing: '-4%',

              textAlign: 'center',

              maxWidth: '680px',

              margin: '0 auto',

              color: '#ffffff'

            }}>

              At Retreats by Traveon, we believe life’s richest changes come when we pause, breathe, and reconnect — with ourselves, each other, and nature.

            </span>

          )}

            />



            <style>{`.about-title{font-size:50px} @media(max-width:767px){ .about-title{font-size:28px} }`}</style>



            {/* Replace the Hero's wavy divider with a gentler curve on the About page only */}

            <div className="w-full">

              <svg

                viewBox="0 0 1440 120"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

                className="w-full h-auto"

                preserveAspectRatio="none"

              >

                {/* Single smooth arc to separate the hero from the next section */}

                <path

                  d="M0 40 C360 100 1080 100 1440 40 L1440 120 L0 120 Z"

                  fill="white"

                />

              </svg>

            </div>

          </div>

      </section>

      


     



      

      



      {/* Where connection meets purpose — rotating arc of images */}

      <section className="w-full bg-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="mb-8" style={{ fontFamily: 'Lato, sans-serif', color: '#6B7280' }}>

            <span style={{ fontWeight: 700, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%', marginRight: 8 }}>Where</span>

            <span style={{ fontWeight: 400, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%', marginRight: 8 }}>connection</span>

            <span style={{ fontWeight: 700, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%', marginRight: 8 }}>meets</span>

            <span style={{ fontWeight: 400, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%' }}>purpose</span>

          </h2>



          {/* Arc animation: images move along a circular arc (rotating container) while remaining upright (counter-rotation).

              Scoped under .about-arc so it only affects this page. Pause on hover. */}

          <div className="relative about-marquee">

              <style>{`

                /* Marquee: continuous left-to-right movement of cards. Duplicate track for seamless loop. */

                .about-marquee { overflow: hidden; }

                .marquee-track { display:flex; gap:32px; align-items:center; width:max-content; }

                .marquee-inner { display:flex; gap:32px; align-items:center; }



                /* Remove white card background/borders and make images larger so cards are just the images */

                .card { flex: 0 0 auto; background: transparent; border-radius:0; padding:0; box-shadow: none; display:flex; align-items:center; justify-content:center; }

                .card img { width:160px; height:160px; object-fit:cover; border-radius:12px; display:block; }

                @media(min-width:768px){ .card img { width:220px; height:220px } }



                /* Track animation moves the duplicated content leftwards continuously (right-to-left scroll) */

                .marquee-wrapper { display:block; overflow:hidden; }

                .marquee-scroll { display:flex; width:200%; align-items:center; animation: marquee-left 22s linear infinite; will-change: transform; }

                .marquee-scroll .marquee-inner { padding: 12px 0; }



                @keyframes marquee-left { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }



                /* Pause on hover */

                .about-marquee:hover .marquee-scroll { animation-play-state: paused }

              `}</style>



              <div className="marquee-wrapper">

                <div className="marquee-scroll">

                  <div className="marquee-inner">

                    <div className="card"><img src={arcImages[0]} alt="card-0" /></div>

                    <div className="card"><img src={arcImages[1]} alt="card-1" /></div>

                    <div className="card"><img src={arcImages[2]} alt="card-2" /></div>

                    <div className="card"><img src={arcImages[3]} alt="card-3" /></div>

                    <div className="card"><img src={arcImages[4]} alt="card-4" /></div>

                  </div>



                  {/* duplicate for seamless loop */}

                  <div className="marquee-inner" aria-hidden>

                    <div className="card"><img src={arcImages[0]} alt="card-0-dup" /></div>

                    <div className="card"><img src={arcImages[1]} alt="card-1-dup" /></div>

                    <div className="card"><img src={arcImages[2]} alt="card-2-dup" /></div>

                    <div className="card"><img src={arcImages[3]} alt="card-3-dup" /></div>

                    <div className="card"><img src={arcImages[4]} alt="card-4-dup" /></div>

                  </div>

                </div>

              </div>

          </div>

        </div>

      </section>



      



      {/* Who We Are Section */}

  <section className="w-full py-16 relative overflow-hidden" style={{ backgroundColor: '#00502F' }}>

        <div className="absolute top-0 left-0 w-full">

          <svg

            viewBox="0 0 1440 120"

            fill="none"

            xmlns="http://www.w3.org/2000/svg"

            className="w-full h-auto"

            preserveAspectRatio="none"

          >

            <path

              d="M0 80 C360 160 1080 160 1440 80 L1440 0 L0 0 Z"

              fill="#00502F"

            />

          </svg>

        </div>

  <div className="relative max-w-7xl mx-auto px-6 text-center z-10">

          <h2 className="text-white mb-8" style={{ fontFamily: 'Cormorant', fontWeight: 300, fontStyle: 'Light', fontSize: '48px', lineHeight: '54px', letterSpacing: '-8%', textAlign: 'center' }}>

            <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontStyle: 'normal', fontSize: '48px', lineHeight: '54px', letterSpacing: '-3%' }}>—— Who </span>
            <span style={{ fontFamily: 'Cormorant, serif', fontWeight: 700, fontStyle: 'italic', fontSize: '56px', lineHeight: '54px', letterSpacing: '-5%' }}>We</span>
            <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontStyle: 'normal', fontSize: '48px', lineHeight: '54px', letterSpacing: '-3%' }}> Are ——</span>

          </h2>



          <p className="text-white mx-auto mb-12 px-4 sm:px-0 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-7" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400, fontStyle: 'normal', letterSpacing: '-2%', textAlign: 'center', maxWidth: '680px' }}>
            Born from a vision of weaving wellness, adventure, and purpose into everyday living, Traveon is more than a retreat planner — we’re architects of transformation.
            <br />
            <br />
            We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.
            <br />
            <br />
            We are guides, facilitators, companions — walking alongside those who come to us carrying stress, burnout, or simply a longing for more meaning. And when they leave, we hope they carry away calm, clarity, and a renewed sense of possibility.
          </p>



          {/* Left Image Stack (visible on md+, hidden on small screens) */}
          <div className="hidden lg:block absolute left-0 bottom-4 transform lg:-translate-x-28 lg:translate-y-14 xl:-translate-x-36 2xl:-translate-x-44 z-0 pointer-events-none">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <img src={a4} alt="Image 21" className="absolute w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-lg transform rotate-6" />
              <img src={a3} alt="Image 23" className="absolute w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg transform rotate-6 -top-12 left-20 md:-top-16 md:left-24 lg:-top-20 lg:left-28" />
              <img src={a2} alt="Image 24" className="absolute w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg transform rotate-3 top-16 left-16" />
              <img src={a1} alt="Team 1" className="absolute w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 object-cover rounded-lg transform rotate-6 md:rotate-12 top-24 left-28" />
            </div>
          </div>



          {/* Right Image Stack (visible on md+, hidden on small screens) */}
          <div className="hidden lg:block absolute right-0 bottom-4 transform lg:translate-x-28 lg:translate-y-14 xl:translate-x-36 2xl:translate-x-44 z-0 pointer-events-none">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <img src={a2} alt="Image 31" className="absolute w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-lg transform -rotate-6" />
              <img src={b8} alt="Program 23" className="absolute w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg transform rotate-6 -top-16 right-8" />
              <img src={about2} alt="Program 24" className="absolute w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg transform -rotate-3 top-16 right-16" />
              <img src={b6} alt="Image 24" className="absolute w-40 h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 object-cover rounded-lg transform -rotate-6 top-24 right-28" />
            </div>
          </div>

        </div>

      </section>

 {/* Short white section placed after 'Who We Are' as a concise callout */}

      <section className="w-full bg-white py-8 md:py-12">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>

          </h3>

          <p className="text-gray-700 mx-auto" style={{ fontFamily: 'Archivo, serif', maxWidth: 720 }}>

          </p>

        </div>

      </section>

      {/* Image CTA inserted after "How it Started" */}
      
     

      {/* Duplicate of 'Who We Are' section but using image23.png as the background */}

      

      {/* "How it Started" section: white background with side images (responsive) */}

      <section className="w-full bg-white relative overflow-hidden">

        {/* absolute side images (visible on md+) placed at the extreme left/right */}

  <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 lg:-translate-x-12 xl:-translate-x-16 z-0" style={{ top: '62%' }}>

          {/* organic-shaped left image (decorative) */}

          <style>{`

            .about-blob { display:block; object-fit: cover; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.12)); transition: transform .36s ease; pointer-events: none; }

            .about-blob-left { clip-path: polygon(12% 2%, 86% 6%, 100% 28%, 92% 64%, 72% 88%, 38% 78%, 6% 58%, 4% 20%); transform: rotate(-6deg); }

            /* mirrored horizontally from the left blob */

            .about-blob-right { clip-path: polygon(88% 2%, 14% 6%, 0% 28%, 8% 64%, 28% 88%, 62% 78%, 94% 58%, 96% 20%); transform: rotate(6deg); }

            @media(min-width:768px){ .about-blob { width:260px; height:360px; } }

            @media(min-width:1024px){ .about-blob { width:320px; height:420px; } }

          `}</style>

            <img src={about1} alt="about left" aria-hidden="true" className="about-blob about-blob-left pointer-events-none w-52 md:w-64 lg:w-72" />

        </div>

  <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 lg:translate-x-12 xl:translate-x-16 z-0" style={{ top: '62%' }}>

          {/* organic-shaped right image */}

            <img src={about2} alt="about right" aria-hidden="true" className="about-blob about-blob-right pointer-events-none w-52 md:w-64 lg:w-72" />

        </div>



  <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">

          <div className="flex items-start justify-center">



            {/* Text column (centered within available space) - content unchanged */}

            <div className="flex-1 max-w-3xl mx-auto text-center">

              <h3 style={{ fontFamily: 'Cormorant, serif', fontSize: '40px', color: '#000', fontStyle: 'italic', fontWeight: 700 }}>

                —— How it <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">Started</span> ——

              </h3>



              <div style={{ marginTop: 18, color: '#000' }}>

                <p className="text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>

                  The world keeps moving fast. Deadlines, targets, notifications — the noise often drowns out what matters most. We started Retreats by Traveon because we saw how much people longed for stillness, for real connections, for a chance to rest and remember who they are… beyond their roles, beyond their to-do lists.

                </p>



                <p className="mt-6 text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>

                  Our founders spent years exploring wellness modalities — retreats, silent walks, breath work, group sharing circles, mindfulness practices, nature immersion — learning from guides, healers, coaches, and communities.

                </p>



                <p className="mt-6 text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>

                  What emerged was a clear truth: profound transformation isn’t a luxury. It’s a necessity. So, we built this space — retreats that go beyond luxury or escape — experiences that invite awakening, belonging, and growth.

                </p>

              </div>

            </div>



            {/* Removed duplicate right column image to keep the header centered between the side images */}



          </div>

        </div>

      </section>



      {/* Home page sections so About Us mirrors home initially */}

      {/* New white-background section with full-width image21 and overlayed heading + CTA */}

      {/* <section className="w-full bg-white">

        <div className="relative w-full">

          <img src={image21} alt="image21" className="w-full h-auto object-cover block" />



          {/* Overlay: heading on the image and a gradient CTA button below it */}

          {/* <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center px-6 max-w-4xl mx-auto">

              <h2 className="mx-auto" style={{ textAlign: 'center', textShadow: '0 4px 18px rgba(0,0,0,0.6)' }}>

                <span style={{

                  display: 'block',

                  fontFamily: 'Lato, sans-serif',

                  fontWeight: 700,

                  fontStyle: 'normal',

                  fontSize: '32px',

                  lineHeight: '36px',

                  letterSpacing: '-2%',

                  color: '#ffffff'

                }}>

                  Creating a legacy of

                </span>



                <span style={{

                  display: 'block',

                  fontFamily: 'Cormorant Infant, serif',

                  fontWeight: 600,

                  fontStyle: 'italic',

                  fontSize: '42px',

                  lineHeight: '36px',

                  letterSpacing: '-2%',

                  color: '#ffffff',

                  textTransform: 'capitalize'

                }}>

                  happiness, wellness &amp; belongingness

                </span>

              </h2>



              <div className="mt-6">

                <button

                  type="button"

                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-95 focus:outline-none"

                  aria-label="Primary CTA"

                >

                  <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>CTA's</span>

                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>

                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                </button>

              </div>

            </div>

          </div>

        </div>

      </section> */}
 
<section
        className="relative flex items-center justify-center bg-cover bg-center py-20 sm:py-28"
        style={{
          backgroundImage: `url(${images.programs?.[5] || images.programs?.[4] || images.programs?.[3] || images.image7})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Creating a Legacy of Happiness, Wellness & Belongingness
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-teal-400 to-green-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform text-lg sm:text-xl"
          >
            CTA's
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ lineHeight: 0 }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className="w-full h-20 sm:h-24 md:h-28"
          >
            <path
              d="M0,80 C160,160 320,160 480,80 C640,0 800,0 960,80 C1120,160 1280,160 1440,80 L1440,160 L0,160 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

<section className="w-full bg-white py-8 md:py-12">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>

          </h3>

          <p className="text-gray-700 mx-auto" style={{ fontFamily: 'Archivo, serif', maxWidth: 720 }}>

          </p>

        </div>

      </section>

       {/* Mission & Vision section (responsive pairs) */}
      <section className="w-full bg-white relative overflow-hidden py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mission: text left, image right on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00C5C5] to-[#009F26] mx-auto md:mx-0" style={{ fontFamily: 'Cormorant, serif', fontWeight: 700, fontStyle: 'italic', fontSize: '42px', lineHeight: '42px', letterSpacing: '-5%', textAlign: 'center' }}>
                —— Our Mission ——
              </h3>
              <p className="mt-4 text-base md:text-lg text-gray-700 mx-auto md:mx-0" style={{ fontFamily: 'Archivo, serif', fontWeight: 300, fontSize: '22px', lineHeight: '28px', letterSpacing: '-2%', textAlign: 'center' }}>
                To craft soulful retreats that blend ancient wisdom + modern science, deliver heartfelt experiences, and ignite transformation — for people and teams alike.<br />
                To be a trusted partner in the journey toward well-being, purpose, and conscious living.
              </p>
            </div>
            <div className="flex justify-center md:justify-end md:-mr-8 lg:-mr-12">
              <img src={about1} alt="Our mission" className="about-blob about-blob-left pointer-events-none transform md:translate-x-12 lg:translate-x-20 w-full max-w-md md:max-w-2xl lg:max-w-[1000px] rounded-lg h-auto object-contain md:object-cover shadow-lg mx-auto" />
            </div>
          </div>

          {/* Vision: image left, text right on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div className="flex justify-center md:justify-start md:-ml-8 lg:-ml-12">
              <img src={about2} alt="Our vision" className="about-blob about-blob-right pointer-events-none transform md:-translate-x-12 lg:-translate-x-20 w-full max-w-md md:max-w-2xl lg:max-w-[1000px] rounded-lg h-auto object-contain md:object-cover shadow-lg mx-auto" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00C5C5] to-[#009F26] mx-auto md:mx-0" style={{ fontFamily: 'Cormorant, serif', fontWeight: 700, fontStyle: 'italic', fontSize: '42px', lineHeight: '42px', letterSpacing: '-5%', textAlign: 'center' }}>
                —— Our Vision ——
              </h3>
              <p className="mt-4 text-base md:text-lg text-gray-700 mx-auto md:mx-0" style={{ fontFamily: 'Archivo, serif', fontWeight: 300, fontSize: '22px', lineHeight: '28px', letterSpacing: '-2%', textAlign: 'center' }}>
                A world where every individual feels rejuvenated, every team thrives through genuine connection, and where wellness isn’t an event — it’s woven into the fabric of life.<br />
                To be a trusted partner in the journey toward well-being, purpose, and conscious living.
              </p>
            </div>
          </div>
        </div>
      </section>


     



      {/* Meet Our Team section (image24 background) */}

      {/* <section className="w-full bg-black">

        <div className="relative w-full z-0">

          <img src={image24} alt="team background" className="w-full h-auto object-cover block" />



          <div className="absolute inset-0 flex items-start justify-center z-10">

            <div className="text-center px-6 pt-16 max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: 'Cormorant, serif' }}>

                Meet Our Team

              </h2>



              <p className="mt-4 text-white/90 text-sm md:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>

                Traveon Ventures is guided by a leadership team that brings together complementary expertise in global travel, destination management, and event organization. This multidisciplinary leadership approach ensures that the company combines operational excellence with strategic vision and content expertise.

              </p> */}



              {/* Team grid: two profiles */}

              {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Profile 1: image left, content right on md+ */}

                {/* <div className="flex w-full flex-col md:flex-row md:justify-between items-center md:items-center gap-4">

                  <img src={team1} alt="team member 1" className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-lg md:-ml-8" />

                  <div className="text-left md:flex-1 md:pl-6">

                    <h4 className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: 'Lato, sans-serif' }}>Dr. Piyush Bhardwaj</h4>

                    <p className="mt-2 text-sm md:text-base text-white/90" style={{ fontFamily: 'Archivo, serif' }}>With 15 years of experience in technology, data science, academic research, he brings in-depth expertise in building data-driven engagement platforms .</p>

                  </div>

                </div> */} 



                {/* Profile 2: image right, content left on md+ */}

                {/* <div className="flex w-full flex-col md:flex-row md:justify-between items-center md:items-center gap-4">

                  <img src={image31} alt="team member 2" className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-lg md:-mr-16" />

                  <div className="text-left md:flex-1 md:pl-16 lg:pl-20">

                    <h4 className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: 'Lato, sans-serif' }}>Mr Abhineet Gupta</h4>

                    <p className="mt-2 text-sm md:text-base text-white/90" style={{ fontFamily: 'Archivo, serif' }}>A seasoned business strategist with 14 years of diverse experience in travel and hospitality industries leading global companies like OYO & Trip.com</p>

                  </div>

                </div>

              </div> */}



              {/* Thin centered white line (not touching edges) */}

              {/* <div className="mt-8 flex justify-center">

                <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 border-t border-white/60" />

              </div> */}



              {/* Six image cards (3 per row on md+) with text to the right */}

              {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {[

                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Sales Head' },

                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Director of Experiences' },

                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Program Lead' },

                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Community Manager' },

                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Operations Head' },

                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Experience Designer' },

                ].map((card, idx) => (

                  <div key={idx} className="flex items-center gap-4 bg-transparent p-2">

                    <img src={card.img} alt={`card-${idx}`} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md" />

                    <div>

                      <h5 className="text-white font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>{card.name}</h5>

                      <p className="text-white/80 text-sm" style={{ fontFamily: 'Archivo, serif' }}>{card.role}</p>

                    </div>

                  </div> */}

                {/* ))}

              </div> */}

            {/* </div>

          </div>

        </div>

      </section>
 */}
 {/* Meet Our Team - green background with curved top */}
  <section className="w-full relative bg-[#00502F] text-white overflow-hidden py-10 sm:py-16">
        {/* curved top divider (white) */}
        <div className="absolute top-0 left-0 w-full" aria-hidden>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0 80 C360 0 1080 0 1440 80 L1440 0 L0 0 Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
            Meet Our Team
          </h2>

          <p className="text-white/90 max-w-3xl mx-auto text-center mb-8" style={{ fontFamily: 'Lato, sans-serif' }}>
            A multidisciplinary leadership team combining travel, wellness and experience-design expertise. We craft thoughtful retreats and experiences that bring people together.
          </p>

          {/* Two image+content blocks side-by-side (Image content  Image content) */}
          <div className="max-w-5xl mx-auto mb-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <img src={team1} alt="Dr. Piyush Bhardwaj" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-lg mx-auto md:mx-0" />
                <div className="text-center md:text-left">
                  <h4 className="text-white font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>Dr. Piyush Bhardwaj</h4>
                  <p className="text-white/90 mt-2 text-sm md:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>With 15 years of experience in technology, data science and academic research, Dr. Piyush brings expertise in building data-driven engagement platforms and program design.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4">
                <img src={team1} alt="Mr. Abhineet Gupta" className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-lg mx-auto md:mx-0" />
                <div className="text-center md:text-left">
                  <h4 className="text-white font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>Mr. Abhineet Gupta</h4>
                  <p className="text-white/90 mt-2 text-sm md:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>A seasoned business strategist with 14 years of experience across travel and hospitality, Abhineet leads commercial strategy and partnerships.</p>
                </div>
              </div>
            </div>
          </div>

          {/* centered horizontal white line (not touching edges) */}
          <div className="mt-10 flex justify-center">
            <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 border-t border-white/60" />
          </div>

          {/* Six team cards: 3 per row on md+; each card shows image at left and name/post at right */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {[
              { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Director of Experiences' },
              { img: team1, name: 'Mr. Abhineet Gupta', role: 'Strategy & Partnerships' },
              { img: team1, name: 'Priya Sharma', role: 'Program Lead' },
              { img: team1, name: 'Rohit Verma', role: 'Community Manager' },
              { img: team1, name: 'Sneha Kapoor', role: 'Operations Head' },
              { img: team1, name: 'Anita Rao', role: 'Experience Designer' },
            ].map((card, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-center gap-4 bg-transparent p-2">
                <img src={card.img} alt={`card-${idx}`} className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md mx-auto sm:mx-0" />
                <div className="text-center sm:text-left">
                  <h5 className="text-white font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>{card.name}</h5>
                  <p className="text-white/80 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>{card.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* New white quote section requested by user */}

      <section className="w-full bg-white py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="mx-auto w-8 md:w-12 lg:w-16">

            <img src={image31} alt="decorative" className="w-full h-auto mx-auto block" />

          </div>



          <p className="mt-8 mx-auto text-black" style={{ fontFamily: 'Archivo, serif', fontWeight: 300, fontStyle: 'normal', fontSize: '28px', lineHeight: '120%', letterSpacing: '-0.02em', textAlign: 'center', maxWidth: 900 }}>

            “The entire world is our family. We don’t see human made divisions created by borders, backgrounds, or beliefs because at our core, we are all connected. We believe that humanity is one, bound by love, compassion, and shared experiences. No man-made boundary can change the truth that we are part of the same global family, walking this journey of life together.”

          </p>

        </div>

      </section>



      <Subscribe />



      <Footer />

    </div>

  );

}

