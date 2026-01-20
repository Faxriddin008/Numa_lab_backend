import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Award,
  Users,
  Heart,
  Shield,
  Target,
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';

export function About() {
  const timeline = [
    { year: '2008', event: 'MediCare Diagnostic Center Founded' },
    { year: '2012', event: 'Expanded to 3 locations' },
    { year: '2015', event: 'Achieved ISO Certification' },
    { year: '2018', event: 'Introduced Advanced MRI Technology' },
    { year: '2021', event: 'Reached 50,000+ patients served' },
    { year: '2024', event: 'Launched Comprehensive Check-up Packages' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl mb-6">About MediCare</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading the way in diagnostic excellence with over 15 years of trusted service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, MediCare Diagnostic Center began with a simple mission: to provide accurate, 
                  reliable, and accessible diagnostic services to our community. What started as a small laboratory 
                  has grown into a comprehensive diagnostic center serving thousands of patients annually.
                </p>
                <p>
                  Our commitment to excellence is reflected in our state-of-the-art equipment, highly qualified 
                  medical professionals, and patient-centric approach. We believe that accurate diagnosis is the 
                  foundation of effective healthcare.
                </p>
                <p>
                  Today, we're proud to be a trusted name in diagnostic medicine, continually investing in the 
                  latest technology and training to ensure our patients receive the best possible care.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl h-96 flex items-center justify-center shadow-xl">
              <Heart className="w-48 h-48 text-cyan-300" strokeWidth={1} />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class diagnostic services through advanced technology, expert medical 
                professionals, and a patient-first approach. We strive to make quality healthcare accessible 
                and affordable for everyone.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading diagnostic center recognized for innovation, accuracy, and compassionate 
                care. We envision a future where advanced diagnostics are seamlessly integrated with 
                preventive healthcare.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Accuracy',
                description: 'Precision and reliability in every test we perform'
              },
              {
                icon: Heart,
                title: 'Compassion',
                description: 'Caring for our patients with empathy and respect'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to the highest standards of quality'
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'Honest, transparent, and ethical in all our practices'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl mb-4">
                  <value.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Journey</h2>
            <p className="text-xl text-cyan-100">Milestones that shaped our story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-2xl font-bold mb-2">{item.year}</div>
                        <div className="text-cyan-100">{item.event}</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-white rounded-full flex-shrink-0 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Certifications & Accreditations</h2>
            <p className="text-xl text-gray-600">Recognized for quality and excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'ISO 9001:2015',
                description: 'Quality Management System'
              },
              {
                title: 'CAP Accreditation',
                description: 'College of American Pathologists'
              },
              {
                title: 'CLIA Certified',
                description: 'Clinical Laboratory Improvement'
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl p-8 text-center shadow-lg"
              >
                <Star className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
