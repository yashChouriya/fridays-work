import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ClassCard = ({ gymClass, index }) => {
  return (
    <motion.div 
      className="group bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {/* Class Image */}
      <div className="relative overflow-hidden h-60">
        <img 
          src={gymClass.image} 
          alt={gymClass.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold py-1 px-3 rounded-full">
          {gymClass.duration} min
        </div>
      </div>
      
      {/* Class Info */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-dark">{gymClass.name}</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="text-dark font-medium">{gymClass.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{gymClass.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-gray-700">
            <span className="font-medium">Instructor:</span> {gymClass.instructor}
          </div>
          <Link to="/classes" className="text-primary font-bold hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassCard;