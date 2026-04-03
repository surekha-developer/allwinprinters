// "use client"

// export default function WhoWeAre() {
//   const description =
//     "Since its establishment, Allwin Technology has been a global leader in high-end digital inkjet printing. With over 22 years of industry-leading expertise, we operate from our massive 35,200㎡ manufacturing hub, delivering world-class industrial solutions to over 50 countries.";

//   return (
//     <section className="section-padding bg-background">
//       <div className="container-main">
//         <div className="max-w-4xl mx-auto text-center">
          
//           <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
//             Our Global Legacy
//           </p>

//           <h2 className="mb-6">
//             Driving the Future of <span className="text-primary">Digital Printing</span>
//           </h2>

//           <p className="text-muted-soft text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
//             {description}
//           </p>

//           <div className="w-24 h-1 bg-primary/10 mx-auto my-12"></div>

//           <div className="space-y-6 mb-16">
//             <h3 className="text-2xl font-bold text-foreground">
//               A 16-Year Legacy of Partnership
//             </h3>
//             <p className="text-muted-soft text-lg leading-relaxed max-w-3xl mx-auto">
//               As an <span className="text-foreground font-semibold">Excellent Partner of Konica Minolta</span> for over 16 years, 
//               we bridge the gap between visionary technology and heavy-duty industrial performance. 
//               Our commitment to R&D has resulted in numerous patents and certifications, ensuring 
//               that every Allwin printer meets the highest standards of precision.
//             </p>
//           </div>

//           {/* Reconciled Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             <div className="text-center">
//               <p className="text-4xl font-bold text-primary mb-2">22+</p>
//               <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">Years Experience</p>
//             </div>
            
//             <div className="text-center border-y sm:border-y-0 sm:border-x border-gray-100 py-8 sm:py-0">
//               <p className="text-4xl font-bold text-primary mb-2">35k+</p>
//               <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">SQM Facility</p>
//             </div>

//             <div className="text-center">
//               <p className="text-4xl font-bold text-primary mb-2">50+</p>
//               <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">Countries Served</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
//............

"use client"

export default function WhoWeAre() {
  return (
    <section className="section-padding bg-background py-0">
      <div className="container-main">
        <div className="max-w-5xl mx-auto text-center">
          
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Profile
          </p>

          <h2 className="mb-12">
            Powering the Future of <span className="text-primary">Printing Solutions</span>
          </h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* 🔵 Blue Card */}
            <div className="bg-[#0088CC] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Allwin Partnership
              </h3>
              <p className="text-white/90 leading-relaxed">
                JK Enterprises is a trusted partner in introducing Allwin flex printing machines in Telangana. 
                Since 2009, we have been delivering advanced printing solutions backed by Allwin’s global technology. 
                We have played a key role in the evolution from Xaar to Konica printhead machines, bringing 
                high-performance and precision-driven printing solutions to businesses across the country.
              </p>
            </div> 

            {/* 🟡 Yellow Card */}
            <div className="bg-[#0088CC] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Company Profile
              </h3>
              <p className="text-white/80 leading-relaxed">
                JK Enterprises is a leading provider of flex and digital printing solutions in Telangana. 
                With over a decade of experience, we have successfully installed and serviced hundreds of machines, 
                earning the trust of our clients through reliable performance and strong after-sales support. 
                We continue to innovate and expand, delivering world-class printing solutions to a growing market.
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-primary/10 mx-auto my-12"></div>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            
            <div className="text-center border-y sm:border-y-0 sm:border-x border-gray-100 py-8 sm:py-0">
              <p className="text-4xl font-bold text-primary mb-2">900+</p>
              <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">
                Machines Installed
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">
                Customer Support
              </p>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}