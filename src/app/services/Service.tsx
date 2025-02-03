"use client"

import { motion } from "framer-motion"
import { Monitor, Smartphone, Layout, Palette } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences through thoughtful interface design.",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Building responsive and modern websites that leave a lasting impression.",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Crafting beautiful mobile applications with seamless user interactions.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Designing memorable and versatile brand identities that make you stand out from the competition.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-card-foreground/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

