import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDumbbell, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/">
              <div className="flex items-center space-x-2 mb-6">
                <FaDumbbell className="text-primary text-3xl" />
                <span className="text-2xl font-bold font-heading">MUSCLE <span className="text-primary">HUB</span></span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming lives through fitness since 2010. At Muscle Hub, we're dedicated to helping you achieve your fitness goals in a motivating and supportive environment.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook className="text-xl" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaYoutube className="text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 font-heading border-b border-primary pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-primary transition-colors duration-300">Classes</Link>
              </li>
              <li>
                <Link to="/subscriptions" className="text-gray-400 hover:text-primary transition-colors duration-300">Membership</Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-400 hover:text-primary transition-colors duration-300">Trainers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl mb-6 font-heading border-b border-primary pb-2 inline-block">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday:</span>
                <span className="text-white">5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday:</span>
                <span className="text-white">6:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday:</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="pt-4">
                <p className="text-gray-400">Holiday hours may vary. Please check our social media for updates.</p>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 font-heading border-b border-primary pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MdLocationOn className="text-primary text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Fitness Avenue, Workout District, Exercise City, 54321</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdPhone className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail className="text-primary text-xl flex-shrink-0" />
                <span className="text-gray-400">info@musclehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Muscle Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;