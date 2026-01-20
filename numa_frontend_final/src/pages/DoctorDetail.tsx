import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Award,
  GraduationCap,
  Users,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  Star
} from 'lucide-react';

export function DoctorDetail() {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const doctorData: Record<string, any> = {
    '1': {
      name: 'Dr. Sarah Johnson',
      specialty: 'Chief Pathologist',
      experience: '15+ years',
      education: 'MD, Harvard Medical School',
      certifications: ['Board Certified Pathologist', 'Clinical Laboratory Director', 'Molecular Pathology Specialist'],
      expertise: ['Clinical Pathology', 'Molecular Diagnostics', 'Hematopathology', 'Cytopathology'],
      bio: 'Dr. Sarah Johnson is a highly experienced pathologist with over 15 years of expertise in diagnostic medicine. She specializes in advanced molecular diagnostics and has been instrumental in implementing cutting-edge testing methodologies at MediCare Diagnostic Center.',
      languages: ['English', 'Spanish'],
      publications: 12,
      awards: ['Excellence in Pathology Award 2023', 'Top Diagnostician 2022']
    }
  };

  const doctor = doctorData[id || '1'] || doctorData['1'];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Doctors
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100 aspect-square">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-64 h-64 text-cyan-300" strokeWidth={1} />
                  </div>
                </div>
                <div className="p-8">
                  <h1 className="text-4xl mb-2">{doctor.name}</h1>
                  <p className="text-xl text-cyan-600 mb-6">{doctor.specialty}</p>
                  <div className="flex gap-4 mb-6">
                    <a
                      href="#contact"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 text-center flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-cyan-600 mb-1">{doctor.experience}</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-cyan-600 mb-1">{doctor.publications}+</div>
                      <div className="text-sm text-gray-600">Publications</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Doctor Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* About */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-cyan-600" />
                  <h2 className="text-2xl font-semibold">Education</h2>
                </div>
                <p className="text-gray-700">{doctor.education}</p>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-cyan-600" />
                  <h2 className="text-2xl font-semibold">Certifications</h2>
                </div>
                <ul className="space-y-2">
                  {doctor.certifications.map((cert: string) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas of Expertise */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((skill: string) => (
                    <span key={skill} className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-cyan-600" />
                  <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
                </div>
                <ul className="space-y-2">
                  {doctor.awards.map((award: string) => (
                    <li key={award} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Languages</h2>
                <div className="flex gap-2">
                  {doctor.languages.map((lang: string) => (
                    <span key={lang} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-6">Schedule Your Appointment</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Book a consultation with {doctor.name.split(' ')[1]} for expert diagnostic care
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
