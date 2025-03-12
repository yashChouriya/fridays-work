import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, buttonText, buttonLink, image, overlay = true }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${image})`,
        }}
      ></div>
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-dark bg-opacity-70 z-10"></div>
      )}
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          {buttonText && buttonLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to={buttonLink} className="btn-primary text-lg">
                {buttonText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;