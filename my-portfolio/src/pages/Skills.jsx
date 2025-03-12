import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaTools, FaGit, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiRedux, SiGraphql, SiJest } from 'react-icons/si';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  // Skills data categorized
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
        { name: 'REST API', icon: <FaTools /> },
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'SQL', icon: <FaDatabase /> },
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <FaGit /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Jest', icon: <SiJest /> },
        { name: 'CI/CD', icon: <FaTools /> },
      ]
    },
  ];

  return (
    <div className="pt-16">
      <Section 
        title="Skills" 
        subtitle="My technical skills and tools that I've been working with."
        id="skills"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              category={category.category}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>

        {/* Skill visualization */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-textLight mb-8 text-center">Skill Proficiency</h3>
          
          <div className="space-y-8">
            {[
              { skill: 'Frontend Development', proficiency: 90 },
              { skill: 'Backend Development', proficiency: 85 },
              { skill: 'Database Management', proficiency: 80 },
              { skill: 'DevOps', proficiency: 75 },
              { skill: 'UI/UX Design', proficiency: 70 },
            ].map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-textLight">{item.skill}</span>
                  <span className="text-highlight">{item.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-highlight origin-left rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${item.proficiency}%`, 
                      animation: `growWidth 1.5s ease-out ${index * 0.2}s`,
                      transform: `scaleX(1)`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section title="Learning Journey" className="bg-secondary/20">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-highlight/30 rounded-full"></div>
          
          {/* Timeline items */}
          {[
            { year: '2022', title: 'Advanced React Patterns & Performance', description: 'Mastered advanced React concepts including performance optimization, custom hooks, and state management strategies.' },
            { year: '2021', title: 'Backend Development with Node.js', description: 'Built scalable APIs and microservices using Node.js, Express, and various database technologies.' },
            { year: '2020', title: 'Frontend Development', description: 'Focused on modern JavaScript frameworks with emphasis on React and responsive design principles.' },
            { year: '2019', title: 'Computer Science Fundamentals', description: 'Strengthened knowledge of algorithms, data structures, and programming paradigms.' },
            { year: '2018', title: 'Started Coding Journey', description: 'Began learning HTML, CSS, and JavaScript through self-study and online resources.' },
          ].map((item, index) => (
            <div key={index} className="relative z-10 mb-16 flex items-center">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-highlight shadow-glow"></div>
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 ml-auto'}`}>
                <div className="bg-secondary p-6 rounded-lg shadow-lg">
                  <div className="inline-block px-3 py-1 bg-primary rounded-full text-highlight font-mono text-sm mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-textLight mb-2">{item.title}</h3>
                  <p className="text-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;