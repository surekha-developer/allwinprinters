// "use client"

// import { useState } from "react"

// type Item = {
//   id: number
//   year: string
//   title: string
//   description: string
//   technologies: string[]
// }

// const data: Item[] = [
//   {
//     id: 1,
//     year: "2020",
//     title: "AI & Automation",
//     description: "Artificial Intelligence and automation solutions",
//     technologies: ["TensorFlow", "PyTorch", "OpenAI", "JAX"],
//   },
//   {
//     id: 2,
//     year: "2021",
//     title: "Cloud & DevOps",
//     description: "Scalable cloud infrastructure and deployment",
//     technologies: ["AWS", "Docker", "Kubernetes", "Azure"],
//   },
//   {
//     id: 3,
//     year: "2022",
//     title: "Web Development",
//     description: "Modern web apps and scalable frontend systems",
//     technologies: ["React", "Next.js", "Node.js", "TypeScript"],
//   },
//   {
//     id: 4,
//     year: "2023",
//     title: "Mobile Apps",
//     description: "Cross-platform mobile app development",
//     technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
//   },
// ]

// export default function InventionsSection() {
//   const [active, setActive] = useState(data[0])

//   return (
//     <section className="bg-background section-padding">
//       <div className="container-main">

//         <div className="grid md:grid-cols-3 border rounded-2xl overflow-hidden">

//           {/* ================= LEFT SIDE ================= */}
//           <div className="bg-muted p-6 space-y-3">

//             <h3 className="text-lg font-semibold mb-4">
//               Invention Years
//             </h3>

//             {data.map((item) => (
//               <div
//                 key={item.id}
//                 onMouseEnter={() => setActive(item)}
//                 className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition 
//                 ${
//                   active.id === item.id
//                     ? "bg-black text-white"
//                     : "hover:bg-muted-foreground/10"
//                 }`}
//               >
//                 <span>{item.year}</span>
//                 <span>›</span>
//               </div>
//             ))}
//           </div>

//           {/* ================= RIGHT SIDE ================= */}
//           <div className="md:col-span-2 p-8 bg-background">

//             <h2 className="text-2xl md:text-3xl font-bold mb-2">
//               {active.title}
//             </h2>

//             <p className="text-muted-foreground mb-6">
//               {active.description}
//             </p>

//             {/* Tech Cards */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

//               {active.technologies.map((tech, index) => (
//                 <div
//                   key={index}
//                   className="bg-card border rounded-xl p-4 text-center hover:shadow-md transition"
//                 >
//                   <div className="w-10 h-10 mx-auto mb-2 bg-muted rounded-md"></div>
//                   <p className="text-sm font-medium">{tech}</p>
//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

//..............

"use client"

import { useState } from "react"

type Item = {
  id: number
  year: string
  title: string
  description: string
  technologies: string[]
}

const data: Item[] = [
  {
    id: 1,
    year: "2012",
    title: "Foundation Stage",
    description: "Initial setup and entry into industrial printing solutions.",
    technologies: ["Basic Printing", "Setup", "Hardware"],
  },
  {
    id: 2,
    year: "2013",
    title: "Early Growth",
    description: "Expanded operations and built first client base.",
    technologies: ["Client Support", "Installations"],
  },
  {
    id: 3,
    year: "2014",
    title: "Eco Solvent Expansion",
    description: "Introduced eco-solvent printers for better efficiency.",
    technologies: ["Eco Solvent", "Ink Tech"],
  },
  {
    id: 4,
    year: "2015",
    title: "High-Speed Printing",
    description: "Launched faster production machines.",
    technologies: ["High Speed", "Automation"],
  },
  {
    id: 5,
    year: "2016",
    title: "Market Expansion",
    description: "Expanded into multiple regions and industries.",
    technologies: ["Distribution", "Scaling"],
  },
  {
    id: 6,
    year: "2017",
    title: "UV Printing",
    description: "Introduced UV printing technology.",
    technologies: ["UV Printing", "Precision"],
  },
  {
    id: 7,
    year: "2018",
    title: "Automation",
    description: "Improved automation in printing workflow.",
    technologies: ["Automation", "Workflow"],
  },
  {
    id: 8,
    year: "2019",
    title: "Global Reach",
    description: "Served international clients and markets.",
    technologies: ["Exports", "Global Support"],
  },
  {
    id: 9,
    year: "2020",
    title: "AI & Automation",
    description: "Artificial Intelligence and automation solutions",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "JAX"],
  },
  {
    id: 10,
    year: "2021",
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and deployment",
    technologies: ["AWS", "Docker", "Kubernetes", "Azure"],
  },
  {
    id: 11,
    year: "2022",
    title: "Web Development",
    description: "Modern web apps and scalable frontend systems",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    id: 12,
    year: "2023",
    title: "Mobile Apps",
    description: "Cross-platform mobile app development",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: 13,
    year: "2024",
    title: "Smart Printing",
    description: "Integration of smart monitoring systems.",
    technologies: ["IoT", "Smart Systems"],
  },
  {
    id: 14,
    year: "2025",
    title: "Advanced Automation",
    description: "Fully automated industrial printing solutions.",
    technologies: ["AI", "Automation"],
  },
  {
    id: 15,
    year: "2026",
    title: "Future Innovation",
    description: "Next-gen printing technology and innovation.",
    technologies: ["Next Gen Tech", "Innovation"],
  },
]

export default function InventionsSection() {
  const [active, setActive] = useState(data[0])

  return (
    <section className="bg-background section-padding">
      <div className="container-main">

        <div className="grid md:grid-cols-3 border rounded-2xl overflow-hidden">

          {/* ================= LEFT SIDE ================= */}
          <div className="bg-muted p-6 space-y-3 max-h-[500px] overflow-y-auto">

            <h3 className="text-lg font-semibold mb-4">
              Invention Years
            </h3>

            {data.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActive(item)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition 
                ${
                  active.id === item.id
                    ? "bg-black text-white"
                    : "hover:bg-muted-foreground/10"
                }`}
              >
                <span>{item.year}</span>
                <span>›</span>
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="md:col-span-2 p-8 bg-background">

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {active.title}
            </h2>

            <p className="text-muted-foreground mb-6">
              {active.description}
            </p>

            {/* Tech Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

              {active.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-4 text-center hover:shadow-md transition"
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-muted rounded-md"></div>
                  <p className="text-sm font-medium">{tech}</p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}