import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container-custom">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="section-heading flex items-center">
              <span className="mr-4">{title}</span>
              <span className="h-px bg-secondary flex-grow"></span>
            </h2>
            {subtitle && <p className="text-lg text-text mt-4">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;