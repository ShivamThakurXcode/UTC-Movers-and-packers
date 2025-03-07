import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Shield, Home, Building2, Globe, Box, Key } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Moving",
      description: "Complete home relocation services with careful handling of your belongings.",
      features: ["Furniture disassembly/assembly", "Packing materials provided", "Loading/unloading", "Careful transportation"]
    },
    {
      icon: Building2,
      title: "Commercial Moving",
      description: "Efficient office and business relocation with minimal downtime.",
      features: ["Office equipment moving", "IT infrastructure relocation", "After-hours service", "Project management"]
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Professional packing and unpacking services for all your items.",
      features: ["Custom crating", "Fragile item handling", "Organized labeling", "Unpacking assistance"]
    },
    {
      icon: Shield,
      title: "Storage Solutions",
      description: "Secure storage facilities for short and long-term needs.",
      features: ["Climate-controlled units", "24/7 security", "Flexible terms", "Easy access"]
    },
    {
      icon: Globe,
      title: "International Moving",
      description: "Comprehensive international relocation services.",
      features: ["Customs documentation", "Container shipping", "Door-to-door service", "International insurance"]
    },
    {
      icon: Box,
      title: "Specialty Items Moving",
      description: "Expert handling of valuable and delicate items.",
      features: ["Piano moving", "Art transportation", "Antique handling", "Safe relocation"]
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive moving and packing solutions tailored to your specific needs.
              We handle everything from residential moves to international relocations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <service.icon className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400">
                      <Key className="h-4 w-4 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Moving Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Initial Consultation", description: "We discuss your needs and provide a free quote" },
              { step: 2, title: "Planning", description: "Detailed moving plan and schedule creation" },
              { step: 3, title: "Packing & Loading", description: "Professional packing and careful loading of items" },
              { step: 4, title: "Delivery & Setup", description: "Safe transportation and setup at your new location" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today for a free quote and consultation</p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;