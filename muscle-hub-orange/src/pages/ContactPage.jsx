import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send the form data to a server here
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-dark">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're here to answer your questions and help you begin your fitness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary-dark mb-6">Get in Touch</h2>
                <p className="text-secondary mb-8">
                  Have questions about our memberships, classes, or facilities? Our team is ready to provide the information you need and help you take the first step toward achieving your fitness goals.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary text-2xl mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-secondary-dark mb-1">{item.title}</h3>
                      <p className="text-secondary">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-secondary-dark mb-4">Hours of Operation</h3>
                <ul className="space-y-2">
                  {hours.map((hour, index) => (
                    <li key={index} className="flex justify-between text-secondary">
                      <span className="font-medium">{hour.days}</span>
                      <span>{hour.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-secondary-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((platform, index) => (
                    <a 
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary text-2xl transition-colors"
                      aria-label={platform.name}
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-secondary-dark mb-6">Send Us a Message</h2>
                
                {isSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center justify-between">
                    <span>Thank you! Your message has been sent successfully.</span>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-green-700 font-bold ml-4"
                    >
                      &times;
                    </button>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-secondary-dark font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-secondary-dark font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-secondary-dark font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-secondary-dark font-medium mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="classes">Class Information</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="feedback">Feedback/Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-secondary-dark font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="text-secondary text-sm">
                      I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and consent to being contacted by MuscleHub.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold text-secondary-dark mb-4"
            >
              Find <span className="text-primary">Us</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Conveniently located in the heart of the city with easy access to public transportation and parking.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200 flex items-center justify-center"
          >
            {/* This would be replaced with an actual map component in production */}
            <div className="text-center p-8">
              <div className="text-primary text-5xl mb-4">ud83dudccd</div>
              <h3 className="text-2xl font-bold text-secondary-dark mb-2">MuscleHub Fitness Center</h3>
              <p className="text-secondary mb-4">123 Fitness Avenue, Cityville, ST 12345</p>
              <button className="bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary-dark transition-colors">
                Get Directions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold text-secondary-dark mb-4"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Find quick answers to common questions about our facilities and services.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-bold text-secondary-dark">{faq.question}</h3>
                    <span className="text-primary text-2xl group-open:rotate-180 transition-transform">u25bc</span>
                  </summary>
                  <div className="px-6 pb-6 text-secondary">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join MuscleHub today and take the first step toward a healthier, stronger you. Our team is ready to welcome you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
                Join Now
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
                Schedule a Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for the page
const contactInfo = [
  {
    icon: 'ud83dudccd',
    title: 'Location',
    content: '123 Fitness Avenue, Cityville, ST 12345'
  },
  {
    icon: 'ud83dudcf1',
    title: 'Phone',
    content: '(123) 456-7890'
  },
  {
    icon: 'ud83dudce7',
    title: 'Email',
    content: 'info@musclehub.com'
  },
];

const hours = [
  { days: 'Monday - Thursday', hours: '5:00 AM - 11:00 PM' },
  { days: 'Friday', hours: '5:00 AM - 10:00 PM' },
  { days: 'Saturday', hours: '7:00 AM - 8:00 PM' },
  { days: 'Sunday', hours: '8:00 AM - 6:00 PM' },
];

const socialMedia = [
  { name: 'Facebook', icon: 'ud83dudc64', url: '#' },
  { name: 'Instagram', icon: 'ud83dudcf8', url: '#' },
  { name: 'Twitter', icon: 'ud83dudc23', url: '#' },
  { name: 'YouTube', icon: 'ud83cudfbc', url: '#' },
];

const faqs = [
  {
    question: 'What are your membership options?',
    answer: 'We offer several membership tiers including Basic, Premium, and Elite plans with varying benefits and price points. We also offer special rates for students, seniors, and military personnel. Visit our Subscriptions page for detailed information on each plan.'
  },
  {
    question: 'Do you offer a free trial or day pass?',
    answer: 'Yes! We offer a complimentary 1-day pass so you can experience our facilities before committing to a membership. You can request a day pass through our website or by contacting our front desk directly.'
  },
  {
    question: 'What amenities are available at your gym?',
    answer: 'Our facilities include state-of-the-art cardio and strength equipment, group fitness studios, free weight areas, functional training zones, locker rooms with showers and saunas, a recovery area, and a smoothie bar. Premium and Elite members also have access to additional amenities.'
  },
  {
    question: 'Are personal trainers available?',
    answer: 'Absolutely! We have a team of certified personal trainers specializing in various fitness areas. Personal training can be purchased as individual sessions or as packages at discounted rates. All new members receive a complimentary fitness assessment with one of our trainers.'
  },
  {
    question: 'What COVID-19 safety measures do you have in place?',
    answer: 'We follow all local health guidelines and have implemented enhanced cleaning protocols, spaced out equipment, improved ventilation systems, and provide hand sanitizing stations throughout the facility. We continuously update our procedures based on current public health recommendations.'
  },
  {
    question: 'How do I cancel or freeze my membership?',
    answer: 'Membership changes, including cancellations and freezes, can be handled through your online account or by speaking with our membership services team. Most memberships require a 30-day notice for cancellation, and we offer temporary freezes for vacations or medical reasons.'
  },
];

export default ContactPage;