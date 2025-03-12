import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle }) => {
  return (
    <div className="bg-secondary relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.h1 
          className="heading-xl text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-text-dark text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default PageBanner;