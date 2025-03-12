import { motion } from 'framer-motion';
import { useState } from 'react';

const TrainersPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredTrainers = filter === 'all' 
    ? trainers 
    : trainers.filter(trainer => trainer.specialty === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-dark">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
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
              Meet Our <span className="text-primary">Trainers</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our team of certified fitness professionals is dedicated to helping you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialty Filter */}
      <section className="py-12 bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 rounded-full font-medium transition-all ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
            >
              All Trainers
            </button>
            {specialties.map((specialty, index) => (
              <button 
                key={index}
                onClick={() => setFilter(specialty.value)} 
                className={`px-6 py-3 rounded-full font-medium transition-all ${filter === specialty.value ? 'bg-primary text-white' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
              >
                {specialty.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full group"
              >
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-4 mb-4">
                      {trainer.social.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary transition-all"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                    <p className="text-white/90">{trainer.shortBio}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-primary font-semibold block mb-1">{trainer.specialty}</span>
                  <h3 className="text-xl font-bold text-secondary-dark mb-2">{trainer.name}</h3>
                  <p className="text-secondary mb-4">{trainer.title}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-secondary-dark text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-primary font-medium hover:underline">
                    Book a Session
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredTrainers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-secondary-dark mb-4">No trainers found</h3>
              <p className="text-secondary">Try selecting a different specialty.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trainer Certification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-dark mb-6">Expert Certifications & Training</h2>
              <p className="text-secondary mb-8">
                All our trainers are highly qualified professionals with industry-recognized certifications and extensive experience. When you work with a MuscleHub trainer, you're getting guidance from the best in the field.
              </p>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary text-2xl mr-4">{cert.icon}</div>
                    <div>
                      <h3 className="font-bold text-secondary-dark mb-2">{cert.name}</h3>
                      <p className="text-secondary">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-5 -right-5 w-72 h-72 bg-primary/20 rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Trainer certification" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
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
              Personal Training <span className="text-primary">Programs</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Our trainers offer a variety of specialized programs tailored to your specific goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md h-full"
              >
                <div className="text-primary text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-secondary-dark mb-3">{program.title}</h3>
                <p className="text-secondary mb-6">{program.description}</p>
                <div className="mt-auto">
                  <button className="text-primary font-medium hover:underline">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Success <span className="text-primary">Stories</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Hear what our clients have to say about working with our trainers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm h-full"
              >
                <div className="text-4xl text-primary mb-4">u275d</div>
                <p className="text-white/90 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-white/70">
                      Trained with <span className="text-primary">{testimonial.trainer}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Work with Our Expert Trainers?</h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step toward achieving your fitness goals with personalized guidance from our professional trainers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
                Book a Session
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
                Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for the page
const specialties = [
  { label: 'Strength & Conditioning', value: 'strength' },
  { label: 'Weight Loss', value: 'weight-loss' },
  { label: 'Yoga & Wellness', value: 'yoga' },
  { label: 'Nutrition', value: 'nutrition' },
  { label: 'Sports Performance', value: 'sports' }
];

const trainers = [
  {
    name: 'Alex Johnson',
    title: 'Head Strength Coach',
    specialty: 'strength',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Former professional athlete with 10+ years of coaching experience, specializing in strength development and athletic performance.',
    expertise: ['Strength Training', 'Olympic Lifting', 'Sports Conditioning', 'Injury Prevention'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Sarah Martinez',
    title: 'Weight Loss Specialist',
    specialty: 'weight-loss',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Certified personal trainer with a passion for helping clients transform their bodies and achieve sustainable weight loss results.',
    expertise: ['Weight Management', 'HIIT Training', 'Metabolic Conditioning', 'Nutrition Planning'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Michael Wong',
    title: 'Yoga & Mindfulness Instructor',
    specialty: 'yoga',
    image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: '500-hour certified yoga instructor with expertise in multiple yoga disciplines and mindfulness practices focused on overall wellbeing.',
    expertise: ['Vinyasa Flow', 'Meditation', 'Breathwork', 'Mobility Training', 'Stress Reduction'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Emily Chen',
    title: 'Nutrition Coach',
    specialty: 'nutrition',
    image: 'https://images.unsplash.com/photo-1534695215921-9f24f58425f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Registered dietitian with a background in sports nutrition, helping clients optimize their diet to support fitness goals and overall health.',
    expertise: ['Meal Planning', 'Nutritional Analysis', 'Metabolism Optimization', 'Supplement Guidance'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'David Miller',
    title: 'Sports Performance Specialist',
    specialty: 'sports',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'CSCS-certified coach who works with athletes at all levels to enhance sport-specific skills, speed, agility, and competitive performance.',
    expertise: ['Speed & Agility', 'Power Development', 'Sport-Specific Training', 'Athletic Assessment'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Jessica Thompson',
    title: 'Functional Training Specialist',
    specialty: 'strength',
    image: 'https://images.unsplash.com/photo-1609899438244-a728e05bb6a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Movement specialist focusing on functional training to improve everyday performance, posture, and prevent injuries through targeted exercises.',
    expertise: ['Functional Movement', 'Core Stability', 'Corrective Exercise', 'Mobility Work'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Carlos Rodriguez',
    title: 'Cardio Conditioning Expert',
    specialty: 'weight-loss',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Specializes in high-energy cardio workouts and metabolic training protocols designed to maximize fat loss and cardiovascular health.',
    expertise: ['Cardio Programming', 'Interval Training', 'Fat Loss Strategies', 'Group Fitness'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Emma Wilson',
    title: 'Pre/Post-Natal Fitness Specialist',
    specialty: 'yoga',
    image: 'https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Certified in pre and post-natal fitness, helping women stay active and healthy during and after pregnancy with safe, effective exercise programs.',
    expertise: ['Pre-Natal Fitness', 'Post-Natal Recovery', 'Pelvic Floor Strength', 'Gentle Yoga'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
  {
    name: 'Robert Kim',
    title: 'Sports Nutritionist',
    specialty: 'nutrition',
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Combines nutrition science with practical implementation strategies to optimize athletic performance, recovery, and body composition.',
    expertise: ['Performance Nutrition', 'Hydration Strategies', 'Competition Prep', 'Recovery Protocols'],
    social: [
      { icon: 'ud83dudc64', url: '#' },
      { icon: 'ud83dudcf1', url: '#' },
      { icon: 'ud83dudce7', url: '#' },
    ]
  },
];

const certifications = [
  {
    icon: 'ud83cudfaf',
    name: 'NASM Certified Personal Trainer (CPT)',
    description: 'National Academy of Sports Medicine certification - the industry gold standard for personal trainers.'
  },
  {
    icon: 'ud83cudf96',
    name: 'Certified Strength and Conditioning Specialist (CSCS)',
    description: 'National Strength and Conditioning Association certification for designing and implementing safe, effective strength programs.'
  },
  {
    icon: 'ud83cudf36',
    name: 'Registered Dietitian Nutritionist (RDN)',
    description: 'Credential recognizing nutrition professionals who have completed accredited education and passed national examination.'
  },
  {
    icon: 'ud83euddcd',
    name: 'Yoga Alliance Certification (RYT-200/500)',
    description: 'Yoga instructor credentials requiring 200 or 500 hours of training in techniques, teaching methodology, anatomy, and philosophy.'
  },
  {
    icon: 'ud83cudfc3',
    name: 'ACSM Exercise Physiologist (EP-C)',
    description: 'American College of Sports Medicine certification focusing on clinical exercise testing and prescription.'
  },
];

const programs = [
  {
    icon: 'ud83dudd25',
    title: 'Weight Loss Transformation',
    description: 'Comprehensive program combining progressive resistance training, cardio, and nutrition guidance for maximum fat loss while preserving lean muscle.'
  },
  {
    icon: 'ud83dudcaa',
    title: 'Strength Development',
    description: 'Focused on building maximum strength and power through proven periodization techniques and compound lifting progressions.'
  },
  {
    icon: 'ud83cudf96',
    title: 'Athletic Performance',
    description: 'Sport-specific training designed to enhance speed, agility, power, and conditioning for competitive athletes across all sports.'
  },
  {
    icon: 'ud83euddcd',
    title: 'Mind-Body Wellness',
    description: 'Holistic approach integrating yoga, meditation, mobility work, and stress management techniques for overall wellbeing.'
  },
  {
    icon: 'ud83cudf3d',
    title: 'Nutrition Coaching',
    description: 'Personalized nutrition plans with ongoing support to optimize body composition, energy levels, and overall health.'
  },
  {
    icon: 'ud83cudfb5',
    title: 'Lifestyle Transformation',
    description: 'All-encompassing program addressing exercise, nutrition, sleep, stress management, and behavioral change for sustainable results.'
  },
];

const testimonials = [
  {
    quote: "Working with Alex completely transformed my approach to strength training. I've gained 15 pounds of muscle and increased all my lifts by at least 30% in just 6 months.",
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    trainer: "Alex Johnson"
  },
  {
    quote: "Sarah helped me lose 45 pounds and keep it off for good. Her approach to sustainable weight loss and lifestyle change was exactly what I needed after years of yo-yo dieting.",
    name: "Lisa Martinez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    trainer: "Sarah Martinez"
  },
  {
    quote: "Michael's yoga instruction has not only improved my flexibility but has completely changed how I handle stress. My chronic back pain is gone and I sleep better than I have in years.",
    name: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    trainer: "Michael Wong"
  },
];

export default TrainersPage;