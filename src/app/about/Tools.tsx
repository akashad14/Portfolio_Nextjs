"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
const tools = [
  {
    name: "Figma",
    icon: "/images/figma.png",
  },
  {
    name: "Photoshop",
    icon: "/images/photoshop.png",
  },
  {
    name: "Illustrator",
    icon: "/images/illustrator.png",
  },
  {
    name: "Canva",
    icon: "/images/canva.png",
  },
//   {
//     name: "Notion",
//     icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20090732-6n923q1oEh1XWI1vMDIE87utVHGxFa.png#x=591&y=119&w=32&h=32",
//   },
//   {
//     name: "Miro",
//     icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20090732-6n923q1oEh1XWI1vMDIE87utVHGxFa.png#x=712&y=119&w=32&h=32",
//   },
]

export default function ToolsSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-8 text-purple-800">TOOLS I USE</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <Card key={tool.name} className="border-none shadow-sm hover:shadow-md shadow-gray-500 transition-shadow duration-200">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image
                  src={tool.icon || "/placeholder.svg"}
                  alt={`${tool.name} icon`}
                  width={32}
                  height={32}
                  className="mb-3"
                />
                <span className="text-sm text-gray-600">{tool.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

