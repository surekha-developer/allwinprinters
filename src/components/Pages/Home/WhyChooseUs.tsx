// import React from "react";
// import Image from "next/image";
// import {
//   Cpu,
//   Award,
//   Factory,
//   Leaf,
// } from "lucide-react";

// type Strength = {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// };

// const strengths: Strength[] = [
//   {
//     icon: Cpu,
//     title: "High-Performance Printing Technology",
//     description:
//       "Allwin printers are designed for high-speed production with exceptional print quality, helping businesses meet demanding deadlines and large-scale printing requirements.",
//   },
//   {
//     icon: Award,
//     title: "Industry Recognition",
//     description:
//       "Recognized as an 'Excellent Partner in China' by Konica Minolta for 16 consecutive years, demonstrating strong industry partnerships and trusted component reliability.",
//   },
//   {
//     icon: Factory,
//     title: "Advanced Manufacturing & R&D",
//     description:
//       "With a modern 35,200㎡ factory and strong research capabilities, Allwin develops innovative printing technologies supported by patents and continuous product improvements.",
//   },
//   {
//     icon: Leaf,
//     title: "Eco-Friendly & Reliable Solutions",
//     description:
//       "UV and eco-solvent technologies reduce VOC emissions while providing durable printing solutions with low maintenance and long operational life.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="section-padding section-bg-light">
//       <div className="container-main">

//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* Left Content */}
//           <div>

//             <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
//               Why Allwin
//             </p>

//             <h2 className="mb-6">
//               Why Choose <span className="text-primary">Allwin Technology?</span>
//             </h2>

//             <p className="text-muted-soft mb-10 leading-relaxed">
//               Allwin Tech is a leading manufacturer of industrial digital printing
//               equipment including UV roll-to-roll printers, UV flatbed printers,
//               and eco-solvent printing machines. With advanced manufacturing,
//               strong R&D capabilities, and global industry recognition, Allwin
//               provides reliable high-performance printing solutions for
//               professional print businesses worldwide.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-6">

//               {strengths.map((item, i) => (
//                 <div key={i} className="flex gap-4">

//                   <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                     <item.icon className="w-5 h-5 text-primary" />
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-semibold mb-1">
//                       {item.title}
//                     </h3>

//                     <p className="text-sm text-muted-soft leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>

//                 </div>
//               ))}

//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative">

//             <Image
//               src="https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png"
//               alt="Allwin printing machine manufacturing facility"
//               width={700}
//               height={420}
//               className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
//             />

//             <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
//               <div className="text-3xl font-bold">98%</div>
//               <div className="text-sm opacity-80">Client Satisfaction</div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

///................below code is *

// import React from "react";
// import Image from "next/image";
// import { Cpu, Award, Factory, Leaf } from "lucide-react";

// type Strength = {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// };

// const strengths: Strength[] = [
//   {
//     icon: Cpu,
//     title: "High-Speed Printing Technology",
//     description:
//       "Allwin printers deliver high-speed production with exceptional print quality, helping print businesses handle large orders efficiently.",
//   },
//   {
//     icon: Award,
//     title: "Industry Recognition",
//     description:
//       "Recognized by Konica Minolta as an 'Excellent Partner in China' for 16 consecutive years, reflecting strong industry partnerships and trusted technology.",
//   },
//   {
//     icon: Factory,
//     title: "Advanced Manufacturing",
//     description:
//       "Allwin operates a modern 35,200㎡ factory with strong R&D capabilities, developing innovative digital printing solutions backed by patents.",
//   },
//   {
//     icon: Leaf,
//     title: "Eco-Friendly Printing",
//     description:
//       "UV and eco-solvent technologies reduce VOC emissions while delivering durable prints with low maintenance and long machine lifespan.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="section-padding section-bg-light">
//       <div className="container-main">

//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* Left Content */}
//           <div>

//             <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
//               Why Allwin
//             </p>

//             <h2 className="mb-6">
//               Why Print Businesses Choose <span className="text-primary">Allwin</span>
//             </h2>

//             <p className="text-muted-soft mb-8 leading-relaxed">
//               Allwin is a leading manufacturer of industrial digital printing machines,
//               including UV roll-to-roll printers, UV flatbed printers, and eco-solvent
//               printers. With advanced manufacturing, strong research capabilities,
//               and global industry recognition, Allwin provides reliable high-speed
//               printing solutions trusted by professional print businesses worldwide.
//             </p>

//             {/* Trust Stats */}
          

//             {/* Strength Cards */}
//             <div className="grid sm:grid-cols-2 gap-6">

//               {strengths.map((item, i) => (
//                 <div key={i} className="flex gap-4">

//                   <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
//                     <item.icon className="w-5 h-5 text-primary" />
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-semibold mb-1">
//                       {item.title}
//                     </h3>

//                     <p className="text-sm text-muted-soft leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>

//                 </div>
//               ))}

//             </div>

            

//           </div>

//           {/* Right Image */}
//       <div className="space-y-12">

//   {/* Image */}
//   <div className="relative">

//     <Image
//       src="https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png"
//       alt="Allwin industrial printer machine"
//       width={500}
//       height={320}
//       className="rounded-none shadow-none w-full h-[320px] object-cover"
//     />

//     {/* Floating Card */}
//     {/* <div className="absolute -bottom-17 -right-5 bg-primary text-primary-foreground rounded-none p-6 shadow-lg">
//       <div className="text-3xl font-bold">98%</div>
//       <div className="text-sm opacity-80">Client Satisfaction</div>
//     </div> */}

//   </div>

//   {/* Stats Section */}
//   <div className="border rounded-xl p-6 flex justify-between text-center">

//     <div>
//       <p className="text-2xl font-bold text-primary">16+</p>
//       <p className="text-sm text-muted-soft">Years Experience</p>
//     </div>

//     <div>
//       <p className="text-2xl font-bold text-primary">50+</p>
//       <p className="text-sm text-muted-soft">Countries Served</p>
//     </div>

//     <div>
//       <p className="text-2xl font-bold text-primary">20k+</p>
//       <p className="text-sm text-muted-soft">Machines Installed</p>
//     </div>

//   </div>

// </div>

//         </div>

//       </div>
//     </section>
//   );
// }

//..........

import React from "react";
import Image from "next/image";
import { Cpu, Award, Factory, Leaf } from "lucide-react";

type Strength = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const strengths: Strength[] = [
  {
    icon: Cpu,
    title: "High-Speed Printing Technology",
    description:
      "Allwin printers deliver high-speed production with exceptional print quality, helping print businesses handle large orders efficiently.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Recognized by Konica Minolta as an 'Excellent Partner in China' for 16 consecutive years, reflecting strong industry partnerships and trusted technology.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description:
      "Allwin operates a modern 35,200㎡ factory with strong R&D capabilities, developing innovative digital printing solutions backed by patents.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Printing",
    description:
      "UV and eco-solvent technologies reduce VOC emissions while delivering durable prints with low maintenance and long machine lifespan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-bg-light">
      <div className="container-main">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* Left Content */}
          <div>

            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why Allwin
            </p>

            <h2 className="mb-6">
              Why Print Businesses Choose{" "}
              <span className="text-primary">Allwin</span>
            </h2>

            <p className="text-muted-soft mb-8 leading-relaxed">
              Allwin is a leading manufacturer of industrial digital printing
              machines, including UV roll-to-roll printers, UV flatbed printers,
              and eco-solvent printers. With advanced manufacturing, strong
              research capabilities, and global industry recognition, Allwin
              provides reliable high-speed printing solutions trusted by
              professional print businesses worldwide.
            </p>

            {/* Strength Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {strengths.map((item, i) => (
                <div key={i} className="flex gap-4">

                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-soft leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-10">

            {/* Image */}
            <div className="relative">

              <Image
                src="https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png"
                alt="Allwin industrial printer machine"
                width={500}
                height={320}
                className="w-full h-[260px] sm:h-[300px] lg:h-[320px] object-contain"
              />

            </div>

            {/* Stats Section */}
        <div className="border rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

  <div>
    <p className="text-2xl font-bold text-primary">16+</p>
    <p className="text-sm text-muted-soft">Years Experience</p>
  </div>

  <div>
    <p className="text-2xl font-bold text-primary">50+</p>
    <p className="text-sm text-muted-soft">Countries Served</p>
  </div>

  <div>
    <p className="text-2xl font-bold text-primary">20k+</p>
    <p className="text-sm text-muted-soft">Machines Installed</p>
  </div>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}