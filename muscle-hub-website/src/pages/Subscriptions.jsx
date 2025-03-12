import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaQuestion } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import SubscriptionCard from '../components/SubscriptionCard';

// Data
import subscriptions from '../data/subscriptions';

const Subscriptions = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ data
  const faqs = [
    {
      question: 'Is there a joining fee?',
      answer: 'No, we do not charge any joining fees. You only pay for your chosen membership plan.',
    },
    {
      question: 'Can I cancel my membership at any time?',
      answer: 'Yes, all our memberships can be canceled with 30 days notice. There are no long-term contracts or cancellation fees.',
    },
    {
      question: 'Are there any age restrictions?',
      answer: 'Members must be 16 years or older. We offer special youth programs for those between 13-15 years when accompanied by a parent or guardian.',
    },
    {
      question: 'Do you offer corporate memberships?',
      answer: 'Yes, we offer special corporate rates for businesses. Please contact us for more information about our corporate wellness programs.',
    },
    {
      question: 'Can I freeze my membership temporarily?',
      answer: 'Yes, members can freeze their membership for up to 3 months per year for medical reasons or extended travel.',
    },
    {
      question: 'What happens if I want to upgrade my membership?',
      answer: 'You can upgrade your membership at any time. The new rate will be prorated for the remainder of your billing cycle.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Membership Plans"
        subtitle="Find the perfect membership option to fit your fitness goals and lifestyle."
        image="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      />
      
      {/* Membership Plans Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Choose Your Membership"
            subtitle="We offer flexible membership options to suit your needs and goals."
            dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {subscriptions.map((plan, index) => (
              <SubscriptionCard 
                key={plan.id} 
                plan={plan} 
                isPopular={plan.isPopular} 
                delayMultiplier={index}
              />
            ))}
          </div>
          
          {/* Additional Info */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              All memberships include access to our mobile app, online workout tracking, and a free fitness assessment. 
              For more information or to discuss special requirements, please contact our membership team.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contact Membership Team
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Membership Benefits Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <SectionHeader 
            title="Membership Benefits"
            subtitle="All Muscle Hub members enjoy these exclusive benefits regardless of their plan."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">State-of-the-Art Facilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Modern equipment with regular updates</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Clean, spacious workout areas</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Comfortable locker rooms and showers</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Designated stretching and recovery areas</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Expert Support</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Access to certified fitness professionals</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Fitness assessment and goal setting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Form correction and equipment guidance</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Program updates and progression tracking</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Digital Experience</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Mobile app for workout tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Online class booking and scheduling</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Progress metrics and achievement badges</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Access to workout videos and tutorials</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Community & Events</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Member social events and challenges</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Educational workshops and seminars</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Community support and accountability</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Group challenges and transformation contests</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Extra Perks</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Discounts on supplements and merchandise</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Partner discounts with local businesses</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Referral rewards program</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Exclusive content and early access to new programs</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Flexible Options</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>No long-term contracts required</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Membership freeze options</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Easy plan upgrades or changes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Multiple payment options available</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our membership options."
            dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <FaQuestion className="text-primary text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-6">
              Still have questions about our membership options? We're here to help!
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-dark relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)` }}></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Start Your Fitness Journey Today
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join Muscle Hub now and take the first step toward a healthier, stronger you. No joining fees and no long-term commitments required.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact" className="btn-primary text-lg">
              Join Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Subscriptions;