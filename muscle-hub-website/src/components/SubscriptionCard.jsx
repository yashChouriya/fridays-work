import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SubscriptionCard = ({ plan, isPopular, delayMultiplier }) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-xl overflow-hidden ${isPopular ? 'border-2 border-primary relative scale-105 z-10' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delayMultiplier * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {isPopular && (
        <div className="bg-primary text-white py-1 px-4 absolute right-0 top-4 font-medium rounded-l-full shadow-md">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary">${plan.price}</span>
          <span className="text-gray-500">/{plan.period}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to="/contact" 
          className={`block text-center py-3 px-6 rounded-md transition-all duration-300 font-bold w-full ${isPopular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-200 text-dark hover:bg-gray-300'}`}
        >
          Choose Plan
        </Link>
      </div>
    </motion.div>
  );
};

export default SubscriptionCard;