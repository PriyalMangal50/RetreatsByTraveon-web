import Navbar from "../../components/Navbar";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search, Plus, Eye, Edit2, Trash2, ExternalLink } from "lucide-react";
import Footer from "../../components/Footer";
import programImg from "../../assets/images/program11.jpg";

const Dashboard = () => {
  const { clearAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate('/', { replace: true });
  };
  const [activeTab, setActiveTab] = useState<string>("Tour Packages");

  const tabs = [
    "Tour Packages",
    "Events",
    "Bookings",
    "Contact Queries",
    "Analytics",
    "CRM",
  ];

  const [cards, setCards] = useState(() => [
    {
      id: 1,
      title: "Wonders Of Thailand",
      subtitle: "Pattaya & Bangkok • 6 days, 5 nights",
      price: "₹44,999",
      status: ["Inactive", "Featured"],
      img: programImg,
    },
    {
      id: 2,
      title: "Wonders Of Thailand",
      subtitle: "Pattaya & Bangkok • 6 days, 5 nights",
      price: "₹44,999",
      status: ["Inactive"],
      img: programImg,
    },
    {
      id: 3,
      title: "Wonders Of Thailand",
      subtitle: "Pattaya & Bangkok • 6 days, 5 nights",
      price: "₹44,999",
      status: ["Featured"],
      img: programImg,
    },
  ]);

  const handleDeleteCard = (id: number) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;
    setCards((s) => s.filter((c) => c.id !== id));
  };

  const [events, setEvents] = useState(() => [
    {
      id: 1,
      title: "IBIEA 2025 Delhi",
      meta: "Delhi • 12/12/2025 - Invalid Date",
      status: "Active",
      img: programImg,
    },
    {
      id: 2,
      title: "ICMMCS 2025",
      meta: "Muscat, Oman • 10/11/2025 - Invalid Date",
      status: "Active",
      img: programImg,
    },
    {
      id: 3,
      title: "IBIEA 2025 Oman",
      meta: "Muscat, Oman • 29/05/2025 - Invalid Date",
      status: "Active",
      img: programImg,
    },
  ]);

  const handleDeleteEvent = (id: number) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    setEvents((s) => s.filter((e) => e.id !== id));
  };

  const [bookings, setBookings] = useState(() => [
    {
      id: 1,
      name: 'Aditya Kushwaha',
      tour: 'Magical Muscat',
      date: '25/07/2025',
      status: 'confirmed',
      price: '₹79,998',
      img: programImg,
    },
    {
      id: 2,
      name: 'Aditya',
      tour: 'Magical Muscat',
      date: '25/07/2025',
      status: 'confirmed',
      price: '₹79,998',
      img: programImg,
    },
  ]);

  const handleDeleteBooking = (id: number) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    setBookings((s) => s.filter((b) => b.id !== id));
  };

  const [queries, setQueries] = useState(() => [
    {
      id: 1,
      name: 'Aditya',
      email: '93341ak@gmail.com',
      date: '11/07/2025',
    },
  ]);

  const handleDeleteQuery = (id: number) => {
    if (!window.confirm('Are you sure you want to delete this query?')) return;
    setQueries((s) => s.filter((q) => q.id !== id));
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8">
        <header className="flex items-start justify-between py-8">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
            <p className="mt-2 text-base text-gray-600">Manage your travel platform and monitor performance</p>
          </div>

          <div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="py-10">
          {/* Stats cards row */}
          <section className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Packages</p>
                  <p className="mt-3 text-3xl font-bold text-gray-900">3</p>
                </div>
                <p className="mt-4 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+0 from last month</p>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Events</p>
                  <p className="mt-3 text-3xl font-bold text-gray-900">3</p>
                </div>
                <p className="mt-4 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+0 from last month</p>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                  <p className="mt-3 text-3xl font-bold text-gray-900">2</p>
                </div>
                <p className="mt-4 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+0 from last month</p>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">Contact Queries</p>
                  <p className="mt-3 text-3xl font-bold text-gray-900">1</p>
                </div>
                <p className="mt-4 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+1 new from last month</p>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="mt-3 text-3xl font-bold text-gray-900">₹0</p>
                </div>
                <p className="mt-4 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+0% from last month</p>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <div className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`w-full text-center px-4 py-3 rounded-md text-sm font-medium ${activeTab === t ? 'bg-white border border-gray-200 shadow-sm' : 'bg-gray-50 text-gray-700'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Active panel */}
            <div className="mt-6 bg-white border border-gray-100 rounded-lg p-6">
              {activeTab === "Tour Packages" && (
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 w-full max-w-lg">
                      <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input placeholder="Search Packages" className="pl-10 pr-4 py-2 w-full border rounded-md" />
                      </div>
                    </div>

                    <div>
                      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-medium">
                        <Plus className="w-4 h-4" />
                        Add Package
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {cards.map((c) => (
                      <div key={c.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-gray-100 rounded-lg">
                        <img src={c.img} alt={c.title} className="w-full sm:w-28 h-40 sm:h-20 rounded-md object-cover flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900">{c.title}</p>
                          <p className="text-sm text-gray-600 mt-1">{c.subtitle}</p>
                          <div className="mt-2 flex items-center gap-2 text-sm">
                            {c.status.map((s, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{s}</span>
                            ))}
                            <span className="ml-3 text-base font-semibold">{c.price}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button onClick={() => navigate(`/admin/packages/${c.id}`, { state: { pkg: c } })} className="p-2 rounded-md hover:bg-gray-50"><Eye className="w-4 h-4 text-gray-600" /></button>
                          <button className="p-2 rounded-md hover:bg-gray-50"><Edit2 className="w-4 h-4 text-gray-600" /></button>
                          <button onClick={() => handleDeleteCard(c.id)} className="p-2 rounded-md hover:bg-gray-50"><Trash2 className="w-4 h-4 text-red-600" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* For other tabs show a placeholder (keeps the stats constant) */}
              {activeTab === "Events" && (
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Manage Events</h3>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-medium">
                      <Plus className="w-4 h-4" />
                      Add Event
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    {events.map((e) => (
                      <div key={e.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-gray-100 rounded-lg">
                        <img src={e.img} alt={e.title} className="w-full sm:w-28 h-40 sm:h-20 rounded-md object-cover flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900">{e.title}</p>
                          <p className="text-sm text-gray-600 mt-1">{e.meta}</p>
                          <div className="mt-2">
                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">{e.status} button</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="px-3 py-2 text-sm rounded-md border border-gray-100 flex items-center gap-2"><ExternalLink className="w-4 h-4" />Visit Site</button>
                          <button className="px-3 py-2 text-sm rounded-md border border-gray-100 flex items-center gap-2"><Edit2 className="w-4 h-4" />Edit</button>
                          <button onClick={() => handleDeleteEvent(e.id)} className="px-3 py-2 text-sm rounded-md border border-gray-100 flex items-center gap-2 text-red-600"><Trash2 className="w-4 h-4" />Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Bookings" && (
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">All Bookings</h3>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-medium">
                      <Plus className="w-4 h-4" />
                      Add Bookings
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    {bookings.map((b) => (
                      <div key={b.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-gray-100 rounded-lg">
                        <img src={b.img} alt={`booking-${b.id}`} className="w-full sm:w-28 h-40 sm:h-20 rounded-md object-cover flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900">{b.name}</p>
                          <p className="text-sm text-gray-600 mt-1">{b.tour}</p>
                          <p className="text-sm text-gray-600 mt-1">{b.date}</p>
                          <p className="text-sm text-green-700 mt-1 font-medium">{b.status}</p>
                          <p className="text-base font-semibold mt-1">{b.price}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="px-4 py-2 rounded-md border border-gray-100 text-sm inline-flex items-center gap-2"><Eye className="w-4 h-4" />View Details</button>
                          <button onClick={() => handleDeleteBooking(b.id)} className="px-3 py-2 rounded-md border border-gray-100 text-sm text-red-600 inline-flex items-center gap-2"><Trash2 className="w-4 h-4" />Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Analytics" && (
                <div>
                  <div className="flex items-start justify-start">
                    <div className="pl-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Analytics &amp; Reports</h3>
                      
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Revenue Trends</h4>
                      <p className="mt-1 text-sm text-gray-600">Monthly revenue over the last 6 months</p>
                      <div className="mt-4 p-6 border bg-white rounded-lg min-h-[280px]">
                        <h5 className="text-md font-semibold text-gray-900">Revenue Chart</h5>
                        <p className="mt-2 text-gray-600">Charts would be integrated here</p>
                        <div className="mt-6 w-full h-40 bg-gray-50 border border-dashed rounded-md flex items-center justify-center text-sm text-gray-400">Chart placeholder</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Popular Destinations</h4>
                      <p className="mt-1 text-sm text-gray-600">Most booked travel destinations</p>
                      <div className="mt-4 p-6 border bg-white rounded-lg min-h-[280px]">
                        <h5 className="text-md font-semibold text-gray-900">Destination Analytics</h5>
                        <p className="mt-2 text-gray-600">Analytics would be integrated here</p>
                        <div className="mt-6 w-full h-40 bg-gray-50 border border-dashed rounded-md flex items-center justify-center text-sm text-gray-400">Analytics placeholder</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "CRM" && (
                <div>
                  <div className="flex items-center justify-between">
                    <div className="pl-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Customer Relationship Management</h3>
                      <p className="mt-2 text-sm text-gray-600">Manage customers, leads, opportunities, and tasks</p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          // placeholder: navigate to CRM dashboard or open modal
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-medium"
                      >
                        Open CRM Dashboard
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-white border rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">Total Customers</p>
                      <p className="mt-3 text-2xl font-bold text-gray-900">0</p>
                      <p className="mt-2 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+20.1% from last month</p>
                    </div>

                    <div className="p-6 bg-white border rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">Active Leads</p>
                      <p className="mt-3 text-2xl font-bold text-gray-900">0</p>
                      <p className="mt-2 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+180.1% from last month</p>
                    </div>

                    <div className="p-6 bg-white border rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">Open Opportunities</p>
                      <p className="mt-3 text-2xl font-bold text-gray-900">0</p>
                      <p className="mt-2 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+19% from last month</p>
                    </div>

                    <div className="p-6 bg-white border rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">Pending Tasks</p>
                      <p className="mt-3 text-2xl font-bold text-gray-900">0</p>
                      <p className="mt-2 text-sm font-medium bg-gradient-to-r from-[#00C5C5] to-[#009F26] bg-clip-text text-transparent">+201 since last hour</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900">Quick Actions</h4>
                    <p className="mt-1 text-sm text-gray-600">Common CRM tasks and shortcuts</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <button type="button" className="w-full px-6 py-4 min-h-[64px] rounded-lg bg-white border hover:shadow-sm text-base font-semibold flex items-center justify-center">Add Customer</button>
                      <button type="button" className="w-full px-6 py-4 min-h-[64px] rounded-lg bg-white border hover:shadow-sm text-base font-semibold flex items-center justify-center">Add Lead</button>
                      <button type="button" className="w-full px-6 py-4 min-h-[64px] rounded-lg bg-white border hover:shadow-sm text-base font-semibold flex items-center justify-center">Add Opportunity</button>
                      <button type="button" className="w-full px-6 py-4 min-h-[64px] rounded-lg bg-white border hover:shadow-sm text-base font-semibold flex items-center justify-center">Add Task</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Contact Queries" && (
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Queries</h3>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#00C5C5] to-[#009F26] text-white font-medium">
                      New Query
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    {queries.map((q) => (
                      <div key={q.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-gray-100 rounded-lg">
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900">{q.name}</p>
                          <p className="text-sm text-gray-600 mt-1">{q.email}</p>
                          <p className="text-sm text-gray-600 mt-1">{q.date}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="px-4 py-2 rounded-md border border-gray-100 text-sm inline-flex items-center gap-2"><Eye className="w-4 h-4" />View</button>
                          <button onClick={() => handleDeleteQuery(q.id)} className="px-3 py-2 rounded-md border border-gray-100 text-sm text-red-600 inline-flex items-center gap-2"><Trash2 className="w-4 h-4" />Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab !== "Tour Packages" && activeTab !== "Events" && (
                <div className="py-10 text-gray-600">Content for "{activeTab}" will go here. The stats above remain constant.</div>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
