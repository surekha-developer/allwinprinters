


"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaAngleDoubleRight } from "react-icons/fa"
import { BiSolidPhoneCall } from "react-icons/bi"
import { motion } from "framer-motion"

export default function HeroSection() {

  const logos = [
   
    "/images/SolventPrintingMachines/imgi_4_C8-512i_KM512i_30pl_KM1024_42pl.png",
   
    "/images/SolventPrintingMachines/imgi_8_allwin1024-300x132.png",
   
    "/images/UVPrinters/imgi_10_pinchroller.png",
    "/images/UVPrinters/imgi_11_MODEL_RUBBER_ROLLER.png",
    "/images/UVPrinters/imgi_16_allwin-1.png",
    "/images/UVPrinters/imgi_19_UVHybrid.png",
    "/images/UVPrinters/imgi_24_pichroller.png",
    "/images/UVPrinters/imgi_26_flatbed-768x364.png",
    "/images/ecoSolventPrintingMachines/imgi_2_ALLWIN-ECO-SOLVENT-A-180.webp",
    "/images/ecoSolventPrintingMachines/imgi_4_ALLWIN-ECO-SOLVENT-2-HEAD-4-COLOUR-PRINTER-2.png",
    "/images/ecoSolventPrintingMachines/imgi_5_ORIC-SINGLE-HEAD-ECO-SOLVENT-PRINTER-1.png",
    "/images/FiberLaserMachines/imgi_3_DOBOSEN_300.png",
    "/images/FiberLaserMachines/imgi_4_RAYT-HAND-HELD.png",
    "/images/FiberLaserMachines/imgi_7_YuemingFIber.png",
    "/images/FiberLaserMachines/imgi_8_fiberMarking.png",
    "/images/FiberLaserMachines/imgi_9_MARKING.png",
    "/images/LetterBendingMachines/imgi_2_DOBOSEN-ALUMINIUM.png",
    "/images/LetterBendingMachines/imgi_4_STEEL.png",
    "/images/sheetCutters/imgi_3_SAGA-ADSORBED-1.png",
    "/images/sheetCutters/imgi_4_camera.png",
    "/images/sheetCutters/imgi_5_SHEET-CUTTER.png",
    "/images/laminationmachines/imgi_2_Fy350.png",
    "/images/laminationmachines/imgi_4_FAYON2-1.png",
    "/images/vinylcuttingplotters/imgi_2_vinyl1.png",
    "/images/vinylcuttingplotters/imgi_5_SAGA-VINYL-CUTTING-PLOTTER-WITH-CAMERA.png",
    "/images/vinylcuttingplotters/imgi_7_SAGA-FLATBED-CUTTER-420-4.png",
    "/images/printingInks/imgi_2_toyo_eco_solvent_ink.png",
    "/images/printingInks/imgi_4_smellless_inks_for_512_1024i.png",
    "/images/printingInks/imgi_5_ink_toyo_uv_high_quality.png",
    "/images/printingInks/imgi_7_ink_new_sign_budgeted_inks_for_512_512i.png",
   
    
  ]

  return (
    <section className="bg-muted pt-10 pb-8">

      <div className="container-main">

        {/* HERO GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

          
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
              <a
  href="tel:8712413159"
  className="px-6 py-2 rounded-4xl flex items-center gap-3"
>
  <motion.div
    animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
    transition={{
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 2,
    }}
  >
    <BiSolidPhoneCall size={30} />
  </motion.div>

  <span className=" pt-[-3] text-3xl font-bold bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
  87124 13159
</span>
</a>

              <Link href="/products/solvent-printing-machines">
                           <button className="btn-gradient px-6 py-2 rounded-4xl flex items-center gap-2">
                  Explore Products
                  <FaAngleDoubleRight />
                </button>
              </Link>

       {/* <a
  href="tel:8712413159"
  className="px-6 py-2 rounded-4xl flex items-center gap-3"
>
 <motion.div
  animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
  transition={{
    duration: 0.4,
    repeat: Infinity,
    repeatDelay: 2,
  }}
>
  <BiSolidPhoneCall size={30} />
</motion.div>
  87124 13159
</a> */}



            </div>

          </div>

          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 group bg-black">
              <video
                src="/images/video/allwinvideo.mp4"
                poster="https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>


        {/* COMPANY HIGHLIGHTS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {[
  { value: "1000+", label: "Machines Installed" },
  { value: "22+", label: "Years Experience" },
  { value: "97%", label: "Client Retention" },
  { value: "24/7", label: "Availability" },
].map((stat, i) => (
            <motion.div
              key={i}
              className="group relative rounded-xl p-[2px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            >
              {/* This is the border gradient that appears on hover, matching the button */}
              <div className="absolute inset-0 rounded-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative h-full w-full bg-card dark:bg-black p-6 rounded-xl text-center shadow-sm flex flex-col items-center justify-center z-10 transition-colors">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}

        </div>


        {/* TRUSTED BRANDS */}
        <div className="mt-12 text-center">

        <p className="text-muted-foreground mb-10 text-lg">
  Trusted Worldwide in Printing
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