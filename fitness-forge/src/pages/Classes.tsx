import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';
import CallToAction from '../components/CallToAction';

// Interface for class schedule data
interface ClassInfo {
  name: string;
  category: string;
}

interface ScheduleClasses {
  monday: ClassInfo | null;
  tuesday: ClassInfo | null;
  wednesday: ClassInfo | null;
  thursday: ClassInfo | null;
  friday: ClassInfo | null;
  saturday: ClassInfo | null;
  sunday: ClassInfo | null;
}

interface ScheduleRow {
  time: string;
  classes: ScheduleClasses;
}

// Hero background
const classesHeroUrl = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';

const Classes = () => {
  // Filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Class categories
  const categories = [
    { id: 'all', name: 'All Classes' },
    { id: 'strength', name: 'Strength' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'flexibility', name: 'Flexibility' },
    { id: 'wellness', name: 'Wellness' },
  ];

  // Class data
  const classData = [
    {
      title: 'HIIT & Burn',
      description: 'High-intensity interval training to maximize calorie burn and boost metabolism.',
      image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '45 min',
      level: 'Intermediate',
      categories: ['cardio', 'strength'],
      schedule: [
        'Monday - 6:00 AM, 5:30 PM',
        'Wednesday - 6:00 AM, 5:30 PM',
        'Friday - 6:00 AM, 5:30 PM',
      ],
    },
    {
      title: 'Power Lifting',
      description: 'Build strength and power with focused heavy lifting and proper form techniques.',
      image: 'https://images.unsplash.com/photo-1534368786749-b63e05c90863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '60 min',
      level: 'Advanced',
      categories: ['strength'],
      schedule: [
        'Tuesday - 7:00 AM, the 6:00 PM',
        'Thursday - 7:00 AM, 6:00 PM',
        'Saturday - 9:00 AM',
      ],
    },
    {
      title: 'Yoga Flow',
      description: 'Connect mind and body through dynamic poses that improve flexibility, balance, and mental clarity.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '75 min',
      level: 'All Levels',
      categories: ['flexibility', 'wellness'],
      schedule: [
        'Monday - 9:00 AM, 7:00 PM',
        'Wednesday - 9:00 AM, 7:00 PM',
        'Friday - 9:00 AM, 7:00 PM',
        'Sunday - 10:00 AM',
      ],
    },
    {
      title: 'Cycle & Burn',
      description: 'High-energy indoor cycling with intervals and resistance training for a full-body workout.',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '50 min',
      level: 'All Levels',
      categories: ['cardio'],
      schedule: [
        'Tuesday - 6:00 AM, 5:30 PM',
        'Thursday - 6:00 AM, 5:30 PM',
        'Saturday - 8:00 AM, 11:00 AM',
      ],
    },
    {
      title: 'Core Crusher',
      description: 'Targeted core conditioning to build abdominal strength, improve posture, and prevent back pain.',
      image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '30 min',
      level: 'All Levels',
      categories: ['strength'],
      schedule: [
        'Monday - 12:00 PM',
        'Wednesday - 12:00 PM',
        'Friday - 12:00 PM',
      ],
    },
    {
      title: 'Pilates Sculpt',
      description: 'Strengthen your core, improve posture, and enhance body awareness through controlled movements.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '60 min',
      level: 'All Levels',
      categories: ['flexibility', 'strength'],
      schedule: [
        'Tuesday - 9:00 AM, 7:00 PM',
        'Thursday - 9:00 AM, 7:00 PM',
        'Saturday - 10:00 AM',
      ],
    },
    {
      title: 'Box Fit',
      description: 'High-energy boxing workout combining cardio, strength, and coordination for a full-body challenge.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '60 min',
      level: 'Intermediate',
      categories: ['cardio', 'strength'],
      schedule: [
        'Monday - 6:00 PM',
        'Wednesday - 6:00 PM',
        'Friday - 6:00 PM',
      ],
    },
    {
      title: 'Meditation & Mindfulness',
      description: 'Cultivate mental clarity, reduce stress, and enhance emotional wellbeing through guided meditation.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '45 min',
      level: 'All Levels',
      categories: ['wellness'],
      schedule: [
        'Tuesday - 12:00 PM',
        'Thursday - 12:00 PM',
        'Sunday - 9:00 AM',
      ],
    },
  ];

  // Filter classes based on the active filter
  const filteredClasses = activeFilter === 'all' 
    ? classData 
    : classData.filter(item => item.categories.includes(activeFilter));

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center relative pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${classesHeroUrl})`,
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
              Our <span className="text-primary">Classes</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Diverse workout options designed for all fitness levels. 
              From high-intensity training to mind-body practices, find the perfect class to meet your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            subtitle="Class Offerings"
            title="Find Your Perfect Workout"
            description="Browse our diverse range of classes designed to help you achieve your fitness goals, whatever they may be."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === category.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-md">
                    {classItem.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{classItem.title}</h3>
                    <span className="text-sm font-medium px-2 py-1 bg-light text-primary rounded">
                      {classItem.level}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{classItem.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-sm text-gray-700 mb-2">Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classItem.categories.map((cat, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-1 capitalize">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sm text-gray-700 mb-2">Schedule:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {classItem.schedule.map((time, i) => (
                        <li key={i}>{time}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full mt-6 btn btn-primary">
                    Book Class
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeader
            subtitle="Weekly Schedule"
            title="Plan Your Workouts"
            description="View our full weekly class schedule to plan your fitness routine."
          />

          <div className="bg-light p-6 rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="py-3 px-4 text-left">Time</th>
                  <th className="py-3 px-4 text-left">Monday</th>
                  <th className="py-3 px-4 text-left">Tuesday</th>
                  <th className="py-3 px-4 text-left">Wednesday</th>
                  <th className="py-3 px-4 text-left">Thursday</th>
                  <th className="py-3 px-4 text-left">Friday</th>
                  <th className="py-3 px-4 text-left">Saturday</th>
                  <th className="py-3 px-4 text-left">Sunday</th>
                </tr>
              </thead>
              <tbody>
                {([
                  // Schedule data with proper typing
                  {
                    time: '6:00 AM',
                    classes: {
                      monday: { name: 'HIIT & Burn', category: 'cardio' },
                      tuesday: { name: 'Cycle & Burn', category: 'cardio' },
                      wednesday: { name: 'HIIT & Burn', category: 'cardio' },
                      thursday: { name: 'Cycle & Burn', category: 'cardio' },
                      friday: { name: 'HIIT & Burn', category: 'cardio' },
                      saturday: null,
                      sunday: null,
                    }
                  },
                  {
                    time: '7:00 AM',
                    classes: {
                      monday: null,
                      tuesday: { name: 'Power Lifting', category: 'strength' },
                      wednesday: null,
                      thursday: { name: 'Power Lifting', category: 'strength' },
                      friday: null,
                      saturday: null,
                      sunday: null,
                    }
                  },
                  {
                    time: '9:00 AM',
                    classes: {
                      monday: { name: 'Yoga Flow', category: 'flexibility' },
                      tuesday: { name: 'Pilates Sculpt', category: 'flexibility' },
                      wednesday: { name: 'Yoga Flow', category: 'flexibility' },
                      thursday: { name: 'Pilates Sculpt', category: 'flexibility' },
                      friday: { name: 'Yoga Flow', category: 'flexibility' },
                      saturday: { name: 'Power Lifting', category: 'strength' },
                      sunday: { name: 'Meditation', category: 'wellness' },
                    }
                  },
                  {
                    time: '12:00 PM',
                    classes: {
                      monday: { name: 'Core Crusher', category: 'strength' },
                      tuesday: { name: 'Meditation', category: 'wellness' },
                      wednesday: { name: 'Core Crusher', category: 'strength' },
                      thursday: { name: 'Meditation', category: 'wellness' },
                      friday: { name: 'Core Crusher', category: 'strength' },
                      saturday: null,
                      sunday: null,
                    }
                  },
                  {
                    time: '5:30 PM',
                    classes: {
                      monday: { name: 'HIIT & Burn', category: 'cardio' },
                      tuesday: { name: 'Cycle & Burn', category: 'cardio' },
                      wednesday: { name: 'HIIT & Burn', category: 'cardio' },
                      thursday: { name: 'Cycle & Burn', category: 'cardio' },
                      friday: { name: 'HIIT & Burn', category: 'cardio' },
                      saturday: null,
                      sunday: null,
                    }
                  },
                  {
                    time: '6:00 PM',
                    classes: {
                      monday: { name: 'Box Fit', category: 'cardio' },
                      tuesday: { name: 'Power Lifting', category: 'strength' },
                      wednesday: { name: 'Box Fit', category: 'cardio' },
                      thursday: { name: 'Power Lifting', category: 'strength' },
                      friday: { name: 'Box Fit', category: 'cardio' },
                      saturday: null,
                      sunday: null,
                    }
                  },
                  {
                    time: '7:00 PM',
                    classes: {
                      monday: { name: 'Yoga Flow', category: 'flexibility' },
                      tuesday: { name: 'Pilates Sculpt', category: 'flexibility' },
                      wednesday: { name: 'Yoga Flow', category: 'flexibility' },
                      thursday: { name: 'Pilates Sculpt', category: 'flexibility' },
                      friday: { name: 'Yoga Flow', category: 'flexibility' },
                      saturday: null,
                      sunday: null,
                    }
                  },
                ] as ScheduleRow[]).map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{row.time}</td>
                    {(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const).map((day, i) => {
                      const classInfo = row.classes[day];
                      return (
                        <td key={i} className="py-3 px-4">
                          {classInfo ? (
                            <div>
                              <span className={`font-medium ${classInfo.category === 'cardio' ? 'text-red-600' : classInfo.category === 'strength' ? 'text-blue-600' : classInfo.category === 'flexibility' ? 'text-green-600' : 'text-purple-600'}`}>
                                {classInfo.name}
                              </span>
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

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-600 mr-2"></span>
              <span className="text-sm text-gray-600">Cardio</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
              <span className="text-sm text-gray-600">Strength</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-600 mr-2"></span>
              <span className="text-sm text-gray-600">Flexibility</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span>
              <span className="text-sm text-gray-600">Wellness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Preview */}
      <section className="section bg-dark text-white">
        <div className="container">
          <SectionHeader
            subtitle="Our Instructors"
            title="Learn from the Best"
            description="Our certified instructors bring expertise, motivation, and passion to every class."
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Emily Rodriguez',
                role: 'Yoga & Pilates Instructor',
                image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                classes: ['Yoga Flow', 'Pilates Sculpt', 'Meditation & Mindfulness'],
              },
              {
                name: 'Marcus Johnson',
                role: 'Strength & HIIT Coach',
                image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                classes: ['HIIT & Burn', 'Power Lifting', 'Core Crusher'],
              },
              {
                name: 'Lisa Chen',
                role: 'Cardio & Boxing Specialist',
                image: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                classes: ['Cycle & Burn', 'Box Fit', 'HIIT & Burn'],
              },
              {
                name: 'James Wilson',
                role: 'Wellness Coach',
                image: 'https://images.unsplash.com/photo-1618019367208-244b7070f8a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
                classes: ['Meditation & Mindfulness', 'Yoga Flow', 'Core Crusher'],
              },
            ].map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg overflow-hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-4">{instructor.role}</p>
                  <h4 className="text-sm font-bold text-gray-300 mb-2">Classes:</h4>
                  <ul className="text-gray-400 text-sm">
                    {instructor.classes.map((classItem, i) => (
                      <li key={i} className="mb-1">{classItem}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/trainers" className="btn btn-primary">
              View All Instructors
            </a>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />
    </PageTransition>
  );
};

export default Classes;