import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SubscriptionsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-dark">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
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
              Membership <span className="text-primary">Plans</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect membership plan that fits your fitness goals and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Our <span className="text-primary">Subscription</span> Plans
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              We offer flexible membership options designed to accommodate various needs and budgets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl shadow-xl overflow-hidden ${plan.featured ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-white'}`}
              >
                <div className={`p-8 ${plan.featured ? 'bg-primary-dark' : 'bg-gray-50'}`}>
                  {plan.featured && (
                    <div className="mb-4 inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold ${plan.featured ? 'text-white' : 'text-secondary-dark'} mb-2`}>{plan.name}</h3>
                  <p className={`${plan.featured ? 'text-white/80' : 'text-secondary'} mb-6`}>{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-bold ${plan.featured ? 'text-white' : 'text-primary'}`}>${plan.price}</span>
                    <span className={`text-xl ml-2 ${plan.featured ? 'text-white/80' : 'text-secondary'}`}>/month</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className={`mr-3 text-lg ${plan.featured ? 'text-white' : 'text-primary'}`}>✓</span>
                        <span className={plan.featured ? 'text-white/90' : 'text-secondary'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-md font-medium transition-all ${plan.featured ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary-dark'}`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-dark mb-6">All Memberships Include</h2>
              <p className="text-secondary mb-8">
                No matter which plan you choose, you'll enjoy these premium features and amenities that make MuscleHub the best fitness destination.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary text-2xl mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-secondary-dark mb-2">{feature.title}</h3>
                      <p className="text-secondary text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-5 -right-5 w-72 h-72 bg-primary/20 rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Gym facilities" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </motion.div>
          </div>
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
              Find answers to common questions about our membership plans and services.
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
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-secondary-dark/90 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl mb-8">Join MuscleHub today with a membership plan that suits your needs. Our team is ready to welcome you and support your fitness goals.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary-dark transition-all inline-block">
                Join Today
              </Link>
              <Link to="/classes" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all inline-block">
                Explore Classes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for the page
const plans = [
  {
    name: 'Basic',
    description: 'Perfect for fitness beginners',
    price: 29.99,
    features: [
      'Access to gym facilities',
      'Standard operating hours (6am-10pm)',
      'Access to basic equipment',
      'Locker room access',
      'Free parking',
      'Online account management'
    ],
    featured: false
  },
  {
    name: 'Premium',
    description: 'Our most popular membership',
    price: 49.99,
    features: [
      'Full 24/7 gym access',
      'All group fitness classes',
      'Full equipment access',
      'Fitness assessment',
      'One personal training session/month',
      'Sauna & steam room access',
      'Guest passes (2 per month)'
    ],
    featured: true
  },
  {
    name: 'Elite',
    description: 'For serious fitness enthusiasts',
    price: 79.99,
    features: [
      'All Premium features',
      'Unlimited personal training sessions',
      'Personalized nutrition plan',
      'Quarterly fitness assessments',
      'Priority class booking',
      'Complimentary protein shakes',
      'Massage therapy discount (20%)',
      'Unlimited guest passes'
    ],
    featured: false
  }
];

const includedFeatures = [
  {
    icon: 'ud83dudcaa',
    title: 'State-of-the-Art Equipment',
    description: 'Access to premium exercise machines and free weights from top brands.'
  },
  {
    icon: 'ud83euddcd',
    title: 'Expert Staff',
    description: 'Friendly, knowledgeable team ready to assist with any questions or needs.'
  },
  {
    icon: 'ud83eudd42',
    title: 'Supportive Community',
    description: 'Join a motivating environment with like-minded fitness enthusiasts.'
  },
  {
    icon: 'ud83eudddf',
    title: 'Clean Facilities',
    description: 'Spotlessly maintained spaces with regular cleaning protocols.'
  },
  {
    icon: 'ud83dudebf',
    title: 'Modern Locker Rooms',
    description: 'Secure storage, showers, and complimentary towel service.'
  },
  {
    icon: 'ud83dudcf1',
    title: 'Mobile App Access',
    description: 'Book classes, track workouts, and manage your account on the go.'
  },
];

const faqs = [
  {
    question: 'Is there a joining fee?',
    answer: 'Yes, there is a one-time joining fee of $49 for all new members. However, we frequently run promotions that waive this fee. Check our current promotions or speak with a membership advisor for details.'
  },
  {
    question: 'Can I cancel my membership at any time?',
    answer: 'All our memberships operate on a month-to-month basis after the initial commitment period (usually 3 months). After this period, you can cancel with 30 days written notice. See our full cancellation policy for details.'
  },
  {
    question: 'Can I freeze my membership temporarily?',
    answer: 'Yes, members can freeze their membership for up to 3 months per year for a small administrative fee. This is ideal for vacations, business travel, or temporary circumstances that prevent gym use.'
  },
  {
    question: 'Are there family or corporate discounts available?',
    answer: 'Yes! We offer family plans that provide discounts when multiple household members join. We also have corporate partnership programs for businesses. Contact our membership team for specific rates.'
  },
  {
    question: 'Can I try MuscleHub before joining?',
    answer: 'Absolutely! We offer a free 1-day pass for prospective members. This includes access to the facilities and one group fitness class. Simply contact us to schedule your visit.'
  },
  {
    question: 'What happens if I need to relocate?',
    answer: 'If you relocate to an area more than 25 miles from any MuscleHub location, you can cancel your membership without penalty, even during the initial commitment period. Proof of relocation may be required.'
  },
];

export default SubscriptionsPage;