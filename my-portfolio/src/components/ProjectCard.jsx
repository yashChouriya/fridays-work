import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  githubUrl, 
  liveUrl,
  index
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-24 gap-8`}
    >
      {/* Project Image */}
      <div className="lg:w-1/2">
        <div className="relative group overflow-hidden rounded-lg shadow-xl">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl text-white hover:text-highlight transition-colors duration-300"
                  aria-label="View GitHub repository"
                >
                  <FaGithub />
                </a>
              )}
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl text-white hover:text-highlight transition-colors duration-300"
                  aria-label="View live project"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-textLight mb-4">{title}</h3>
        <div className="bg-secondary p-6 rounded-lg shadow-lg mb-4">
          <p className="text-text">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-sm px-3 py-1 rounded-full bg-secondary text-highlight font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-6">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text hover:text-highlight transition-colors duration-300 flex items-center"
              aria-label="View GitHub repository"
            >
              <FaGithub className="mr-2" />
              Code
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text hover:text-highlight transition-colors duration-300 flex items-center"
              aria-label="View live project"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;