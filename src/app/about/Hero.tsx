"use client";

import Image from "next/image";
import { Download } from "lucide-react";


export default function AboutMe() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
 
      <div className="min-h-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-0 py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-5xl mx-auto">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/images/f2.jpg"
              alt="Profile photo"
              width={400}
              height={400}
              className="rounded-3xl max-w-full h-[350px] shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left mx-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mt-4">
            {`I am a freelance graphic designer currently based in Punjab state, India. I've been working in graphic design 
            for the past one year. In this year working with startups and doing freelance work. My skills include 
            everything from logo design, brand identity to social media designing.`}
          </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Download My CV
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    
  );
}
