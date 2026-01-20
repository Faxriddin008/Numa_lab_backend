import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/doctors', label: 'Our Doctors' },
    { path: '/checkups', label: 'Check-up Packages' },
  ];

  const services = [
    { path: '/services/laboratory', label: 'Laboratory Tests' },
    { path: '/services/radiology', label: 'Radiology' },
    { path: '/services/cardiology', label: 'Cardiology' },
    { path: '/services/ultrasound', label: 'Ultrasound' },
  ];

  const resources = [
    { path: '/prices', label: 'Pricing' },
    { path: '/blog', label: 'Blog & News' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">MC</span>
              </div>
              <div>
                <div className="font-bold text-lg">MediCare</div>
                <div className="text-sm text-gray-400">Diagnostic Center</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in health diagnostics. Providing accurate, reliable, and comprehensive medical testing services.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                <span>123 Medical Plaza, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span>info@medicare.com</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span>Mon - Sat: 8:00 AM - 8:00 PM<br />Sun: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} MediCare Diagnostic Center. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
