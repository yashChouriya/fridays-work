import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Subscriptions', path: '/subscriptions' },
    { title: 'Classes', path: '/classes' },
    { title: 'Trainers', path: '/trainers' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-heading font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Muscle<span className="text-primary">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-secondary-dark hover:text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/subscriptions"
              className="ml-2 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md text-sm font-medium transition-all"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center p-2 rounded-md"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-5">
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${isScrolled ? 'bg-secondary-dark' : 'bg-white'} ${
                  isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                }`} 
              />
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${isScrolled ? 'bg-secondary-dark' : 'bg-white'} ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} 
                style={{ top: '0.5rem' }} 
              />
              <span 
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${isScrolled ? 'bg-secondary-dark' : 'bg-white'} ${
                  isOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`px-4 py-2 rounded-md font-medium ${
                      location.pathname === item.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-secondary-dark hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  to="/subscriptions"
                  className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-md text-center font-medium transition-all mt-4"
                >
                  Join Now
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;