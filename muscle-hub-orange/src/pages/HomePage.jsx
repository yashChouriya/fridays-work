import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-secondary-dark to-secondary">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6">
              Transform Your Body <span className="text-primary">Transform Your Life</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              At MuscleHub, we provide the perfect environment, expert guidance, and supportive community to help you achieve your fitness goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/subscriptions" className="btn-primary">
                Join Now
              </Link>
              <Link to="/classes" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-white hover:text-secondary-dark">
                Explore Classes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold text-secondary-dark mb-4"
            >
              Why Choose <span className="text-primary">MuscleHub</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              We offer more than just a place to work out. We provide a complete fitness experience designed to help you achieve your goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-primary text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary-dark mb-3">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="section-padding bg-secondary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold mb-4"
            >
              Our Popular <span className="text-primary">Classes</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              From high-intensity workouts to mindful movement, we offer a wide variety of classes to suit every fitness level and goal.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularClasses.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg group h-80"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${cls.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{cls.title}</h3>
                  <p className="text-white/80 mb-4">{cls.description}</p>
                  <Link to="/classes" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/classes" className="btn-primary inline-block">
              Explore All Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold text-secondary-dark mb-4"
            >
              Success <span className="text-primary">Stories</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Don't just take our word for it. Hear what our members have to say about their MuscleHub experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md relative"
              >
                <div className="text-4xl text-primary mb-4">❝</div>
                <p className="text-secondary mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-secondary-dark">{testimonial.name}</h4>
                    <p className="text-sm text-secondary">{testimonial.title}</p>
                  </div>
                </div>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl mb-8">Join MuscleHub today and take the first step towards a healthier, stronger you. Our team is ready to support you every step of the way.</p>
            <Link to="/subscriptions" className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary-light hover:text-white transition-all inline-block">
              Become a Member Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for the page
const features = [
  {
    icon: '🏋️',
    title: 'State-of-the-Art Equipment',
    description: 'Access to the latest fitness technology and premium equipment to maximize your workout efficiency.'
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Personal Trainers',
    description: 'Our certified trainers create customized workout plans tailored to your specific fitness goals.'
  },
  {
    icon: '🧘',
    title: 'Diverse Class Selection',
    description: 'From high-intensity training to yoga, we offer a wide variety of classes for all fitness levels.'
  },
  {
    icon: '🥤',
    title: 'Nutrition Guidance',
    description: 'Complement your fitness routine with personalized nutrition advice from our expert dietitians.'
  },
  {
    icon: '👥',
    title: 'Supportive Community',
    description: 'Join a motivating community of like-minded individuals committed to health and fitness.'
  },
  {
    icon: '🚿',
    title: 'Premium Facilities',
    description: 'Enjoy our luxury amenities including sauna, steam room, and spotless locker rooms.'
  },
];

const popularClasses = [
  {
    title: 'High-Intensity Interval Training',
    description: 'Maximize calorie burn and boost metabolism with our energetic HIIT classes.',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
  },
  {
    title: 'Power Yoga',
    description: 'Build strength and flexibility through dynamic flowing sequences and poses.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
  },
  {
    title: 'Strength & Conditioning',
    description: 'Develop functional strength and endurance through targeted resistance exercises.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
  },
];

const testimonials = [
  {
    quote: "Joining MuscleHub was the best decision I've made for my health. The trainers are knowledgeable and motivating, and the community is so supportive. I've lost 30 pounds and gained confidence!",
    name: "Sarah Johnson",
    title: "Member for 1 year",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a busy professional, I needed a gym that could accommodate my schedule. MuscleHub's 24/7 access and variety of class times have made it easy to stay consistent with my workouts.",
    name: "Michael Chen",
    title: "Member for 2 years",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The personal training at MuscleHub has transformed my approach to fitness. My trainer developed a program specifically for my goals, and I've seen incredible progress in both strength and endurance.",
    name: "Emily Rodriguez",
    title: "Member for 8 months",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
];

export default HomePage;