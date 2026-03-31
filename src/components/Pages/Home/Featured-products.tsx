

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
}

const featuredProducts: Product[] = [
  {
    name: "Allwin Konica 512i Solvent Printer",
    category: "Digital Printing",
    description:
      "High-speed solvent printer with Konica 512i heads for outdoor advertising.",
    image:
      "/images/SolventPrintingMachines/imgi_4_C8-512i_KM512i_30pl_KM1024_42pl.png",
    slug: "digital-solvent-flex-printer",
    categorySlug: "solvent-printing-machines",
  },
  {
    name: "Allwin 1024i Pro Series",
    category: "Digital Printing",
    description:
      "Professional flex & banner printing with KM1024i industrial heads.",
    image:
      "/images/SolventPrintingMachines/imgi_9_allwin1024-768x337.png",
    slug: "allwin-1024i-pro-series",
    categorySlug: "solvent-printing-machines",
  },
   {
    name: "Allwin 5128 Pro 9888H",
    category: "UV Printing",
    description:
      "Industrial hybrid UV printer for both rigid and flexible media.",
    image:
      "/images/UVPrinters/imgi_19_UVHybrid.png",
    slug: "10-feet-giant-uv-hybrid-printer",
    categorySlug: "uv-printing-machines",
  },
  {
    name: "UV Flatbed Printer 2513",
    category: "UV Printing",
    description:
      "High-precision UV flatbed for glass, wood, metal, and acrylic printing.",
    image:
      "/images/UVPrinters/imgi_26_flatbed-768x364.png",
    slug: "konica-richo-2513-uv-flatbed-printer",
    categorySlug: "uv-printing-machines",
  },
 
  {
    name: "Allwin 988H CNC Printer",
    category: "CNC & Laser",
    description:
      "High-performance industrial machine for specialized applications.",
    image:
      "/images/CNCRouterMachines/imgi_5_RAYT-CNC-ROUTER.png",
    slug: "#",
    categorySlug: "cnc-router-machines",
  },
  {
    name: "Mimaki ARIII Cutting Plotter",
    category: "Signage & Finishing",
    description:
      "High-speed professional cutting plotter with 550g pressure and superior stability.",
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

                <Badge variant="secondary" className="mb-3 text-xs">
                  {product.category}
                </Badge>

                <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Dynamic Route */}

                <Link href={`/products/${product.categorySlug}/${product.slug}`}>

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