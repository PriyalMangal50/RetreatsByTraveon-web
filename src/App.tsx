import SharedBackground from "./components/SharedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Why from "./components/Why";
import ImageCTA from "./components/ImageCTA";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Latest from "./components/Latest";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import WellnessRetreats from "./pages/WellnessRetreats";
import CorporateRetreats from "./pages/CorporateRetreats";
import CommunityTours from "./pages/CommunityTours";
import MICETours from "./pages/MICETours";
import AboutUs from "./pages/AboutUs";
import Packages from "./pages/Packages";
import PackagesIndex from "./pages/PackagesIndex";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Enquire from "./pages/Enquire";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import PackageView from "./pages/Admin/PackageView";
import RouteChangeTracker from "./components/RouteChangeTracker";
import AdminRoute from "./components/AdminRoute";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";

function HomePage() {
  return (
    // prevent any page-level horizontal overflow (full-bleed children, transforms, etc.)
    <div className="min-h-screen pt-28 overflow-x-hidden">
      <SharedBackground />
      <Navbar />
      <Hero />
      <TrustedBy />
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

function App() {
  return (
    <>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wellness-retreats" element={<WellnessRetreats />} />
        <Route path="/corporate-retreats" element={<CorporateRetreats />} />
        <Route path="/community-tours" element={<CommunityTours />} />
        <Route path="/mice-tours" element={<MICETours />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/packages" element={<PackagesIndex />} />
        <Route path="/packages/detail" element={<Packages />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs/blog1" element={<Blog1 />} />
        <Route path="/blogs/blog2" element={<Blog2 />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/packages/:id" element={<PackageView />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* fallback to home for unknown routes */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
