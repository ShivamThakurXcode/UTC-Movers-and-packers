import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Truck, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Moving service"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in <span className="text-orange-500">Moving Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Professional moving and packing services tailored to your needs. Experience stress-free relocation with UTC Movers.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <Truck className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Moving Services</h3>
              <p className="text-gray-400">Local and long-distance moving solutions for homes and businesses.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <Package className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Packing Services</h3>
              <p className="text-gray-400">Professional packing and unpacking services to protect your belongings.</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <Shield className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Storage Solutions</h3>
              <p className="text-gray-400">Secure storage facilities for short and long-term needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose UTC Movers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Star, title: "Experience", text: "Over 10 years in the industry" },
              { icon: Shield, title: "Reliability", text: "Trusted by thousands of customers" },
              { icon: Package, title: "Full Service", text: "End-to-end moving solutions" },
              { icon: Truck, title: "Coverage", text: "Nationwide service available" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <item.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move?</h2>
          <p className="text-xl mb-8">Get your free quote today and experience our premium moving services.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;