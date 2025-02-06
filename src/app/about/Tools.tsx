"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  { name: "Figma", icon: "/images/figma.png" },
  { name: "Photoshop", icon: "/images/photoshop.png" },
  { name: "Illustrator", icon: "/images/illustrator.png" },
  { name: "Canva", icon: "/images/canva.png" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ToolsSection() {
  return (
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={fadeInUp} 
      className="py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-[#1b3f3d] dark:text-[#d5ea94] text-center">TOOLS I USE</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900 rounded-xl">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Image
                    src={tool.icon || "/placeholder.svg"}
                    alt={`${tool.name} icon`}
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <span className="text-sm text-gray-700 dark:text-white font-medium">{tool.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
