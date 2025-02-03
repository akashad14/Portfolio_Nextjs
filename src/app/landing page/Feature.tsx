"use client"

import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src :  "/images/feature1.jpg",
},
    {
      title: "Valley of life",
      src: "/images/f2.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "/images/f3.jpg",
    },
    {
      title: "Camping is for pros",
      src: "/images/f4.jpg",
    },
    {
      title: "The road not taken",
      src:  "/images/f5.jpg",
    },
    {
      title: "The First Rule",
      src: "/images/f6.jpg",
    },
  ];

  return (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      Featured Creations
    </h2>
  <FocusCards cards={cards} />
  </div>
  </section>
  )
}

export default FocusCardsDemo;
