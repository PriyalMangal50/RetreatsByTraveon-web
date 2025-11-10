import { images } from "../assets";

export default function Testimonials() {
  const cards = [
    { img: images.testimonials[0], name: "Priya Sharma", title: "Marketing Director, Tech Startup", text: "The wellness retreat in Rishikesh completely transformed my perspective on work-life balance. The yoga sessions at sunrise and sound healing were exactly what my soul needed." },
    { img: images.testimonials[1], name: "Mahendra Pratap Singh", title: "Retired Bank Manager, Lucknow", text: "Our group of five friends travelled to Pattaya and Bangkok—proof that adventure has no age! Travel handled every detail with care; smooth transfers, clean and central hotels, and thoughtfully paced days." },
    { img: images.testimonials[2], name: "Rahul Mehta", title: "Travel Blogger, Wanderlust Weekly", text: "The community tour through Oman opened our eyes to authentic Arabia. Every interaction felt genuine, and the local connections we made were priceless." },
    { img: images.testimonials[3], name: "Asha Rao", title: "Wellness Coach", text: "Truly transformative experience. I left refreshed and inspired. The balance between activity and mindfulness was perfect." },
    { img: images.testimonials[4], name: "Leena Das", title: "Therapist", text: "Carefully curated activities that supported real healing. I felt completely renewed after the retreat." },
    // { img: images.testimonials[5], name: "Arjun Singh", title: "Photographer", text: "Beautiful locations and great people — highly recommended." },
    // { img: images.testimonials[6], name: "Maya Kapoor", title: "Traveler", text: "A soulful journey, with exceptional organization and warmth." },
    // { img: images.testimonials[7], name: "Rohan Mehta", title: "Team Lead", text: "Our team found new synergy and focus during the retreat." },
    // { img: images.testimonials[8], name: "Leena Das", title: "Therapist", text: "Carefully curated activities that supported real healing. I felt completely renewed after the retreat." }
  
  
  ];
  

  // Duplicate once for seamless loop
  const loopCards = [...cards, ...cards];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* "From Our Guests, In Their Own Words" - horizontal 5-grid for videos (white background) */}
        <div className="mb-8">
          <h3 className="mb-4 text-center" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: '40px', lineHeight: '48px', letterSpacing: '-3%', margin: 0 }}>
            From Our
            <span style={{ display: 'inline-block', margin: '0 8px', fontFamily: 'Cormorant, serif', fontStyle: 'italic', fontWeight: 600, fontSize: '48px', lineHeight: '48px', letterSpacing: '-4%', textTransform: 'capitalize', background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Guests,
            </span>
            In Their Own
            <span style={{ display: 'inline-block', marginLeft: '8px', fontFamily: 'Cormorant, serif', fontStyle: 'italic', fontWeight: 600, fontSize: '48px', lineHeight: '48px', letterSpacing: '-4%', textTransform: 'capitalize', background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              Words
            </span>
          </h3>

          {/* Horizontal row of 5 placeholders for videos; scrolls on small screens */}
          <div className="overflow-x-auto">
            <div className="flex gap-4 px-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[220px] w-[220px] h-[140px] bg-gray-100 rounded-lg flex items-center justify-center shadow-sm"
                >
                  {/* Placeholder: replace with <video> or thumbnail when ready */}
                  <div className="text-gray-500">Video {i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

  {/* Header Section */}
  <div className="text-center mt-12 mb-2">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Heartfelt {" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600">Words</span> {" "}
            From Our {" "}
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600">Happy</span> {" "}
            Guests
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Real experiences from guests who found renewal, teams that discovered synergy,<br />
            and travelers who connected with purpose.
          </p>
        </div>

  {/* Scroll Section */}
  <div className="mt-2">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col min-h-[900px] relative">

              {/* Top Half (white background) */}
              <div className="flex-1 bg-white flex items-center justify-center"></div>

              {/* Floating Cards Section */}
              <div className="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="overflow-visible">
                    <div className="flex items-stretch gap-12 animate-scroll-testimonials w-max">
                      {loopCards.map((c, i) => (
                        <div
                          key={i}
                          className="w-60 flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5 text-center shadow-lg"
                          style={{
                            transform: `translateY(${getCurveY(i)}px) rotate(${getCurveRotate(i)}deg) scale(${getCurveScale(i)})`,
                          }}
                        >
                          <img src={c.img} alt={c.name} className="w-14 h-14 mx-auto rounded-full object-cover" />
                          <h4 className="mt-3 font-semibold text-gray-800">{c.name}</h4>
                          <p className="text-sm text-gray-500">{c.title}</p>
                          <div className="mt-3 text-yellow-400">★★★★★</div>
                          <p className="mt-3 text-sm text-gray-600">{c.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animation Keyframes */}
                <style>{`
                  @keyframes scroll-testimonials {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }

                  .animate-scroll-testimonials {
                    animation: scroll-testimonials 32s linear infinite;
                  }

                  @media (max-width: 640px) {
                    .animate-scroll-testimonials { animation-duration: 38s; }
                  }
                `}</style>
              </div>

              {/* Bottom Half with Background Image (contains overlayed stats) */}
              <div
                className="flex-1 relative"
                style={{
                  width: "100vw",
                  marginLeft: "calc(50% - 50vw)",
                  backgroundImage: `url(${images.chatgptImg || images.image7})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Stats overlay positioned over lower part of the image */}
                <div className="absolute left-1/2 bottom-20 md:bottom-24 transform -translate-x-1/2 w-full px-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                      <div>
                        <p className="text-3xl font-bold text-green-600">4.9★</p>
                        <p className="text-sm text-white">Average Rating</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-green-600">95%</p>
                        <p className="text-sm text-white">Would Recommend</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-green-600">500+</p>
                        <p className="text-sm text-white">5-Star Reviews</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-green-600">2,500+</p>
                        <p className="text-sm text-white">Lives Transformed</p>
                      </div>
                    </div>
                    {/* CTA button placed under the stats */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href="#contact"
                        role="button"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-green-600 text-white font-medium rounded-xl px-5 py-2 shadow-lg hover:opacity-95 transition-opacity"
                      >
                        <span>CTAs</span>
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Helper functions for 9-card curve shape */
function getCurveY(index: number): number {
  const pattern = [32, 24, 14, 6, -30, 6, 14, 24, 32];
  return pattern[index % pattern.length];
}
function getCurveRotate(index: number): number {
  const pattern = [14, 9, 6, 3, 0, -3, -6, -9, -14];
  return pattern[index % pattern.length];
}
function getCurveScale(index: number): number {
  const pattern = [0.98, 0.99, 0.995, 0.997, 1, 0.997, 0.995, 0.99, 0.98];
  return pattern[index % pattern.length];
}

