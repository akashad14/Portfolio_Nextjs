"use client"
import About from "./Hero"
import EducationAndSkills from "./Experience"
import ToolsSection from "./Tools"

export default function about() {
  return (
    <div className="bg-[#dce6e6] dark:bg-[#1b3f3d]">
      <About/>
      <EducationAndSkills/>
      <ToolsSection/>
    </div>
  )
}
