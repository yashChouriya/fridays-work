import { motion } from 'framer-motion';

const SkillCard = ({ category, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-secondary rounded-lg shadow-lg p-6 h-full"
    >
      <h3 className="text-xl text-highlight font-bold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
            whileHover={{ y: -5 }}
            className="skill-item"
          >
            <div className="px-4 py-2 bg-primary rounded-md flex items-center justify-center text-text hover:text-highlight transition-colors duration-300">
              {skill.icon && <span className="mr-2">{skill.icon}</span>}
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;