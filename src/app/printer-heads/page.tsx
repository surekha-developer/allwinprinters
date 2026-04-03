"use client";
// import Image from "next/image";
import { motion } from "framer-motion";
import Image from "next/image";
import KM1024i from "@/components/PrinterHeads/KM1024i";
import KM1800i from "@/components/PrinterHeads/KM1800i";

export default function PrinterHeadsPage() {
  return (
    <section className="relative py-20 bg-gray-50 min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 flex justify-center flex-wrap"
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {"Printer Heads".split("").map((char, index) => (
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
            className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          >
            Introducing our state-of-the-art Flex and Textile Solvent Printing Machine: the ultimate solution for vibrant, high-quality prints on a variety of materials. Engineered for precision and efficiency, this machine delivers stunning colors and sharp details with every print, whether you&apos;re working with flexible media or textiles. Its advanced solvent technology ensures long-lasting durability and resistance to fading, while its user-friendly interface and robust construction provide reliable performance in any production environment. Elevate your printing capabilities and bring your creative visions to life with unparalleled ease and excellence.
          </motion.p>
        </div>

        {/* QUICK NAVIGATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-center">
          <div 
            onClick={() => document.getElementById('km1024i')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col items-center border border-gray-200 hover:border-[#00AEEF] group"
          >
            <div className="w-40 h-28 relative mb-6">
              <Image src="/images/KM1024i Seriesimages/imgi_6_img_products.jpg" alt="KM 1024i" fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="text-[#00AEEF] text-xl font-bold">KM 1024i Series</h3>
            <p className="text-gray-500 text-sm mt-2">View Specifications</p>
          </div>
          
          <div 
            onClick={() => document.getElementById('km512i')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col items-center border border-gray-200 hover:border-[#00AEEF] group"
          >
            <div className="w-40 h-28 relative mb-6">
               <Image src="/images/Printer Heads – newcleartechnologies/imgi_5_spec_pict001.jpg" alt="KM 512i" fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="text-[#00AEEF] text-xl font-bold">KM 512i Series</h3>
            <p className="text-gray-500 text-sm mt-2">View Specifications</p>
          </div>

          <div 
            onClick={() => document.getElementById('km1800i')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col items-center border border-gray-200 hover:border-[#00AEEF] group"
          >
            <div className="w-40 h-28 relative mb-6">
              <Image src="/images/KM1800i seriesimages/imgi_6_img_products.jpg" alt="KM 1800i" fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h3 className="text-[#00AEEF] text-xl font-bold">KM 1800i Series</h3>
            <p className="text-gray-500 text-sm mt-2">View Specifications</p>
          </div>
        </div>

        {/* TABLE 1: KM 1024i */}
        <div id="km1024i" className="scroll-mt-24">
          <KM1024i />
        </div>

        {/* TABLE 2: KM 512 */}
        <div id="km512i" className="mb-20 grid grid-cols-1 lg:grid-cols-4 gap-0 items-stretch border border-gray-300 shadow-sm bg-white scroll-mt-24 w-full">
          <div className="lg:col-span-1 bg-[#b9bbbd] p-6 flex flex-col items-center justify-start h-full min-h-[300px]">
             <span className="bg-[#666666] text-white px-8 py-1.5 rounded-sm text-sm font-bold mb-6 tracking-wide shadow-sm border border-black/10">KM 512i</span>
             <div className="relative w-full aspect-square mb-4">
               <div className="w-full h-full border border-gray-400 rounded-md flex flex-col items-center justify-center overflow-hidden bg-white/50 w-full max-w-[200px] aspect-square">
                 <Image src="/images/Printer Heads – newcleartechnologies/imgi_5_spec_pict001.jpg" alt="KM 512" fill className="object-contain p-4" />
                 <span className="absolute bottom-2 text-xs font-semibold text-gray-700 bg-white/80 px-2 rounded"></span>
               </div>
             </div>
             <div className="text-xs text-black font-medium mt-auto text-center w-full flex justify-between px-2 max-w-[200px]">
                <span>W 67mm</span> <span>D 20mm</span> <span>H 72mm</span>
             </div>
          </div>
          <div className="lg:col-span-3 overflow-x-auto w-full">
            <table className="w-full min-w-[800px] text-center text-xs text-gray-700 h-full border-l border-gray-300">
              <thead>
                <tr className="bg-[#f2f2f2] border-b border-gray-300 text-gray-600">
                  <th className="p-3 border-r border-gray-300 font-semibold w-[20%]">Printhead Name</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KMS12LNX</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KMS12LHX</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KMS12MNX</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KMS12MHX</th>
                  <th className="p-3 font-medium">KMS12LNX 35</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Technology</td><td colSpan={5} className="p-3 tracking-wide">Piezo Drop on Demand (Shared wall 3 cycle)</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Resolution</td><td colSpan={5} className="p-3 tracking-wide">180dpi × 2lines = 360dpi</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Number of Nozzles</td><td colSpan={5} className="p-3 tracking-wide">256nozzles × 2lines = 512nozzles</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Nozzle Pitch</td><td colSpan={5} className="p-3 tracking-wide">70.5µm (141µm 2lines)</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Drop Size</td><td colSpan={2} className="p-3 border-r border-gray-300 font-medium">42pl</td><td colSpan={2} className="p-3 border-r border-gray-300 font-medium">14 pl</td><td className="p-3 font-medium">35pl</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Max Frequency</td><td colSpan={2} className="p-3 border-r border-gray-300">7.6kHz</td><td colSpan={2} className="p-3 border-r border-gray-300">12.8 kHz</td><td className="p-3">10kHz</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Printing Width</td><td colSpan={5} className="p-3">36.1mm</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Dimensions</td><td colSpan={5} className="p-3">67mm W × 40mm D × 65mm H</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Weight</td><td colSpan={5} className="p-3">About 95g</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Grey scale</td><td colSpan={2} className="p-3 border-r border-gray-300">-</td><td colSpan={2} className="p-3 border-r border-gray-300">4 levels</td><td className="p-3">-</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Internal Heater</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3">-</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Solvent Ink</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3">O</td></tr>
                <tr className=""><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">UV Ink</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3">-</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE 3: KM 1800i */}
        <div id="km1800i" className="scroll-mt-24">
          <KM1800i />
        </div>

      </div>
    </section>
  );
}
