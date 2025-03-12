import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';

// Hero Background
const subscriptionsHeroUrl = 'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';

const Subscriptions = () => {
  // State for toggling between monthly and annual pricing
  const [isAnnual, setIsAnnual] = useState(false);

  // Pricing plans
  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for beginners starting their fitness journey',
      monthlyPrice: 49.99,
      annualPrice: 499.99,
      features: [
        'Access to gym facilities',
        'Basic fitness assessment',
        'Access to cardio equipment',
        'Access to strength training area',
        'Limited access to group classes (2 per week)',
        'Online workout resources',
      ],
      notIncluded: [
        'Personal training sessions',
        'Premium classes',
        'Nutrition consultation',
        'Wellness services',
      ],
      popular: false,
      color: 'bg-gray-100',
      textColor: 'text-dark',
      btnClass: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    },
    {
      name: 'Premium',
      description: 'Our most popular plan for fitness enthusiasts',
      monthlyPrice: 79.99,
      annualPrice: 799.99,
      features: [
        'All Basic features',
        'Unlimited access to group classes',
        'Two personal training sessions per month',
        'Detailed fitness assessment',
        'Basic nutrition consultation',
        'Access to premium equipment',
        'Mobile app with workout tracking',
        'Free guest passes (2 per month)',
      ],
      notIncluded: [
        'Premium wellness services',
        'Advanced nutrition planning',
      ],
      popular: true,
      color: 'bg-primary',
      textColor: 'text-white',
      btnClass: 'bg-white text-primary hover:bg-gray-100',
    },
    {
      name: 'Elite',
      description: 'The ultimate fitness experience for serious athletes',
      monthlyPrice: 129.99,
      annualPrice: 1299.99,
      features: [
        'All Premium features',
        'Weekly personal training sessions',
        'Customized nutrition plan',
        'Wellness services (massage, recovery)',
        'Priority class booking',
        'Exclusive access to elite member events',
        'Premium locker with laundry service',
        'Free guest passes (4 per month)',
        'Full access to mobile app features',
      ],
      notIncluded: [],
      popular: false,
      color: 'bg-dark',
      textColor: 'text-white',
      btnClass: 'bg-primary text-white hover:bg-primary/90',
    },
  ];

  // Additional services
  const additionalServices = [
    {
      name: 'Personal Training',
      description: 'One-on-one sessions with certified trainers',
      price: '$70/session',
      packages: [
        '5 sessions: $325 ($65/session)',
        '10 sessions: $600 ($60/session)',
        '20 sessions: $1,100 ($55/session)',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      ),
    },
    {
      name: 'Nutrition Consultation',
      description: 'Customized nutrition plans from registered dietitians',
      price: '$90/consultation',
      packages: [
        'Initial assessment: $120',
        'Follow-up consultation: $75',
        'Monthly nutrition plan: $200',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
    {
      name: 'Recovery & Wellness',
      description: 'Services to enhance recovery and overall wellness',
      price: 'Varies by service',
      packages: [
        'Massage therapy: $85/hour',
        'Cryotherapy: $50/session',
        'Infrared sauna: $40/session',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
    },
    {
      name: 'Group Training Packages',
      description: 'Small group training for specialized programs',
      price: '$30/session',
      packages: [
        '4-week bootcamp: $250',
        '8-week transformation: $450',
        'Sports-specific training: $350',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'Can I cancel my membership at any time?',
      answer: 'Yes, all our memberships can be cancelled with 30 days notice. Annual memberships may be subject to a cancellation fee if cancelled before the 12-month term is completed.'
    },
    {
      question: 'Are there any signup or initiation fees?',
      answer: 'We charge a one-time initiation fee of $49 for new members. However, we frequently run promotions that waive this fee. Check our current offers for details.'
    },
    {
      question: 'Can I freeze my membership temporarily?',
      answer: 'Yes, members can freeze their membership for up to 3 months per year. A small monthly maintenance fee of $10 applies during the freeze period.'
    },
    {
      question: 'Do you offer corporate memberships?',
      answer: 'Yes, we offer special corporate rates for companies enrolling 5 or more employees. Please contact our membership team for details on our corporate wellness programs.'
    },
    {
      question: 'Do you offer student or senior discounts?',
      answer: 'Yes, we offer a 10% discount on all membership plans for students and seniors (65+) with valid ID.'
    },
    {
      question: 'What happens if I miss a personal training session?',
      answer: 'Personal training sessions must be cancelled at least 24 hours in advance to avoid being charged. With proper notice, the session can be rescheduled.'
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center relative pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${subscriptionsHeroUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Membership <span className="text-primary">Plans</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find the perfect fitness plan to match your goals and budget.
              Flexible options designed for all fitness levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Pricing Options"
            title="Choose Your Membership"
            description="Invest in your health with our flexible membership plans. Select the option that best fits your fitness goals and lifestyle."
          />

          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center bg-white p-1 rounded-lg shadow-md">
              <button
                className={`px-6 py-2 rounded-md ${!isAnnual ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-md ${isAnnual ? 'bg-primary text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors`}
                onClick={() => setIsAnnual(true)}
              >
                Yearly <span className="text-xs font-medium">(Save 15%)</span>
              </button>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden shadow-lg ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                <div className={`${plan.color} ${plan.textColor} p-8`}>
                  {plan.popular && (
                    <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="mb-4 opacity-90">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? (plan.annualPrice / 12).toFixed(2) : plan.monthlyPrice}
                    </span>
                    <span className="text-lg opacity-90"> / month</span>
                    {isAnnual && (
                      <div className="mt-1 text-sm opacity-90">
                        Billed annually (${plan.annualPrice.toFixed(2)})
                      </div>
                    )}
                  </div>
                  <button className={`w-full btn ${plan.btnClass}`}>
                    Choose {plan.name}
                  </button>
                </div>
                <div className="bg-white p-8">
                  <h4 className="font-bold text-lg mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-bold text-lg mt-6 mb-4">Not included:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Additional Services"
            title="Enhance Your Membership"
            description="Take your fitness journey to the next level with our premium add-on services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="text-primary font-medium mb-4">{service.price}</div>
                <div className="space-y-2">
                  {service.packages.map((pkg, i) => (
                    <div key={i} className="text-sm text-gray-600">
                      • {pkg}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="section bg-dark text-white">
        <div className="container">
          <SectionHeader
            subtitle="Benefits"
            title="Why Join FitnessForge?"
            description="Our members enjoy more than just access to premium equipment. Here's what sets us apart."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "State-of-the-Art Facilities",
                description: "Access premium equipment and modern amenities designed to enhance your workout experience.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                )
              },
              {
                title: "Expert Guidance",
                description: "Learn from certified trainers who provide personalized advice and motivation on your fitness journey.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                )
              },
              {
                title: "Diverse Class Offerings",
                description: "Choose from a wide range of classes for all fitness levels, from high-intensity workouts to mind-body practices.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                )
              },
              {
                title: "Supportive Community",
                description: "Join a welcoming community of like-minded individuals who encourage and inspire each other.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                )
              },
              {
                title: "Holistic Approach",
                description: "Access resources for complete wellness, including nutrition guidance, recovery services, and stress management.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                )
              },
              {
                title: "Flexible Options",
                description: "Choose from various membership plans and payment options to find what works best for your schedule and budget.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg"
              >
                <div className="text-primary mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our membership plans and services."
          />

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="mb-4 border-b border-gray-200 pb-4 last:border-0"
              >
                <h4 className="text-lg font-bold mb-2">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see your question here?</p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </PageTransition>
  );
};

export default Subscriptions;