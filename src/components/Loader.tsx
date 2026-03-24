// "use client";

// export default function Loader() {
//   return (
//     <div className="loader-wrapper">
//       <div className="loader"></div>
//     </div>
//   );
// }

//.......

"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="loader"></div>
    </div>
  );
}