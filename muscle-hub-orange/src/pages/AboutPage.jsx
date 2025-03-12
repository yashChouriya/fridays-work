import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-dark">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6">
              About <span className="text-primary">MuscleHub</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              More than just a gym, we're a community dedicated to helping you become the best version of yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-dark mb-6">Our Story</h2>
              <p className="text-secondary mb-6">
                Founded in 2010, MuscleHub began with a simple mission: to create a fitness environment where everyone feels welcome, motivated, and empowered to achieve their personal health goals.
              </p>
              <p className="text-secondary mb-6">
                What started as a small studio with a handful of dedicated members has grown into a premier fitness destination with state-of-the-art facilities and a thriving community of fitness enthusiasts.
              </p>
              <p className="text-secondary">
                Despite our growth, we've stayed true to our core values of inclusivity, personalization, and excellence in everything we do. At MuscleHub, every member is valued, supported, and inspired to push their limits and discover their potential.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-5 -left-5 w-72 h-72 bg-primary/20 rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="MuscleHub gym interior" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold text-secondary-dark mb-4"
            >
              Our Mission & Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Everything we do at MuscleHub is guided by these core principles that define who we are.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary hover:shadow-lg transition-all"
              >
                <div className="text-primary text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-secondary-dark mb-3">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold text-secondary-dark mb-4"
            >
              Leadership Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Meet the dedicated professionals who lead MuscleHub and drive our mission forward.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center group relative overflow-hidden"
              >
                <div className="relative mb-6 overflow-hidden rounded-full mx-auto w-48 h-48">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary-dark mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-secondary text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-heading font-bold mb-4"
            >
              Our <span className="text-primary">Achievements</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              We take pride in our accomplishments and the difference we've made in our members' lives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-primary mb-2">{achievement.number}</div>
                <p className="text-xl text-white">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-dark mb-6">Ready to Experience MuscleHub?</h2>
            <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
              Join our community today and discover how we can help you achieve your fitness goals in an environment that's supportive, motivating, and fun.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/subscriptions" className="btn-primary">
                Join Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for the page
const values = [
  {
    icon: 'ud83cudf1f',
    title: 'Excellence',
    description: 'We strive for excellence in all aspects of our business, from our facilities and equipment to our programs and customer service.'
  },
  {
    icon: 'ud83eudd1d',
    title: 'Inclusivity',
    description: 'We welcome people of all fitness levels, backgrounds, and goals, creating a supportive environment where everyone belongs.'
  },
  {
    icon: 'ud83dudca1',
    title: 'Innovation',
    description: 'We continuously seek new and better ways to enhance the fitness experience and help our members achieve their goals.'
  },
  {
    icon: 'ud83dudc8e',
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical standards in all our interactions with members, staff, and the community.'
  },
  {
    icon: 'ud83cudf31',
    title: 'Empowerment',
    description: 'We believe in empowering our members with the knowledge, tools, and support they need to take control of their health and wellness.'
  },
  {
    icon: 'ud83eudd42',
    title: 'Community',
    description: 'We foster a sense of belonging and camaraderie, where members motivate each other and celebrate successes together.'
  },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Former professional athlete with a passion for helping others achieve their fitness goals. Founded MuscleHub with a vision of creating an inclusive fitness community.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Samantha Lee',
    role: 'Fitness Director',
    bio: 'Certified strength and conditioning specialist with over 10 years of experience in program development and team leadership.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Operations',
    bio: 'Business management expert who ensures MuscleHub runs smoothly, from facility maintenance to member services and staff coordination.',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Olivia Chen',
    role: 'Nutrition Director',
    bio: 'Registered dietitian specializing in sports nutrition who helps members optimize their diet to complement their fitness routines.',
    image: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
];

const achievements = [
  {
    number: '10+',
    label: 'Years of Excellence'
  },
  {
    number: '5,000+',
    label: 'Happy Members'
  },
  {
    number: '50+',
    label: 'Expert Trainers'
  },
  {
    number: '100+',
    label: 'Weekly Classes'
  },
];

export default AboutPage;