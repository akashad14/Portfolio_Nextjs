import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  image: string
  behanceUrl: string
}

const projects: Project[] = [
  {
    title: "Skincare Brand",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.",
    image:
    "/images/project/project1.png",
    behanceUrl: "https://www.behance.net/gallery/164972919/Skincare-brand-identity",
  },
  {
    title: "Unicode developing solution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.",
    image:
      "/images/project/project2.png",
    behanceUrl: "https://www.behance.net/gallery/152501895/Unicode-logo-Design",
  },
  {
    title: "Social media design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.",
    image:
      "/images/project/project3.png",
    behanceUrl: "https://www.behance.net/gallery/163999385/social-media-design",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <Link href="/project" className="text-primary hover:underline">
            See All
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <CardHeader className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="gap-2 p-0 hover:bg-transparent">
                    View in Behance
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

