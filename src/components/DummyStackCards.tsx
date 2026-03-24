

// // "use client";

// // import Image from "next/image";


// // const services = [
// //   {
// //     title: "Digital Solutions",
// //     desc: "...",
// //     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
// //     bg: "bg-[#0F172A]", // dark blue
// //     text: "text-white",
// //   },
// //   {
// //     title: "Cloud",
// //     desc: "...",
// //     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
// //     bg: "bg-[#1E293B]", // slate
// //     text: "text-white",
// //   },
// //   {
// //     title: "Security",
// //     desc: "...",
// //     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
// //     bg: "bg-[#F1F5F9]", // light
// //     text: "text-black",
// //   },
// //   {
// //     title: "Communication",
// //     desc: "...",
// //     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
// //     bg: "bg-[#E0F2FE]", // light blue
// //     text: "text-black",
// //   },
// // ];

// // export default function StickyServices() {
// //   return (
// //     <section className="relative">

// //       {services.map((service, index) => (
// //         <div
// //           key={index}
// //           className="h-[60vh] sticky top-16 flex items-center justify-center"
// //           style={{ zIndex: 10 + index }}
// //         >
// //          <div className={`w-[85%] h-[55vh] ${service.bg} ${service.text} rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden`}>

// //             {/* LEFT TEXT */}
// //             <div className="flex flex-col justify-center p-8 md:p-10">
// //               <h2 className="text-3xl md:text-5xl font-bold mb-4">
// //                 {service.title}
// //               </h2>

// //               <p className="text-gray-600 text-base md:text-lg leading-relaxed">
// //                 {service.desc}
// //               </p>
// //             </div>

// //             {/* RIGHT IMAGE */}
// //             <div className="relative w-full h-full">
// //               <Image
// //                 src={service.image}
// //                 alt={service.title}
// //                 fill
// //                 className="object-contain md:object-cover"
// //               />
// //             </div>

// //           </div>
// //         </div>
// //       ))}

// //     </section>
// //   );
// // }


// //..........above code is good





// "use client";

// import Image from "next/image";


// const services = [
//   {
//     title: "Digital Solutions",
//     desc: "...",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     bg: "bg-[#0F172A]", // dark blue
//     text: "text-white",
//   },
//   {
//     title: "Cloud",
//     desc: "...",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     bg: "bg-[#1E293B]", // slate
//     text: "text-white",
//   },
//   {
//     title: "Security",
//     desc: "...",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     bg: "bg-[#F1F5F9]", // light
//     text: "text-black",
//   },
//   {
//     title: "Communication",
//     desc: "...",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     bg: "bg-[#E0F2FE]", // light blue
//     text: "text-black",
//   },
// ];

// export default function StickyServices() {
//   return (
//     <section className="relative">

//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="h-[60vh] sticky top-16 flex items-center justify-center"
//           style={{ zIndex: 10 + index }}
//         >
//          <div className={`w-[85%] h-[55vh] ${service.bg} ${service.text} rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden`}>

//             {/* LEFT TEXT */}
//             <div className="flex flex-col justify-center p-8 md:p-10 order-2 md:order-1">
//               <h2 className="text-3xl md:text-5xl font-bold mb-4">
//                 {service.title}
//               </h2>

//               <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="relative w-full h-full order-1 md:order-2">
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 fill
//                 className="object-contain md:object-cover"
//               />
//             </div>

//           </div>
//         </div>
//       ))}

//     </section>
//   );
// }


//..........

// "use client";

// import Image from "next/image";

// const services = [
//   {
//     title: "iCafe – Smart Cafeteria and Restaurant Management",
//     desc: "iCafe streamlines cafeteria and restaurant operations with QR code ordering, cashless payments, and real-time stock tracking.",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     bg: "bg-gray-100",
//     text: "text-gray-900",
//   },
//    {
//     title: "iCafe – Smart Cafeteria and Restaurant Management",
//     desc: "iCafe streamlines cafeteria and restaurant operations with QR code ordering, cashless payments, and real-time stock tracking.",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     bg: "bg-gray-100",
//     text: "text-gray-900",
//   },
//    {
//     title: "iCafe – Smart Cafeteria and Restaurant Management",
//     desc: "iCafe streamlines cafeteria and restaurant operations with QR code ordering, cashless payments, and real-time stock tracking.",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     bg: "bg-gray-100",
//     text: "text-gray-900",
//   },
// ];

// export default function StickyServices() {
//   return (
//     <section className="relative py-10">

//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="sticky top-16 flex justify-center py-6"
//         >
//           <div className={`w-[90%] max-w-6xl ${service.bg} ${service.text} rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 p-6 md:p-10`}>

//             {/* TEXT */}
//             <div className="order-2 md:order-1">
//               <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
//                 {service.title}
//               </h2>

//               <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
//                 {service.desc}
//               </p>

//               <ul className="space-y-3 text-sm md:text-base mb-6">
//                 <li>✔ QR Ordering & Cashless Payments</li>
//                 <li>✔ Real-Time Stock Updates</li>
//                 <li>✔ Centralized Management</li>
//                 <li>✔ Coupons & Discounts</li>
//               </ul>

//               <button className="bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition">
//                 READ MORE
//               </button>
//             </div>

//             {/* IMAGE */}
//             <div className="order-1 md:order-2 flex justify-center">
//               <div className="relative w-full max-w-md h-[220px] md:h-[300px]">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       ))}

//     </section>
//   );
// }

//..........above code is good


"use client";

import Image from "next/image";

const services = [
  {
    title: "iCafe – Smart Cafeteria and Restaurant Management",
    desc: "iCafe streamlines cafeteria and restaurant operations with QR code ordering, cashless payments, and real-time stock tracking.",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    title: "iCafe – Smart Cafeteria and Restaurant Management",
    desc: "iCafe streamlines cafeteria and restaurant operations with QR code ordering, cashless payments, and real-time stock tracking.",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
    {
    title: "iCafe – Smart Cafeteria and Restaurant Management",
    desc: "iCafe streamlines cafeteria and restaurant operations with QR code ordering, cashless payments, and real-time stock tracking.",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
  {
    title: "iCafe – Smart Cafeteria and Restaurant Management",
    desc: "iCafe streamlines cafeteria and restaurant operations with QR code ordering, cashless payments, and real-time stock tracking.",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    bg: "bg-gray-100",
    text: "text-gray-900",
  },
];

export default function StickyServices() {
  return (
    <section className="relative py-10">

      {services.map((service, index) => (
        <div key={index} className="sticky top-16 py-6">

          {/* ✅ GLOBAL CONTAINER */}
          <div className="container-main">
            
            {/* CARD */}
            <div className={`${service.bg} ${service.text} rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 p-6 md:p-10`}>

              {/* TEXT */}
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
                  {service.title}
                </h2>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-3 text-sm md:text-base mb-6">
                  <li>✔ QR Ordering & Cashless Payments</li>
                  <li>✔ Real-Time Stock Updates</li>
                  <li>✔ Centralized Management</li>
                  <li>✔ Coupons & Discounts</li>
                </ul>

                <button className="btn-primary rounded-full">
                  READ MORE
                </button>
              </div>

              {/* IMAGE */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md h-[220px] md:h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      ))}

    </section>
  );
}