"use client"


import HomePage from "./landing page/Home"
import SocialLinks from "./landing page/Social-links"

import FilteredPortfolio from "@/components/ui/FilteredPortfolio"


export default function Home() {
  return (
    <div className="dark:bg-[#1b3f3d]">
  
      <HomePage/>
      
      <SocialLinks/>
  
       <FilteredPortfolio/>
     
      

     
    
    </div>
  )
}

