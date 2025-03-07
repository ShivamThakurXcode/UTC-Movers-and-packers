import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-white">UTC Movers</span>
            </div>
            <p className="mt-4 text-sm">Your trusted partner in logistics and moving services. Making relocations smooth and stress-free.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
              <li><Link to="/booking" className="hover:text-orange-500">Book Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Residential Moving</li>
              <li>Commercial Moving</li>
              <li>Packing Services</li>
              <li>Storage Solutions</li>
              <li>International Moving</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                123 Moving Street, City
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2" />
                info@utcmovers.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} UTC Movers and Packers. Developed by ShivamThakur - Dynexia System.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;