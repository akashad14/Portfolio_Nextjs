"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
      <main className="container py-16 md:pt-24 md:pb-20 px-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/f5.jpg"
              alt="Workspace with design tools"
              width={600}
              height={400}
              className="object-cover w-[700px] h-[400px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.8 }}
              className="absolute inset-0 bg-primary"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl font-bold tracking-tight"
            >
              About Me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I am a freelance graphic designer currently based in Punjab state, India. I&apos;ve been working in
              graphic design for the past one year. In this year working with startups and doing freelance work. My
              skills include everything from logo design, brand identity to social media designing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button className="group bg-[#1b3f3d] dark:text-white" 
              variant="default" 
              size="lg"
              onClick={handleDownloadCV}
              >
                <span>Download My CV</span>
                <motion.span
                  initial={{ x: -4 }}
                  animate={{ x: 0 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, repeatType: "reverse" }}
                >
                  <Download className="ml-2 h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
  
  )
}

