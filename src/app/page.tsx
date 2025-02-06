"use client"


import HomePage from "./landing page/Home"
import SocialLinks from "./landing page/Social-links"

import FilteredPortfolio from "@/components/ui/FilteredPortfolio"


export default function Home() {
  return (
    <div className="bg-[#dce6e6] dark:bg-[#1b3f3d]">
      {/* <div className="h-screen bg-[url('/your-image.jpg')] bg-cover bg-center"> */}
      <HomePage/>
     
      <SocialLinks/>
  
       <FilteredPortfolio/>
     
      

     
    
    </div>
  )
}

