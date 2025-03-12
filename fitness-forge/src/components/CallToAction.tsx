import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="bg-dark py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join FitnessForge today and transform your life with expert guidance, 
              state-of-the-art equipment, and a supportive community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/subscriptions" className="btn btn-primary">
                View Memberships
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-dark">
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-lg p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Get a Free Day Pass</h3>
            <p className="text-gray-300 mb-6">Experience FitnessForge with a complimentary one-day pass. Fill out the form below to get started.</p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full btn btn-primary"
              >
                Get My Free Pass
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;