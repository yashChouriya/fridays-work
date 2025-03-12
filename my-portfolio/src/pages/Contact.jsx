import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      // In a real application, you would send this data to a server
      // and handle success/error responses
    }, 1500);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { icon: <FaPhone />, text: '+1 (123) 456-7890', href: 'tel:+11234567890' },
    { icon: <FaMapMarkerAlt />, text: 'Your Location, City, Country', href: null },
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com/yourusername' },
  ];

  return (
    <div className="pt-16">
      <Section 
        title="Contact Me" 
        subtitle="Have a question or want to work together? Fill out the form below or reach out directly."
        id="contact"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-secondary rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-textLight mb-6">Send Me a Message</h3>
              
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-highlight mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h4 className="text-xl font-bold text-textLight mb-2">Message Sent!</h4>
                  <p className="text-text mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <Button onClick={() => {
                    setSubmitStatus(null);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-text mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary/50 border border-secondary rounded py-2 px-3 text-text focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-text mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary/50 border border-secondary rounded py-2 px-3 text-text focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-text mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary/50 border border-secondary rounded py-2 px-3 text-text focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-text mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-primary/50 border border-secondary rounded py-2 px-3 text-text focus:border-highlight focus:outline-none focus:ring-1 focus:ring-highlight transition-colors duration-300"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-textLight mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-highlight text-xl mr-4">
                      {info.icon}
                    </div>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-text hover:text-highlight transition-colors duration-300"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-text">{info.text}</span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-textLight mb-6">Connect with Me</h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-text hover:text-highlight transition-colors duration-300 text-xl"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 bg-secondary/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-textLight mb-4">Let's Work Together</h3>
              <p className="text-text mb-6">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs some creative touch, don't hesitate to reach out.
              </p>
              <p className="text-text italic">
                "The best way to predict the future is to create it."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;