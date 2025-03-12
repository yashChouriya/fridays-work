import { motion } from 'framer-motion';
import { useState } from 'react';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-dark">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
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
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take a visual tour of our facilities, classes, and community events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-12 bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 rounded-full font-medium transition-all ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
            >
              All Photos
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

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg h-72"
                onClick={() => openLightbox(image)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${image.url})` }}
                ></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-white/80">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-secondary-dark mb-4">No images found</h3>
              <p className="text-secondary">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Videos Section */}
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
              Featured <span className="text-primary">Videos</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Get a closer look at our classes, events, and success stories through video highlights.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative pt-[56.25%] /* 16:9 aspect ratio */">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    {/* This would be a real video embed in production */}
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-4xl">u25b6</span>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">{video.title}</h3>
                      <p className="text-white/70">{video.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-dark mb-2">{video.title}</h3>
                  <p className="text-secondary mb-4">{video.description}</p>
                  <div className="flex items-center text-sm text-secondary">
                    <span className="mr-4"><span className="text-primary mr-1">u23f1</span> {video.duration}</span>
                    <span><span className="text-primary mr-1">ud83dudcc5</span> {video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Highlight */}
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
              Event <span className="text-primary">Highlights</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-secondary max-w-3xl mx-auto"
            >
              Relive the excitement of our special events, competitions, and community gatherings.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 bg-gray-200">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="text-sm font-medium text-primary mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-secondary-dark mb-3">{event.title}</h3>
                  <p className="text-secondary mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-secondary-dark text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Want to Be Part of Our Gallery?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join MuscleHub today and you might see yourself in our next photo update! Share your fitness journey with our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-primary-dark transition-all">
                Become a Member
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
                Share Your Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl hover:text-primary transition-colors z-10"
            >
              &times;
            </button>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-dark mb-2">{selectedImage.title}</h3>
                <p className="text-secondary">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Sample data for the page
const categories = [
  { label: 'Facilities', value: 'facilities' },
  { label: 'Classes', value: 'classes' },
  { label: 'Events', value: 'events' },
  { label: 'Community', value: 'community' },
  { label: 'Transformations', value: 'transformations' }
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'State-of-the-Art Weight Room',
    description: 'Our premium free weight area features top-of-the-line equipment for all your strength training needs.',
    category: 'facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Cardio Center',
    description: 'Spacious cardio area with the latest treadmills, ellipticals, and rowing machines.',
    category: 'facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Functional Training Zone',
    description: 'Dedicated space for functional movement, calisthenics, and high-intensity interval training.',
    category: 'facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'HIIT Class in Action',
    description: 'Members pushing their limits in our popular high-intensity interval training class.',
    category: 'classes'
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Personal Training Session',
    description: 'One-on-one coaching with our certified personal trainers for customized fitness guidance.',
    category: 'classes'
  },
  {
    url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Yoga & Mindfulness',
    description: 'Find your center in our tranquil yoga studio with classes for all experience levels.',
    category: 'classes'
  },
  {
    url: 'https://images.unsplash.com/photo-1609899438244-a728e05bb6a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Summer Fitness Challenge',
    description: 'Participants celebrating at the finish line of our annual summer fitness challenge event.',
    category: 'events'
  },
  {
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Charity Fitness Marathon',
    description: 'Members and staff coming together to raise funds for local charities through fitness.',
    category: 'events'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Nutrition Workshop',
    description: 'Learning about optimal nutrition strategies from our expert dietitians and coaches.',
    category: 'events'
  },
  {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Community Support',
    description: 'Members encouraging each other through challenging workouts and celebrating achievements together.',
    category: 'community'
  },
  {
    url: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Team Building Activities',
    description: 'Building camaraderie through group challenges and friendly competition among members.',
    category: 'community'
  },
  {
    url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: "John's 50lb Weight Loss Journey",
    description: 'After 8 months of dedicated training and nutrition, John achieved his goal of losing 50 pounds.',
    category: 'transformations'
  },
  {
    url: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: "Sarah's Strength Transformation",
    description: "From struggling with 5lb dumbbells to crushing pull-ups and deadlifts, Sarah's strength journey inspires us all.",
    category: 'transformations'
  },
  {
    url: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Cycling Studio',
    description: 'Our immersive cycling studio features premium bikes and motivating instructors for an intense cardio experience.',
    category: 'facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    title: 'Senior Fitness Program',
    description: 'Specialized fitness classes designed for our senior members to improve mobility, strength, and overall wellbeing.',
    category: 'classes'
  },
];

const videos = [
  {
    title: 'MuscleHub Grand Opening Celebration',
    description: 'Highlights from our grand opening event featuring facility tours, trainer introductions, and special guest appearances.',
    duration: '5:42',
    date: 'March 15, 2023'
  },
  {
    title: 'Transformation Challenge Results',
    description: 'Celebrating the amazing results of our 12-week transformation challenge participants and hearing their inspiring stories.',
    duration: '8:17',
    date: 'June 30, 2023'
  },
  {
    title: 'Behind the Scenes: A Day at MuscleHub',
    description: 'Experience what a typical day looks like at MuscleHub, from early morning classes to evening personal training sessions.',
    duration: '6:25',
    date: 'August 12, 2023'
  },
  {
    title: 'Trainer Tips: Perfecting Your Squat Form',
    description: 'Our head strength coach Alex demonstrates proper squat technique and common mistakes to avoid for better results and safety.',
    duration: '4:53',
    date: 'October 5, 2023'
  }
];

const events = [
  {
    title: 'Summer Fitness Challenge',
    date: 'July 2023',
    description: 'Our annual 8-week challenge that brought together over 200 members competing in teams to transform their fitness and nutrition habits.',
    image: 'https://images.unsplash.com/photo-1609899438244-a728e05bb6a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Competition', 'Transformation', 'Community']
  },
  {
    title: 'Charity Fitness Marathon',
    date: 'September 2023',
    description: "A 12-hour fitness marathon that raised over $15,000 for local children's hospitals through continuous group classes and challenges.",
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Charity', 'Community', 'Endurance']
  },
  {
    title: 'Nutrition & Wellness Workshop',
    date: 'November 2023',
    description: 'Educational workshop featuring guest speakers on nutrition, recovery, stress management, and holistic approaches to fitness.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Education', 'Nutrition', 'Wellness']
  },
  {
    title: 'Holiday Fitness Bash',
    date: 'December 2023',
    description: 'End-of-year celebration featuring themed workouts, member recognition awards, and healthy holiday treats and festivities.',
    image: 'https://images.unsplash.com/photo-1528957987586-8dfdfd6b75d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Social', 'Celebration', 'Community']
  }
];

export default GalleryPage;