import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Search, Filter } from 'lucide-react';

export function Prices() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Tests' },
    { id: 'laboratory', name: 'Laboratory' },
    { id: 'radiology', name: 'Radiology' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'ultrasound', name: 'Ultrasound' },
    { id: 'packages', name: 'Packages' }
  ];

  const priceList = [
    // Laboratory
    { category: 'laboratory', name: 'Complete Blood Count (CBC)', price: '$45', turnaround: '24 hrs' },
    { category: 'laboratory', name: 'Comprehensive Metabolic Panel', price: '$65', turnaround: '24 hrs' },
    { category: 'laboratory', name: 'Lipid Profile', price: '$55', turnaround: '24 hrs' },
    { category: 'laboratory', name: 'Thyroid Function Test (TSH)', price: '$60', turnaround: '24-48 hrs' },
    { category: 'laboratory', name: 'Liver Function Test', price: '$70', turnaround: '24 hrs' },
    { category: 'laboratory', name: 'Kidney Function Test', price: '$70', turnaround: '24 hrs' },
    { category: 'laboratory', name: 'HbA1c (Diabetes)', price: '$50', turnaround: '24 hrs' },
    { category: 'laboratory', name: 'Vitamin D Test', price: '$80', turnaround: '48 hrs' },
    { category: 'laboratory', name: 'Vitamin B12', price: '$75', turnaround: '48 hrs' },
    
    // Radiology
    { category: 'radiology', name: 'Chest X-Ray', price: '$120', turnaround: '24 hrs' },
    { category: 'radiology', name: 'CT Scan (Single Area)', price: '$450', turnaround: '48 hrs' },
    { category: 'radiology', name: 'MRI Scan (Single Area)', price: '$650', turnaround: '48-72 hrs' },
    { category: 'radiology', name: 'Mammography', price: '$200', turnaround: '48 hrs' },
    { category: 'radiology', name: 'Bone Density Scan', price: '$180', turnaround: '48 hrs' },
    
    // Cardiology
    { category: 'cardiology', name: 'ECG/EKG', price: '$85', turnaround: 'Same day' },
    { category: 'cardiology', name: 'Echocardiogram', price: '$350', turnaround: '24-48 hrs' },
    { category: 'cardiology', name: 'Stress Test (TMT)', price: '$280', turnaround: '24 hrs' },
    { category: 'cardiology', name: 'Holter Monitor (24hr)', price: '$320', turnaround: '48 hrs' },
    { category: 'cardiology', name: 'Cardiac CT', price: '$550', turnaround: '48 hrs' },
    
    // Ultrasound
    { category: 'ultrasound', name: 'Abdominal Ultrasound', price: '$220', turnaround: '24-48 hrs' },
    { category: 'ultrasound', name: 'Pelvic Ultrasound', price: '$210', turnaround: '24-48 hrs' },
    { category: 'ultrasound', name: 'Thyroid Ultrasound', price: '$190', turnaround: '24-48 hrs' },
    { category: 'ultrasound', name: 'Breast Ultrasound', price: '$200', turnaround: '24-48 hrs' },
    { category: 'ultrasound', name: 'Vascular Studies', price: '$280', turnaround: '48 hrs' },
    
    // Packages
    { category: 'packages', name: 'Basic Health Check', price: '$199', turnaround: '2-3 hrs' },
    { category: 'packages', name: 'Advanced Health Check', price: '$499', turnaround: '4-5 hrs' },
    { category: 'packages', name: 'Premium Executive Check', price: '$899', turnaround: 'Full day' },
    { category: 'packages', name: "Women's Health Package", price: '$399', turnaround: '3-4 hrs' },
    { category: 'packages', name: 'Cardiac Health Package', price: '$549', turnaround: '3-4 hrs' },
    { category: 'packages', name: 'Diabetes Management Package', price: '$299', turnaround: '2-3 hrs' }
  ];

  const filteredPrices = priceList.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="text-5xl mb-6">Pricing</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparent, competitive pricing for all our diagnostic services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="relative md:w-64">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Price List */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filteredPrices.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    No tests found matching your criteria
                  </div>
                ) : (
                  filteredPrices.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-300 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">Turnaround: {item.turnaround}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-600">{item.price}</div>
                          <button className="text-sm text-gray-500 hover:text-cyan-600 transition-colors mt-1">
                            Book Now →
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Note */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
              <h3 className="font-semibold text-cyan-900 mb-2">Important Notes:</h3>
              <ul className="space-y-1 text-sm text-cyan-800">
                <li>• Prices are subject to change without prior notice</li>
                <li>• Package deals offer better value compared to individual tests</li>
                <li>• Insurance accepted - please check with your provider</li>
                <li>• Home sample collection available for additional fee</li>
                <li>• Senior citizen and corporate discounts available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-6">Have Questions About Pricing?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Contact us for detailed pricing information or to discuss payment options
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
