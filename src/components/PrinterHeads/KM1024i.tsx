"use client";
import { useState } from "react";
import Image from "next/image";

export default function KM1024i() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8">KM1024i Series</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="border border-gray-200 p-8 flex justify-center items-center h-[300px] relative">
          <Image src="/images/KM1024i Seriesimages/imgi_6_img_products.jpg" alt="KM1024i Series" fill className="object-contain p-4" />
        </div>
        <div className="flex items-start pt-4 text-sm text-gray-700">
          <p>High-speed 1024-nozzle inkjet printhead</p>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 border-b border-gray-200 mb-12">
        <button 
          className={`px-4 sm:px-12 py-3 border border-b-0 font-medium ${activeTab === 'features' ? 'bg-gray-300 text-white' : 'text-gray-500 hover:bg-gray-100'} w-full sm:w-[200px] flex justify-between items-center whitespace-nowrap`}
          onClick={() => setActiveTab('features')}
        >
          Features {activeTab === 'features' ? '>' : '>'}
        </button>
        <button 
          className={`px-4 sm:px-12 py-3 border border-b-0 font-medium ${activeTab === 'specifications' ? 'bg-gray-300 text-white' : 'text-gray-500 hover:bg-gray-100'} w-full sm:w-[200px] flex justify-between items-center whitespace-nowrap`}
          onClick={() => setActiveTab('specifications')}
        >
          Specifications {activeTab === 'specifications' ? '>' : '>'}
        </button>
      </div>

      {activeTab === 'features' && (
        <div className="animate-in fade-in duration-300">
          <h3 className="text-2xl font-bold mb-6 border-b pb-4">Main Features</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-2">- Inkjet Printhead featuring an All-nozzle Independent Drive System with a Multi-line Structure</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                In contrast with the existing 3-cycle system drive, an independent drive system that enables simultaneous emission from all 1024 nozzles has been adopted. The high-density structure featuring 4 lines of 256 nozzles aligned with high precision enhances positioning accuracy to realize high-definition print quality.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">- Maximum Drive Frequency (45kHz) approximately 3 Times greater than that of the KM1024 Series</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adoption of an independent drive system has made it possible to realize a drive frequency (45kHz) approximately 3 times greater than that of the KM1024 Series. This is the ideal inkjet printhead for development of single-pass system inkjet printers capable of high-speed printing.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">- Head Structure featuring Stable Emission Performance and Outstanding Ink Tolerance</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                KM1024i enables stable emission of a wide variety of industrial inks and features and ink-tolerant structure. In addition, the structure is capable of ink circulation, making it possible to also use ink prone to precipitation.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">- Appropriate Control of Ink Temperature by the High-performance Built-in Heater</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                KM1024i features a high-performance heater built into the head, enabling stable temperature control of high-viscosity and other inks used in industrial applications.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">- Capable of Printing of a Maximum of 8 drop sizes, High Resolution Nozzles of 360npi</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Like the existing KM1024 Series, KM1024i is mounted with a high-performance IC to enable printing of a maximum of 8 drop sizes. This makes the product ideal for new applications that require even greater richness of gradient expression and high-definition image quality.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">- Additional model that improved chemical compatibility</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                2 models for different viscosity
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'specifications' && (
        <div className="animate-in fade-in duration-300">
          <h3 className="text-2xl font-bold mb-6 border-b pb-4">Specificatons</h3>

          <div className="w-[150px] mb-8 relative h-[100px] border">
            <Image src="/images/KM1024i Seriesimages/imgi_7_img_spec_01.jpg" alt="Dimensions" fill className="object-contain" />
          </div>
          
          <div className="overflow-x-auto w-full border border-gray-300">
            <table className="w-full min-w-[900px] text-center text-xs text-gray-600">
              <thead>
                <tr className="bg-[#b3b3b3] text-white">
                  <th className="p-3 border-r border-gray-300 border-b font-medium">Printhead Name</th>
                  <th className="p-3 border-r border-gray-300 border-b font-medium">KM1024iSHE</th>
                  <th className="p-3 border-r border-gray-300 border-b font-medium">KM1024iMHE-D</th>
                  <th className="p-3 border-r border-gray-300 border-b font-medium">KM1024iLHE-30</th>
                  <th className="p-3 border-r border-gray-300 border-b font-medium">KM1024iSAE-C</th>
                  <th className="p-3 border-r border-gray-300 border-b font-medium">KM1024iMAE-C</th>
                  <th className="p-3 border-r border-gray-300 border-b font-medium">KM1024iSHE-HM</th>
                  <th className="p-3 border-b font-medium">KM1024iSHE-HM-LV</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Technology</th>
                  <td colSpan={7} className="p-3 bg-white">Piezo Drop on Demand</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Drive System</th>
                  <td colSpan={7} className="p-3 bg-white">Indepenent drive system</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Resolution</th>
                  <td colSpan={7} className="p-3 bg-white">360npi (90npi x 4lines)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Number of Nozzles</th>
                  <td colSpan={7} className="p-3 bg-white">1024 nozzles (256nozzles x 4lines)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Drop Size</th>
                  <td className="p-3 border-r border-gray-300 bg-white">6pl</td>
                  <td className="p-3 border-r border-gray-300 bg-white">13pl</td>
                  <td className="p-3 border-r border-gray-300 bg-white">30pl</td>
                  <td className="p-3 border-r border-gray-300 bg-white">6pl</td>
                  <td className="p-3 border-r border-gray-300 bg-white">13pl</td>
                  <td className="p-3 border-r border-gray-300 bg-white">6pl</td>
                  <td className="p-3 bg-white">7.5pl</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Max Frequency</th>
                  <td className="p-3 border-r border-gray-300 bg-white">56kHz</td>
                  <td className="p-3 border-r border-gray-300 bg-white">45kHz</td>
                  <td className="p-3 border-r border-gray-300 bg-white">27kHz</td>
                  <td className="p-3 border-r border-gray-300 bg-white">43kHz</td>
                  <td className="p-3 border-r border-gray-300 bg-white">45kHz</td>
                  <td className="p-3 border-r border-gray-300 bg-white">56kHz(Max.)<br/>40kHz(Typical)</td>
                  <td className="p-3 bg-white">44kHz(Max.)<br/>32kHz(Typical)</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Printing Width</th>
                  <td colSpan={7} className="p-3 bg-white">72mm</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Dimensions</th>
                  <td colSpan={7} className="p-3 bg-white">W131mm x D18mm x H94mm</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Weight</th>
                  <td colSpan={7} className="p-3 bg-white">Approx. 150g</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Grey scale</th>
                  <td colSpan={7} className="p-3 bg-white">8 levels</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Internal Heater</th>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 bg-white">O</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Sovent Ink</th>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 bg-white">O</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">Oil Ink</th>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 bg-white">O</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="p-3 border-r border-gray-300 bg-white font-normal text-gray-500">UV Ink</th>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 bg-white">O</td>
                </tr>
                <tr className="bg-white">
                  <th className="p-3 border-r border-gray-300 font-normal text-gray-500">Water-based Ink</th>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">O</td>
                  <td className="p-3 border-r border-gray-300 bg-white">-</td>
                  <td className="p-3 bg-white">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">* Specifications above could be changed without any announcement.</p>
        </div>
      )}
    </div>
  );
}
