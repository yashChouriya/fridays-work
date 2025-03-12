import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: 'Alex Morgan',
      title: 'Strength & Conditioning Coach',
      bio: 'With over 10 years of experience in strength training and powerlifting, Alex specializes in helping clients build muscle and increase overall strength. NSCA Certified Strength and Conditioning Specialist.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      specialties: ['Strength Training', 'Powerlifting', 'Muscle Building', 'Sports Performance'],
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'Cardio & HIIT Specialist',
      bio: 'Sarah is passionate about high-intensity training and helping clients improve their cardiovascular health. Her energetic classes are designed to push you to your limits while having fun. ACE Certified Personal Trainer.',
      image: 'https://images.unsplash.com/photo-1609899464926-c34078d33c3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      specialties: ['HIIT', 'Cardio Kickboxing', 'Weight Loss', 'Endurance Training'],
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 3,
      name: 'Emma Wilson',
      title: 'Yoga & Flexibility Instructor',
      bio: 'Emma believes in the transformative power of yoga for both body and mind. Her classes focus on improving flexibility, balance, and mental clarity through mindful movement. Registered Yoga Teacher (RYT-500).',
      image: 'https://images.unsplash.com/photo-1615298657527-d647f0359d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      specialties: ['Vinyasa Yoga', 'Flexibility', 'Mobility', 'Mind-Body Connection'],
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 4,
      name: 'Marcus Johnson',
      title: 'Functional Fitness Coach',
      bio: 'Marcus specializes in functional fitness and movement patterns that translate to real-life activities. His training approach focuses on building a strong foundation for everyday movement. NASM Certified Personal Trainer.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e6349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      specialties: ['Functional Training', 'Athletic Performance', 'Injury Prevention', 'Corrective Exercise'],
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 5,
      name: 'Ryan Patel',
      title: 'Bodybuilding Specialist',
      bio: 'Ryan has competed in numerous bodybuilding competitions and brings his expertise to clients looking to sculpt their physique. His detailed approach to training and nutrition helps clients achieve maximum results. ISSA Certified Fitness Trainer.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      specialties: ['Bodybuilding', 'Muscle Hypertrophy', 'Contest Prep', 'Nutrition Planning'],
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 6,
      name: 'Lisa Wong',
      title: 'Cycling & Endurance Coach',
      bio: "Lisa's background as a competitive cyclist informs her approach to indoor cycling and endurance training. Her classes are challenging yet accessible to all fitness levels. Schwinn Certified Cycling Instructor.",
      image: 'https://images.unsplash.com/photo-1593476123561-9516f2097158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      specialties: ['Indoor Cycling', 'Endurance', 'Cardiovascular Fitness', 'Group Training'],
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
  ];

  return (
    <>
      <PageBanner 
        title="Our Expert Trainers" 
        subtitle="Meet our team of certified fitness professionals dedicated to helping you achieve your goals"
      />

      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Trainers" 
            title="Expert Guidance for Your Fitness Journey"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <AnimatedCard key={trainer.id} delay={index % 3}>
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="text-accent mb-4">{trainer.title}</p>
                  <p className="text-text-dark mb-4">{trainer.bio}</p>
                  
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.specialties.map((specialty, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-4 border-t border-gray-700">
                    <a 
                      href={trainer.social.instagram} 
                      className="text-text-dark hover:text-accent transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a 
                      href={trainer.social.twitter} 
                      className="text-text-dark hover:text-accent transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a 
                      href={trainer.social.linkedin} 
                      className="text-text-dark hover:text-accent transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary p-8 rounded-xl text-center"
          >
            <h2 className="heading-md mb-6">Our Trainers' Certifications</h2>
            <p className="text-text-dark mb-8 max-w-3xl mx-auto">
              All MuscleHub trainers hold nationally recognized certifications and undergo continuous education to stay at the forefront of fitness science and training methodologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-secondary px-6 py-3 rounded-lg">
                <span className="text-accent font-semibold">NSCA</span>
              </div>
              <div className="bg-secondary px-6 py-3 rounded-lg">
                <span className="text-accent font-semibold">ACE</span>
              </div>
              <div className="bg-secondary px-6 py-3 rounded-lg">
                <span className="text-accent font-semibold">NASM</span>
              </div>
              <div className="bg-secondary px-6 py-3 rounded-lg">
                <span className="text-accent font-semibold">ISSA</span>
              </div>
              <div className="bg-secondary px-6 py-3 rounded-lg">
                <span className="text-accent font-semibold">ACSM</span>
              </div>
              <div className="bg-secondary px-6 py-3 rounded-lg">
                <span className="text-accent font-semibold">RYT-500</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Trainers;