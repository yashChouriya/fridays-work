import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';

const About = () => {
  // Education data
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University Name',
      year: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning with a focus on Natural Language Processing.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      year: '2014 - 2018',
      description: 'Graduated with honors. Focused on Software Engineering and Data Structures.'
    }
  ];

  // Experience data
  const experiences = [
    {
      position: 'Senior Software Engineer',
      company: 'Tech Company Name',
      year: '2020 - Present',
      description: 'Lead development of web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.'
    },
    {
      position: 'Software Developer',
      company: 'Another Company Name',
      year: '2018 - 2020',
      description: 'Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver high-quality products.'
    },
    {
      position: 'Software Engineering Intern',
      company: 'Startup Name',
      year: '2017 - 2018',
      description: 'Assisted in developing front-end components using React. Participated in code reviews and team meetings.'
    }
  ];

  return (
    <div className="pt-16">
      <Section title="About Me" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-highlight absolute -top-4 -left-4 rounded-lg z-0" />
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg z-10 relative">
                {/* Replace with your about image */}
                <img 
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800" 
                  alt="About me" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-highlight opacity-10"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Text */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6">
              Hello! I'm <span className="text-highlight">YourName</span>, a passionate software engineer based in YourLocation. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p className="text-lg mb-6">
              My interest in web development started back in 2012 when I decided to try creating custom themes for my WordPress blog. Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation, and a student-led design studio.
            </p>
            <p className="text-lg mb-6">
              My main focus these days is building accessible, inclusive products and digital experiences at <a href="#" className="text-highlight">Company Name</a> for a variety of clients.
            </p>
            <p className="text-lg mb-8">
              When I'm not at the computer, I'm usually rock climbing, hiking, or exploring new coffee shops in the city.
            </p>
            <Button href="/resume.pdf" variant="outline" target="_blank" rel="noopener noreferrer">
              View Resume
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section title="Experience" id="experience" className="bg-secondary/20">
        <div className="flex flex-col space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="text-highlight font-mono">{exp.year}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-bold text-textLight mb-2">{exp.position}</h3>
                <h4 className="text-highlight mb-4">{exp.company}</h4>
                <p className="text-text">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Education" id="education">
        <div className="flex flex-col space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="text-highlight font-mono">{edu.year}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl font-bold text-textLight mb-2">{edu.degree}</h3>
                <h4 className="text-highlight mb-4">{edu.institution}</h4>
                <p className="text-text">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;