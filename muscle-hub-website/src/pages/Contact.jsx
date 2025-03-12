import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Contact info
  const contactInfo = [
    {
      icon: <MdLocationOn className="text-primary text-3xl" />,
      title: 'Our Location',
      details: '123 Fitness Avenue, Workout District, Exercise City, 54321',
      link: 'https://maps.google.com',
      linkText: 'Get Directions',
    },
    {
      icon: <MdPhone className="text-primary text-3xl" />,
      title: 'Phone Number',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      linkText: 'Call Us',
    },
    {
      icon: <MdEmail className="text-primary text-3xl" />,
      title: 'Email Address',
      details: 'info@musclehub.com',
      link: 'mailto:info@musclehub.com',
      linkText: 'Send Email',
    },
    {
      icon: <MdAccessTime className="text-primary text-3xl" />,
      title: 'Working Hours',
      details: 'Monday-Friday: 5:00 AM - 10:00 PM\nSaturday: 6:00 AM - 8:00 PM\nSunday: 8:00 AM - 6:00 PM',
      link: null,
      linkText: null,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Contact Us"
        subtitle="Have questions or ready to start your fitness journey? Get in touch with our team."
        image="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
      />
      
      {/* Contact Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader 
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                centered={false}
                dark={true}
              />
              
              <ContactForm />
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader 
                title="Get in Touch"
                subtitle="Here's how you can reach us with any questions or inquiries."
                centered={false}
                dark={true}
              />
              
              <div className="space-y-6 mt-8">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex p-6 bg-white rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-2">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                      {info.link && (
                        <a 
                          href={info.link} 
                          className="text-primary font-medium inline-block mt-2 hover:underline"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noreferrer' : ''}
                        >
                          {info.linkText}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Media */}
              <motion.div 
                className="mt-8 p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: contactInfo.length * 0.1 }}
              >
                <h3 className="text-xl font-bold text-dark mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaFacebook />
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-dark transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaYoutube />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <SectionHeader 
            title="Find Us"
            subtitle="Visit our state-of-the-art facility and experience the Muscle Hub difference."
          />
          
          <div className="mt-12">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              {/* This would be replaced with an actual Google Maps embed in a real project */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-lg text-gray-600 font-bold">Google Maps Embed Would Go Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;