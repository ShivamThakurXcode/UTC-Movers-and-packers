import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Truck,
  Shield,
  Globe,
  Star,
  Phone,
  Box,
  Warehouse,
  Clipboard,
  Settings,
} from "lucide-react"; // Added missing icons from lucide-react
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" h-[90vh] bg-transparent flex items-center ">
        {/* Full-page fixed background image */}
        <div className="absolute top-0 left-0 inset-0 z-0">
          <img
            src="main.jpeg"
            alt="Moving service"
            className="w-full top-0 h-[100vh] object-cover opacity-60"
          />
        </div>

        {/* Hero Content */}
        <div className="z-10 max-w-2xl relative mx-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xl font-bold text-orange-500">
              Welcome to UTC-Movers & Packers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-left">
              Your Trusted Partner in{" "}
              <span className="text-orange-500">Moving Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl text-left">
              Professional moving and packing services tailored to your needs.
              Experience stress-free relocation with UTC Movers.
            </p>
            <div className="flex gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Call Us
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Vertical Social Media Icons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden md:flex flex-col space-y-4 mr-8">
          {[
            { icon: FaFacebook, link: "#" },
            { icon: FaTwitter, link: "#" },
            { icon: FaInstagram, link: "#" },
            { icon: FaLinkedin, link: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-orange-500 transition-colors"
            >
              <social.icon className="h-6 w-6" /> {/* Using react-icons */}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Local Moving",
                description:
                  "Experience fast and reliable local moving services tailored for homes and offices.",
              },
              {
                icon: Globe,
                title: "Long-Distance ",
                description:
                  "Efficient long-distance moves with careful handling of your belongings.",
              },
              {
                icon: Package,
                title: "Packing Services",
                description:
                  "Professional packing and unpacking to ensure your items are safe.",
              },
              {
                icon: Box,
                title: "Custom Crating",
                description:
                  "Custom crating solutions for fragile and valuable items with care.",
              },
              {
                icon: Warehouse,
                title: "Storage Solutions",
                description:
                  "Secure and flexible storage options for short or long-term needs.",
              },
              {
                icon: Clipboard,
                title: "Moving Planning",
                description:
                  "Comprehensive moving plans tailored to your specific requirements.",
              },
              {
                icon: Shield,
                title: "Insurance Coverage",
                description:
                  "Peace of mind with full insurance coverage for your belongings.",
              },
              {
                icon: Settings,
                title: "Specialty Moves",
                description:
                  "Expert handling of specialty items like pianos, art, and antiques.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg"
              >
                <div className="p-8 text-center">
                  {/* Icon with Gradient Background */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-orange-500/10 rounded-full">
                    <service.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl text-nowrap font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
                {/* Animated Background Element */}
                <motion.div
                  className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-500/10 rounded-full"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute -top-16 -left-16 w-32 h-32 bg-orange-500/10 rounded-full"
                  whileHover={{ scale: 2.2 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose UTC Movers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Experience",
                text: "Over 10 years in the industry",
              },
              {
                icon: Shield,
                title: "Reliability",
                text: "Trusted by thousands of customers",
              },
              {
                icon: Package,
                title: "Full Service",
                text: "End-to-end moving solutions",
              },
              {
                icon: Truck,
                title: "Coverage",
                text: "Nationwide service available",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <item.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Move?</h2>
          <p className="text-xl mb-8 text-white">
            Get your free quote today and experience our premium moving
            services.
          </p>
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
