import { motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-accent uppercase tracking-widest text-sm font-medium">  
          {subtitle}
        </span>
        <h2 className="heading-lg mt-2 text-text-light">{title}</h2>
      </motion.div>
    </div>
  );
};

export default SectionTitle;