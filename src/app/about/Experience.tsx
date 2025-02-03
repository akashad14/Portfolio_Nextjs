"use client"

import type React from "react"

export default function SkillsExperience() {
  return (
    
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Skills & Experiences</h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8">
          {/* Experiences Section */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400">EXPERIENCES</h2>

            <div className="space-y-8">

            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>2022- PRESENT </span>
                  <span>•</span>
                  <span>Freelance Work </span>
                </div>
                <h3 className="text-lg font-semibold">Graphics designer</h3>
                {/* <p className="text-muted-foreground"></p> */}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>11/2022-12/2022 </span>
                  <span>•</span>
                  <span>VSKILLS </span>
                </div>
                <h3 className="text-lg font-semibold">Graphics designer</h3>
                <p className="text-muted-foreground">DELHI [REMOTE] </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>07/2022-10/2022 </span>
                  <span>•</span>
                  <span>SCIASTRA EDUCATION PVT.LTD </span>
                </div>
                <h3 className="text-lg font-semibold">Graphics designer</h3>
                <p className="text-muted-foreground">
                BHUBANESWAR [REMOTE]  
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                  <span>04/2022-07/2022</span>
                  <span>•</span>
                  <span>AASHMAN FOUNDATION </span>
                </div>
                <h3 className="text-lg font-semibold">Graphics designer</h3>
                <p className="text-muted-foreground">
                PANCHKULA, HARYANA [REMOTE]
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400">SKILLS</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                
                <span className="text-lg">Logo Design</span>
              </div>

              <div className="flex items-center gap-4">
                
                <span className="text-lg">Brand Identity</span>
              </div>

              <div className="flex items-center gap-4">
                
                <span className="text-lg">Poster Design</span>
              </div>

              <div className="flex items-center gap-4">
                {/* <div className="w-6 h-6 text-purple-600 dark:text-purple-400" /> */}
                <span className="text-lg">Social Media Poster Design</span>
              </div>
              <div className="flex items-center gap-4">
                {/* <div className="w-6 h-6 text-purple-600 dark:text-purple-400" /> */}
                <span className="text-lg">Video Editing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

