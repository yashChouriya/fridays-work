import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';

const Subscriptions = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for beginners',
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      features: [
        'Access to main gym area',
        'Basic fitness assessment',
        'Access during off-peak hours',
        'Locker room access',
        '24/7 security',
      ],
      accent: false,
    },
    {
      name: 'Premium',
      description: 'Most popular choice',
      monthlyPrice: 59.99,
      annualPrice: 599.99,
      features: [
        'Full 24/7 gym access',
        'Comprehensive fitness assessment',
        'Access to group classes',
        'Locker with personal key',
        'One free personal training session monthly',
        'Access to sauna and spa',
        'Nutritional consultation',
      ],
      accent: true,
    },
    {
      name: 'Elite',
      description: 'Ultimate fitness experience',
      monthlyPrice: 89.99,
      annualPrice: 899.99,
      features: [
        'All Premium features',
        'Unlimited personal training sessions',
        'Custom workout programming',
        'Monthly body composition analysis',
        'Exclusive access to premium equipment',
        'VIP locker with amenities',
        'Monthly massage session',
        'Priority booking for classes',
      ],
      accent: false,
    },
  ];

  return (
    <>
      <PageBanner 
        title="Membership Plans" 
        subtitle="Choose the perfect membership plan to achieve your fitness goals"
      />

      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Subscription Plans" 
            title="Invest in Your Health"
            centered={true}
          />

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-secondary p-1 rounded-lg inline-flex">
              <button 
                className={`py-2 px-4 rounded-md ${billingPeriod === 'monthly' ? 'bg-accent text-white' : 'text-text-dark'}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`py-2 px-4 rounded-md ${billingPeriod === 'annual' ? 'bg-accent text-white' : 'text-text-dark'}`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual <span className="text-xs text-accent font-medium ml-1">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-lg overflow-hidden ${plan.accent ? 'ring-2 ring-accent' : 'border border-gray-700'}`}
                >
                  <div className={`p-6 ${plan.accent ? 'bg-accent text-white' : 'bg-secondary text-white'}`}>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-sm opacity-80 mb-4">{plan.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">${price.toFixed(2)}</span>
                      <span className="text-sm opacity-80 ml-2">
                        / {billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-secondary">
                    <ul className="space-y-4">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <FaCheck className="text-accent mt-1 mr-3 flex-shrink-0" />
                          <span className="text-text-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`w-full mt-8 py-3 rounded-lg font-semibold ${plan.accent ? 
                        'bg-accent hover:bg-accent-dark text-white' : 
                        'bg-gray-700 hover:bg-gray-600 text-white'}`}
                    >
                      Select Plan
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <SectionTitle 
              subtitle="Frequently Asked Questions" 
              title="Common Membership Questions"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="bg-secondary p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-2">Can I freeze my membership?</h4>
                <p className="text-text-dark">Yes, you can freeze your membership for up to 3 months per year with a small administrative fee. This option is available for all membership tiers.</p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-2">Is there a joining fee?</h4>
                <p className="text-text-dark">There is a one-time joining fee of $49 for new members. However, we frequently run promotions that waive this fee, so keep an eye out for special offers.</p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-2">Can I upgrade my membership?</h4>
                <p className="text-text-dark">Yes, you can upgrade your membership at any time. The price difference will be prorated for the remainder of your billing cycle.</p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-2">What's your cancellation policy?</h4>
                <p className="text-text-dark">Members can cancel with 30 days' notice after the initial commitment period (3 months for monthly memberships, 12 months for annual memberships).</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscriptions;