import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ClassCard from '../components/ClassCard';
import TrainerCard from '../components/TrainerCard';
import TestimonialCard from '../components/TestimonialCard';

// Data
import classes from '../data/classes';
import trainers from '../data/trainers';
import testimonials from '../data/testimonials';

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Features data
  const features = [
    {
      icon: <FaDumbbell className="text-4xl text-primary mb-4" />,
      title: 'Modern Equipment',
      description: 'State-of-the-art fitness equipment to help you achieve your goals efficiently.',
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: 'Expert Trainers',
      description: 'Certified professional trainers dedicated to your fitness success.',
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-primary mb-4" />,
      title: 'Diverse Classes',
      description: 'Wide variety of fitness classes to keep your workouts engaging and effective.',
    },
    {
      icon: <FaHeartbeat className="text-4xl text-primary mb-4" />,
      title: 'Nutrition Support',
      description: 'Personalized nutrition guidance to complement your fitness routine.',
    },
  ];
  
  // Filter featured classes
  const featuredClasses = classes.slice(0, 3);
  
  // Filter featured trainers
  const featuredTrainers = trainers.slice(0, 2);
  
  // Filter testimonials
  const featuredTestimonials = testimonials.slice(0, 3);
  
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Transform Your Body, Transform Your Life"
        subtitle="Join Muscle Hub and start your fitness journey today with our state-of-the-art facilities and expert trainers."
        buttonText="Join Now"
        buttonLink="/contact"
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      
      {/* Features Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Why Choose Muscle Hub?"
            subtitle="We're more than just a gym. We're a community dedicated to helping you achieve your fitness goals."
            dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Classes Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <SectionHeader 
            title="Our Popular Classes"
            subtitle="Discover our most popular fitness classes designed to help you reach your goals."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredClasses.map((gymClass, index) => (
              <ClassCard key={gymClass.id} gymClass={gymClass} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/classes" className="btn-primary inline-block">
              View All Classes
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">About Muscle Hub</h2>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-gray-600 mb-6">
                Founded in 2010, Muscle Hub has been at the forefront of fitness innovation, providing a premium gym experience for members of all fitness levels.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to create a welcoming, motivating environment where anyone can achieve their fitness goals with the support of expert trainers and a community of like-minded individuals.
              </p>
              <p className="text-gray-600 mb-8">
                With state-of-the-art equipment, diverse class offerings, and personalized training options, we're committed to helping you transform your body and your life.
              </p>
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Gym interior" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 md:p-6 rounded-lg shadow-lg">
                <div className="text-2xl md:text-3xl font-bold mb-1">10+</div>
                <div className="text-sm md:text-base">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Trainers Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <SectionHeader 
            title="Meet Our Expert Trainers"
            subtitle="Our certified trainers are here to guide you through your fitness journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {featuredTrainers.map((trainer, index) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/trainers" className="btn-primary inline-block">
              View All Trainers
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="What Our Members Say"
            subtitle="Don't just take our word for it. Hear from our satisfied members about their fitness journey with us."
            dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-dark relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)` }}></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Fitness Journey?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join Muscle Hub today and get access to our state-of-the-art facilities, expert trainers, and a supportive community.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/subscriptions" className="btn-primary text-lg mr-4">
              View Membership Plans
            </Link>
            <Link to="/contact" className="btn-secondary text-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;