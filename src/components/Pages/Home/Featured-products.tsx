

"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

type Product = {
  name: string
  category: string
  description: string
  image: string
  slug: string
  categorySlug: string
  customLink?: string
}

const featuredProducts: Product[] = [
  {
    name: "DIGITAL SOLVENT FLEX PRINTER",
    category: "",
    description:
      "C8-512i (KM512i/30pl)",
    image:
      "/images/SolventPrintingMachines/imgi_4_C8-512i_KM512i_30pl_KM1024_42pl.png",
    slug: "digital-solvent-flex-printer",
    categorySlug: "solvent-printing-machines",
  },
  {
    name: "Allwin 1024i Pro Series",
    category: "Digital Printing",
    description:
      "KM1024i-13pl/30pl",
    image:
      "/images/SolventPrintingMachines/imgi_9_allwin1024-768x337.png",
    slug: "allwin-1024i-pro-series",
    categorySlug: "solvent-printing-machines",
  },
  {
    name:"C8 PRO 512I Solvent Printer",
    // name: "Allwin 512i Pro",
    category: "Digital Printing",
    description:
      "Industrial hybrid UV printer for both rigid and flexible media.",
    image:
      "/images/Feature512iprosolventprinter/Feature512isolventprinter.png",
    slug: "c8pro512isolventprinter",
    categorySlug: "uv-printing-machines",
    customLink: "/c8pro512isolventprinter",
  },
  {
    name: "Konica & Richo 2513 UV Flatbed Printer",
    category: "UV Printing",
    description:
      "Flagship Model UV2513/UV3225",
    image:
      "/images/UVPrinters/imgi_26_flatbed-768x364.png",
    slug: "konica-richo-2513-uv-flatbed-printer",
    categorySlug: "uv-printing-machines",
  },

  {
    name: "1.8 meter UV Hybrid Printer",
    category: "UV Printing Machines",
    description:
      "ALWIN-E 180 4UV",
    image:
      "/images/UVPrinters/imgi_19_UVHybrid.png",
    slug: "1-8-meter-uv-hybrid-printer",
    categorySlug: "uv-printing-machines",
  },
  {
    name: "Mimaki ARIII Cutting Plotter",
    category: "Signage & Finishing",
    description:
      "",
    image:
      "/images/vinylcuttingplotters/imgi_2_vinyl1.png",
    slug: "mimaki-ariii-cutting-plotter",
    categorySlug: "vinyl-cutting-plotters",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-main">

        {/* Section Header */}

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">

          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Featured
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Popular Machines
            </h2>
          </div>

          <Link href="/products/solvent-printing-machines">
            <Button variant="outline" className="rounded-full p-5">
              View Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>

        </div>

        {/* Products Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {featuredProducts.map((product) => (

            <div
              key={product.slug}
              className="group bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}

              <div className="relative h-56 overflow-hidden bg-sky-50/50 border-b border-sky-100 flex items-center justify-center">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-5">

               

                <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Dynamic Route */}

                <Link href={product.customLink || `/products/${product.categorySlug}/${product.slug}`}>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-accent hover:text-accent/80 text-sm font-medium"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}