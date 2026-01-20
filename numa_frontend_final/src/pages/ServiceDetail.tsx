import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  CheckCircle,
  Clock,
  FileText,
  ArrowRight,
  ArrowLeft,
  Microscope,
  Heart,
  Activity,
  Stethoscope,
  Brain,
  Eye,
  Bone,
  Syringe
} from 'lucide-react';

export function ServiceDetail() {
  const { id } = useParams();

  const serviceData: Record<string, any> = {
    laboratory: {
      icon: Microscope,
      title: 'Laboratory Tests',
      description: 'Our state-of-the-art laboratory provides comprehensive testing services with quick turnaround times and exceptional accuracy.',
      color: 'from-blue-500 to-cyan-500',
      tests: [
        'Complete Blood Count (CBC)',
        'Comprehensive Metabolic Panel',
        'Lipid Profile',
        'Thyroid Function Tests',
        'Liver Function Tests',
        'Kidney Function Tests',
        'Diabetes Screening',
        'Vitamin Levels',
        'Hormone Testing',
        'Infectious Disease Testing'
      ],
      process: [
        'Sample Collection',
        'Laboratory Analysis',
        'Quality Control',
        'Report Generation',
        'Doctor Review'
      ],
      turnaround: '24-48 hours',
      preparation: 'Fasting may be required for certain tests. Please consult with our staff.'
    },
    cardiology: {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac diagnostics to assess heart health and detect cardiovascular conditions early.',
      color: 'from-rose-500 to-pink-500',
      tests: [
        'Electrocardiogram (ECG/EKG)',
        'Echocardiogram',
        'Stress Test',
        'Holter Monitor',
        'Blood Pressure Monitoring',
        'Cardiac Enzyme Tests',
        'Lipid Profile',
        'Coronary Calcium Scoring'
      ],
      process: [
        'Initial Consultation',
        'Diagnostic Testing',
        'Data Analysis',
        'Cardiologist Review',
        'Results Discussion'
      ],
      turnaround: 'Same day to 48 hours',
      preparation: 'Wear comfortable clothing. Avoid caffeine before stress tests.'
    },
    radiology: {
      icon: Activity,
      title: 'Radiology',
      description: 'Cutting-edge imaging technology for accurate diagnosis of various medical conditions.',
      color: 'from-purple-500 to-indigo-500',
      tests: [
        'X-Ray Imaging',
        'CT Scan',
        'MRI Scan',
        'Fluoroscopy',
        'Mammography',
        'Dental X-Rays'
      ],
      process: [
        'Patient Preparation',
        'Imaging Procedure',
        'Image Processing',
        'Radiologist Review',
        'Report Delivery'
      ],
      turnaround: '24-72 hours',
      preparation: 'Remove metal objects. Fasting may be required for certain scans.'
    },
    ultrasound: {
      icon: Stethoscope,
      title: 'Ultrasound',
      description: 'Non-invasive imaging using sound waves to examine internal organs and structures.',
      color: 'from-teal-500 to-emerald-500',
      tests: [
        'Abdominal Ultrasound',
        'Pelvic Ultrasound',
        'Obstetric Ultrasound',
        'Vascular Studies',
        'Thyroid Ultrasound',
        'Breast Ultrasound',
        'Musculoskeletal Ultrasound'
      ],
      process: [
        'Patient Preparation',
        'Ultrasound Procedure',
        'Image Capture',
        'Specialist Review',
        'Report Generation'
      ],
      turnaround: '24-48 hours',
      preparation: 'Full bladder may be required for pelvic exams. Fasting for abdominal scans.'
    }
  };

  const service = serviceData[id || 'laboratory'] || serviceData.laboratory;
  const Icon = service.icon;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl items-center justify-center mb-6`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/prices"
                  className="px-8 py-4 bg-white text-cyan-600 border-2 border-cyan-600 rounded-xl hover:bg-cyan-50 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Clock className="w-8 h-8 text-cyan-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{service.turnaround}</div>
                <div className="text-sm text-gray-600">Average Turnaround</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <FileText className="w-8 h-8 text-cyan-600 mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Digital Reports</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg col-span-2">
                <CheckCircle className="w-8 h-8 text-cyan-600 mb-3" />
                <div className="text-sm font-semibold text-gray-900 mb-2">Preparation Required</div>
                <div className="text-sm text-gray-600">{service.preparation}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Tests */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Available Tests</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.tests.map((test: string, index: number) => (
                <motion.div
                  key={test}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-cyan-50 transition-colors duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{test}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">Our Process</h2>
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-600 to-teal-600 hidden md:block" />

              <div className="space-y-6">
                {service.process.map((step: string, index: number) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 relative">
                        {index + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step}</h3>
                      <p className="text-gray-600">
                        Professional and efficient handling at every stage of your diagnostic journey.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-6">Ready to Schedule Your Test?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Book an appointment today and experience our professional diagnostic services
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Book Appointment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
