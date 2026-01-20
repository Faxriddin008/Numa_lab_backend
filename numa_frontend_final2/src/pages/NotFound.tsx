import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Stethoscope } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              {/* Background circles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"
              />

              {/* 404 Text */}
              <div className="relative">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 mb-4">
                  404
                </h1>
                
                {/* Animated Stethoscope */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <Stethoscope className="w-24 h-24 text-cyan-500 opacity-20" strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Oops! The page you're looking for seems to have gone for a check-up. 
              Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link
                to="/"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-cyan-600 border-2 border-cyan-600 rounded-xl hover:bg-cyan-50 transition-all duration-200 flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Browse Services
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-semibold mb-6 text-gray-900">Quick Links</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { to: '/services', label: 'Our Services' },
                  { to: '/doctors', label: 'Our Doctors' },
                  { to: '/checkups', label: 'Health Packages' },
                  { to: '/contact', label: 'Contact Us' }
                ].map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className="block px-6 py-3 bg-gray-50 hover:bg-cyan-50 rounded-xl transition-colors text-left group"
                    >
                      <span className="text-gray-700 group-hover:text-cyan-600 transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center gap-3"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
