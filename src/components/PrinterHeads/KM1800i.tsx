"use client";
import { useState } from "react";
import Image from "next/image";

export default function KM1800i() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8">KM1800i Series</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border border-gray-200 p-8 flex justify-center items-center h-[300px] relative">
          <Image src="/images/KM1800i seriesimages/imgi_6_img_products.jpg" alt="KM1800i Series" fill className="object-contain p-4" />
        </div>
        <div className="flex items-start pt-4 text-sm text-gray-700">
          <p>Compact design while achieving a nozzle resolution of 600 npi and a print width of 75 mm.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-gray-200 mb-12">
        <button 
          className={`px-4 sm:px-8 py-3 border border-b-0 font-medium ${activeTab === 'features' ? 'bg-gray-300 text-white' : 'text-gray-500 hover:bg-gray-100'} w-full sm:w-[160px] flex justify-between items-center whitespace-nowrap`}
          onClick={() => setActiveTab('features')}
        >
          Features {activeTab === 'features' ? '>' : '>'}
        </button>
        <button 
          className={`px-4 sm:px-8 py-3 border border-b-0 font-medium ${activeTab === 'specifications' ? 'bg-gray-300 text-white' : 'text-gray-500 hover:bg-gray-100'} w-full sm:w-[160px] flex justify-between items-center whitespace-nowrap`}
          onClick={() => setActiveTab('specifications')}
        >
          Specifications {activeTab === 'specifications' ? '>' : '>'}
        </button>
        <button 
          className={`px-4 sm:px-8 py-3 border border-b-0 font-medium ${activeTab === 'applications' ? 'bg-gray-300 text-white' : 'text-gray-500 hover:bg-gray-100'} w-full sm:w-[160px] flex justify-between items-center whitespace-nowrap`}
          onClick={() => setActiveTab('applications')}
        >
          Applications {activeTab === 'applications' ? '>' : '>'}
        </button>
      </div>

      {activeTab === 'features' && (
        <div className="animate-in fade-in duration-300">
          <h3 className="text-2xl font-bold mb-6 border-b pb-4">Features</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-4">KM1800i Series Highlights</h4>
              
              <div className="ml-4 mb-6">
                <h5 className="font-bold text-base mb-2">- High-resolution, wider print-width printhead series</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  By adopting higher-density nozzle lines than the KM1024i/KM1024a series, the KM1800i series maintains Konica Minolta&apos;s signature compact design while achieving a nozzle resolution of 600 npi and a print width of 75 mm. Engineered for versatility, this advanced printhead delivers exceptional performance across a wide range of applications - from graphics printing to precise patterning of functional materials and thin-film coatings.
                </p>
              </div>

              <div className="ml-4 mb-6">
                <h5 className="font-bold text-base mb-2">- Highest drive frequency</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Designed with Konica Minolta&apos;s proprietary piezo actuator technology, KM1800iSHK-DC achieves a maximum drive frequency of 75 kHz*. With its high resolution of 600 npi and exceptional speed, this printhead is suited for single-pass printers and other productivity-focused applications that demand fast, high-quality output.<br/>
                  <span className="text-[10px] text-gray-400 mt-1 block">* Based on internal testing using Konica Minolta standard ink.</span>
                </p>
              </div>

              <div className="ml-4">
                <h5 className="font-bold text-base mb-2">- Compatible with a wide range of ink types</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enhanced chemical resistance through proprietary technology enables compatibility with a range of inks - from sign and graphics applications to functional materials for printed electronics such as PCBs. The built-in heater allows viscosity reduction at room temperature, enabling stable ink jetting.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8">
              <h4 className="font-bold text-lg mb-4">KM1800iSHK-DC Specific Features</h4>
              
              <div className="ml-4 mb-6">
                <h5 className="font-bold text-base mb-2">- Supports two-color printing</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A unique structural design enables two-color support with a high-density, compact nozzle layout. This contributes to space-saving printhead integration in printers.
                </p>
              </div>

              <div className="ml-4 mb-6">
                <h5 className="font-bold text-base mb-2">- Improved mounting precision</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Compared to previous models, the KM1800iSHK-DC offers enhanced mounting accuracy, simplifying carriage design and reducing time for adjustment during installation.
                </p>
              </div>

              <div className="ml-4">
                <h5 className="font-bold text-base mb-2">- Long Throw Distance jetting technology</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Optimized drive waveform allows increased ink jetting distances than previous models, enabling printing with long distance between the printhead and substrate.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'specifications' && (
        <div className="animate-in fade-in duration-300">
          <h3 className="text-2xl font-bold mb-6 border-b pb-4">Specifications</h3>
          
          <div className="overflow-x-auto w-full border border-gray-300 mt-8">
            <table className="w-full min-w-[600px] text-center text-xs text-gray-600">
              <thead>
                <tr className="bg-[#b3b3b3] text-white">
                  <th className="p-3 border-r border-gray-300 border-b font-medium w-1/4">Item</th>
                  <th className="p-3 border-r border-gray-300 border-b font-medium w-[37.5%]">KM1800iSHC-C-2</th>
                  <th className="p-3 border-b font-medium w-[37.5%]">KM1800iSHK-DC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Technology</th>
                  <td colSpan={2} className="p-3 bg-white">Piezo Drop on Demand</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Drive System</th>
                  <td colSpan={2} className="p-3 bg-white">Independent drive system</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Resolution</th>
                  <td className="p-3 border-r border-gray-300 bg-white">600 npi(100npi x 6lines)</td>
                  <td className="p-3 bg-white">
                    <div className="border-b border-gray-200 pb-2 mb-2">600 npi(100npi x 6lines)</div>
                    <div>(300 npi per color when using 2 colors)</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Number of Nozzles</th>
                  <td className="p-3 border-r border-gray-300 bg-white">1776 (296nozzles x 6lines)</td>
                  <td className="p-3 bg-white">
                    <div className="border-b border-gray-200 pb-2 mb-2">1776 (296nozzles x 6lines)</div>
                    <div>(888 per color when using 2 colors)</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Drop Size</th>
                  <td className="p-3 border-r border-gray-300 bg-white">3.7 pl</td>
                  <td className="p-3 bg-white">5.5 pl</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Max Frequency</th>
                  <td className="p-3 border-r border-gray-300 bg-white">62 kHz</td>
                  <td className="p-3 bg-white">75 kHz</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Printing Width</th>
                  <td className="p-3 border-r border-gray-300 bg-white">75 mm</td>
                  <td className="p-3 bg-white">75 mm</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Dimensions</th>
                  <td className="p-3 border-r border-gray-300 bg-white">W138 mm x D20mm x H108 mm</td>
                  <td className="p-3 bg-white">W135 mm x D24mm x H107 mm</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Weight</th>
                  <td className="p-3 border-r border-gray-300 bg-white">Approx. 200 g</td>
                  <td className="p-3 bg-white">Approx. 250 g</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Grayscale</th>
                  <td className="p-3 border-r border-gray-300 bg-white">16 levels</td>
                  <td className="p-3 bg-white">16 levels</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Built-in Heater</th>
                  <td className="p-3 border-r border-gray-300 bg-white">Available</td>
                  <td className="p-3 bg-white">Available</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Ink type</th>
                  <td className="p-3 border-r border-gray-300 bg-white">Solvent, UV, Oil</td>
                  <td className="p-3 bg-white">Solvent, UV, Oil</td>
                </tr>
                <tr className="bg-white">
                  <th className="p-3 border-r border-gray-300 font-normal text-gray-500">Water-based Ink</th>
                  <td className="p-3 border-r border-gray-300 bg-white">-**</td>
                  <td className="p-3 bg-white">-**</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-gray-500 mt-4">* The above specifications are as of August 2025. Specifications and appearance are subject to change without prior notice.</p>
          <p className="text-[10px] text-gray-500 mt-1">** For inquiries regarding compatibility with water-based ink, please contact our sales representative.</p>
        </div>
      )}

      {activeTab === 'applications' && (
        <div className="animate-in fade-in duration-300">
          <h3 className="text-2xl font-bold mb-6 border-b pb-4">Applications</h3>
          <p className="text-sm text-gray-600 mb-8">The KM1800i series is suitable for a wide range of applications:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="relative h-48 w-full mb-4">
                <Image src="/images/KM1800i seriesimages/imgi_7_use_01.jpg" alt="Signage & Graphics" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-lg">Signage & Graphics</h4>
            </div>
            
            <div className="flex flex-col">
              <div className="relative h-48 w-full mb-4">
                <Image src="/images/KM1800i seriesimages/imgi_8_use_02.jpg" alt="Coding & Marking" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-lg">Coding & Marking</h4>
            </div>

            <div className="flex flex-col">
              <div className="relative h-48 w-full mb-4">
                <Image src="/images/KM1800i seriesimages/imgi_9_use_03.jpg" alt="Packaging & Label" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-lg">Packaging & Label</h4>
            </div>

            <div className="flex flex-col">
              <div className="relative h-48 w-full mb-4">
                <Image src="/images/KM1800i seriesimages/imgi_10_use_04.jpg" alt="PCB" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-lg">PCB</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
