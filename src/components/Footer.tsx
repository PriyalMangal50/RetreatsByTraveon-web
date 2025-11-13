import { images } from '../assets';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const footerColumns = [
  { title: 'Company', links: ['About Us', 'Our Mission', 'Team', 'Careers'] },
  { title: 'Services', links: ['Wellness Retreats', 'Corporate Retreats', 'Community Tours', 'MICE Tours'] },
  { title: 'Our Support', links: ['FAQ', 'Contact', 'Travel Insurance', 'Booking Terms'] },
];

const contactInfo = [
  { icon: Mail, text: 'hello@retreatsbytraveon.com' },
  { icon: Phone, text: '+91 98765 43210' },
  { icon: MapPin, text: 'Mumbai, India' },
];

const socialIcons = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
];

const policyLinks = ['Privacy Policy', 'Terms of Service', 'Cancellation Policy', 'Refund Policy'];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full bg-white">
      <div className="flex flex-col max-w-[1200px] items-start w-full px-6 py-10">
        <div className="flex flex-col md:flex-row items-start gap-12 w-full">
          <div className="flex flex-col w-full md:w-[340px] items-center md:items-start gap-[15px]">
            <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain mx-auto" alt="Retreats by Traveon Logo" src={images.logo} />

            <p className="font-light text-[#697a75] text-base leading-[22px] text-center md:text-left">
              Creating transformative experiences through immersive wellness retreats, inspiring corporate offsites,
              & meaningful cultural journeys across India, Oman, and Seychelles.
            </p>
          </div>

          <div className="inline-flex flex-col md:flex-row items-start justify-center gap-6 px-0 py-6 w-full">
            {footerColumns.map((column, index) => (
              <nav key={index} className="flex flex-col w-full md:w-40 items-start gap-5">
                <h3 className="font-semibold text-[#2a2f2e] text-xl leading-6">
                  {column.title}
                </h3>

                <ul className="flex flex-col items-start gap-1 w-full">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="w-full">
                      <a
                        href="#"
                        className="block font-normal text-[#697a75] text-base leading-6 hover:text-[#2a2f2e] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="flex flex-col w-full md:w-[260px] items-start gap-5">
              <h3 className="font-semibold text-[#2a2f2e] text-xl leading-6">
                Stay Connected
              </h3>

              <div className="flex flex-col items-start gap-6 w-full">
                <address className="flex flex-col items-start gap-2 w-full not-italic">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-2.5 w-full">
                      <contact.icon className="w-6 h-6 text-[#697a75]" />
                      <span className="flex-1 font-normal text-[#697a75] text-base leading-6">
                        {contact.text}
                      </span>
                    </div>
                  ))}
                </address>

                <div className="flex items-center gap-4">
                  {socialIcons.map((social, index) => (
                    <a key={index} href="#" aria-label={social.label} className="text-[#697a75] hover:text-[#2a2f2e] transition-colors">
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 px-3 py-6 w-full border-t border-[#cdd9e3]">
          <p className="flex-1 font-light text-[#35433f] text-base leading-[22px] text-center md:text-left">
            © {new Date().getFullYear()} Retreats by Traveon. All rights reserved.
          </p>

          <nav className="inline-flex flex-wrap justify-center md:justify-start items-center gap-6">
            {policyLinks.map((policy, index) => (
              <a
                key={index}
                href="#"
                className="font-medium text-[#35433f] text-base leading-[22px] whitespace-nowrap hover:underline"
              >
                {policy}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
