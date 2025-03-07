import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Truck, Package } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    moveType: '',
    fromAddress: '',
    toAddress: '',
    moveDate: '',
    name: '',
    email: '',
    phone: '',
    additionalServices: [] as string[],
    specialInstructions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, value]
        : prev.additionalServices.filter(service => service !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend here
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">Book Your Move</h1>
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`flex items-center ${num < step ? 'text-orange-500' : num === step ? 'text-white' : 'text-gray-500'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${num < step ? 'border-orange-500 bg-orange-500' : num === step ? 'border-white' : 'border-gray-500'}`}>
                    {num}
                  </div>
                  <span className="ml-2">
                    {num === 1 ? 'Move Details' : num === 2 ? 'Services' : 'Contact Info'}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Move Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Move Type</label>
                      <select
                        name="moveType"
                        value={formData.moveType}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="">Select Move Type</option>
                        <option value="residential">Residential Move</option>
                        <option value="commercial">Commercial Move</option>
                        <option value="international">International Move</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">From Address</label>
                      <input
                        type="text"
                        name="fromAddress"
                        value={formData.fromAddress}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                        placeholder="Enter pickup address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">To Address</label>
                      <input
                        type="text"
                        name="toAddress"
                        value={formData.toAddress}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                        placeholder="Enter delivery address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Move Date</label>
                      <input
                        type="date"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Additional Services */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">Select Additional Services</h3>
                    <div className="space-y-4">
                      {[
                        { value: 'packing', label: 'Packing Service', icon: Package },
                        { value: 'storage', label: 'Storage Service', icon: MapPin },
                        { value: 'furniture', label: 'Furniture Assembly', icon: Truck },
                        { value: 'cleaning', label: 'Cleaning Service', icon: Calendar }
                      ].map((service) => (
                        <label key={service.value} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value={service.value}
                            checked={formData.additionalServices.includes(service.value)}
                            onChange={handleCheckboxChange}
                            className="form-checkbox h-5 w-5 text-orange-500"
                          />
                          <service.icon className="h-5 w-5 text-orange-500" />
                          <span>{service.label}</span>
                        </label>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Special Instructions</label>
                      <textarea
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                        placeholder="Any special requirements or instructions..."
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Previous
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors ml-auto"
                  >
                    Submit Booking
                  </button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;