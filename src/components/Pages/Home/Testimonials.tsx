
"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image";
// import Image from "next/image"

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const testimonials = [
  {
    id: 1,
    text: "AllwinTech delivered exceptional printing solutions that transformed our production speed and quality. Their machines are reliable and built for industrial performance.",
    name: "Ravi Kumar",
    role: "Production Manager",
    company: "PrintPro Pvt Ltd",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "We’ve installed multiple printers from AllwinTech, and the consistency in performance is outstanding. Their support team is equally impressive.",
    name: "Sneha Reddy",
    role: "Operations Head",
    company: "ColorEdge Prints",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text: "From installation to training, AllwinTech handled everything professionally. The ROI we achieved within months was incredible.",
    name: "Arjun Mehta",
    role: "Business Owner",
    company: "FlexPrint Solutions",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 4,
    text: "Their large format printers are fast, accurate, and extremely durable. Perfect for high-volume printing businesses like ours.",
    name: "David Lee",
    role: "CEO",
    company: "NextGen Prints",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    text: "AllwinTech delivered exceptional printing solutions that transformed our production speed and quality.",
    name: "Ravi Kumar",
    role: "Production Manager",
    company: "PrintPro Pvt Ltd",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 6,
    text: "We’ve installed multiple printers from AllwinTech, and the consistency in performance is outstanding.",
    name: "Sneha Reddy",
    role: "Operations Head",
    company: "ColorEdge Prints",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [visibleSlides, setVisibleSlides] = useState(3)

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleSlides(1)
      else if (window.innerWidth < 1024) setVisibleSlides(2)
      else setVisibleSlides(3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // ✅ FIXED NEXT
  const nextSlide = useCallback(() => {
    setCurrent((prev) => {
      if (prev >= testimonials.length - visibleSlides) {
        return 0
      }
      return prev + 1
    })
  }, [visibleSlides])

  // ✅ FIXED PREV
  const prevSlide = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return testimonials.length - visibleSlides
      }
      return prev - 1
    })
  }

  // Autoplay
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [current, nextSlide])

  return (
    <section className="section-padding bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="section-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Testimonials
          </p>

          <h2>
            Trusted by <span className="text-primary">Printing Businesses</span>
          </h2>

          <p>
            Hear what our clients say about our industrial printing solutions.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border bg-card flex items-center justify-center hover:bg-muted transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border bg-card flex items-center justify-center hover:bg-muted transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(100 / visibleSlides) * current}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`px-3 w-full flex-shrink-0 ${
                  visibleSlides === 3
                    ? "lg:w-1/3"
                    : visibleSlides === 2
                    ? "sm:w-1/2"
                    : ""
                }`}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// Card
function Card({ item }: { item: Testimonial }) {
  return (
   <div className="card-soft h-full flex flex-col justify-between border-2 border-border/80 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300">

      <div>
        <Quote className="text-primary/20 mb-4" size={32} />

        {/* Stars */}
        <div className="flex mb-3 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" stroke="none" />
          ))}
        </div>

        <p>{item.text}</p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="text-sm font-semibold">{item.name}</h4>
          <p className="text-xs">{item.role}</p>
          <p className="text-xs text-muted-foreground">{item.company}</p>
        </div>
      </div>

    </div>
  )
}