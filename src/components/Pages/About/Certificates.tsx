// "use client";

// import Image from "next/image";

// type Certificate = {
//   id: number;
//   title: string;
//   issuer: string;
//   year: string;
//   image: string;
// };

// const certificates: Certificate[] = [
//   {
//     id: 1,
//     title: "ISO 9001 Certification",
//     issuer: "International Organization for Standardization",
//     year: "2023",
//     image: "https://www.allwintech.com/public/uploads/image/20210624/1624529114600629.jpg",
//   },
//   {
//     id: 2,
//     title: "CE Certification",
//     issuer: "European Conformity",
//     year: "2022",
//     image: "https://www.allwintech.com/public/uploads/image/20210624/1624529115583452.jpg",
//   },
//   {
//     id: 3,
//     title: "Quality Excellence Award",
//     issuer: "Global Tech Awards",
//     year: "2024",
//     image: "https://www.allwintech.com/public/uploads/image/20210624/1624529114967185.jpg",
//   },
// ];

// export default function Certificates() {
//   return (
//     <section className="w-full py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Certifications & Achievements
//           </h2>
//           <p className="mt-3 text-gray-600 text-sm md:text-base">
//             Recognized for quality, innovation, and industry standards
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {certificates.map((cert) => (
//             <div
//               key={cert.id}
//               className="group bg-white rounded-none shadow-md overflow-hidden hover:shadow-xl transition duration-300"
//             >
              
//               {/* Image */}
//               <div className="relative w-full h-56 overflow-hidden">
//                 <Image
//                   src={cert.image}
//                   alt={cert.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition duration-500"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                   <button className="px-4 py-2 bg-white text-black text-sm rounded-md font-medium">
//                     View Certificate
//                   </button>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {cert.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   {cert.issuer}
//                 </p>
//                 <span className="text-xs text-gray-500 mt-2 block">
//                   {cert.year}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

//.........

"use client";

import Image from "next/image";

type Certificate = {
  id: number;
  image: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    image: "https://www.allwintech.com/public/uploads/image/20210624/1624529114600629.jpg",
  },
  {
    id: 2,
    image: "https://www.allwintech.com/public/uploads/image/20210624/1624529115583452.jpg",
  },
  {
    id: 3,
    image: "https://www.allwintech.com/public/uploads/image/20210624/1624529114967185.jpg",
  },
];

export default function Certificates() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-2">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Certifications
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white shadow-sm p-4"
            >
              <div className="relative w-full h-56">
                <Image
                  src={cert.image}
                  alt="Certificate"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}