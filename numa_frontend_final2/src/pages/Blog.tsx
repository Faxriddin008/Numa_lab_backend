import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      id: '1',
      title: 'The Importance of Regular Health Check-ups',
      excerpt: 'Discover why preventive health screenings are crucial for early disease detection and maintaining overall wellness.',
      category: 'Preventive Care',
      date: 'January 15, 2026',
      author: 'Dr. Sarah Johnson',
      readTime: '5 min read',
      image: 'health-checkup'
    },
    {
      id: '2',
      title: 'Understanding Your Blood Test Results',
      excerpt: 'A comprehensive guide to interpreting common blood test parameters and what they mean for your health.',
      category: 'Laboratory',
      date: 'January 10, 2026',
      author: 'Dr. Michael Chen',
      readTime: '8 min read',
      image: 'blood-test'
    },
    {
      id: '3',
      title: 'Heart Health: Warning Signs You Should Never Ignore',
      excerpt: 'Learn about the critical symptoms that could indicate heart problems and when to seek immediate medical attention.',
      category: 'Cardiology',
      date: 'January 5, 2026',
      author: 'Dr. Emily Roberts',
      readTime: '6 min read',
      image: 'heart-health'
    },
    {
      id: '4',
      title: 'MRI vs CT Scan: Which One Do You Need?',
      excerpt: 'Understanding the differences between imaging techniques and how doctors choose the right one for diagnosis.',
      category: 'Radiology',
      date: 'December 28, 2025',
      author: 'Dr. David Martinez',
      readTime: '7 min read',
      image: 'imaging'
    },
    {
      id: '5',
      title: 'Diabetes Management: Latest Advances in Testing',
      excerpt: 'Explore new technologies and methods for monitoring and managing diabetes more effectively.',
      category: 'Diabetes',
      date: 'December 20, 2025',
      author: 'Dr. Lisa Anderson',
      readTime: '6 min read',
      image: 'diabetes'
    },
    {
      id: '6',
      title: 'Preparing for Your First Ultrasound: What to Expect',
      excerpt: 'A complete guide to ultrasound procedures, preparation tips, and what happens during the examination.',
      category: 'Ultrasound',
      date: 'December 15, 2025',
      author: 'Dr. Sarah Johnson',
      readTime: '5 min read',
      image: 'ultrasound'
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
            <h1 className="text-5xl mb-6">Health Blog & News</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest health insights, medical advances, and wellness tips from our experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Link to={`/blog/${blogPosts[0].id}`}>
              <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="p-12 text-white">
                    <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
                      Featured Article
                    </div>
                    <h2 className="text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-cyan-100 mb-6 text-lg leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-cyan-100 mb-6">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="h-full min-h-[400px] bg-gradient-to-br from-cyan-100 to-teal-100 flex items-center justify-center">
                    <Calendar className="w-48 h-48 text-cyan-300" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-100 to-teal-100 aspect-video">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Calendar className="w-24 h-24 text-cyan-300" strokeWidth={1.5} />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-cyan-700 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date.split(',')[0]}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <span className="text-cyan-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for health tips, medical news, and updates
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl outline-none"
            />
            <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
