import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What are your operating hours?',
          answer: 'We are open Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 5:00 PM. Emergency services are available 24/7.'
        },
        {
          question: 'Do I need an appointment?',
          answer: 'While walk-ins are welcome, we recommend booking an appointment to minimize wait times. You can book online, by phone, or through our mobile app.'
        },
        {
          question: 'Do you accept insurance?',
          answer: 'Yes, we accept most major insurance plans. Please contact us or check with your insurance provider to verify coverage for specific tests.'
        },
        {
          question: 'How long does it take to get test results?',
          answer: 'Turnaround time varies by test type. Most routine blood tests are available within 24-48 hours, while specialized tests may take 3-5 business days. We will notify you as soon as results are ready.'
        }
      ]
    },
    {
      category: 'Testing & Procedures',
      questions: [
        {
          question: 'Do I need to fast before my blood test?',
          answer: 'Fasting requirements depend on the specific tests ordered. Common tests requiring fasting (8-12 hours) include lipid profile, glucose, and comprehensive metabolic panel. Our staff will inform you of any preparation needed when you book.'
        },
        {
          question: 'Can I get multiple tests done in one visit?',
          answer: 'Yes, absolutely! We encourage combining multiple tests in one visit for your convenience. Check our health packages for bundled tests at discounted rates.'
        },
        {
          question: 'Is the sample collection process painful?',
          answer: 'Our experienced phlebotomists use the latest techniques to ensure minimal discomfort. Most patients report feeling only a small pinch during blood collection.'
        },
        {
          question: 'What should I bring to my appointment?',
          answer: 'Please bring a valid ID, your insurance card (if applicable), doctor\'s prescription for tests, and any previous test reports for comparison.'
        }
      ]
    },
    {
      category: 'Results & Reports',
      questions: [
        {
          question: 'How will I receive my results?',
          answer: 'Results are available through our secure online portal. You will also receive an email/SMS notification when results are ready. Physical copies can be collected from our center.'
        },
        {
          question: 'Will a doctor explain my results?',
          answer: 'Yes, we offer complimentary consultation with our specialists to help you understand your results and answer any questions.'
        },
        {
          question: 'Can I share my results with my doctor?',
          answer: 'Absolutely! You can download and share reports from our portal, or we can send them directly to your physician with your consent.'
        },
        {
          question: 'How long are my results stored?',
          answer: 'We maintain your test records securely for 7 years, allowing you to access historical results for comparison and reference.'
        }
      ]
    },
    {
      category: 'Pricing & Payments',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit/debit cards, digital wallets, and insurance. Payment plans are available for comprehensive health packages.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, our pricing is completely transparent. The quoted price includes all testing, processing, and reporting costs. Home collection services have a separate clearly stated fee.'
        },
        {
          question: 'Do you offer discounts or packages?',
          answer: 'Yes! We offer health check-up packages at discounted rates, senior citizen discounts, and corporate wellness programs. Check our Packages page for current offers.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'Appointments can be cancelled or rescheduled up to 24 hours in advance without any charges. Please call us to make changes to your booking.'
        }
      ]
    },
    {
      category: 'Safety & Quality',
      questions: [
        {
          question: 'Are your facilities accredited?',
          answer: 'Yes, we are ISO 9001:2015 certified, CAP accredited, and CLIA certified. All our processes meet international quality standards.'
        },
        {
          question: 'How do you ensure test accuracy?',
          answer: 'We use state-of-the-art equipment, follow strict quality control protocols, and our technicians are highly trained and certified. Regular calibration and external quality assessments ensure accuracy.'
        },
        {
          question: 'What safety measures do you follow?',
          answer: 'We maintain strict hygiene protocols, use disposable equipment for sample collection, and follow universal precautions. Our facilities are regularly sanitized and audited.'
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  let questionIndex = -1;

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
            <HelpCircle className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
            <h1 className="text-5xl mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our services, testing procedures, and more
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No questions found matching your search
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFaqs.map((category, categoryIndex) => (
                <AnimatedSection key={category.category} delay={categoryIndex * 0.1}>
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-cyan-600">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((faq) => {
                        questionIndex++;
                        const currentIndex = questionIndex;
                        return (
                          <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                          >
                            <button
                              onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-semibold text-gray-900 flex-1">
                                {faq.question}
                              </span>
                              <motion.div
                                animate={{ rotate: openIndex === currentIndex ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {openIndex === currentIndex && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help. Contact us and we'll get back to you shortly.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
