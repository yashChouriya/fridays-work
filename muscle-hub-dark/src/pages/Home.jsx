import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-primary/70 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center bg-no-repeat z-[-1]"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transform Your Body, <span className="text-accent">Transform Your Life</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-text-light/90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join MuscleHub Gym today and experience top-notch fitness facilities, expert trainers, and a supportive community dedicated to your fitness journey.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/subscriptions" className="btn-primary text-center">
                Get Started
              </Link>
              <Link to="/classes" className="border-2 border-text-light hover:border-accent text-white font-semibold py-2 px-6 rounded-lg transition duration-300 text-center">
                Explore Classes
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Why Choose Us"
            title="Features That Set Us Apart"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={0}>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center bg-accent/20 p-4 rounded-full mb-4">
                  <FaDumbbell className="text-accent text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
                <p className="text-text-dark">State-of-the-art fitness equipment to help you reach your goals efficiently.</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={1}>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center bg-accent/20 p-4 rounded-full mb-4">
                  <FaUsers className="text-accent text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                <p className="text-text-dark">Our certified trainers are dedicated to helping you achieve your fitness goals.</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={2}>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center bg-accent/20 p-4 rounded-full mb-4">
                  <FaCalendarAlt className="text-accent text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diverse Classes</h3>
                <p className="text-text-dark">From yoga to HIIT, we offer a wide range of classes for all fitness levels.</p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={3}>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center bg-accent/20 p-4 rounded-full mb-4">
                  <FaStar className="text-accent text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Facilities</h3>
                <p className="text-text-dark">Enjoy clean, spacious workout areas, locker rooms, and relaxation spaces.</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Classes"
            title="Find Your Perfect Workout"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Strength Training" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Strength Training</h3>
                <p className="text-text-dark mb-4">Build muscle and increase your strength with our comprehensive strength training program.</p>
                <Link to="/classes" className="text-accent hover:text-accent-dark transition-colors font-medium">
                  Learn More →
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={1}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Cardio Blast" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cardio Blast</h3>
                <p className="text-text-dark mb-4">Boost your cardiovascular health and endurance with our high-energy cardio classes.</p>
                <Link to="/classes" className="text-accent hover:text-accent-dark transition-colors font-medium">
                  Learn More →
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={2}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Yoga & Flexibility" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Yoga & Flexibility</h3>
                <p className="text-text-dark mb-4">Improve flexibility, balance and mental clarity with our yoga and stretching classes.</p>
                <Link to="/classes" className="text-accent hover:text-accent-dark transition-colors font-medium">
                  Learn More →
                </Link>
              </div>
            </AnimatedCard>
          </div>

          <div className="text-center mt-12">
            <Link to="/classes" className="btn-primary inline-block">
              View All Classes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center bg-no-repeat opacity-20 z-[-1]"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="heading-lg text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Start Your Fitness Journey Today
          </motion.h2>
          <motion.p 
            className="text-text-light/80 text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join MuscleHub Gym and take the first step towards a healthier, stronger you. Our expert trainers and supportive community are here to help you succeed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn-primary text-lg px-8 py-3">
              Join Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;