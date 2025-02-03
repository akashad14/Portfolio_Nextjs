"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioItems, type PortfolioItem } from "@/app/landing page/portfolioItems"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const FilterButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
      variant={active ? "default" : "outline"}
      onClick={onClick}
      className={cn("px-6 py-2 rounded-full transition-all duration-300", active && "shadow-lg")}
    >
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {children}
      </motion.span>
    </Button>
  </motion.div>
)

const PortfolioImage = ({ item }: { item: PortfolioItem }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.6 }}
    transition={{
      opacity: { duration: 0.4 },
      scale: { duration: 0.5, ease: "easeOut" },
      layout: { duration: 0.4 },
    }}
    className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
    whileHover={{ scale: 1.02 }}
  >
    <motion.img
      src={item.imagesrc || "/placeholder.svg"}
      alt={item.title}
      className="object-cover w-full h-full"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.div
      className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center"
      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <motion.p
        className="text-white opacity-0 text-lg font-semibold px-4 text-center"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {item.title}
      </motion.p>
    </motion.div>
  </motion.div>
)

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const getGridColumns = (itemCount: number) => {
  if (itemCount >= 4) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  if (itemCount === 3) return "grid-cols-1 sm:grid-cols-3"
  if (itemCount === 2) return "grid-cols-1 sm:grid-cols-2"
  return "grid-cols-1"
}

export default function FilteredPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "logo" | "poster" | "brand">("all")

  const filteredItems =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  const gridColumns = getGridColumns(filteredItems.length)

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Filter Buttons */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap gap-4 justify-center mb-12"
      >
        <FilterButton active={selectedCategory === "all"} onClick={() => setSelectedCategory("all")}>
          All Works
        </FilterButton>
        <FilterButton active={selectedCategory === "logo"} onClick={() => setSelectedCategory("logo")}>
          Logo Design
        </FilterButton>
        <FilterButton active={selectedCategory === "poster"} onClick={() => setSelectedCategory("poster")}>
          Poster Design
        </FilterButton>
        <FilterButton active={selectedCategory === "brand"} onClick={() => setSelectedCategory("brand")}>
          Brand Identity
        </FilterButton>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
          className={`grid ${gridColumns} gap-6 max-w-6xl`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <PortfolioImage key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

