import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaHeartbeat, FaRegLightbulb } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Values data
  const values = [
    {
      icon: <FaDumbbell className="text-4xl text-primary mb-4" />,
      title: 'Excellence',
      description: 'We are committed to providing top-quality facilities, programs, and instruction to help our members achieve optimal results.',
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: 'Community',
      description: 'We foster a supportive, inclusive environment where everyone feels welcome and motivated to pursue their fitness goals.',
    },
    {
      icon: <FaHeartbeat className="text-4xl text-primary mb-4" />,
      title: 'Health',
      description: 'We promote overall well-being through balanced fitness programs that address physical, mental, and nutritional health.',
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-primary mb-4" />,
      title: 'Innovation',
      description: 'We continuously seek out and implement the latest evidence-based fitness approaches and technologies.',
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: '2010',
      title: 'Founding of Muscle Hub',
      description: 'Muscle Hub was founded with a vision to create a premium fitness experience that was accessible to everyone.',
    },
    {
      year: '2013',
      title: 'Expansion of Facilities',
      description: 'Due to growing membership, we expanded our facilities to include specialized training areas and a nutrition center.',
    },
    {
      year: '2015',
      title: 'Launch of Signature Programs',
      description: 'We introduced our signature training programs designed by our expert trainers to deliver maximum results.',
    },
    {
      year: '2018',
      title: 'Community Outreach Initiative',
      description: 'Began our community wellness program, providing fitness education and resources to local schools and organizations.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched our online platform offering virtual classes and personalized digital coaching to members worldwide.',
    },
    {
      year: '2023',
      title: 'Sustainable Fitness Focus',
      description: 'Implemented eco-friendly practices and facilities while introducing sustainable fitness approaches for long-term health.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="About Muscle Hub"
        subtitle="Our mission is to empower individuals to transform their lives through fitness, community, and education."
        image="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      />
      
      {/* Our Story Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader 
                title="Our Story"
                subtitle="From humble beginnings to becoming a premier fitness destination."
                centered={false}
                dark={true}
              />
              
              <p className="text-gray-600 mb-6">
                Muscle Hub was founded in 2010 by a group of fitness enthusiasts who saw a need for a gym that offered more than just equipment—a place that provided education, community, and results-driven programs.
              </p>
              <p className="text-gray-600 mb-6">
                Starting with a small location and a handful of dedicated members, we've grown into a comprehensive fitness center serving thousands of members with state-of-the-art facilities and expert guidance.
              </p>
              <p className="text-gray-600">
                Throughout our growth, we've maintained our commitment to personalized attention and creating a supportive community. We believe fitness is for everyone, and our diverse membership reflects this inclusive philosophy.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Trainer with client" 
                className="rounded-lg shadow-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Group fitness class" 
                className="rounded-lg shadow-lg h-full object-cover mt-6"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Yoga class" 
                className="rounded-lg shadow-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Gym equipment" 
                className="rounded-lg shadow-lg h-full object-cover mt-6"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-dark text-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Mission & Vision"
            subtitle="Guiding principles that shape everything we do at Muscle Hub."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                To empower individuals to transform their lives through fitness, community, and education. We provide the tools, knowledge, and support needed for each person to reach their unique health and fitness goals.
              </p>
              <p className="text-gray-300">
                We are committed to making fitness accessible, enjoyable, and sustainable for people of all ages, abilities, and backgrounds. Through our comprehensive approach, we help members build not just stronger bodies, but healthier, more fulfilled lives.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary bg-opacity-50 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-300 mb-4">
                To be the leading fitness community that inspires and enables millions of people to live healthier, happier lives. We envision a world where fitness is integrated naturally into everyone's lifestyle.
              </p>
              <p className="text-gray-300">
                We aim to continuously innovate in the fitness industry, setting new standards for quality, personalization, and results. Through our growing network of facilities and digital platforms, we seek to expand our positive impact globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Our Core Values"
            subtitle="The principles that guide our approach to fitness and community."
            dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {value.icon}
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <SectionHeader 
            title="Our Journey"
            subtitle="Key milestones in the evolution of Muscle Hub."
          />
          
          <div className="mt-12 relative">
            {/* Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                className={`mb-12 md:mb-0 relative md:w-1/2 ${index % 2 === 0 ? 'md:left-0 md:pr-12' : 'md:left-1/2 md:pl-12'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="hidden md:block absolute right-0 md:right-auto md:left-full md:translate-x-[-50%] top-5 w-4 h-4 rounded-full bg-primary"></div>
                
                {/* Content */}
                <div className={`bg-secondary bg-opacity-50 p-6 rounded-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="text-primary font-bold text-xl">{item.year}</span>
                  <h3 className="text-white text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Our Facilities"
            subtitle="State-of-the-art equipment and spaces designed for optimal fitness experiences."
            dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Strength Training Area" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Strength Training Area</h3>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Cardio Zone" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Cardio Zone</h3>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Group Fitness Studios" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Group Fitness Studios</h3>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="Personal Training Area" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Personal Training Area</h3>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Recovery Zone" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Recovery Zone</h3>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                alt="Nutrition Bar" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark bg-opacity-50 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Nutrition Bar</h3>
              </div>
            </motion.div>
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
            Become Part of Our Community
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join Muscle Hub today and experience the difference a supportive fitness community can make in your journey.
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

export default About;