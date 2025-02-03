"use client"

import { motion } from "framer-motion"
import { Paintbrush, Palette, FileImage, Share2, Video } from "lucide-react"

const services = [
  { icon: Paintbrush, title: "Logo Design", description: "Create unique and memorable logos" },
  { icon: Palette, title: "Brand Identity", description: "Develop cohesive brand identities" },
  { icon: FileImage, title: "Poster Design", description: "Design eye-catching posters" },
  { icon: Share2, title: "Social Media Poster Design", description: "Craft engaging social media visuals" },
  { icon: Video, title: "Video Editing", description: "Edit and enhance video content" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

