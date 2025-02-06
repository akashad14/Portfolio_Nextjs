"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Hexagon } from "lucide-react"
import { MdWork } from "react-icons/md";

const experiences = [
  {
    title: "Graphics Designer",
    company: "Freelance Work",
    period: "2022 - PRESENT",
    location: "Remote",
  },
  {
    title: "Graphics Designer",
    company: "VSKILLS",
    period: "11/2022 - 12/2022",
    location: "Delhi [Remote]",
  },
  {
    title: "Graphics Designer",
    company: "SCIASTRA EDUCATION PVT.LTD",
    period: "07/2022 - 10/2022",
    location: "Bhubaneswar [Remote]",
  },
  {
    title: "Graphics Designer",
    company: "AASHMAN FOUNDATION",
    period: "04/2022 - 07/2022",
    location: "Panchkula, Haryana [Remote]",
  },
]

const skills = [
  { name: "Logo Design", level: 90 },
  { name: "Brand Identity", level: 85 },
  { name: "Poster Design", level: 95 },
  { name: "Social Media Poster Design", level: 88 },
  { name: "Video Editing", level: 90 },
]

export default function EducationAndSkills() {
  return (
    <div className="min-h-screen p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-[#1b3f3d] dark:text-white"
      >
        Creative Journey & Skills
      </motion.h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24"> {/* Increased gap */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#1b3f3d] dark:text-white">Experience</h2>
            <div className="relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <CardContent className="p-6 flex items-center">
                    <MdWork  className="w-12 h-12 text-[#1b3f3d] dark:text-white mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-[#1b3f3d] dark:text-white">{exp.title}</h3>
                        <p className="text-lg text-teal-800 dark:text-gray-300 font-medium">{exp.company}</p>
                        <p className="text-sm text-teal-600 dark:text-gray-400 mt-1">
                          {exp.period} | {exp.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#1b3f3d] dark:text-white">
              Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-32 w-full bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col justify-center p-4 border border-gray-300 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
                      {skill.name}
                    </h3>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-3">
                      <motion.div
                        className="bg-teal-500 dark:bg-cyan-400 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      />
                    </div>

                    <p className="text-right text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {skill.level}%
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
