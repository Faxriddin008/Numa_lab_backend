import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { useEffect, useMemo, useState } from 'react';
import { useLang, withLang } from '../app/lang';
import { tr } from '../app/t';
import { getBlocks, pickLang } from '../api/endpoints';
import { 
  Microscope, 
  Heart, 
  Activity, 
  Stethoscope,
  Shield,
  Clock,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone
} from 'lucide-react';

export function Home() {
  const lang = useLang();
  const [heroBlock, setHeroBlock] = useState<any>(null);

  useEffect(() => {
    getBlocks({ page_key: 'home', key: 'hero' })
      .then((items) => setHeroBlock(Array.isArray(items) ? items[0] : items))
      .catch(() => setHeroBlock(null));
  }, []);

  const heroTitle = useMemo(() => {
    const t = heroBlock ? pickLang(heroBlock, 'title', lang) : '';
    return t || null;
  }, [heroBlock, lang]);

  const heroText = useMemo(() => {
    const t = heroBlock ? pickLang(heroBlock, 'text', lang) : '';
    return t || null;
  }, [heroBlock, lang]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">
                {heroTitle ? (
                  <span className="whitespace-pre-line">{heroTitle}</span>
                ) : (
                  <>
                    Your Health, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                      Our Priority
                    </span>
                  </>
                )}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {heroText || (
                  <>Advanced diagnostic services with state-of-the-art technology and expert medical professionals. 
                  Accurate results you can trust.</>
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={withLang('/contact', lang)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  {tr('book', lang)}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to={withLang('/services', lang)}
                  className="px-8 py-4 bg-white text-cyan-600 border-2 border-cyan-600 rounded-xl hover:bg-cyan-50 transition-all duration-200 flex items-center gap-2"
                >
                  {tr('nav_services', lang)}
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-cyan-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">100+</div>
                  <div className="text-sm text-gray-600">Medical Tests</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Animation/Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Animated circles background */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-10 bg-gradient-to-tr from-teal-200/40 to-cyan-200/40 rounded-full blur-2xl"
                />
                
                {/* Center content - Placeholder for Lottie animation */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                    <Stethoscope className="w-32 h-32 text-cyan-500" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <Heart className="w-8 h-8 text-rose-500" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-20 -left-4 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <Activity className="w-8 h-8 text-cyan-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive diagnostic services powered by cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                title: 'Laboratory Tests',
                description: 'Comprehensive blood work and analysis',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Heart,
                title: 'Cardiology',
                description: 'Heart health monitoring and diagnostics',
                color: 'from-rose-500 to-pink-500'
              },
              {
                icon: Activity,
                title: 'Radiology',
                description: 'Advanced imaging and scanning',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: Stethoscope,
                title: 'General Check-up',
                description: 'Complete health assessment',
                color: 'from-teal-500 to-emerald-500'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Check-up Packages */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Health Check-up Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive packages designed for your complete health assessment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Basic Package',
                price: '$199',
                features: [
                  'Complete Blood Count',
                  'Lipid Profile',
                  'Blood Sugar Test',
                  'Liver Function Test',
                  'Basic Consultation'
                ]
              },
              {
                name: 'Advanced Package',
                price: '$499',
                features: [
                  'All Basic Tests',
                  'Thyroid Function',
                  'ECG & Echo',
                  'Chest X-Ray',
                  'Ultrasound Abdomen',
                  'Specialist Consultation'
                ],
                featured: true
              },
              {
                name: 'Premium Package',
                price: '$899',
                features: [
                  'All Advanced Tests',
                  'Full Body MRI Scan',
                  'Cardiac CT',
                  'Tumor Markers',
                  'Nutrition Counseling',
                  'Personalized Report'
                ]
              }
            ].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative ${
                  pkg.featured ? 'ring-2 ring-cyan-500 transform scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-600">{pkg.price}</span>
                  <span className="text-gray-600">/package</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/checkups"
                  className={`block text-center py-3 rounded-xl transition-all duration-200 ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:from-cyan-700 hover:to-teal-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Doctors Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Expert Doctors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced medical professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                specialty: 'Chief Pathologist',
                experience: '15+ years',
                image: '1'
              },
              {
                name: 'Dr. Michael Chen',
                specialty: 'Cardiologist',
                experience: '12+ years',
                image: '2'
              },
              {
                name: 'Dr. Emily Roberts',
                specialty: 'Radiologist',
                experience: '10+ years',
                image: '3'
              },
              {
                name: 'Dr. David Martinez',
                specialty: 'Internal Medicine',
                experience: '18+ years',
                image: '4'
              }
            ].map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100 aspect-square">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-24 h-24 text-cyan-300" strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                    <p className="text-cyan-600 mb-2">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {doctor.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 border-2 border-cyan-600 rounded-xl hover:bg-cyan-50 transition-all duration-200"
            >
              View All Doctors
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose MediCare?</h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              We're committed to providing exceptional diagnostic services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Accredited & Certified',
                description: 'ISO certified laboratory with international standards'
              },
              {
                icon: Clock,
                title: 'Quick Results',
                description: 'Fast turnaround time with accurate reporting'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced medical professionals and technicians'
              },
              {
                icon: Award,
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment for precise diagnostics'
              },
              {
                icon: Heart,
                title: 'Patient-Centric',
                description: 'Compassionate care with patient comfort in mind'
              },
              {
                icon: TrendingUp,
                title: 'Affordable Pricing',
                description: 'Competitive rates without compromising quality'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-cyan-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Statistics */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50,000+', label: 'Happy Patients', icon: Users },
              { number: '100+', label: 'Diagnostic Tests', icon: Microscope },
              { number: '15+', label: 'Years Experience', icon: Award },
              { number: '98%', label: 'Accuracy Rate', icon: CheckCircle }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jennifer Wilson',
                role: 'Patient',
                content: 'Excellent service! The staff was professional and caring. Results were delivered quickly and accurately. Highly recommend!',
                rating: 5
              },
              {
                name: 'Robert Brown',
                role: 'Patient',
                content: 'State-of-the-art facilities and very knowledgeable doctors. They took the time to explain everything clearly.',
                rating: 5
              },
              {
                name: 'Maria Garcia',
                role: 'Patient',
                content: 'Best diagnostic center in the area. Clean, modern, and efficient. The entire experience was stress-free.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-6">Ready to Take Care of Your Health?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Book an appointment today and experience world-class diagnostic services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
            </Link>
            <Link
              to="/checkups"
              className="px-8 py-4 bg-cyan-700 text-white rounded-xl hover:bg-cyan-800 transition-all duration-200 flex items-center gap-2"
            >
              View Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
