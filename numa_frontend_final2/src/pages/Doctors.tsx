import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Award, GraduationCap, Users, ArrowRight, Mail, Phone } from 'lucide-react';

export function Doctors() {
  const doctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Chief Pathologist',
      experience: '15+ years',
      education: 'MD, Harvard Medical School',
      certifications: ['Board Certified Pathologist', 'Clinical Laboratory Director'],
      expertise: ['Clinical Pathology', 'Molecular Diagnostics', 'Hematopathology'],
      description: 'Specializes in advanced diagnostic pathology with extensive experience in molecular testing.'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Cardiologist',
      experience: '12+ years',
      education: 'MD, Johns Hopkins University',
      certifications: ['Board Certified Cardiologist', 'FACC'],
      expertise: ['Interventional Cardiology', 'Echocardiography', 'Heart Failure'],
      description: 'Expert in cardiovascular diagnostics and non-invasive cardiac imaging.'
    },
    {
      id: '3',
      name: 'Dr. Emily Roberts',
      specialty: 'Radiologist',
      experience: '10+ years',
      education: 'MD, Stanford University',
      certifications: ['Board Certified Radiologist', 'Subspecialty in MRI'],
      expertise: ['MRI Imaging', 'CT Scanning', 'Interventional Radiology'],
      description: 'Specialized in advanced imaging techniques and diagnostic radiology.'
    },
    {
      id: '4',
      name: 'Dr. David Martinez',
      specialty: 'Internal Medicine',
      experience: '18+ years',
      education: 'MD, Yale School of Medicine',
      certifications: ['Board Certified Internist', 'Geriatric Medicine Specialist'],
      expertise: ['Preventive Medicine', 'Chronic Disease Management', 'Geriatrics'],
      description: 'Focuses on comprehensive health assessments and preventive care.'
    },
    {
      id: '5',
      name: 'Dr. Lisa Anderson',
      specialty: 'Endocrinologist',
      experience: '11+ years',
      education: 'MD, Columbia University',
      certifications: ['Board Certified Endocrinologist', 'Diabetes Specialist'],
      expertise: ['Diabetes Management', 'Thyroid Disorders', 'Metabolic Syndrome'],
      description: 'Expert in hormonal disorders and metabolic disease diagnosis.'
    },
    {
      id: '6',
      name: 'Dr. James Wilson',
      specialty: 'Neurologist',
      experience: '14+ years',
      education: 'MD, Mayo Clinic',
      certifications: ['Board Certified Neurologist', 'Clinical Neurophysiology'],
      expertise: ['EEG Interpretation', 'Neuroimaging', 'Movement Disorders'],
      description: 'Specialized in neurological diagnostics and brain imaging.'
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
            <h1 className="text-5xl mb-6">Our Expert Doctors</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Meet our team of highly qualified medical professionals dedicated to providing exceptional diagnostic care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link to={`/doctors/${doctor.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Doctor Image Placeholder */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100 aspect-square">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Users className="w-32 h-32 text-cyan-300" strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-semibold text-white mb-1">{doctor.name}</h3>
                        <p className="text-cyan-100">{doctor.specialty}</p>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Award className="w-4 h-4 text-cyan-600" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <GraduationCap className="w-4 h-4 text-cyan-600" />
                        <span>{doctor.education}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{doctor.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {doctor.expertise.slice(0, 2).map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="text-cyan-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Profile
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Medical Excellence</h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Trusted by thousands of patients for accurate diagnostics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '25+', label: 'Specialist Doctors' },
              { number: '50K+', label: 'Patients Served' },
              { number: '100+', label: 'Combined Years' },
              { number: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-cyan-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Schedule a Consultation</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our expert doctors for personalized diagnostic care
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Book Appointment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
