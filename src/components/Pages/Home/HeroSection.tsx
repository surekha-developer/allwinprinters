

// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export default function HeroSection() {

//   const logos = [

//     "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//    "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//       "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//    "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//       "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//    "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//   ]

//   return (
//     <section className="bg-muted pt-8 pb-12">

//       <div className="container-main">

//         {/* HERO GRID */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT CONTENT */}
//           <div>

//             <div className="border border-dashed border-orange-400 rounded-xl px-6 py-4 mb-6">
//               <h1 className="text-4xl lg:text-5xl font-semibold text-orange-500">
//                 AI Transformation Service
//               </h1>
//             </div>

//             <p className="text-muted-foreground text-lg mb-8">
//               Business-impacting Problems Need Business-centric Solutions
//             </p>

//             <Link href="/contact">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg">
//                 Connect with Us
//               </Button>
//             </Link>

//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center">

//             <Image
//               src="https://newcleartechnologies.com/wp-content/uploads/2024/09/p6.jpg"
//               alt="AI dashboard"
//               width={700}
//               height={500}
//               className="w-full max-w-lg rounded-xl"
//             />

//           </div>

//         </div>


//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">1000+</div>
//             <div className="text-muted-foreground text-sm">Projects Delivered</div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">24+</div>
//             <div className="text-muted-foreground text-sm">Years Experience</div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">97%</div>
//             <div className="text-muted-foreground text-sm">Client Retention</div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">100%</div>
//             <div className="text-muted-foreground text-sm">Global Reach</div>
//           </div>

//         </div>


//         {/* TRUSTED BRANDS */}
//         <div className="mt-16 text-center">

//           <p className="text-muted-foreground mb-8 text-lg">
//             Trusted by World's Best
//           </p>

//           <div className="relative overflow-hidden">

//             {/* LEFT FADE */}
//             <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-muted to-transparent z-10" />

//             {/* RIGHT FADE */}
//             <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-muted to-transparent z-10" />

//             {/* LOGO SLIDER */}
//             <div className="flex gap-16 animate-logo-scroll">

//               {[...logos, ...logos].map((logo, index) => (
//                 <Image
//                   key={index}
//                   src={logo}
//                   alt="brand"
//                   width={140}
//                   height={60}
//                   className="h-30 w-auto object-contain shrink-0"
//                 />
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }

//.................above code is *****



// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export default function HeroSection() {

//   const logos = [

//     "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//    "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//       "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//    "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//       "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//    "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://cdn.prod.website-files.com/650984e3434038c5970dc29e/6846f06984e623a2d79f8550_banner_homeNew.svg",
//   ]

//   return (
//     <section className="bg-muted pt-8 pb-12">

//       <div className="container-main">

//         {/* HERO GRID */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT CONTENT */}
//           <div>

//             <div className="border border-dashed border-orange-400 rounded-xl px-6 py-4 mb-6">
//               <h1 className="text-4xl lg:text-5xl font-semibold text-orange-500">
//                 AI Transformation Service
//               </h1>
//             </div>

//             <p className="text-muted-foreground text-lg mb-8">
//               Business-impacting Problems Need Business-centric Solutions
//             </p>

//             <Link href="/contact">
//               <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg">
//                 Connect with Us
//               </Button>
//             </Link>

//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center">

//             <Image
//               src="https://newcleartechnologies.com/wp-content/uploads/2024/09/p6.jpg"
//               alt="AI dashboard"
//               width={700}
//               height={500}
//               className="w-full max-w-lg rounded-xl"
//             />

//           </div>

//         </div>


//         {/* STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">1000+</div>
//             <div className="text-muted-foreground text-sm">Projects Delivered</div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">24+</div>
//             <div className="text-muted-foreground text-sm">Years Experience</div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">97%</div>
//             <div className="text-muted-foreground text-sm">Client Retention</div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">100%</div>
//             <div className="text-muted-foreground text-sm">Global Reach</div>
//           </div>

//         </div>


//         {/* TRUSTED BRANDS */}
//         <div className="mt-16 text-center">

//           <p className="text-muted-foreground mb-8 text-lg">
//             Trusted by World's Best
//           </p>

//          <div className="relative overflow-hidden">

//   {/* LEFT FADE */}
//   <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-muted to-transparent z-10" />

//   {/* RIGHT FADE */}
//   <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-muted to-transparent z-10" />

//   {/* LOGO TRACK */}
//   <div className="logo-slider">

//     {[...logos, ...logos].map((logo, index) => {
//       const name = `Brand ${index + 1}`

//       return (
//         <div key={index} className="logo-item group">

//           <Image
//             src={logo}
//             alt={name}
//             width={140}
//             height={60}
//             className="h-30 w-auto object-contain"
//           />

//           {/* Hover label */}
//           <span className="logo-name">
//             {name}
//           </span>

//         </div>
//       )
//     })}

//   </div>

// </div> 

//         </div>

//       </div>

//     </section>
//   )
// }

//.............above code is good

// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export default function HeroSection() {

//   const logos = [
//     "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://newcleartechnologies.com/wp-content/uploads/2024/10/UVHybrid-1024x448.png",
//     "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://newcleartechnologies.com/wp-content/uploads/2024/07/allwin-1-1024x408.png",
//     "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     "https://newcleartechnologies.com/wp-content/uploads/2024/10/UVHybrid-1024x448.png",
//   ]

//   return (
//     <section className="bg-muted pt-14 pb-12">

//       <div className="container-main">

//         {/* HERO GRID */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT CONTENT */}
//           <div>

//             <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
//               Industrial Large Format Printing Solutions
//             </h1>

//             <p className="text-muted-foreground text-lg mb-8 max-w-xl">
//               High-performance UV, eco-solvent and solvent printers designed
//               for speed, precision and reliability for professional printing
//               businesses.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4">

//               <Link href="/products">
//                 <Button className="px-8 py-6 text-lg">
//                   Explore Products
//                 </Button>
//               </Link>

//               <Link href="/contact">
//                 <Button variant="outline" className="px-8 py-6 text-lg">
//                   Contact Us
//                 </Button>
//               </Link>

//             </div>

//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center">

//             <Image
//               src="https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png"
//               alt="Large format industrial printing machine"
//               width={700}
//               height={500}
//               className="w-full max-w-lg rounded-xl"
//             />

//           </div>

//         </div>


//         {/* COMPANY HIGHLIGHTS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">1000+</div>
//             <div className="text-muted-foreground text-sm">
//               Machines Installed
//             </div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">24+</div>
//             <div className="text-muted-foreground text-sm">
//               Years Experience
//             </div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">97%</div>
//             <div className="text-muted-foreground text-sm">
//               Client Retention
//             </div>
//           </div>

//           <div className="bg-card p-6 rounded-xl text-center shadow-sm">
//             <div className="text-2xl font-bold">60+</div>
//             <div className="text-muted-foreground text-sm">
//               Countries Served
//             </div>
//           </div>

//         </div>


//         {/* TRUSTED BRANDS */}
//         <div className="mt-12 text-center">

//           <p className="text-muted-foreground mb-4 text-lg">
//             Trusted by Global Printing Businesses
//           </p>

//           <div className="relative overflow-hidden">

//             {/* LEFT FADE */}
//             <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-muted to-transparent z-10" />

//             {/* RIGHT FADE */}
//             <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-muted to-transparent z-10" />

//             {/* LOGO TRACK */}
//             <div className="logo-slider">

//               {[...logos, ...logos].map((logo, index) => {
//                 const name = `Brand ${index + 1}`

//                 return (
//                   <div key={index} className="logo-item group">

//                     <Image
//                       src={logo}
//                       alt={name}
//                       width={140}
//                       height={60}
//                       className="h-30 w-auto object-contain"
//                     />

//                     <span className="logo-name">
//                       {name}
//                     </span>

//                   </div>
//                 )
//               })}

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }

//............


"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaAngleDoubleRight } from "react-icons/fa"
import { BiSolidPhoneCall } from "react-icons/bi"
import { motion } from "framer-motion"

export default function HeroSection() {

  const logos = [
    // "/images/SolventPrintingMachines/imgi_2_1024.png",
    // "/images/SolventPrintingMachines/imgi_3_allwin.png",
    "/images/SolventPrintingMachines/imgi_4_C8-512i_KM512i_30pl_KM1024_42pl.png",
    // "/images/SolventPrintingMachines/imgi_5_allwin1024.png",
    // "/images/SolventPrintingMachines/imgi_6_1024-300x170.png",
    // "/images/SolventPrintingMachines/imgi_7_C8-512i_KM512i_30pl_KM1024_42pl-300x164.png",
    "/images/SolventPrintingMachines/imgi_8_allwin1024-300x132.png",
    // "/images/SolventPrintingMachines/imgi_9_allwin1024-768x337.png",
    // "/images/UVPrinters/imgi_7_002-1.png",
    "/images/UVPrinters/imgi_10_pinchroller.png",
    "/images/UVPrinters/imgi_11_MODEL_RUBBER_ROLLER.png",
    "/images/UVPrinters/imgi_16_allwin-1.png",
    "/images/UVPrinters/imgi_19_UVHybrid.png",
    "/images/UVPrinters/imgi_24_pichroller.png",
    "/images/UVPrinters/imgi_26_flatbed-768x364.png",
    "/images/ecoSolventPrintingMachines/imgi_2_ALLWIN-ECO-SOLVENT-A-180.webp",
    "/images/ecoSolventPrintingMachines/imgi_4_ALLWIN-ECO-SOLVENT-2-HEAD-4-COLOUR-PRINTER-2.png",
    "/images/ecoSolventPrintingMachines/imgi_5_ORIC-SINGLE-HEAD-ECO-SOLVENT-PRINTER-1.png",
   
    // "https://newcleartechnologies.com/wp-content/uploads/2024/10/UVHybrid-1024x448.png",
    // "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    // "https://newcleartechnologies.com/wp-content/uploads/2024/07/allwin-1-1024x408.png",
    // "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    // "https://newcleartechnologies.com/wp-content/uploads/2024/10/UVHybrid-1024x448.png",
  ]

  return (
    <section className="bg-muted pt-14 pb-12">

      <div className="container-main">

        {/* HERO GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
              Industrial Large Format Printing Solutions
            </h1> */}

            {/* <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              High-performance UV, eco-solvent and solvent printers designed
              for speed, precision and reliability for professional printing
              businesses.
            </p> */}
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Next-Generation Industrial Printing Machines
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Empower your business with our top-tier UV, Eco-Solvent, and DTF printers. Engineered for unmatched speed, precision, and stunning print quality across all formats.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <Link href="/products/solvent-printing-machines">
                           <button className="btn-gradient px-6 py-2 rounded-4xl flex items-center gap-2">
                  Explore Products
                  <FaAngleDoubleRight />
                </button>
              </Link>

       <a
  href="tel:8712413159"
  className="btn-gradient px-6 py-2 rounded-4xl flex items-center gap-3"
>
  <BiSolidPhoneCall size={22} />
  87124 13159
</a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <Image
              src="https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png"
              alt="Large format industrial printing machine"
              width={700}
              height={500}
              className="w-full max-w-lg rounded-xl"
            />

          </div>

        </div>


        {/* COMPANY HIGHLIGHTS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {[
            { value: "1000+", label: "Machines Installed" },
            { value: "22+", label: "Years Experience" },
            { value: "97%", label: "Client Retention" },
            { value: "60+", label: "Countries Served" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="group relative rounded-xl p-[2px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            >
              {/* This is the border gradient that appears on hover, matching the button */}
              <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 btn-gradient" />
              
              <div className="relative h-full w-full bg-card dark:bg-black p-6 rounded-xl text-center shadow-sm flex flex-col items-center justify-center z-10 transition-colors">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}

        </div>


        {/* TRUSTED BRANDS */}
        <div className="mt-12 text-center">

          <p className="text-muted-foreground mb-4 text-lg">
            Trusted by Global Printing Businesses
          </p>

          <div className="relative overflow-hidden">

            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-muted to-transparent z-10" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-muted to-transparent z-10" />

            {/* LOGO TRACK */}
            <div className="logo-slider">

              {[...logos, ...logos].map((logo, index) => {
                const name = `Brand ${index + 1}`

                return (
                  <div key={index} className="logo-item group">

                    <Image
                      src={logo}
                      alt={name}
                      width={140}
                      height={60}
                      className="h-30 w-auto object-contain"
                    />

                    <span className="logo-name">
                      {name}
                    </span>

                  </div>
                )
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}