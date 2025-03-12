import { Link } from 'react-router-dom';
import { FaDumbbell, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FaDumbbell className="text-accent text-2xl" />
              <span className="text-xl font-bold">MuscleHub</span>
            </Link>
            <p className="text-text-dark mb-6">
              Elevate your fitness journey with our state-of-the-art facilities and expert trainers.
              We're dedicated to helping you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-dark hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-dark hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-text-dark hover:text-accent transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-text-dark hover:text-accent transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-dark hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="text-text-dark">Monday - Friday: 6:00 AM - 10:00 PM</li>
              <li className="text-text-dark">Saturday: 7:00 AM - 8:00 PM</li>
              <li className="text-text-dark">Sunday: 8:00 AM - 6:00 PM</li>
              <li className="text-text-dark mt-4">Public Holidays: 9:00 AM - 5:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-text-dark">123 Fitness Avenue, Workout City</li>
              <li className="text-text-dark">info@musclehub.com</li>
              <li className="text-text-dark">+1 (555) 123-4567</li>
              <li className="mt-4">
                <Link to="/contact" className="text-accent hover:text-accent-dark transition-colors">
                  Get Directions →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-text-dark">
          <p>© {new Date().getFullYear()} MuscleHub Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;