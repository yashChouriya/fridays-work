import { motion } from 'framer-motion';

const AnimatedCard = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={`bg-secondary rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;