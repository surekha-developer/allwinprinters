// "use client"

// import Image from "next/image"
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card"

// import { ArrowRight } from "lucide-react"

// type Product = {
//   name: string
//   category: string
//   description: string
//   image: string
//   slug: string
// }

// const featuredProducts: Product[] = [
//   {
//     name: "Allwin Konica 512i Solvent Printer",
//     category: "Digital Printing",
//     description:
//       "High-speed solvent printer with Konica 512i heads for outdoor advertising.",
//     image:
//       "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80",
//     slug: "konica-512i-solvent",
//   },
//   {
//     name: "UV Flatbed Printer 2513",
//     category: "Digital Printing",
//     description:
//       "Multi-purpose UV flatbed printer for glass, wood, metal, and acrylic printing.",
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
//     slug: "uv-flatbed-2513",
//   },
//   {
//     name: "Fiber Laser Cutting Machine",
//     category: "Laser & Cutting",
//     description:
//       "High-precision fiber laser for metal cutting with automatic feeding system.",
//     image:
//       "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
//     slug: "fiber-laser-cutter",
//   },
//   {
//     name: "DTF Printer 60cm",
//     category: "Digital Printing",
//     description:
//       "Direct to film printer with powder shaker for T-shirt and textile printing.",
//     image:
//       "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=800&q=80",
//     slug: "dtf-printer-60",
//   },
//   {
//     name: "CNC Router Machine 1325",
//     category: "Laser & Cutting",
//     description:
//       "Heavy-duty CNC router for wood, acrylic, MDF, and aluminum machining.",
//     image:
//       "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
//     slug: "cnc-router-1325",
//   },
//   {
//     name: "Channel Letter Bending Machine",
//     category: "Signage & Finishing",
//     description:
//       "Automatic CNC channel letter bender for professional signage fabrication.",
//     image:
//       "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80",
//     slug: "letter-bender",
//   },
// ]

// export default function FeaturedProducts() {
//   return (
//     <section className="py-20 lg:py-28 bg-secondary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}

//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">

//           <div>
//             <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
//               Featured
//             </p>

//             <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
//               Popular Machines
//             </h2>
//           </div>

//           <Link href="/products">

//             <Button variant="outline" className="rounded-full">
//               View All Products
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Button>

//           </Link>

//         </div>

//         {/* Products Grid */}

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {featuredProducts.map((product) => (

//             <Card
//               key={product.slug}
//               className="group overflow-hidden hover:shadow-xl transition-all duration-300"
//             >

//               {/* Product Image */}

//               <div className="relative h-52 w-full overflow-hidden">

//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//               </div>

//               {/* Product Content */}

//               <CardContent className="p-5">

//                 <Badge
//                   variant="secondary"
//                   className="mb-3 text-xs"
//                 >
//                   {product.category}
//                 </Badge>

//                 <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-1">
//                   {product.name}
//                 </h3>

//                 <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//                   {product.description}
//                 </p>

//                 <Link href={`/products/${product.slug}`}>

//                   <Button
//                     variant="ghost"
//                     className="p-0 h-auto text-accent hover:text-accent/80 text-sm font-medium"
//                   >
//                     View Details
//                     <ArrowRight className="ml-1 w-3.5 h-3.5" />
//                   </Button>

//                 </Link>

//               </CardContent>

//             </Card>

//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }

//...............

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
}

const featuredProducts: Product[] = [
  {
    name: "Allwin Konica 512i Solvent Printer",
    category: "Digital Printing",
    description:
      "High-speed solvent printer with Konica 512i heads for outdoor advertising.",
    image:
      "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    slug: "konica-512i-solvent",
  },
  {
    name: "UV Flatbed Printer 2513",
    category: "Digital Printing",
    description:
      "Multi-purpose UV flatbed printer for glass, wood, metal, and acrylic printing.",
    image:
      "https://newcleartechnologies.com/wp-content/uploads/2024/10/UVHybrid-1024x448.png",
    slug: "uv-flatbed-2513",
  },
  {
    name: "Fiber Laser Cutting Machine",
    category: "Laser & Cutting",
    description:
      "High-precision fiber laser for metal cutting with automatic feeding system.",
    image:
      "https://newcleartechnologies.com/wp-content/uploads/2024/11/pinchroller.png",
    slug: "fiber-laser-cutter",
  },
  {
    name: "DTF Printer 60cm",
    category: "Digital Printing",
    description:
      "Direct to film printer with powder shaker for T-shirt and textile printing.",
    image:
      "https://newcleartechnologies.com/wp-content/uploads/2024/07/allwin-1-1024x408.png",
    slug: "dtf-printer-60",
  },
  {
    name: "CNC Router Machine 1325",
    category: "Laser & Cutting",
    description:
      "Heavy-duty CNC router for wood, acrylic, MDF, and aluminum machining.",
    image:
      "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    slug: "cnc-router-1325",
  },
  {
    name: "Channel Letter Bending Machine",
    category: "Signage & Finishing",
    description:
      "Automatic CNC channel letter bender for professional signage fabrication.",
    image:
      "https://newcleartechnologies.com/wp-content/uploads/2024/07/allwin-1-1024x408.png",
    slug: "letter-bender",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              View All Products
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

              <div className="relative h-52 overflow-hidden bg-muted">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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

                <Link href={`/products/${product.slug}`}>

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