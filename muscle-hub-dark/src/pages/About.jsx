import { motion } from 'framer-motion';
import { FaCheckCircle, FaTrophy, FaHeartbeat, FaUsers } from 'react-icons/fa';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

const About = () => {
  const stats = [
    { icon: <FaUsers />, count: '5000+', label: 'Members' },
    { icon: <FaTrophy />, count: '15+', label: 'Awards' },
    { icon: <FaHeartbeat />, count: '50+', label: 'Classes Weekly' },
    { icon: <FaCheckCircle />, count: '10+', label: 'Years Experience' },
  ];

  return (
    <>
      <PageBanner 
        title="About MuscleHub" 
        subtitle="Learn about our mission, values, and the team behind MuscleHub Gym"
      />

      {/* Our Story */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionTitle 
                subtitle="Our Story" 
                title="Building a Community of Strength"
              />
              <p className="text-text-dark mb-6">
                Founded in 2013, MuscleHub began with a simple vision: to create a fitness community where people of all ages and fitness levels could achieve their health and wellness goals in a supportive, motivating environment.
              </p>
              <p className="text-text-dark mb-6">
                Our founders, both passionate fitness enthusiasts with decades of experience in the industry, noticed a gap in the market for a gym that truly prioritized member experience and results over profits. They set out to build a facility that combined state-of-the-art equipment with expert guidance and a welcoming atmosphere.
              </p>
              <p className="text-text-dark">
                Today, MuscleHub has grown into a thriving fitness community with multiple locations, but our core values remain the same. We're committed to providing exceptional fitness experiences, fostering a supportive community, and helping our members transform their lives through health and wellness.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="MuscleHub Gym" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-lg z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Values" 
            title="What We Stand For"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-text-dark">
                  We are committed to excellence in everything we do, from our facilities and equipment to our customer service and training programs. We continuously strive to raise the bar and exceed expectations.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={1}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-text-dark">
                  We believe in the power of community to inspire, motivate, and support. We foster an inclusive environment where members feel connected, respected, and empowered to achieve their fitness goals together.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={2}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-text-dark">
                  We embrace innovation in fitness technology, training methodologies, and facility design. We continuously evolve to offer our members the most effective and engaging fitness experience possible.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={3}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-text-dark">
                  We operate with honesty, transparency, and ethical standards in all our business practices. We provide accurate information, fair pricing, and genuine care for our members' well-being.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={4}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-bold">05</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p className="text-text-dark">
                  We value education and believe in empowering our members with knowledge about fitness, nutrition, and wellness. We provide resources and expertise to help members make informed decisions about their health.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={5}>
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl font-bold">06</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Accessibility</h3>
                <p className="text-text-dark">
                  We strive to make fitness accessible to people of all ages, abilities, and fitness levels. We design our programs and facilities to be inclusive and adaptable to diverse needs and goals.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-accent text-3xl mb-2">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                <p className="text-text-dark">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;