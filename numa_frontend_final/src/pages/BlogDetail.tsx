import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export function BlogDetail() {
  const { id } = useParams();

  // Mock blog data
  const post = {
    title: 'The Importance of Regular Health Check-ups',
    category: 'Preventive Care',
    date: 'January 15, 2026',
    author: 'Dr. Sarah Johnson',
    readTime: '5 min read',
    content: `
      <p>Regular health check-ups are one of the most important investments you can make in your overall wellness. Many serious health conditions can develop silently, showing no symptoms until they've progressed significantly.</p>

      <h2>Why Regular Screenings Matter</h2>
      <p>Early detection through routine health screenings can identify potential health issues before they become serious. This proactive approach allows for timely intervention and treatment, significantly improving outcomes.</p>

      <h3>Benefits of Preventive Care</h3>
      <ul>
        <li>Early detection of diseases like diabetes, heart disease, and cancer</li>
        <li>Monitoring of existing health conditions</li>
        <li>Establishing baseline health metrics for future comparison</li>
        <li>Building a relationship with your healthcare provider</li>
        <li>Peace of mind about your health status</li>
      </ul>

      <h2>What to Expect During a Health Check-up</h2>
      <p>A comprehensive health screening typically includes various tests and examinations tailored to your age, gender, and risk factors. These may include blood tests, physical examinations, and specialized screenings.</p>

      <h3>Common Screening Tests</h3>
      <p>Depending on your age and health profile, your check-up may include:</p>
      <ul>
        <li>Blood pressure measurement</li>
        <li>Cholesterol and blood sugar tests</li>
        <li>Cancer screenings</li>
        <li>Vision and hearing tests</li>
        <li>Bone density scans</li>
      </ul>

      <h2>How Often Should You Get Checked?</h2>
      <p>The frequency of health check-ups depends on your age, health status, and risk factors. Generally, adults should have a comprehensive check-up annually, though some may need more frequent visits.</p>

      <h2>Taking Action</h2>
      <p>Don't wait for symptoms to appear. Schedule your health check-up today and take control of your wellness journey. Remember, prevention is always better than cure.</p>
    `
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-600" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl aspect-video shadow-xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Calendar className="w-48 h-48 text-cyan-300" strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-semibold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:my-6 prose-li:text-gray-600 prose-li:mb-2
                  prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Share this article:</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex items-center justify-center transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24 space-y-8"
              >
                {/* Author Card */}
                <div className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-semibold text-lg mb-4">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                      SJ
                    </div>
                    <div>
                      <div className="font-semibold">{post.author}</div>
                      <div className="text-sm text-gray-600">Chief Pathologist</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dr. Johnson is a highly experienced pathologist with over 15 years of expertise in diagnostic medicine.
                  </p>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl p-6 shadow-lg text-white">
                  <h3 className="font-semibold text-lg mb-3">Ready for Your Check-up?</h3>
                  <p className="text-cyan-100 text-sm mb-4">
                    Book your comprehensive health screening today
                  </p>
                  <Link
                    to="/checkups"
                    className="block text-center py-3 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                  >
                    View Packages
                  </Link>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Link key={i} to={`/blog/${i}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-cyan-100 to-teal-100 aspect-video flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-cyan-300" strokeWidth={1.5} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 group-hover:text-cyan-600 transition-colors">
                      Health Article Title {i}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Brief description of the article content...
                    </p>
                    <span className="text-sm text-cyan-600 flex items-center gap-1">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
