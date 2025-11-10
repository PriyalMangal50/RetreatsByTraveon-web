import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Coffee, MapPin, Activity } from "lucide-react";

import img1 from "../../assets/images/program9.jpg";
import img2 from "../../assets/images/program10.jpg";
import img3 from "../../assets/images/program11.jpg";
import img4 from "../../assets/images/program12.png";
import img5 from "../../assets/images/program13.png";

const sampleImages = [img1, img2, img3, img4, img5];

export default function PackageView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [section, setSection] = useState<string>("Overview");

  const next = () => setIndex((i) => (i + 1) % sampleImages.length);
  const prev = () => setIndex((i) => (i - 1 + sampleImages.length) % sampleImages.length);

  // Try to read package from navigation state; fallback to hard-coded example
  const location = useLocation();
  const pkgFromState = (location.state as any)?.pkg;

  const pkg = pkgFromState ?? {
    id: id || "1",
    title: "Wonders Of Thailand",
    subtitle: "Pattaya & Bangkok • 6 days, 5 nights",
    status: ["Inactive", "Featured"],
    price: "₹44,999",
  };

  // derive some values from the package metadata when possible
  const durationMatch = pkg.subtitle?.match(/(\d+\s?days?|\d+D\/\d+N|\d+\s?days,?\s?\d+\s?nights?)/i);
  const duration = durationMatch ? durationMatch[0] : "6D/5N";
  const currency = pkg.price && pkg.price.includes("₹") ? "INR" : "USD";
  const groupSize = pkg.groupSize ?? "1-20 people";
  const isFeatured = Array.isArray(pkg.status) ? pkg.status.includes("Featured") : false;

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{pkg.title}</h1>
            <p className="mt-1 text-sm text-gray-600">{pkg.subtitle}</p>
          </div>
          <div className="inline-flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="px-3 py-2 rounded-md border bg-white text-sm">Back</button>
          </div>
        </div>

        <section className="relative w-full mt-6">
          {/* Carousel container */}
          <div className="relative w-full overflow-hidden rounded-lg">
            {/* Center/main image */}
            <img
              src={sampleImages[index]}
              alt={`slide-${index}`}
              className="w-full h-[40vh] sm:h-[56vh] md:h-[72vh] object-cover rounded-lg"
            />

            {/* side previews removed - only main image + controls remain */}

            {/* Left/Right controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Overlayed package metadata on the main image */}
            <div className="absolute left-6 bottom-6 bg-black/50 backdrop-blur-sm text-white rounded-md p-4 max-w-[90%] md:max-w-[60%]">
              <h2 className="text-xl md:text-2xl font-semibold">{pkg.title}</h2>
              <p className="mt-1 text-sm md:text-base">{pkg.subtitle}</p>

              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {pkg.status.map((s: any, idx: number) => (
                  <span key={idx} className="px-2 py-1 bg-white/10 text-xs rounded-full">{s}</span>
                ))}

                <span className="ml-2 text-lg font-bold">{pkg.price}</span>
              </div>
            </div>
          </div>

          {/* Sections (Overview, Itinerary, Inclusions, Gallery, T & C) with right-side details panel */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  "Overview",
                  "Itinerary",
                  "Inclusions",
                  "Gallery",
                  "T & C",
                ].map((s: string) => (
                  <button
                    key={s}
                    onClick={() => setSection(s)}
                    className={`w-full text-center px-4 py-2 rounded-md text-sm font-medium ${section === s ? 'bg-white border border-gray-200 shadow-sm' : 'bg-gray-50 text-gray-700'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-4 bg-white border border-gray-100 rounded-lg p-6">
                {section === "Overview" && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Overview</h4>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-green-50 text-green-600">
                          <Check className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-base font-medium text-gray-900">Stay Included</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-green-50 text-green-600">
                          <Coffee className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-base font-medium text-gray-900">Breakfast Included</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-green-50 text-green-600">
                          <Activity className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-base font-medium text-gray-900">9 Activities</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-green-50 text-green-600">
                          <MapPin className="w-4 h-4" />
                        </span>
                        <div>
                          <p className="text-base font-medium text-gray-900">All Transfers</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900">About This Tour</h4>
                      <p className="mt-2 text-base text-gray-600">Experience the best of Bangkok and Pattaya with our all-inclusive tour featuring hotel stays, daily breakfasts, and full-day guided tours. Enjoy thrilling visits to Coral Island, Safari World, Nong Nooch Garden, and iconic city attractions, all with delicious Indian lunches included.</p>

                      <h5 className="mt-4 text-lg font-semibold text-gray-900">Trip Highlights</h5>
                      <ul className="mt-2 list-disc list-inside text-base text-gray-600 space-y-1">
                        <li>Comfortable hotel stays in Pattaya and Bangkok with daily breakfast</li>
                        <li>All transfers on SIC (Seat-in-Coach) basis for a hassle-free journey</li>
                        <li>Full-day Pattaya tour: Nong Nooch Botanical Garden, Big Buddha & scenic viewpoints</li>
                        <li>Coral Island day tour via speedboat with Indian lunch</li>
                        <li>Visit to Tiger Park Pattaya for a thrilling wildlife experience</li>
                        <li>Bangkok city tour featuring iconic temples like Golden Buddha & Marble Temple</li>
                        <li>Safari World & Marine Park tour with Indian lunch – perfect for families</li>
                        <li>Quick shopping stop at Indra Market before departure</li>
                      </ul>

                      <p className="mt-3 text-base text-gray-600"><strong>Meals included:</strong> 5 Breakfasts, 3 Indian Lunches, 1 Dinner</p>
                    </div>
                  </div>
                )}

                {section === "Itinerary" && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Day-by-Day Itinerary</h4>

                    <div className="mt-4 grid grid-cols-1 gap-4">
                      {/* Day 1 */}
                      <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-gray-900">Day 1 — Arrival in Bangkok</h5>
                        <p className="mt-2 text-base text-gray-600">Arrive in Bangkok and transfer to Pattaya on SIC basis. Check-in to Hotel Vista and relax after your journey. In the evening, enjoy a delicious dinner at a local Indian restaurant.</p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div>
                            <strong>Activities</strong>
                            <ul className="mt-1 list-disc list-inside space-y-1">
                              <li>Airport to hotel transfer</li>
                              <li>Hotel check-in</li>
                              <li>Indian dinner at local restaurant</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Meals Included</strong>
                            <p className="mt-1">Dinner</p>
                          </div>
                          <div>
                            <strong>Accommodation</strong>
                            <p className="mt-1">Hotel Vista, Pattaya</p>
                          </div>
                        </div>
                      </div>

                      {/* Day 2 */}
                      <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-gray-900">Day 2 — Full-Day Pattaya City Tour</h5>
                        <p className="mt-2 text-base text-gray-600">Enjoy breakfast at the hotel followed by a full-day Pattaya city tour. Explore the lush Nong Nooch Botanical Garden, visit the serene Big Buddha temple, and enjoy the panoramic views from the viewpoint. Indian lunch included.</p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div>
                            <strong>Activities</strong>
                            <ul className="mt-1 list-disc list-inside space-y-1">
                              <li>Nong Nooch Botanical Garden</li>
                              <li>Big Buddha Temple</li>
                              <li>Pattaya Viewpoint</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Meals Included</strong>
                            <p className="mt-1">Breakfast, Indian Lunch</p>
                          </div>
                          <div>
                            <strong>Accommodation</strong>
                            <p className="mt-1">Hotel Vista, Pattaya</p>
                          </div>
                        </div>
                      </div>

                      {/* Day 3 */}
                      <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-gray-900">Day 3 — Coral Island & Tiger Park</h5>
                        <p className="mt-2 text-base text-gray-600">Begin your day with breakfast and set off on an exciting Coral Island tour by speedboat. Indulge in water activities or relax by the beach. Later, visit Tiger Park Pattaya for a unique wildlife experience. Return to the hotel for rest.</p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div>
                            <strong>Activities</strong>
                            <ul className="mt-1 list-disc list-inside space-y-1">
                              <li>Coral Island tour (by speedboat)</li>
                              <li>Tiger Park Pattaya</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Meals Included</strong>
                            <p className="mt-1">Breakfast, Indian Lunch</p>
                          </div>
                          <div>
                            <strong>Accommodation</strong>
                            <p className="mt-1">Hotel Vista, Pattaya</p>
                          </div>
                        </div>
                      </div>

                      {/* Day 4 */}
                      <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-gray-900">Day 4 — Bangkok City Tour & Transfer</h5>
                        <p className="mt-2 text-base text-gray-600">After breakfast, check out from Pattaya hotel and transfer to Bangkok. Begin the Bangkok city tour with visits to iconic temples including Golden Buddha and Marble Temple. Check-in to Grand Mercure and unwind.</p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div>
                            <strong>Activities</strong>
                            <ul className="mt-1 list-disc list-inside space-y-1">
                              <li>Hotel transfer from Pattaya to Bangkok</li>
                              <li>Golden Buddha Temple</li>
                              <li>Marble Temple</li>
                              <li>Hotel check-in at Bangkok</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Meals Included</strong>
                            <p className="mt-1">Breakfast</p>
                          </div>
                          <div>
                            <strong>Accommodation</strong>
                            <p className="mt-1">Grand Mercure, Bangkok</p>
                          </div>
                        </div>
                      </div>

                      {/* Day 5 */}
                      <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-gray-900">Day 5 — Safari World & Marine Park</h5>
                        <p className="mt-2 text-base text-gray-600">After breakfast, enjoy a full-day tour of Safari World and Marine Park. Witness exotic animals, entertaining shows, and an immersive wildlife experience. Indian lunch included. Return to hotel and relax.</p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div>
                            <strong>Activities</strong>
                            <ul className="mt-1 list-disc list-inside space-y-1">
                              <li>Safari World</li>
                              <li>Marine Park</li>
                              <li>Wildlife shows</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Meals Included</strong>
                            <p className="mt-1">Breakfast, Indian Lunch</p>
                          </div>
                          <div>
                            <strong>Accommodation</strong>
                            <p className="mt-1">Grand Mercure, Bangkok</p>
                          </div>
                        </div>
                      </div>

                      {/* Day 6 */}
                      <div className="bg-white border border-gray-100 rounded-lg p-4">
                        <h5 className="text-md font-semibold text-gray-900">Day 6 — Departure from Bangkok</h5>
                        <p className="mt-2 text-base text-gray-600">Enjoy your final breakfast at the hotel, followed by a brief shopping stop at Indra Market. Then, transfer to the airport for your return flight to Delhi with wonderful memories.</p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                          <div>
                            <strong>Activities</strong>
                            <ul className="mt-1 list-disc list-inside space-y-1">
                              <li>Shopping at Indra Market</li>
                              <li>Airport transfer</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Meals Included</strong>
                            <p className="mt-1">Breakfast</p>
                          </div>
                          <div>
                            <strong>Accommodation</strong>
                            <p className="mt-1">—</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section === "Inclusions" && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Inclusions</h4>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Hotel accommodation as per itinerary</li>
                      <li>Daily breakfast</li>
                      <li>Transfers and sightseeing as mentioned</li>
                      <li>Local guide and entrance fees</li>
                    </ul>
                  </div>
                )}

                {section === "Gallery" && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Gallery</h4>
                    <p className="mt-2 text-sm text-gray-600">Use the arrows above to navigate through the gallery images.</p>
                  </div>
                )}

                {section === "T & C" && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Terms &amp; Conditions</h4>
                    <p className="mt-2 text-sm text-gray-600">Cancellation policy, payment terms, and other important conditions will be listed here.</p>
                  </div>
                )}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 p-6 bg-white border rounded-lg hidden lg:block">
                <p className="text-sm text-gray-600">From</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{pkg.price} <span className="text-base font-normal text-gray-600">per person</span></p>

                <div className="mt-4 flex flex-col gap-3">
                  {isFeatured && (
                    <button className="px-3 py-2 text-sm rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-medium">Featured Tour</button>
                  )}

                  <div className="text-sm text-gray-700">
                    <div><strong>Duration:</strong> {duration}</div>
                    <div><strong>Group Size:</strong> {groupSize}</div>
                    <div><strong>Currency:</strong> {currency}</div>
                  </div>

                  <button className="w-full mt-3 inline-flex items-center justify-center px-4 py-3 rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-semibold">Book Now</button>

                  <button onClick={() => setSection('T & C')} className="w-full mt-2 px-4 py-2 rounded-md border text-sm text-gray-700">View Terms &amp; Conditions</button>
                </div>
              </div>

              {/* Mobile details block shown below sections on small screens */}
              <div className="lg:hidden mt-6">
                <div className="p-4 bg-white border rounded-lg">
                  <p className="text-sm text-gray-600">From</p>
                  <p className="mt-1 text-xl font-bold text-gray-900">{pkg.price} <span className="text-sm font-normal text-gray-600">per person</span></p>

                  <div className="mt-4 flex flex-col gap-2">
                    {isFeatured && (
                      <button className="px-3 py-2 text-sm rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-medium">Featured Tour</button>
                    )}

                    <div className="text-sm text-gray-700">
                      <div><strong>Duration:</strong> {duration}</div>
                      <div><strong>Group Size:</strong> {groupSize}</div>
                      <div><strong>Currency:</strong> {currency}</div>
                    </div>

                    <button className="w-full mt-3 inline-flex items-center justify-center px-4 py-3 rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-semibold">Book Now</button>

                    <button onClick={() => setSection('T & C')} className="w-full mt-2 px-4 py-2 rounded-md border text-sm text-gray-700">View Terms &amp; Conditions</button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
