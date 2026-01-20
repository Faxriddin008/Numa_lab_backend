import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  CheckCircle,
  Heart,
  Activity,
  Shield,
  Star,
  ArrowRight,
  Users,
  Clock,
  FileText
} from 'lucide-react';

export function Checkups() {
  const packages = [
    {
      id: 'basic',
      name: 'Basic Health Check',
      price: '$199',
      duration: '2-3 hours',
      ideal: 'Young adults (18-35)',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      description: 'Essential health screening for overall wellness assessment',
      features: [
        'Complete Blood Count (CBC)',
        'Lipid Profile',
        'Blood Sugar Test (Fasting & Random)',
        'Liver Function Test',
        'Kidney Function Test',
        'Thyroid Profile (TSH)',
        'Urinalysis',
        'Blood Pressure Check',
        'BMI Assessment',
        'Basic Consultation with Physician'
      ],
      benefits: [
        'Early disease detection',
        'Baseline health metrics',
        'Preventive care guidance'
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced Health Check',
      price: '$499',
      duration: '4-5 hours',
      ideal: 'Adults (35-55)',
      icon: Heart,
      color: 'from-rose-500 to-pink-500',
      description: 'Comprehensive screening with advanced diagnostics',
      featured: true,
      features: [
        'All Basic Package Tests',
        'Complete Thyroid Function',
        'Vitamin D & B12 Levels',
        'HbA1c (Diabetes Monitoring)',
        'Electrocardiogram (ECG)',
        'Echocardiogram',
        'Chest X-Ray',
        'Ultrasound Abdomen & Pelvis',
        'Stress Test',
        'Cancer Markers (Basic)',
        'Bone Density Scan',
        'Specialist Consultation'
      ],
      benefits: [
        'Comprehensive health assessment',
        'Cardiac health evaluation',
        'Early cancer detection',
        'Detailed health report'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Executive Check',
      price: '$899',
      duration: 'Full day',
      ideal: 'Adults (55+)',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
      description: 'Most comprehensive health screening with VIP service',
      features: [
        'All Advanced Package Tests',
        'Full Body MRI Scan',
        'Cardiac CT (Calcium Score)',
        'Complete Tumor Marker Panel',
        'Pulmonary Function Test',
        'Sleep Apnea Screening',
        'Advanced Hormone Panel',
        'Genetic Risk Assessment',
        'Nutritional Assessment',
        'Mental Health Screening',
        'Eye Examination',
        'Dental Screening',
        'Personalized Health Report',
        'Follow-up Consultation',
        'Nutrition & Lifestyle Counseling'
      ],
      benefits: [
        'Complete body screening',
        'Personalized health plan',
        'Priority appointment scheduling',
        'Dedicated care coordinator',
        'Annual health tracking'
      ]
    },
    {
      id: 'women',
      name: "Women's Health Package",
      price: '$399',
      duration: '3-4 hours',
      ideal: 'Women (all ages)',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      description: 'Specialized health check designed for women',
      features: [
        'Complete Blood Count',
        'Thyroid Function Test',
        'Hormone Panel (FSH, LH, Estrogen)',
        'Vitamin D & B12',
        'Bone Density Scan',
        'Mammography',
        'Pap Smear',
        'Pelvic Ultrasound',
        'Breast Ultrasound',
        'Iron Studies',
        'Gynecologist Consultation'
      ],
      benefits: [
        'Reproductive health assessment',
        'Breast cancer screening',
        'Bone health evaluation',
        'Hormonal balance check'
      ]
    },
    {
      id: 'cardiac',
      name: 'Cardiac Health Package',
      price: '$549',
      duration: '3-4 hours',
      ideal: 'At-risk individuals',
      icon: Activity,
      color: 'from-red-500 to-orange-500',
      description: 'Specialized cardiac screening and monitoring',
      features: [
        'Complete Lipid Profile',
        'Cardiac Enzyme Tests',
        'Electrocardiogram (ECG)',
        '2D Echocardiogram',
        'Stress Test (TMT)',
        'Holter Monitor (24hr)',
        'Cardiac CT (Calcium Score)',
        'Blood Pressure Monitoring',
        'Diabetes Screening',
        'Cardiologist Consultation',
        'Personalized Cardiac Risk Assessment'
      ],
      benefits: [
        'Heart disease screening',
        'Stroke risk assessment',
        'Personalized care plan',
        'Expert cardiac consultation'
      ]
    },
    {
      id: 'diabetes',
      name: 'Diabetes Management Package',
      price: '$299',
      duration: '2-3 hours',
      ideal: 'Diabetic patients',
      icon: Activity,
      color: 'from-teal-500 to-emerald-500',
      description: 'Comprehensive diabetes monitoring and management',
      features: [
        'Fasting Blood Sugar',
        'Random Blood Sugar',
        'HbA1c (3-month average)',
        'Lipid Profile',
        'Kidney Function Test',
        'Liver Function Test',
        'Microalbuminuria',
        'Fundus Examination',
        'Foot Examination',
        'Blood Pressure Check',
        'Endocrinologist Consultation',
        'Diabetic Diet Counseling'
      ],
      benefits: [
        'Blood sugar control tracking',
        'Complication screening',
        'Medication adjustment',
        'Lifestyle guidance'
      ]
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
            <h1 className="text-5xl mb-6">Health Check-up Packages</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive health screening packages tailored to your needs. Choose the right package for complete peace of mind.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
          >
            {[
              { icon: Users, label: '10,000+ Screenings', color: 'text-cyan-600' },
              { icon: Clock, label: 'Quick Results', color: 'text-teal-600' },
              { icon: FileText, label: 'Detailed Reports', color: 'text-blue-600' }
            ].map((item, index) => (
              <div key={item.label} className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <span className="font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    pkg.featured ? 'ring-2 ring-cyan-500 lg:scale-105' : 'border border-gray-100'
                  }`}
                >
                  {pkg.featured && (
                    <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-center py-2 px-4 text-sm font-medium">
                      ⭐ Most Popular Package
                    </div>
                  )}

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className={`w-14 h-14 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-4`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {pkg.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {pkg.ideal}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-600">{pkg.price}</div>
                        <div className="text-sm text-gray-500">per package</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Included Tests:</h4>
                      <div className="grid gap-2 max-h-64 overflow-y-auto pr-2">
                        {pkg.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.benefits.map((benefit) => (
                          <span key={benefit} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className={`block text-center py-3 rounded-xl transition-all duration-200 font-medium ${
                        pkg.featured
                          ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:from-cyan-700 hover:to-teal-700 shadow-lg'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Book This Package
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose Our Packages?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive care with professional expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Comprehensive',
                description: 'All-inclusive packages covering essential health parameters'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced doctors and certified technicians'
              },
              {
                icon: Clock,
                title: 'Quick Reports',
                description: 'Fast turnaround with detailed health insights'
              },
              {
                icon: Heart,
                title: 'Personalized Care',
                description: 'Customized recommendations based on your results'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl mb-4">
                  <feature.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-6">Ready to Invest in Your Health?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Book your health check-up package today and take the first step towards a healthier life
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
            >
              Book Package
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/prices"
              className="px-8 py-4 bg-cyan-700 text-white rounded-xl hover:bg-cyan-800 transition-all duration-200"
            >
              View All Prices
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
