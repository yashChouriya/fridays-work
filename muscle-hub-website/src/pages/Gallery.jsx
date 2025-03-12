import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery categories
  const categories = ['All', 'Facilities', 'Classes', 'Events', 'Transformations'];
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Gallery images (these are placeholder URLs - in a real project, use your actual images)
  const galleryImages = [
    {
      id: 1,
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Strength Training Area',
    },
    {
      id: 2,
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      title: 'Main Gym Floor',
    },
    {
      id: 3,
      category: 'Classes',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Circuit Training Class',
    },
    {
      id: 4,
      category: 'Classes',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Yoga Class',
    },
    {
      id: 5,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Community Challenge Event',
    },
    {
      id: 6,
      category: 'Transformations',
      image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Member Transformation',
    },
    {
      id: 7,
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Recovery Zone',
    },
    {
      id: 8,
      category: 'Classes',
      image: 'https://images.unsplash.com/photo-1591258370814-01609b341790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'HIIT Workout Session',
    },
    {
      id: 9,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      title: 'Nutrition Workshop',
    },
    {
      id: 10,
      category: 'Transformations',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Strength Transformation',
    },
    {
      id: 11,
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      title: 'Cardio Equipment',
    },
    {
      id: 12,
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Member Appreciation Day',
    },
  ];
  
  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Muscle Hub Gallery"
        subtitle="Take a visual tour of our facilities, classes, events, and member transformations."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      
      {/* Gallery Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Explore Our Gallery"
            subtitle="Browse through images of our world-class gym facilities, exciting classes, special events, and inspiring member transformations."
            dark={true}
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-lg group h-72"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark bg-opacity-40 flex items-end p-4 transition-opacity duration-300 opacity-100 group-hover:bg-opacity-60">
                  <div>
                    <p className="text-white font-bold text-lg">{item.title}</p>
                    <span className="text-primary text-sm font-medium">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Video Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <SectionHeader 
            title="Member Testimonials"
            subtitle="Hear directly from our members about their experiences and results at Muscle Hub."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-lg aspect-video"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* This would be a real video in a production site */}
              <div className="absolute inset-0 bg-secondary bg-opacity-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Sarah's Transformation Journey</h3>
                  <p className="text-gray-300 mt-2">Lost 30 lbs in 6 months</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg shadow-lg aspect-video"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* This would be a real video in a production site */}
              <div className="absolute inset-0 bg-secondary bg-opacity-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">James's Strength Journey</h3>
                  <p className="text-gray-300 mt-2">From beginner to competitive lifter</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Virtual Tour Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <SectionHeader 
            title="Virtual Tour"
            subtitle="Can't visit in person? Take a virtual tour of our state-of-the-art facilities."
            dark={true}
          />
          
          <motion.div 
            className="mt-12 relative aspect-video overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* This would be a real 360 tour or video in a production site */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark">360° Virtual Tour</h3>
                <p className="text-gray-600 mt-2 max-w-md mx-auto">
                  Click to explore our gym in immersive 360° view. Navigate through different areas and get a feel for our premium facilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;