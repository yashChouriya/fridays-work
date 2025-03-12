import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaFire, FaUser } from 'react-icons/fa';
import PageBanner from '../components/ui/PageBanner';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedCard from '../components/ui/AnimatedCard';

const Classes = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Classes' },
    { id: 'strength', label: 'Strength' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'flexibility', label: 'Flexibility' },
    { id: 'hiit', label: 'HIIT' },
  ];

  const classes = [
    {
      id: 1,
      title: 'Power Lifting',
      category: 'strength',
      duration: '60 min',
      intensity: 'High',
      trainer: 'Alex Morgan',
      description: 'Focus on the three main lifts: squat, bench press, and deadlift to build maximum strength.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    },
    {
      id: 2,
      title: 'Cardio Kickboxing',
      category: 'cardio',
      duration: '45 min',
      intensity: 'Medium-High',
      trainer: 'Sarah Chen',
      description: 'A high-energy workout that combines martial arts techniques with fast-paced cardio.',
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'Vinyasa Yoga',
      category: 'flexibility',
      duration: '75 min',
      intensity: 'Low-Medium',
      trainer: 'Emma Wilson',
      description: 'A flowing, dynamic yoga practice that links movement with breath to build strength and flexibility.',
      image: 'https://images.unsplash.com/photo-1599447541321-54de7d248065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: 'HIIT Circuit',
      category: 'hiit',
      duration: '30 min',
      intensity: 'Very High',
      trainer: 'Marcus Johnson',
      description: 'High-intensity interval training with quick, intense bursts of exercise followed by short recovery periods.',
      image: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      title: 'Bodybuilding',
      category: 'strength',
      duration: '60 min',
      intensity: 'Medium-High',
      trainer: 'Ryan Patel',
      description: 'Focused on hypertrophy with targeted exercises for specific muscle groups to sculpt and define.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      title: 'Cycling',
      category: 'cardio',
      duration: '45 min',
      intensity: 'Medium-High',
      trainer: 'Lisa Wong',
      description: 'Indoor cycling workout combining rhythm, visualization, and motivation for an effective cardio session.',
      image: 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 7,
      title: 'Pilates',
      category: 'flexibility',
      duration: '50 min',
      intensity: 'Low-Medium',
      trainer: 'Sophia Martinez',
      description: 'A method of exercise that improves core strength, flexibility, and overall body control and awareness.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 8,
      title: 'Tabata',
      category: 'hiit',
      duration: '25 min',
      intensity: 'Very High',
      trainer: 'James Kim',
      description: 'A high-intensity workout featuring 20 seconds of intense work followed by 10 seconds of rest, repeated 8 times.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  const filteredClasses = activeFilter === 'all' 
    ? classes 
    : classes.filter(c => c.category === activeFilter);

  return (
    <>
      <PageBanner 
        title="Our Classes" 
        subtitle="Discover a variety of fitness classes designed to help you reach your goals"
      />

      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Class Variety" 
            title="Find Your Perfect Workout"
            centered={true}
          />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${activeFilter === filter.id ? 'bg-accent text-white' : 'bg-secondary text-text-light hover:bg-secondary/70'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls, index) => (
              <AnimatedCard key={cls.id} delay={index % 3}>
                <div className="h-56 overflow-hidden">
                  <img 
                    src={cls.image} 
                    alt={cls.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{cls.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${cls.intensity.includes('High') ? 'bg-red-900/30 text-red-300' : 'bg-green-900/30 text-green-300'}`}>
                      {cls.intensity}
                    </span>
                  </div>
                  <p className="text-text-dark mb-4">{cls.description}</p>
                  
                  <div className="flex flex-wrap text-sm text-text-dark gap-4 mb-6">
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-accent" />
                      {cls.duration}
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2 text-accent" />
                      {cls.trainer}
                    </div>
                    <div className="flex items-center">
                      <FaFire className="mr-2 text-accent" />
                      {cls.category.charAt(0).toUpperCase() + cls.category.slice(1)}
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full">
                    Book Class
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Weekly Schedule" 
            title="Plan Your Week"
            centered={true}
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-x-auto">
            <table className="min-w-full bg-primary rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-accent/20 text-accent">
                  <th className="py-4 px-6 text-left">Time</th>
                  <th className="py-4 px-6 text-left">Monday</th>
                  <th className="py-4 px-6 text-left">Tuesday</th>
                  <th className="py-4 px-6 text-left">Wednesday</th>
                  <th className="py-4 px-6 text-left">Thursday</th>
                  <th className="py-4 px-6 text-left">Friday</th>
                  <th className="py-4 px-6 text-left">Saturday</th>
                  <th className="py-4 px-6 text-left">Sunday</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="py-4 px-6 font-medium">06:00 - 07:00</td>
                  <td className="py-4 px-6">HIIT Circuit</td>
                  <td className="py-4 px-6">Power Lifting</td>
                  <td className="py-4 px-6">Tabata</td>
                  <td className="py-4 px-6">Cycling</td>
                  <td className="py-4 px-6">HIIT Circuit</td>
                  <td className="py-4 px-6">-</td>
                  <td className="py-4 px-6">-</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">08:00 - 09:00</td>
                  <td className="py-4 px-6">Vinyasa Yoga</td>
                  <td className="py-4 px-6">Pilates</td>
                  <td className="py-4 px-6">Vinyasa Yoga</td>
                  <td className="py-4 px-6">Pilates</td>
                  <td className="py-4 px-6">Vinyasa Yoga</td>
                  <td className="py-4 px-6">Vinyasa Yoga</td>
                  <td className="py-4 px-6">Pilates</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">10:00 - 11:00</td>
                  <td className="py-4 px-6">Bodybuilding</td>
                  <td className="py-4 px-6">Cardio Kickboxing</td>
                  <td className="py-4 px-6">Bodybuilding</td>
                  <td className="py-4 px-6">Cardio Kickboxing</td>
                  <td className="py-4 px-6">Bodybuilding</td>
                  <td className="py-4 px-6">Cycling</td>
                  <td className="py-4 px-6">Cardio Kickboxing</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">17:00 - 18:00</td>
                  <td className="py-4 px-6">Cycling</td>
                  <td className="py-4 px-6">Tabata</td>
                  <td className="py-4 px-6">Cycling</td>
                  <td className="py-4 px-6">Tabata</td>
                  <td className="py-4 px-6">Cycling</td>
                  <td className="py-4 px-6">Power Lifting</td>
                  <td className="py-4 px-6">-</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">19:00 - 20:00</td>
                  <td className="py-4 px-6">Cardio Kickboxing</td>
                  <td className="py-4 px-6">HIIT Circuit</td>
                  <td className="py-4 px-6">Power Lifting</td>
                  <td className="py-4 px-6">HIIT Circuit</td>
                  <td className="py-4 px-6">Tabata</td>
                  <td className="py-4 px-6">-</td>
                  <td className="py-4 px-6">-</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Classes;