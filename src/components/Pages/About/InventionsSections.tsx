

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
    title: "Patent Achievements & Partner Success",
    description: "Achieved 1 national invention patent, 11 utility model patents, and 1 software copyright. ALLWIN was the only company to win the 'Excellent Partner' title in China from KONICA MINOLTA for 3 consecutive years.",
    technologies: ["1 Invention Patent", "11 Utility Patents", "Software Copyright", "Excellent Partner"],
  },
  {
    id: 2,
    year: "2013-2014",
    title: "Continued Innovation & Growth",
    description: "Secured 10 utility model patents and 1 invention. Recognized as the only 'Excellent Partner' in China by KONICA MINOLTA for 5 consecutive years.",
    technologies: ["10 Utility Patents", "1 Invention Patent", "5 Years Excellence", "China Leadership"],
  },
  {
    id: 3,
    year: "2015",
    title: "Strategic Technological Edge",
    description: "Acquired 9 utility model patents and 1 invention. Sustained 'Excellent Partner' status with KONICA MINOLTA for 6 consecutive years.",
    technologies: ["9 Utility Patents", "1 Invention Patent", "6 Years Excellence", "Strategic R&D"],
  },
  {
    id: 4,
    year: "2018",
    title: "Advanced Manufacturing & IP",
    description: "Granted 2 invention patents and 4 utility model patents. Named the 'Excellent Partner' by KONICA MINOLTA for 6 consecutive years.",
    technologies: ["2 Invention Patents", "4 Utility Patents", "6 Years Excellence", "IP Leadership"],
  },
]

export default function InventionsSection() {
  const [active, setActive] = useState(data[0])

  return (
    <section className="section-padding bg-background">
      <div className="container-main">

        <div className="grid md:grid-cols-3 border rounded-none overflow-hidden">

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
                  className="bg-card border rounded-xl p-2 text-center hover:shadow-md transition"
                >
                  <div className="w-10 h-2 mx-auto mb-2 bg-muted rounded-md"></div>
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