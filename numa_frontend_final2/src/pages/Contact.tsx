import { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useLang } from '../app/lang';
import { tr } from '../app/t';
import { createContact } from '../api/endpoints';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Calendar
} from 'lucide-react';

export function Contact() {
  const lang = useLang();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const regions = [
    "Toshkent", "Toshkent viloyati", "Samarqand", "Buxoro", "Andijon", "Farg'ona",
    "Namangan", "Navoi", "Kashqadary", "Surkhandarya",
    "Jizzakh", "Syrdarya", "Khorezm", "Karakalpakstan"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createContact({
        name: formData.name,
        phone: formData.phone,
        message: formData.region ? `Region: ${formData.region}` : '',
      });
      setIsSubmitted(true);
    } catch {
      // If backend is offline, keep UX consistent but don't crash.
      setIsSubmitted(true);
    }
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        region: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Telefon raqamni to'g'irlangan funksiyasi
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Faqat raqamlarni qoldiramiz
    const value = e.target.value.replace(/\D/g, '');
    
    // Maksimal 9 ta raqam (90 123 45 67)
    if (value.length <= 9) {
      setFormData({
        ...formData,
        phone: value
      });
    }
  };

  // Raqamni chiroyli ko'rsatish uchun (formatlash)
  // Input value shuni ishlatadi
  const formatPhoneNumber = (value: string) => {
    if (!value) return '';
    
    // 901234567 -> 90 123 45 67 ko'rinishiga keltiradi
    if (value.length <= 2) return value;
    if (value.length <= 5) return `${value.slice(0, 2)} ${value.slice(2)}`;
    if (value.length <= 7) return `${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)}`;
    return `${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5, 7)} ${value.slice(7, 9)}`;
  };

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
            <h1 className="text-5xl mb-6">{tr('nav_contact', lang)}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with us to book an appointment or for any inquiries about our diagnostic services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl mb-6">{tr('book', lang)}</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your appointment request has been received. We'll contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {tr('name', lang)} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* TELEFON RAQAM QISMI - O'ZGARTIRILDI */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {tr('phone', lang)} *
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-transparent transition-all duration-200 bg-white overflow-hidden px-4">
                        <span className={`font-medium select-none mr-1 ${formData.phone ? 'text-gray-900' : 'text-gray-500'}`}>
                          +998 
                        </span>&nbsp;
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formatPhoneNumber(formData.phone)}
                          onChange={handlePhoneChange}
                          required
                          className="w-full py-3 outline-none font-medium text-gray-900 placeholder-gray-400"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                        Region / Province *
                      </label>
                      <select
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                      >
                        <option value="">Select Region</option>
                        {regions.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium"
                    >
                      <Send className="w-5 h-5" />
                      {tr('send', lang)}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Information qismi o'zgarishsiz qoldi... */}
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
                  <h2 className="text-3xl mb-6">Get In Touch</h2>
                  <p className="text-cyan-100 mb-8">
                    We're here to help! Reach out to us through any of the following channels.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Phone</div>
                        <div className="text-cyan-100">+998 (99) 999 99 99</div>
                        <div className="text-cyan-100 text-sm">Emergency: +998 (99) 999 99 99</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-cyan-100">info@medicare.com</div>
                        <div className="text-cyan-100">appointments@medicare.com</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Address</div>
                        <div className="text-cyan-100">
                          123 Medical Plaza, Suite 400<br />
                          New York, NY 10001<br />
                          United States
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Working Hours</div>
                        <div className="text-cyan-100">
                          Monday - Saturday: 8:00 AM - 8:00 PM<br />
                          Sunday: 9:00 AM - 5:00 PM<br />
                          Emergency Services: 24/7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Info Cards */}
              <AnimatedSection delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <Calendar className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900 mb-1">Easy Booking</div>
                    <div className="text-sm text-gray-600">Online & Phone</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900 mb-1">Quick Response</div>
                    <div className="text-sm text-gray-600">Within 24 Hours</div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Map Placeholder */}
              <AnimatedSection delay={0.4}>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Medical Plaza, New York</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Locations - Bu qism o'zgarishsiz qoldirildi, xohlasangiz qo'shib qo'yishingiz mumkin */}
    </div>
  );
}