import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-heading font-bold">
                Muscle<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              Empowering you to transform your life through expert guidance, premier facilities, and a supportive community.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.to} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3">{info.icon}</span>
                  <span className="text-white/70">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 pb-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 mb-6">
              Get the latest news, special offers, and fitness tips delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MuscleHub. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sample data for footer
const socialLinks = [
  { icon: 'ud83dudc64', label: 'Facebook', url: '#' },
  { icon: 'ud83dudcf8', label: 'Instagram', url: '#' },
  { icon: 'ud83dudc23', label: 'Twitter', url: '#' },
  { icon: 'ud83cudfbc', label: 'YouTube', url: '#' },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Classes', to: '/classes' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const services = [
  { label: 'Membership Plans', to: '/subscriptions' },
  { label: 'Personal Training', to: '/trainers' },
  { label: 'Group Classes', to: '/classes' },
  { label: 'Nutrition Coaching', to: '/trainers' },
  { label: 'Fitness Assessment', to: '/contact' },
];

const contactInfo = [
  { icon: 'ud83dudccd', text: '123 Fitness Avenue, Cityville, ST 12345' },
  { icon: 'ud83dudce7', text: 'info@musclehub.com' },
  { icon: 'ud83dudcf1', text: '(123) 456-7890' },
  { icon: 'ud83dudcf0', text: 'Monday - Sunday: 5:00 AM - 11:00 PM' },
];

export default Footer;