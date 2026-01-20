import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Clock, ChevronDown } from 'lucide-react';
import { useLang, withLang } from '../app/lang';
import { tr } from '../app/t';
import { getSiteSettings } from '../api/endpoints';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<any>(null);
  const location = useLocation();
  const lang = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Optional: load dynamic contact numbers/logo text from backend
    getSiteSettings().then(setSettings).catch(() => setSettings(null));
  }, []);

  const navLinks = [
    { path: '/', label: tr('nav_home', lang) },
    { path: '/about', label: tr('nav_about', lang) },
    { path: '/services', label: tr('nav_services', lang) },
    { path: '/doctors', label: tr('nav_doctors', lang) },
    { path: '/checkups', label: tr('nav_checkups', lang) },
    { path: '/prices', label: tr('nav_prices', lang) },
    { path: '/blog', label: tr('nav_blog', lang) },
    { path: '/contact', label: tr('nav_contact', lang) },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{settings?.phone_main || '+998 00 000 00 00'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{settings?.work_hours || 'Mon - Sat: 8:00 AM - 8:00 PM'}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <button
                className={`px-3 py-1 rounded-lg transition-colors ${lang === 'uz' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                onClick={() => (window.location.href = withLang(location.pathname, 'uz'))}
              >
                UZ
              </button>
              <button
                className={`px-3 py-1 rounded-lg transition-colors ${lang === 'ru' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                onClick={() => (window.location.href = withLang(location.pathname, 'ru'))}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={withLang('/', lang)} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">{(settings?.logo_text || 'ND').slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-gray-900">{settings?.site_name || 'NUMA Diagnostics'}</div>
                <div className="text-xs text-cyan-600">{settings?.tagline || 'Diagnostic Center'}</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={withLang(link.path, lang)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === withLang(link.path, lang)
                      ? 'text-cyan-600 bg-cyan-50'
                      : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to={withLang('/contact', lang)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {tr('book', lang)}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={withLang(link.path, lang)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === withLang(link.path, lang)
                        ? 'text-cyan-600 bg-cyan-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={withLang('/contact', lang)}
                  className="block px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center rounded-lg"
                >
                  {tr('book', lang)}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
