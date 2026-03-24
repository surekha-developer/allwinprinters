

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Twitter,
//   Facebook,
//   Linkedin,
//   Instagram,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white">

//       {/* ================= TOP BAR ================= */}
//       <div className="border-b border-border/20">
//         <div className="container-main py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

//           <div className="flex items-center gap-2">
//             <Phone size={16} />
//             <span>8712413159</span>
//           </div>

//           <div className="hidden md:block text-white/40">|</div>

//           <div className="flex items-center gap-2">
//             <Mail size={16} />
//             <span>Jke.jayaram@gmail.com</span>
//           </div>

//           <div className="hidden md:block text-white/40">|</div>

//           <div className="flex items-center gap-2 text-center md:text-right">
//             <MapPin size={16} />
//             <span>
//              #11-126, Opp IDPL Colony, Sumitra Nagar, Hyderabad-37
//             </span>
//           </div>

//         </div>
//       </div>

//       {/* ================= MAIN ================= */}
//       <div className="container-main  text-white section-padding grid grid-cols-1 md:grid-cols-3 gap-15">

//         {/* LEFT */}
//         <div>
//            <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/images/jklogo-removebg-preview.png"
//               alt="ALLWIN Logo"
//               width={105}
//               height={60}
//               className="rounded-lg"
//             />
//           </Link>

//           <p className="text-white mt-4 mb-6">
//             Our skilled team at Pengwin Tech Solutions ensures complete client
//             satisfaction by delivering high-quality solutions and providing
//             24/7 support throughout every stage of your project.
//           </p>

//           <div className="flex gap-3">
//             {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
//               <Link
//                 key={i}
//                 href="#"
//                 className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
//               >
//                 <Icon size={16} />
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* SERVICES */}
//         <div className="md:col-span-2 text-white">
//           <h3 className="mb-6 text-white font-semibold">Products</h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white-100 text-sm">

//             <div className="space-y-3">
//               <p className="hover:text-white transition cursor-pointer text-white">
//                 Solvent Printing Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">Apps</p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                 Eco Solvent Printing Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                 UV Printing Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                 DTF Printing Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                Laser Cutting $ Engraving Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                CNC Router Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                Fiber Laser Machines
//               </p>
//             </div>

//             <div className="space-y-3">
//               <p className="hover:text-white transition cursor-pointer text-white">
//                 Letter Bending Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//               Sheet Cutters
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                 Lamination Machines
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//                 Vinyl Cutting Plotters
//               </p>
//               <p className="hover:text-white transition cursor-pointer text-white">
//               Printing Inks
//               </p>
//                 <p className="hover:text-white transition cursor-pointer text-white">
//               Printer Spare Parts
//               </p>
//                 <p className="hover:text-white transition cursor-pointer text-white">
//               Printer Heads
//               </p>
              
//             </div>

//           </div>
//         </div>

//       </div>

//       {/* ================= BOTTOM ================= */}
//       <div className="border-t border-border/20 py-4">
//         <div className="container-main text-center text-sm text-white">
//           © Copyright {new Date().getFullYear()} JK Enterprises
//         </div>
//       </div>

//     </footer>
//   );
// }

//..........

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/footer.jpg"
          alt="footer background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="border-b border-border/20">
        <div className="container-main py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>8712413159</span>
          </div>

          <div className="hidden md:block text-white/40">|</div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>Jke.jayaram@gmail.com</span>
          </div>

          <div className="hidden md:block text-white/40">|</div>

          <div className="flex items-center gap-2 text-center md:text-right">
            <MapPin size={16} />
            <span>
             #11-126, Opp IDPL Colony, Sumitra Nagar, Hyderabad-37
            </span>
          </div>

        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="container-main  text-white section-padding grid grid-cols-1 md:grid-cols-3 gap-15">

        {/* LEFT */}
        <div>
           <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/jklogo-removebg-preview.png"
              alt="ALLWIN Logo"
              width={105}
              height={60}
              className="rounded-lg"
            />
          </Link>

          <p className="text-white mt-4 mb-6">
            Our skilled team at Pengwin Tech Solutions ensures complete client
            satisfaction by delivering high-quality solutions and providing
            24/7 support throughout every stage of your project.
          </p>

          <div className="flex gap-3">
            {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="md:col-span-2 text-white">
          <h3 className="mb-6 text-white font-semibold">Products</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white-100 text-sm">

            <div className="space-y-3">
              <p className="hover:text-white transition cursor-pointer text-white">
                Solvent Printing Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">Apps</p>
              <p className="hover:text-white transition cursor-pointer text-white">
                Eco Solvent Printing Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
                UV Printing Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
                DTF Printing Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
               Laser Cutting $ Engraving Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
               CNC Router Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
               Fiber Laser Machines
              </p>
            </div>

            <div className="space-y-3">
              <p className="hover:text-white transition cursor-pointer text-white">
                Letter Bending Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
              Sheet Cutters
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
                Lamination Machines
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
                Vinyl Cutting Plotters
              </p>
              <p className="hover:text-white transition cursor-pointer text-white">
              Printing Inks
              </p>
                <p className="hover:text-white transition cursor-pointer text-white">
              Printer Spare Parts
              </p>
                <p className="hover:text-white transition cursor-pointer text-white">
              Printer Heads
              </p>
              
            </div>

          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-border/20 py-4">
        <div className="container-main text-center text-sm text-white">
          © Copyright {new Date().getFullYear()} JK Enterprises
        </div>
      </div>

    </footer>
  );
}