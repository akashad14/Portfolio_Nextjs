"use client"

import Image from "next/image"
import Link from "next/link"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Behance",
      url: "https://www.behance.net/",
      image: "/images/behance.png",
    },
    // {
    //   name: "Dribbble",
    //   url: "https://dribbble.com/",
    //   image: "/images/dribble.png",
    // },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      image: "/images/linkedin.png",
    },
  ]

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-24 p-4 my-10">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-black dark:text-white hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={social.image}
            alt={`${social.name} logo`}
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          {social.name}
        </Link>
      ))}
    </div>
  )
}
