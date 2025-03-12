import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const TrainerCard = ({ trainer, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {/* Trainer Image */}
      <div className="relative overflow-hidden group h-80">
        <img 
          src={trainer.image} 
          alt={trainer.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3">
            <motion.a 
              href={trainer.social.instagram || '#'} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href={trainer.social.twitter || '#'} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              href={trainer.social.linkedin || '#'} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Trainer Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-1">{trainer.name}</h3>
        <p className="text-primary font-medium mb-4">{trainer.position}</p>
        <p className="text-gray-600">{trainer.description}</p>
      </div>
    </motion.div>
  );
};

export default TrainerCard;