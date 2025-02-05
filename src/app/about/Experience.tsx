import { motion } from "framer-motion";
import { FaPaintBrush, FaPalette, FaImage, FaPhotoVideo } from "react-icons/fa";

const skills = [
  { name: "Logo Design", icon: <FaPaintBrush /> },
  { name: "Brand Identity", icon: <FaPalette /> },
  { name: "Poster Design", icon: <FaImage /> },
  { name: "Social Media Poster Design", icon: <FaImage /> },
  { name: "Video Editing", icon: <FaPhotoVideo /> }
];

const experiences = [
  {
    role: "Graphics Designer",
    company: "Freelance Work",
    duration: "2022 - PRESENT",
    location: "Remote",
  },
  {
    role: "Graphics Designer",
    company: "VSKILLS",
    duration: "11/2022 - 12/2022",
    location: "Delhi [Remote]",
  },
  {
    role: "Graphics Designer",
    company: "SCIASTRA EDUCATION PVT.LTD",
    duration: "07/2022 - 10/2022",
    location: "Bhubaneswar [Remote]",
  },
  {
    role: "Graphics Designer",
    company: "AASHMAN FOUNDATION",
    duration: "04/2022 - 07/2022",
    location: "Panchkula, Haryana [Remote]",
  },
];

export default function SkillsExperience() {
  return (
    <motion.section
      className="py-10 px-5 md:px-20 bg-white dark:bg-gray-950 text-black dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-16 text-center">Skills & Experiences</h2>
      
      <div className="grid md:grid-cols-2 gap-8">

        {/* Experience Section */}
        <motion.div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Experiences</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-l-4 border-blue-500 pl-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <h4 className="font-bold text-lg">{exp.role}</h4>
                <p className="text-blue-500 dark:text-blue-400">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.duration} | {exp.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

         {/* Skills Section */}
         <motion.div
          className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          
        >
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <motion.li 
                key={index} 
                className="flex items-center space-x-3 bg-gray-300 dark:bg-gray-700 p-3 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
