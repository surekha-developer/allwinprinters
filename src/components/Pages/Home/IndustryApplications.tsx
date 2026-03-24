// import React from "react";
// import {
//   Megaphone,
//   Image,
//   Shirt,
//   Car,
//   Store,
// } from "lucide-react";

// type Industry = {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// };

// const industries: Industry[] = [
//   {
//     icon: Megaphone,
//     title: "Advertising & Signage",
//     description:
//       "Production of billboards, banners, posters, hoardings, and backlit displays for outdoor and indoor advertising.",
//   },
//   {
//     icon: Shirt,
//     title: "Textile & Fabric",
//     description:
//       "Digital printing on fabrics for soft signage, promotional banners, event backdrops, and decorative textiles.",
//   },
//   {
//     icon: Image,
//     title: "Interior Decoration",
//     description:
//       "Custom wallpaper, window blinds, wall graphics, and ceiling prints used in interior design and architectural decoration.",
//   },
//   {
//     icon: Car,
//     title: "Automotive Graphics",
//     description:
//       "Vehicle wraps, custom stickers, and branding graphics for cars, buses, trucks, and commercial fleets.",
//   },
//   {
//     icon: Store,
//     title: "Retail & Branding",
//     description:
//       "Point-of-sale displays, window graphics, floor stickers, and store branding materials for retail marketing.",
//   },
// ];

// export default function IndustryApplications() {
//   return (
//     <section className="py-20 lg:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-14">
//           <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
//             Applications
//           </p>

//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//             Industry Applications
//           </h2>

//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Printing solutions from Allwin are used across multiple industries,
//             enabling businesses to produce high-quality large-format graphics,
//             signage, textiles, and branding materials.
//           </p>
//         </div>

//         {/* Industry Cards */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
//           {industries.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={i}
//                 className="group text-center p-6 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                   <Icon className="w-7 h-7 text-primary transition-colors" />
//                 </div>

//                 <h3 className="text-sm font-semibold text-foreground mb-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-xs text-muted-foreground leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

//........


// ........below code is good
import React from "react";
import { Megaphone, Image, Shirt, Car, Store } from "lucide-react";

type Industry = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const industries: Industry[] = [
  {
    icon: Megaphone,
    title: "Advertising & Signage",
    description:
      "Production of billboards, banners, posters, hoardings, and backlit displays for outdoor and indoor advertising.",
  },
  {
    icon: Shirt,
    title: "Textile & Fabric",
    description:
      "Digital printing on fabrics for soft signage, promotional banners, event backdrops, and decorative textiles.",
  },
  {
    icon: Image,
    title: "Interior Decoration",
    description:
      "Custom wallpaper, window blinds, wall graphics, and ceiling prints used in interior design and architectural decoration.",
  },
  {
    icon: Car,
    title: "Automotive Graphics",
    description:
      "Vehicle wraps, custom stickers, and branding graphics for cars, buses, trucks, and commercial fleets.",
  },
  {
    icon: Store,
    title: "Retail & Branding",
    description:
      "Point-of-sale displays, window graphics, floor stickers, and store branding materials for retail marketing.",
  },
];

export default function IndustryApplications() {
  return (
    <section className="section-padding section-bg-white">
      <div className="container-main">

        {/* Section Header */}
        <div className="section-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
            Applications
          </p>

          <h2 className="mb-2">
            Industry Applications
          </h2>

          <p className="text-muted-soft">
            Printing solutions from Allwin are used across multiple industries,
            enabling businesses to produce high-quality large-format graphics,
            signage, textiles, and branding materials.
          </p>
        </div>

        {/* Industry Cards */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="card-soft text-center hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-base font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-soft leading-relaxed ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div> */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
  {industries.map((item, i) => {
    const Icon = item.icon;

    return (
      <div
        key={i}
        className="card-soft text-center hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-base font-semibold mb-2">
          {item.title}
        </h3>

        <p className="text-sm text-muted-soft leading-relaxed">
          {item.description}
        </p>
      </div>
    );
  })}
</div>


      </div>
    </section>
  );
}