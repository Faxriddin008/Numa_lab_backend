import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Doctors } from './pages/Doctors';
import { DoctorDetail } from './pages/DoctorDetail';
import { Checkups } from './pages/Checkups';
import { Prices } from './pages/Prices';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/uz" replace />} />

            {/* Backward-compatible redirects (if a component still links without /:lang) */}
            <Route path="/about" element={<Navigate to="/uz/about" replace />} />
            <Route path="/services" element={<Navigate to="/uz/services" replace />} />
            <Route path="/services/:id" element={<Navigate to={`/uz/services/${(window as any).location.pathname.split('/').pop()}`} replace />} />
            <Route path="/doctors" element={<Navigate to="/uz/doctors" replace />} />
            <Route path="/doctors/:id" element={<Navigate to={`/uz/doctors/${(window as any).location.pathname.split('/').pop()}`} replace />} />
            <Route path="/checkups" element={<Navigate to="/uz/checkups" replace />} />
            <Route path="/prices" element={<Navigate to="/uz/prices" replace />} />
            <Route path="/blog" element={<Navigate to="/uz/blog" replace />} />
            <Route path="/blog/:id" element={<Navigate to={`/uz/blog/${(window as any).location.pathname.split('/').pop()}`} replace />} />
            <Route path="/contact" element={<Navigate to="/uz/contact" replace />} />
            <Route path="/faq" element={<Navigate to="/uz/faq" replace />} />

            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/services" element={<Services />} />
            <Route path="/:lang/services/:id" element={<ServiceDetail />} />
            <Route path="/:lang/doctors" element={<Doctors />} />
            <Route path="/:lang/doctors/:id" element={<DoctorDetail />} />
            <Route path="/:lang/checkups" element={<Checkups />} />
            <Route path="/:lang/prices" element={<Prices />} />
            <Route path="/:lang/blog" element={<Blog />} />
            <Route path="/:lang/blog/:id" element={<BlogDetail />} />
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang/faq" element={<FAQ />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}