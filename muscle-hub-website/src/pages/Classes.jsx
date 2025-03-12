import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import ClassCard from '../components/ClassCard';

// Data
import classes from '../data/classes';

const Classes = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for filter
  const [filteredClasses, setFilteredClasses] = useState(classes);
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter classes by intensity
  const filterClasses = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredClasses(classes);
      return;
    }
    
    let intensity;
    switch (filter) {
      case 'low':
        intensity = 'Low';
        break;
      case 'medium':
        intensity = 'Medium';
        break;
      case 'high':
        intensity = 'High';
        break;
      default:
        intensity = null;
    }
    
    // Filter classes that contain the intensity level (handles hyphenated intensities too like "Medium-High")
    const filtered = classes.filter(cls => cls.intensity.includes(intensity));
    setFilteredClasses(filtered);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Our Fitness Classes"
        subtitle="Discover our wide range of classes designed to help you achieve your fitness goals."
        image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
      />
      
      {/* Classes Overview Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Diverse Classes for Every Goal"
            subtitle="From high-intensity workouts to mindful movement, we offer classes to help you achieve your unique fitness objectives."
            dark={true}
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
            <motion.button
              onClick={() => filterClasses('all')}
              className={`px-6 py-2 rounded-full font-medium ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Classes
            </motion.button>
            <motion.button
              onClick={() => filterClasses('low')}
              className={`px-6 py-2 rounded-full font-medium ${activeFilter === 'low' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Low Intensity
            </motion.button>
            <motion.button
              onClick={() => filterClasses('medium')}
              className={`px-6 py-2 rounded-full font-medium ${activeFilter === 'medium' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Medium Intensity
            </motion.button>
            <motion.button
              onClick={() => filterClasses('high')}
              className={`px-6 py-2 rounded-full font-medium ${activeFilter === 'high' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              High Intensity
            </motion.button>
          </div>
          
          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((gymClass, index) => (
              <ClassCard key={gymClass.id} gymClass={gymClass} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Class Details Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <SectionHeader 
            title="Class Schedule"
            subtitle="Find the perfect time to join our classes throughout the week."
          />
          
          <div className="overflow-x-auto mt-12">
            <table className="w-full min-w-[800px] bg-secondary bg-opacity-50 rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left p-4 text-white border-b border-gray-700">Time</th>
                  <th className="text-left p-4 text-white border-b border-gray-700">Monday</th>
                  <th className="text-left p-4 text-white border-b border-gray-700">Tuesday</th>
                  <th className="text-left p-4 text-white border-b border-gray-700">Wednesday</th>
                  <th className="text-left p-4 text-white border-b border-gray-700">Thursday</th>
                  <th className="text-left p-4 text-white border-b border-gray-700">Friday</th>
                  <th className="text-left p-4 text-white border-b border-gray-700">Saturday</th>
                  <th className="text-left p-4 text-white border-b border-gray-700">Sunday</th>
                </tr>
              </thead>
              <tbody>
                {/* Early Morning */}
                <tr>
                  <td className="p-4 text-primary font-bold border-b border-gray-700">6:00 AM</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">HIIT<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">S&C<br /><span className="text-xs">Michael R.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">HIIT<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">S&C<br /><span className="text-xs">Michael R.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">HIIT<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                </tr>
                
                {/* Morning */}
                <tr>
                  <td className="p-4 text-primary font-bold border-b border-gray-700">8:00 AM</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Yoga<br /><span className="text-xs">Emma J.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Yoga<br /><span className="text-xs">Emma J.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Yoga<br /><span className="text-xs">Emma J.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Functional<br /><span className="text-xs">Michael R.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Yoga<br /><span className="text-xs">Emma J.</span></td>
                </tr>
                
                {/* Mid Morning */}
                <tr>
                  <td className="p-4 text-primary font-bold border-b border-gray-700">9:00 AM</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">N&F<br /><span className="text-xs">Sophia M.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">N&F<br /><span className="text-xs">Sophia M.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                </tr>
                
                {/* Noon */}
                <tr>
                  <td className="p-4 text-primary font-bold border-b border-gray-700">12:00 PM</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Circuit<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Functional<br /><span className="text-xs">Michael R.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Circuit<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Functional<br /><span className="text-xs">Michael R.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Circuit<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                </tr>
                
                {/* Afternoon */}
                <tr>
                  <td className="p-4 text-primary font-bold border-b border-gray-700">5:00 PM</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">HIIT<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">HIIT<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">HIIT<br /><span className="text-xs">David W.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                </tr>
                
                {/* Evening */}
                <tr>
                  <td className="p-4 text-primary font-bold border-b border-gray-700">6:00 PM</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">S&C<br /><span className="text-xs">Michael R.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">S&C<br /><span className="text-xs">Michael R.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                </tr>
                
                {/* Late Evening */}
                <tr>
                  <td className="p-4 text-primary font-bold border-b border-gray-700">7:00 PM</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Yoga<br /><span className="text-xs">Emma J.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Yoga<br /><span className="text-xs">Emma J.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">Yoga<br /><span className="text-xs">Emma J.</span></td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                  <td className="p-4 text-gray-300 border-b border-gray-700">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-gray-400 text-center">
            <p>Class schedule is subject to change. Please check our mobile app or call for the most up-to-date information.</p>
          </div>
        </div>
      </section>
      
      {/* Class Policies Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Class Policies"
            subtitle="Important information to know before attending your first class."
            dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-dark mb-4">Booking & Cancellation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Classes can be booked up to 7 days in advance via our app or website.</li>
                <li>• Please arrive 10-15 minutes before class start time.</li>
                <li>• Late arrivals (5+ minutes) may not be permitted to join for safety reasons.</li>
                <li>• Cancellations must be made at least 4 hours in advance.</li>
                <li>• No-shows or late cancellations may result in a class credit being deducted.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-dark mb-4">What to Bring</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Comfortable workout attire appropriate for the class type.</li>
                <li>• Clean, non-marking athletic shoes (except for yoga/pilates).</li>
                <li>• Water bottle (water stations available for refills).</li>
                <li>• Towel (required for all classes, towel service available for premium members).</li>
                <li>• Personal yoga mat (recommended but not required for yoga classes).</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-dark mb-4">Class Etiquette</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Follow instructor guidance and ask questions when needed.</li>
                <li>• Respect others' space and equipment during workouts.</li>
                <li>• Clean and return all equipment to proper storage areas.</li>
                <li>• Keep conversations at appropriate volumes.</li>
                <li>• Silence mobile phones during class.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-dark mb-4">Health & Safety</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Inform instructors of any injuries or health concerns before class.</li>
                <li>• Modifications are available for all fitness levels.</li>
                <li>• Stay hydrated and take breaks as needed.</li>
                <li>• New members should start with beginner or all-level classes.</li>
                <li>• A health screening is recommended before starting any new fitness program.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;