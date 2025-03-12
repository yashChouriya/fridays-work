import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';

// Hero background
const trainersHeroUrl = 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';

const Trainers = () => {
  // Trainers data
  const trainers = [
    {
      name: 'Emily Rodriguez',
      role: 'Yoga & Pilates Instructor',
      bio: "Emily brings over 10 years of experience as a certified yoga and Pilates instructor. With a focus on mindfulness and proper alignment, she helps clients improve flexibility, build core strength, and find inner balance.",
      experience: '10+ years',
      specialties: ['Yoga', 'Pilates', 'Meditation', 'Flexibility Training'],
      certifications: ['RYT-500', 'NASM-CPT', 'Pilates Method Alliance'],
      classes: ['Yoga Flow', 'Pilates Sculpt', 'Meditation & Mindfulness'],
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Marcus Johnson',
      role: 'Strength & HIIT Coach',
      bio: "Former collegiate athlete turned fitness coach, Marcus specializes in strength training and high-intensity programs. His energetic approach and technical expertise help clients break through plateaus and achieve new personal records.",
      experience: '8 years',
      specialties: ['Strength Training', 'HIIT', 'Sports Performance', 'Powerlifting'],
      certifications: ['NSCA-CSCS', 'ACE-CPT', 'CrossFit Level 2'],
      classes: ['HIIT & Burn', 'Power Lifting', 'Core Crusher'],
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Lisa Chen',
      role: 'Cardio & Boxing Specialist',
      bio: "With a background in competitive boxing and group fitness, Lisa brings intensity and technical precision to her classes. She's passionate about helping clients build endurance, coordination, and confidence through dynamic workouts.",
      experience: '6 years',
      specialties: ['Boxing', 'Kickboxing', 'Cycling', 'Cardio Conditioning'],
      certifications: ['ACSM-CPT', 'Spinning Certified', 'USA Boxing Coach'],
      classes: ['Cycle & Burn', 'Box Fit', 'HIIT & Burn'],
      image: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'James Wilson',
      role: 'Wellness Coach',
      bio: "James blends his knowledge of traditional fitness with holistic wellness practices. Specializing in stress reduction and mindful movement, he helps clients develop sustainable habits for long-term health and wellbeing.",
      experience: '12 years',
      specialties: ['Meditation', 'Recovery Techniques', 'Stress Management', 'Mobility Training'],
      certifications: ['NASM-CES', 'Precision Nutrition', 'Mindfulness Meditation Teacher'],
      classes: ['Meditation & Mindfulness', 'Yoga Flow', 'Core Crusher'],
      image: 'https://images.unsplash.com/photo-1618019367208-244b7070f8a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Sarah Martinez',
      role: 'Functional Training Specialist',
      bio: "Sarah focuses on helping clients move better in everyday life. Drawing on her background in physical therapy and sports performance, she designs programs that improve mobility, stability, and functional strength.",
      experience: '9 years',
      specialties: ['Functional Movement', 'Injury Prevention', 'Corrective Exercise', 'TRX'],
      certifications: ['NASM-PES', 'FMS Level 2', 'TRX Suspension Training'],
      classes: ['Functional Fitness', 'Core Crusher', 'Mobility & Recovery'],
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'David Taylor',
      role: 'Nutrition Coach & Personal Trainer',
      bio: "David combines his expertise in nutrition science and strength training to deliver comprehensive fitness solutions. He specializes in body composition transformation and performance nutrition for athletes and fitness enthusiasts.",
      experience: '7 years',
      specialties: ['Nutrition Planning', 'Weight Management', 'Strength Training', 'Body Composition'],
      certifications: ['Precision Nutrition Level 2', 'NSCA-CPT', 'ISSN Sports Nutrition'],
      classes: ['Strength Fundamentals', 'Nutrition Workshops', 'HIIT & Burn'],
      image: 'https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Michael Patel',
      role: 'Athletic Performance Coach',
      bio: "With a background in sports science and athletic training, Michael helps clients of all levels enhance their performance. His approach combines power development, agility training, and sport-specific conditioning.",
      experience: '11 years',
      specialties: ['Sports Performance', 'Speed & Agility', 'Power Development', 'Athlete Conditioning'],
      certifications: ['NSCA-CSCS', 'USA Weightlifting', 'TPI Golf Fitness'],
      classes: ['Athletic Performance', 'Power Lifting', 'Speed & Agility'],
      image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Olivia Kim',
      role: 'Barre & Dance Fitness Instructor',
      bio: "Former professional dancer turned fitness instructor, Olivia brings grace and athleticism to her classes. She blends elements of ballet, Pilates, and functional training to sculpt, tone, and strengthen the entire body.",
      experience: '5 years',
      specialties: ['Barre', 'Dance Fitness', 'Flexibility', 'Core Conditioning'],
      certifications: ['ACE Group Fitness', 'Barre Certification', 'NASM-CPT'],
      classes: ['Barre Fusion', 'Dance Cardio', 'Pilates Sculpt'],
      image: 'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center relative pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${trainersHeroUrl})`,
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
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Meet Our <span className="text-primary">Expert Trainers</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our certified fitness professionals are dedicated to helping you achieve your goals 
              through expert guidance, motivation, and personalized attention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Our Team"
            title="Certified Fitness Professionals"
            description="Get to know the experts who will guide you on your fitness journey. Our diverse team brings specialized knowledge and passion to every session."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                onClick={() => {}}
              >
                <div className="relative aspect-w-3 aspect-h-4 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="text-primary font-medium mb-3">{trainer.role}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{trainer.experience} experience</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 line-clamp-3 text-sm">{trainer.bio}</p>
                    <div className="pt-3">
                      <span className="inline-block text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                        View Profile
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainer Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Trainer Spotlight"
            title="Featured Expert"
            description="Each month, we highlight one of our exceptional trainers to help you learn more about their approach and expertise."
          />

          <div className="bg-light rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Marcus Johnson" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-20">
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 md:p-12"
              >
                <span className="inline-block text-sm font-bold tracking-wider uppercase mb-2 text-primary">
                  February Spotlight
                </span>
                <h3 className="text-3xl font-bold mb-2">Marcus Johnson</h3>
                <p className="text-primary font-medium mb-6">Strength & HIIT Coach</p>
                
                <p className="text-gray-600 mb-6">
                  "My philosophy is simple: consistency over intensity. I believe in building sustainable fitness habits that lead to long-term success. Whether you're just starting your journey or looking to reach elite performance, the principles remain the same – progressive overload, proper technique, adequate recovery, and a positive mindset."
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-sm text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Strength Training', 'HIIT', 'Sports Performance', 'Powerlifting'].map((specialty, i) => (
                        <span key={i} className="text-xs bg-gray-200 text-gray-700 rounded-full px-3 py-1">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sm text-gray-700 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['NSCA-CSCS', 'ACE-CPT', 'CrossFit Level 2'].map((cert, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sm text-gray-700 mb-2">Classes:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                      {['HIIT & Burn', 'Power Lifting', 'Core Crusher'].map((cls, i) => (
                        <li key={i}>{cls}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="btn btn-primary">
                    Book a Session
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Trainer Section */}
      <section className="section bg-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-bold tracking-wider uppercase mb-2 text-primary">
                Join Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Become a FitnessForge Trainer
              </h2>
              <p className="text-gray-300 mb-6">
                Are you a certified fitness professional passionate about helping others achieve their goals? 
                We're always looking for talented trainers to join our team. FitnessForge offers competitive 
                compensation, flexible schedules, and a supportive environment for career growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-300">Build a loyal client base with our high member retention rate</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-300">Access to state-of-the-art facilities and equipment</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-300">Ongoing professional development and certification support</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-300">Collaborative team environment with like-minded professionals</p>
                </div>
              </div>
              
              <button className="btn btn-primary">
                Apply Now
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1648888939749-86a4ea411924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
                alt="Trainer with client" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-5 -left-5 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Expert Trainers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Credentials"
            title="Certified Excellence"
            description="Our trainers hold certifications from the industry's most respected organizations, ensuring you receive expert guidance based on the latest research and best practices."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                name: 'NASM',
                logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'ACE',
                logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'NSCA',
                logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'ACSM',
                logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Yoga Alliance',
                logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Precision Nutrition',
                logo: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md"
              >
                <div className="h-12 flex items-center justify-center mb-3">
                  <div className="text-lg font-bold text-center">{cert.name}</div>
                </div>
                <p className="text-xs text-center text-gray-500">Certified Trainers</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </PageTransition>
  );
};

export default Trainers;