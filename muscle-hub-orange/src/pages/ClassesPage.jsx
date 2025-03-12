import { motion } from 'framer-motion';
import { useState } from 'react';

const ClassesPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredClasses = filter === 'all' 
    ? classes 
    : classes.filter(cls => cls.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-dark">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
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
              Our <span className="text-primary">Classes</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our diverse range of classes designed for all fitness levels and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Categories Section */}
      <section className="py-12 bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 rounded-full font-medium transition-all ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
            >
              All Classes
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setFilter(category.value)} 
                className={`px-6 py-3 rounded-full font-medium transition-all ${filter === category.value ? 'bg-primary text-white' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={cls.image} 
                    alt={cls.title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                    {cls.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 text-primary text-sm font-bold px-3 py-1 rounded-full">
                    {cls.level}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-sm text-primary font-semibold">{cls.category}</span>
                    <h3 className="text-xl font-bold text-secondary-dark mt-1">{cls.title}</h3>
                  </div>
                  
                  <p className="text-secondary mb-6 flex-grow">{cls.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                      <img 
                        src={cls.instructor.image} 
                        alt={cls.instructor.name} 
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium text-secondary-dark">{cls.instructor.name}</p>
                        <p className="text-xs text-secondary">{cls.instructor.title}</p>
                      </div>
                    </div>
                    
                    <button className="text-primary font-medium hover:underline">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredClasses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-secondary-dark mb-4">No classes found</h3>
              <p className="text-secondary">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Class Schedule Section */}
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
              Weekly <span className="text-primary">Schedule</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Plan your week with our comprehensive class schedule.
            </motion.p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-medium">Time</th>
                  {weekdays.map((day, index) => (
                    <th key={index} className="py-4 px-6 text-left font-medium">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {timeSlots.map((time, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-medium text-secondary-dark">{time}</td>
                    {weekdays.map((day, dayIndex) => {
                      const scheduleItem = schedule.find(item => 
                        item.day === day && item.time === time
                      );
                      
                      return (
                        <td key={dayIndex} className="py-4 px-6">
                          {scheduleItem ? (
                            <div>
                              <p className="font-medium text-secondary-dark">{scheduleItem.className}</p>
                              <p className="text-sm text-primary">{scheduleItem.instructor}</p>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Class Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-dark mb-6">Benefits of Group Fitness</h2>
              <p className="text-secondary mb-8">
                Participating in group fitness classes offers numerous advantages beyond solo workouts. Here's why our members love our classes:
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary text-2xl mr-4">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-secondary-dark mb-2">{benefit.title}</h3>
                      <p className="text-secondary">{benefit.description}</p>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Group fitness class" 
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1518310383802-640c2de311b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Yoga class" 
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Cycling class" 
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="HIIT class" 
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Experience Our Classes?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join us today and discover the perfect classes to help you achieve your fitness goals in a supportive and motivating environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
                Book a Class
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
                View Full Schedule
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Sample data for the page
const categories = [
  { label: 'Strength', value: 'strength' },
  { label: 'Cardio', value: 'cardio' },
  { label: 'Mind & Body', value: 'mind-body' },
  { label: 'Dance', value: 'dance' },
  { label: 'Specialty', value: 'specialty' }
];

const classes = [
  {
    title: 'Power Pump',
    category: 'strength',
    description: 'Build strength and tone muscles with this high-energy weightlifting class. Focuses on all major muscle groups using barbells, dumbbells, and bodyweight exercises.',
    duration: '60 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Jason Miller',
      title: 'Strength Specialist',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'HIIT Fusion',
    category: 'cardio',
    description: 'High-Intensity Interval Training that alternates between intense bursts of activity and fixed periods of less-intense activity or rest. Burns max calories in minimal time.',
    duration: '45 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Emma Rodriguez',
      title: 'HIIT Coach',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'Vinyasa Flow Yoga',
    category: 'mind-body',
    description: 'Connect breath with movement in this flowing yoga class. Build strength, increase flexibility, and find inner calm through dynamic sequences and poses.',
    duration: '75 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Sarah Johnson',
      title: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'Cycle & Burn',
    category: 'cardio',
    description: 'High-energy indoor cycling class set to motivating music. Alternates between sprints, climbs, and interval training to build endurance and strengthen legs.',
    duration: '50 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Michael Chen',
      title: 'Cycling Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'Hip Hop Groove',
    category: 'dance',
    description: 'Learn the latest dance moves and choreography in this fun, high-energy class. Great for cardio, coordination, and confidence building.',
    duration: '60 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1535055069921-99732d2bccfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Andre Jackson',
      title: 'Dance Instructor',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'Core & More',
    category: 'strength',
    description: 'Focus on strengthening abdominal and back muscles for improved posture, stability, and performance. Incorporates a variety of equipment and techniques.',
    duration: '45 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Lisa Wong',
      title: 'Core Specialist',
      image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'Pilates Reformer',
    category: 'mind-body',
    description: 'Build core strength, improve flexibility, and enhance body awareness using reformer machines. Focuses on controlled, precise movements.',
    duration: '50 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Rachel Green',
      title: 'Pilates Instructor',
      image: 'https://images.unsplash.com/photo-1587696679034-5946529e85c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'Boxing Bootcamp',
    category: 'specialty',
    description: 'Combine boxing techniques with high-intensity conditioning for a full-body workout. Improves strength, cardio endurance, and stress relief.',
    duration: '60 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1549719386-74794c70f1a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Tony Mendez',
      title: 'Boxing Coach',
      image: 'https://images.unsplash.com/photo-1563866770891-26e4b61d6bcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    title: 'Zumba',
    category: 'dance',
    description: 'Dance-fitness class incorporating Latin and international music with dance movements. Fun, effective workout that feels like a party.',
    duration: '60 min',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Maria Lopez',
      title: 'Zumba Instructor',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  },
];

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = ['6:00 AM', '8:00 AM', '9:30 AM', '12:00 PM', '5:30 PM', '7:00 PM'];

const schedule = [
  { day: 'Monday', time: '6:00 AM', className: 'Power Pump', instructor: 'Jason M.' },
  { day: 'Monday', time: '9:30 AM', className: 'Vinyasa Flow', instructor: 'Sarah J.' },
  { day: 'Monday', time: '12:00 PM', className: 'HIIT Fusion', instructor: 'Emma R.' },
  { day: 'Monday', time: '5:30 PM', className: 'Cycle & Burn', instructor: 'Michael C.' },
  { day: 'Monday', time: '7:00 PM', className: 'Hip Hop Groove', instructor: 'Andre J.' },
  
  { day: 'Tuesday', time: '6:00 AM', className: 'HIIT Fusion', instructor: 'Emma R.' },
  { day: 'Tuesday', time: '8:00 AM', className: 'Pilates Reformer', instructor: 'Rachel G.' },
  { day: 'Tuesday', time: '12:00 PM', className: 'Core & More', instructor: 'Lisa W.' },
  { day: 'Tuesday', time: '5:30 PM', className: 'Power Pump', instructor: 'Jason M.' },
  { day: 'Tuesday', time: '7:00 PM', className: 'Boxing Bootcamp', instructor: 'Tony M.' },
  
  { day: 'Wednesday', time: '6:00 AM', className: 'Cycle & Burn', instructor: 'Michael C.' },
  { day: 'Wednesday', time: '9:30 AM', className: 'Core & More', instructor: 'Lisa W.' },
  { day: 'Wednesday', time: '12:00 PM', className: 'Vinyasa Flow', instructor: 'Sarah J.' },
  { day: 'Wednesday', time: '5:30 PM', className: 'HIIT Fusion', instructor: 'Emma R.' },
  { day: 'Wednesday', time: '7:00 PM', className: 'Zumba', instructor: 'Maria L.' },
  
  { day: 'Thursday', time: '6:00 AM', className: 'Power Pump', instructor: 'Jason M.' },
  { day: 'Thursday', time: '8:00 AM', className: 'Pilates Reformer', instructor: 'Rachel G.' },
  { day: 'Thursday', time: '12:00 PM', className: 'HIIT Fusion', instructor: 'Emma R.' },
  { day: 'Thursday', time: '5:30 PM', className: 'Core & More', instructor: 'Lisa W.' },
  { day: 'Thursday', time: '7:00 PM', className: 'Hip Hop Groove', instructor: 'Andre J.' },
  
  { day: 'Friday', time: '6:00 AM', className: 'HIIT Fusion', instructor: 'Emma R.' },
  { day: 'Friday', time: '9:30 AM', className: 'Vinyasa Flow', instructor: 'Sarah J.' },
  { day: 'Friday', time: '12:00 PM', className: 'Cycle & Burn', instructor: 'Michael C.' },
  { day: 'Friday', time: '5:30 PM', className: 'Zumba', instructor: 'Maria L.' },
  { day: 'Friday', time: '7:00 PM', className: 'Boxing Bootcamp', instructor: 'Tony M.' },
  
  { day: 'Saturday', time: '8:00 AM', className: 'Power Pump', instructor: 'Jason M.' },
  { day: 'Saturday', time: '9:30 AM', className: 'HIIT Fusion', instructor: 'Emma R.' },
  { day: 'Saturday', time: '12:00 PM', className: 'Hip Hop Groove', instructor: 'Andre J.' },
  
  { day: 'Sunday', time: '8:00 AM', className: 'Cycle & Burn', instructor: 'Michael C.' },
  { day: 'Sunday', time: '9:30 AM', className: 'Vinyasa Flow', instructor: 'Sarah J.' },
  { day: 'Sunday', time: '12:00 PM', className: 'Core & More', instructor: 'Lisa W.' },
];

const benefits = [
  {
    icon: 'ud83cudf1f',
    title: 'Expert Instruction',
    description: 'Learn proper form and technique from certified instructors who provide modifications for all fitness levels.'
  },
  {
    icon: 'ud83eudd1d',
    title: 'Motivation & Accountability',
    description: 'Stay motivated with energetic instructors and fellow participants who help you push through challenges.'
  },
  {
    icon: 'ud83dudd04',
    title: 'Structured Workouts',
    description: 'Follow professionally designed programs that ensure balanced, effective exercise sessions every time.'
  },
  {
    icon: 'ud83eudd42',
    title: 'Community Connection',
    description: 'Build relationships with like-minded individuals who share your fitness interests and goals.'
  },
  {
    icon: 'ud83dudcab',
    title: 'Variety & Fun',
    description: 'Prevent workout boredom with diverse class formats, music, and training styles that keep exercise enjoyable.'
  },
];

export default ClassesPage;