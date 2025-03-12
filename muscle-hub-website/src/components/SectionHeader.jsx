import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true, dark = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-dark' : 'text-white'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className="w-20 h-1 bg-primary mx-auto mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginLeft: centered ? 'auto' : 0 }}
      />
      
      {subtitle && (
        <motion.p 
          className={`text-lg max-w-3xl ${dark ? 'text-gray-600' : 'text-gray-300'} ${centered ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;