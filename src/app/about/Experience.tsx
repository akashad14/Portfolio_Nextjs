"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const skills = ["Logo Design", "Brand Identity", "Poster Design", "Social Media Poster Design", "Video Editing"]

export default function EducationAndSkills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Education & Skills
      </motion.h1>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {exp.period} | {exp.location}
                      </p>
                    </motion.div>
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
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="text-lg p-3 w-full justify-center">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

