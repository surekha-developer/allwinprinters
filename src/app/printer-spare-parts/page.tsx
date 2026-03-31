"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const spareParts = [
  { name: "Servo Motor", image: "/images/printerspareparts/imgi_2_Leadshine.jpg" },
  { name: "Driver", image: "/images/printerspareparts/imgi_3_acsdriver606.jpg" },
  { name: "Encoder Strip", image: "/images/printerspareparts/imgi_4_filmstripeencoder.jpg" },
  // { name: "Cap Top", image: "/images/printerspareparts/imgi_10_konicaxaar.jpg" },
  // { name: "Data Cable", image: "/images/printerspareparts/imgi_5_flatdatacable.jpg" },
  // { name: "Head Cable", image: "/images/printerspareparts/imgi_6_headcable.jpg" },
  { name: "Ink Pump", image: "/images/printerspareparts/imgi_7_inkpump.jpg" },
  { name: "Ink Tube", image: "/images/printerspareparts/imgi_8_inktube.jpg" },
  // { name: "Konica Head", image: "/images/printerspareparts/imgi_9_konica-head.jpg" },
  { name: "Long Belt (Konica)", image: "/images/printerspareparts/imgi_11_longbeltkonica.jpg" },
  // { name: "Long Belt (Xaar)", image: "/images/printerspareparts/imgi_12_longbeltxaar.jpg" },
  { name: "Mother Board", image: "/images/printerspareparts/imgi_13_mother-board.jpg" },
  { name: "Original BYHX", image: "/images/printerspareparts/imgi_14_original-byhx.jpg" },
  { name: "Power Supply", image: "/images/printerspareparts/imgi_15_powersupply.jpg" },
  { name: "Small Belts", image: "/images/printerspareparts/imgi_16_small-belts.jpg" },
  // { name: "Cleaning Swab", image: "/images/printerspareparts/imgi_17_wipingcleaning.jpg" },
];

export default function PrinterSparePartsPage() {
  return (
    <section className="relative py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HEADER TEXT */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 flex justify-center flex-wrap"
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {"Printer Spare Parts".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-gray-700 max-w-4xl mx-auto text-base md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Spare parts are an important feature of logistics management and supply chain management. We deals with all the spares for flex printing machines. We provide first-class products and perfect after-sales service.
          </motion.p>
        </div>

        {/* GRID OF SPARE PARTS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {spareParts.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 p-6 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:border-blue-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-gray-800 font-medium text-center text-sm md:text-base group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
