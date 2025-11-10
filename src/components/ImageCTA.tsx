import { images } from '../assets';
import { ArrowRight } from 'lucide-react';

export default function ImageCTA() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center py-20 sm:py-28"
      style={{
        backgroundImage: `url(${images.programs?.[5] || images.programs?.[4] || images.programs?.[3] || images.image7})`,
      }}
    >
      <div className="absolute bg-black/50"></div>

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
  );
}
