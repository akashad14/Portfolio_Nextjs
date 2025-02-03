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
    title: "E-COMMERCE APP",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.",
    image:
      "/images/f3.jpg",
    behanceUrl: "#",
  },
  {
    title: "Perfume Store Landing page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.",
    image:
      "/images/f4.jpg",
    behanceUrl: "#",
  },
  {
    title: "Food Delivery App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.",
    image:
      "/images/f4.jpg",
    behanceUrl: "#",
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

