"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
            Introducing our state-of-the-art Flex and Textile Solvent Printing Machine: the ultimate solution for vibrant, high-quality prints on a variety of materials. Engineered for precision and efficiency, this machine delivers stunning colors and sharp details with every print, whether you're working with flexible media or textiles. Its advanced solvent technology ensures long-lasting durability and resistance to fading, while its user-friendly interface and robust construction provide reliable performance in any production environment. Elevate your printing capabilities and bring your creative visions to life with unparalleled ease and excellence.
          </motion.p>
        </div>

        {/* TWO HEADINGS & IMAGES */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 mb-16 text-center">
          <div>
            <h3 className="text-[#00AEEF] text-lg font-semibold mb-4">Add Your Heading Text Here</h3>
            <div className="w-48 h-32 relative mx-auto">
              <Image src="/images/Printer Heads – newcleartechnologies/imgi_2_print_head.jpg" alt="Printer Head 1" fill className="object-contain" />
            </div>
          </div>
          <div>
            <h3 className="text-[#00AEEF] text-lg font-semibold mb-4">Add Your Heading Text Here</h3>
            <div className="w-48 h-32 relative mx-auto">
               <Image src="/images/Printer Heads – newcleartechnologies/imgi_3_original-konica-km1024mhb-14pl-uv-printhead_1445520.jpg" alt="Printer Head 2" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* TABLE 1: KM 1024 */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-4 gap-0 items-stretch border border-gray-300 shadow-sm bg-white">
          <div className="lg:col-span-1 bg-[#b9bbbd] p-6 flex flex-col items-center justify-start h-full min-h-[300px]">
             <span className="bg-[#666666] text-white px-8 py-1.5 rounded-sm text-sm font-bold mb-6 tracking-wide shadow-sm border border-black/10">KM 1024</span>
             <div className="relative w-full aspect-square mb-4">
               <div className="w-full h-full border border-gray-400 rounded-md flex flex-col items-center justify-center overflow-hidden bg-white/50">
                 <Image src="/images/Printer Heads – newcleartechnologies/imgi_4_spec_pict0012.jpg" alt="KM 1024" fill className="object-contain p-4" />
                 <span className="absolute bottom-2 text-xs font-semibold text-gray-700 bg-white/80 px-2 rounded"></span>
               </div>
             </div>
             <div className="text-xs text-black font-medium mt-auto text-center w-full flex justify-between px-2">
                <span>W 131mm</span> <span>D 18mm</span> <span>H 89mm</span>
             </div>
          </div>
          <div className="lg:col-span-3 overflow-x-auto">
            <table className="w-full text-center text-xs text-gray-700 h-full border-l border-gray-300">
              <thead>
                <tr className="bg-[#f2f2f2] border-b border-gray-300 text-gray-600">
                  <th className="p-3 border-r border-gray-300 font-semibold w-[20%]">Printhead Name</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KM1024SHB</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KM1024MHB</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KM1024VHB</th>
                  <th className="p-3 border-r border-gray-300 font-medium">KM1024UHB</th>
                  <th className="p-3 font-medium">KM1024LHB</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Technology</td><td colSpan={5} className="p-3 tracking-wide">Piezo Drop on Demand (Shared wall 3 cycle)</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Resolution</td><td colSpan={5} className="p-3 tracking-wide">180dpi × 2lines = 360dpi</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Number of Nozzles</td><td colSpan={5} className="p-3 tracking-wide">512nozzles × 2lines = 1024nozzles</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Nozzle Pitch</td><td colSpan={5} className="p-3 tracking-wide">70.5µm (141.0µm 2lines)</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Drop Size</td><td className="p-3 border-r border-gray-300 font-medium">6 pl</td><td colSpan={3} className="p-3 border-r border-gray-300 font-medium">14 pl</td><td className="p-3 font-medium">42 pl</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Max Frequency</td><td className="p-3 border-r border-gray-300">30.0 kHz</td><td colSpan={2} className="p-3 border-r border-gray-300">12.8 kHz</td><td className="p-3 border-r border-gray-300">6.7 kHz</td><td className="p-3">7.6 kHz</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Printing Width</td><td colSpan={5} className="p-3">72mm</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Dimensions</td><td colSpan={5} className="p-3">W131mm × D18mm × H89mm</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Weight</td><td colSpan={5} className="p-3">150g</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Grey scale</td><td colSpan={5} className="p-3">8 levels</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Internal Heater</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">-</td><td className="p-3">-</td></tr>
                <tr className="border-b border-gray-300"><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">Solvent Ink</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3">O</td></tr>
                <tr className=""><td className="p-3 border-r border-gray-300 bg-[#f2f2f2]">UV Ink</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">Δ</td><td className="p-3 border-r border-gray-300">O</td><td className="p-3 border-r border-gray-300">Δ</td><td className="p-3">O</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TABLE 2: KM 512 */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-4 gap-0 items-stretch border border-gray-300 shadow-sm bg-white">
          <div className="lg:col-span-1 bg-[#b9bbbd] p-6 flex flex-col items-center justify-start h-full min-h-[300px]">
             <span className="bg-[#666666] text-white px-8 py-1.5 rounded-sm text-sm font-bold mb-6 tracking-wide shadow-sm border border-black/10">KM 512</span>
             <div className="relative w-full aspect-square mb-4">
               <div className="w-full h-full border border-gray-400 rounded-md flex flex-col items-center justify-center overflow-hidden bg-white/50">
                 <Image src="/images/Printer Heads – newcleartechnologies/imgi_5_spec_pict001.jpg" alt="KM 512" fill className="object-contain p-4" />
                 <span className="absolute bottom-2 text-xs font-semibold text-gray-700 bg-white/80 px-2 rounded"></span>
               </div>
             </div>
             <div className="text-xs text-black font-medium mt-auto text-center w-full flex justify-between px-2">
                <span>W 67mm</span> <span>D 20mm</span> <span>H 72mm</span>
             </div>
          </div>
          <div className="lg:col-span-3 overflow-x-auto">
            <table className="w-full text-center text-xs text-gray-700 h-full border-l border-gray-300">
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

      </div>
    </section>
  );
}
