import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaEnvelope />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary py-8 border-t border-secondary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text hover:text-highlight transition-colors duration-300 text-xl"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text text-sm"
          >
            <p>© {currentYear} <span className="text-highlight">YourName</span>. All Rights Reserved.</p>
          </motion.div>

          {/* Built With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text text-sm mt-4 md:mt-0"
          >
            <p>Built with React & Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;