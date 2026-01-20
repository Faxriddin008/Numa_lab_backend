import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Microscope,
  Heart,
  Activity,
  Stethoscope,
  Brain,
  Eye,
  Bone,
  Syringe,
  FileText,
  Timer,
  Shield,
  ArrowRight
} from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 'laboratory',
      icon: Microscope,
      title: 'Laboratory Tests',
      description: 'Comprehensive blood work, chemistry panels, and specialized testing',
      features: ['Complete Blood Count', 'Metabolic Panel', 'Lipid Profile', 'Hormone Testing'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cardiology',
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac diagnostics and heart health monitoring',
      features: ['ECG/EKG', 'Echocardiogram', 'Stress Testing', 'Holter Monitoring'],
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 'radiology',
      icon: Activity,
      title: 'Radiology',
      description: 'State-of-the-art imaging services for accurate diagnosis',
      features: ['X-Ray', 'CT Scan', 'MRI', 'Fluoroscopy'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ultrasound',
      icon: Stethoscope,
      title: 'Ultrasound',
      description: 'Non-invasive imaging for various medical conditions',
      features: ['Abdominal Ultrasound', 'Pelvic Ultrasound', 'Vascular Studies', 'Pregnancy Scans'],
      color: 'from-teal-500 to-emerald-500'
    },
    {
      id: 'neurology',
      icon: Brain,
      title: 'Neurology',
      description: 'Comprehensive neurological testing and diagnostics',
      features: ['EEG', 'EMG/NCV', 'Brain Imaging', 'Sleep Studies'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'ophthalmology',
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care and vision testing services',
      features: ['Eye Exams', 'Vision Tests', 'Glaucoma Screening', 'Retinal Imaging'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'orthopedic',
      icon: Bone,
      title: 'Orthopedic Imaging',
      description: 'Specialized imaging for bones and joints',
      features: ['Bone Density Scan', 'Joint X-Rays', 'Spine Imaging', 'Sports Injury Assessment'],
      color: 'from-slate-500 to-gray-500'
    },
    {
      id: 'pathology',
      icon: Syringe,
      title: 'Pathology',
      description: 'Advanced tissue and cellular analysis',
      features: ['Biopsy Analysis', 'Cytology', 'Histopathology', 'Immunohistochemistry'],
      color: 'from-red-500 to-rose-500'
    }
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
            <h1 className="text-5xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive diagnostic services powered by cutting-edge technology and expert medical professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link to={`/services/${service.id}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-cyan-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional diagnostic care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Accredited Laboratory',
                description: 'ISO certified with international quality standards'
              },
              {
                icon: Timer,
                title: 'Quick Results',
                description: 'Fast turnaround time without compromising accuracy'
              },
              {
                icon: FileText,
                title: 'Detailed Reports',
                description: 'Comprehensive reports with clear explanations'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-6">Need a Specific Test?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your diagnostic needs or book an appointment
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
