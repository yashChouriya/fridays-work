import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically connect to a backend service
    // For this demo, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      content: '123 Fitness Avenue, Workout City, WC 12345',
      link: 'https://maps.google.com',
      linkText: 'Get Directions',
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone Number',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      linkText: 'Call Us',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      content: 'info@musclehub.com',
      link: 'mailto:info@musclehub.com',
      linkText: 'Send Email',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      content: 'Mon-Fri: 6AM-10PM | Weekends: 8AM-8PM',
      link: null,
      linkText: null,
    },
  ];

  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Reach out to us for any questions, feedback, or to start your fitness journey"
      />

      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionTitle 
                subtitle="Get In Touch" 
                title="Send Us a Message"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-light mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-gray-700 rounded-lg py-3 px-4 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-light mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-gray-700 rounded-lg py-3 px-4 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-text-light mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-secondary border border-gray-700 rounded-lg py-3 px-4 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-text-light mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary border border-gray-700 rounded-lg py-3 px-4 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-light mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-secondary border border-gray-700 rounded-lg py-3 px-4 text-text-light focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
                    {formStatus.message}
                  </div>
                )}

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionTitle 
                subtitle="Contact Information" 
                title="How to Reach Us"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-secondary p-6 rounded-lg">
                    <div className="text-accent text-3xl mb-4">{info.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="text-text-dark mb-4">{info.content}</p>
                    {info.link && (
                      <a 
                        href={info.link} 
                        className="text-accent hover:text-accent-dark transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.linkText} →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-[300px] bg-secondary">
                <div className="text-center py-10">
                  <p className="text-text-dark">
                    [Map Integration Placeholder]
                  </p>
                  <p className="text-text-dark mt-2">
                    In a real implementation, an interactive map would be displayed here using Google Maps or a similar service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Ready to Start Your Fitness Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-text-dark max-w-2xl mx-auto mb-8"
          >
            Join MuscleHub today and take the first step towards a healthier, stronger you. Our expert trainers and supportive community are here to help you achieve your fitness goals.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="btn-primary text-lg px-8 py-3"
          >
            Become a Member
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Contact;