"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export default function WhoWeAre() {
  // ===== Hardcoded Data =====
  const title = "Who We Are"
  const description =
    "For over 22 years, Allwin Technology has collaborated with printing businesses across India, helping them grow faster with high-performance industrial printing solutions. We focus on innovation, precision, and reliability to support businesses in achieving efficiency and excellence."
  const employees = "700+ Employees"
  const rating = "4.6/5"
  const stats = [
    { id: 1, value: "15+", label: "Years in Business" },
    { id: 2, value: "300+", label: "Global Clients" },
    { id: 3, value: "250+", label: "Tech Experts" },
  ]

  return (
    <section className="relative overflow-hidden bg-background section-padding">

      {/* Soft Background Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-r from-pink-100/40 via-purple-100/40 to-blue-100/40 blur-3xl" />

      <div className="container-main relative z-10">

        {/* Grid: 1 column mobile, 2 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT ================= */}
          <div className="space-y-8">

            {/* Who We Are */}
            <div className="space-y-3">
              <h2 className="font-bold text-3xl md:text-4xl leading-tight text-foreground">
                Who{" "}
                <span className="bg-gradient-to-r from-[#FD6585] to-[#FFD3A5] bg-clip-text text-transparent">
                  We Are
                </span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
            </div>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#FD6585] to-[#FFD3A5] mt-4"></div>

            {/* What We Do */}
            <div className="space-y-3">
              <h2 className="font-bold text-3xl md:text-4xl leading-tight text-foreground">
                What{" "}
                <span className="bg-gradient-to-r from-[#FD6585] to-[#FFD3A5] bg-clip-text text-transparent">
                  We Do
                </span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                We deliver high-performance industrial printing solutions, including UV,
                eco-solvent, and digital printers, tailored for businesses to operate efficiently
                and scale rapidly.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {stats.map((item) => (
                <div key={item.id} className="text-center">
                  <h3 className="text-foreground text-xl md:text-2xl font-semibold">{item.value}</h3>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex justify-center md:justify-end">

            <div className="relative w-full max-w-md lg:max-w-lg">

              {/* Image */}
              <Image
                src="https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png"
                alt="Team"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-none shadow-none"
              />

              {/* Employees Card */}
              <div className="absolute top-6 -left-6 bg-card text-card-foreground shadow-xl rounded-xl px-5 py-3">
                <h5 className="font-medium">{employees}</h5>
              </div>

              {/* Rating Card */}
              <div className="absolute -bottom-6 right-4 bg-card text-card-foreground shadow-xl rounded-xl px-5 py-4 w-64">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">{rating}</h4>
                  <div className="flex text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                    <Star size={16} />
                  </div>
                </div>
                <small className="text-muted-foreground">
                  Discover Our Trust score & Employee Reviews
                </small>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}