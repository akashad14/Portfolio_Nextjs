"use client"

import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const router = useRouter(); // Router for navigation

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Creative Design Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Bringing your ideas to life with stunning visuals and innovative designs
        </p>
        <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => router.push("/contact")} // Navigate to contact page
                className="inline-flex items-center justify-center rounded-3xl bg-gray-700 px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 dark:hover:bg-slate-400"
              >
                Get Started
              </motion.button>
        {/* <Button size="lg" className="text-lg px-8 py-6"
        >
          
          Get Started
        </Button> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute -z-10 top-0 left-0 w-full h-full"
      >
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/2 left-1/2 w-64 h-64 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </motion.div>
    </section>
  )
}

