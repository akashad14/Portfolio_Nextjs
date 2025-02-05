"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Behance",
      url: "https://www.behance.net/",
      image: "/images/behance.png",
    },
    {
      name: "Whatsapp",
      url: "https://www.whatsapp.com/",
      image: "/images/whatsapp.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      image: "/images/linkedin.png",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-24 p-4 my-10"
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-black dark:text-white hover:opacity-80 transition-opacity"
        >
          <Image
            src={social.image}
            alt={`${social.name} logo`}
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          {social.name}
        </motion.a>
      ))}
    </motion.div>
  )
}
