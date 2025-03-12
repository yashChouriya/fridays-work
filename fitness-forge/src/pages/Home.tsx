import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';

// Hero section background image
const heroBgUrl = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';

// Service images
const personalTrainingUrl = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80';
const groupClassesUrl = 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80';
const nutritionUrl = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80';
const wellnessUrl = 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80';

// Testimonial images
const testimonial1 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
const testimonial2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
const testimonial3 = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';

const Home = () => {
  // Services data
  const services = [
    {
      title: 'Personal Training',
      description: 'One-on-one sessions with expert trainers tailored to your specific fitness goals.',
      image: personalTrainingUrl,
      link: '/classes',
    },
    {
      title: 'Group Classes',
      description: 'High-energy group workouts led by certified instructors in a motivating environment.',
      image: groupClassesUrl,
      link: '/classes',
    },
    {
      title: 'Nutrition Planning',
      description: 'Custom nutrition plans designed to complement your fitness regimen and maximize results.',
      image: nutritionUrl,
      link: '/about',
    },
    {
      title: 'Wellness Services',
      description: 'Comprehensive wellness offerings including recovery, massage, and stress management.',
      image: wellnessUrl,
      link: '/about',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Member since 2021',
      image: testimonial1,
      quote: "FitnessForge completely transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive, and the facilities are top-notch. I've achieved results I never thought possible!",
    },
    {
      name: 'Michael Chen',
      role: 'Member since 2020',
      image: testimonial2,
      quote: 'As someone who was intimidated by gyms, FitnessForge provided the perfect welcoming environment to start my fitness journey. The community here is so supportive, and I look forward to every workout.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Member since 2022',
      image: testimonial3,
      quote: "The variety of classes and programs keeps me engaged and excited to workout. The trainers constantly challenge me while ensuring proper form. Best fitness decision I've ever made!",
    },
  ];

  // Stats data
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Expert Trainers' },
    { value: '1000+', label: 'Happy Members' },
    { value: '100+', label: 'Weekly Classes' },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroBgUrl})`,
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
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              FORGE YOUR <span className="text-primary">STRONGEST</span> SELF
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium fitness experience with state-of-the-art equipment, expert trainers, and a supportive community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/subscriptions" className="btn btn-primary">
                Start Your Journey
              </Link>
              <Link to="/about" className="btn border-2 border-white text-white hover:bg-white hover:text-dark">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Fitness Solutions"
            description="We offer a wide range of services designed to help you achieve your fitness goals, whatever they may be."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link} className="text-primary font-bold inline-flex items-center hover:underline">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-bold tracking-wider uppercase mb-2 text-primary">
                About FitnessForge
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                More Than Just a Gym, We're a Community
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, FitnessForge has grown from a small local gym to a premier fitness destination. 
                Our philosophy centers on providing a holistic approach to fitness and wellness, combining cutting-edge 
                equipment, expert instruction, and a supportive community environment.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that fitness is for everyone, regardless of age, experience, or ability. Our diverse 
                offerings ensure that each member finds their path to better health and wellness.
              </p>
              <Link to="/about" className="btn btn-primary">
                Discover Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="FitnessForge Gym Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">13</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-dark text-white">
        <div className="container">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Members Say"
            description="Don't just take our word for it. Hear from the people who have experienced the FitnessForge difference."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Our Classes"
            title="Find the Perfect Workout"
            description="Whether you're looking for high-intensity training, strength building, or mind-body connection, we have classes for every fitness goal."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HIIT",
                description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
                image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                duration: "45 min"
              },
              {
                title: "Strength & Conditioning",
                description: "Build muscle, increase strength, and improve overall fitness with focused resistance training.",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                duration: "60 min"
              },
              {
                title: "Yoga Flow",
                description: "Connect mind and body through dynamic poses that improve flexibility, balance, and mental clarity.",
                image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                duration: "75 min"
              },
            ].map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80">
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{classItem.title}</h3>
                    <span className="text-sm font-medium text-primary bg-white/90 px-2 py-1 rounded">
                      {classItem.duration}
                    </span>
                  </div>
                  <p className="text-gray-200 mb-4">{classItem.description}</p>
                  <Link to="/classes" className="text-primary font-medium inline-flex items-center group-hover:underline">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/classes" className="btn btn-primary">
              View All Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </PageTransition>
  );
};

export default Home;