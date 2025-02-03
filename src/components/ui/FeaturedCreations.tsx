// "use client"

// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { motion } from "framer-motion";

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   client: string;
//   year: string;
// }

// interface FeaturedCreationsProps {
//   projects: Project[];
// }

// export default function FeaturedCreations({ projects }: FeaturedCreationsProps) {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
//       {projects.map((project, index) => (
//         <motion.div
//           key={project.id}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         >
//           <Dialog>
//             <DialogTrigger asChild>
//               <div className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
//                 <div className="relative overflow-hidden rounded-lg">
//                   <Image
//                     src={project.image} // Dynamic image source
//                     alt={project.title}
//                     width={800}
//                     height={600}
//                     className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
//                   />
                  
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                     <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
//                     <p className="text-gray-300">{project.category}</p>
//                   </div>
//                 </div>
//               </div>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[625px]">
//               <DialogHeader>
                
//                 <DialogTitle>{selectedProject?.title}</DialogTitle>
//                 <DialogDescription>{selectedProject?.category}</DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <Image
//                   src={selectedProject?.image || ""}
//                   alt={selectedProject?.title || ""}
//                   width={800}
//                   height={600}
//                   className="rounded-lg"
//                 />
//                 <p className="text-gray-700 dark:text-gray-300">{selectedProject?.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
//                     {selectedProject?.client}
//                   </span>
//                   <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
//                     {selectedProject?.year}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 flex justify-end">
//                 <Button>View Full Project</Button>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
