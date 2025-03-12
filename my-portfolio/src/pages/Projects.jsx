import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Project data
  const allProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&w=800',
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1-demo.netlify.app',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, task categorization, and team collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800',
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2-demo.netlify.app',
      category: 'Frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive visualizations.',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800',
      githubUrl: 'https://github.com/yourusername/project3',
      liveUrl: 'https://project3-demo.netlify.app',
      category: 'Frontend'
    },
    {
      title: 'Blog Platform',
      description: 'A blog platform with content management, user authentication, and commenting system.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'NextAuth.js'],
      imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800',
      githubUrl: 'https://github.com/yourusername/project4',
      liveUrl: 'https://project4-demo.netlify.app',
      category: 'Full Stack'
    },
    {
      title: 'RESTful API',
      description: 'A RESTful API for managing user data, products, and orders with authentication and authorization.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      imageUrl: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&w=800',
      githubUrl: 'https://github.com/yourusername/project5',
      liveUrl: '',
      category: 'Backend'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourname-portfolio.netlify.app',
      category: 'Frontend'
    }
  ];

  // Categories for filtering
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];
  
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      <Section 
        title="Projects" 
        subtitle="Here are some of my recent works. Each project was an opportunity to learn new technologies and solve unique challenges."
        id="projects"
      >
        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${selectedCategory === category ? 'bg-highlight text-primary' : 'bg-secondary text-text hover:bg-secondary/70'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects */}
        <div className="mt-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              index={index}
            />
          ))}
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <p className="text-xl text-text">No projects in this category yet.</p>
            </motion.div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Projects;