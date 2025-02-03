"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-full w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900">
      <main className="items-center mx-auto px-4 py-16 sm:px-6 lg:px-[8rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="space-y-4">
              <motion.h2
                className="flex items-center gap-2 text-2xl font-medium text-gray-900 dark:text-gray-100"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Hey There {" "}
                <span role="img" aria-label="waving hand" className="animate-wave">
                  👋
                </span>
              </motion.h2>
              <motion.h1
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                I&apos;m <span className="text-purple-600 dark:text-purple-400">A Graphic Designer</span>
              </motion.h1>
              <motion.p
                className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                {`I'm a passionate Graphic Designer specializing in Logo Design, Brand Identity, Poster Design, 
                Social Media Creatives, and Video Editing. I bring ideas to life with bold visuals and creative 
                storytelling. Let's craft something amazing together!`}
              </motion.p>
            </div>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-700">
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                Download My CV
                <Download className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ rotate: 5 }}
            className="relative mx-auto aspect-square w-full max-w-lg lg:mx-0"
          >
            <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-purple-200 dark:bg-purple-900/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-3xl bg-purple-100 dark:bg-purple-900/30">
              <Image 
              src="/images/home.avif" 
              alt="Portfolio Image" 
              fill 
              className="object-cover" priority />
              <div className="absolute -right-2 -top-2 text-2xl">✨</div>
              <div className="absolute -bottom-2 -left-2 text-2xl">✨</div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
