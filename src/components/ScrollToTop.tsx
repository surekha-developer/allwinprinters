// "use client";

// import { useEffect, useState } from "react";
// // import { FaArrowUp } from "react-icons/fa";
// import { FaAngleDoubleUp } from "react-icons/fa";

// export default function ScrollToTop({
//   onVisibleChange,
// }: {
//   onVisibleChange?: (v: boolean) => void;
// }) {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const show = window.scrollY > 300;
//       setVisible(show);
//       onVisibleChange?.(show);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [onVisibleChange]);

//   if (!visible) return null;

//   return (
//     <button
//       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       className="fixed bottom-7 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg"
//     >
//       {/* <FaArrowUp /> */}
//       <FaAngleDoubleUp size={20}/>
//     </button>
//   );
// }

//.......

// "use client";

// import { useEffect, useState } from "react";
// import { FaAngleDoubleUp } from "react-icons/fa";

// export default function ScrollToTop({
//   onVisibleChange,
// }: {
//   onVisibleChange?: (v: boolean) => void;
// }) {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const show = window.scrollY > 300;
//       setVisible(show);
//       onVisibleChange?.(show);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [onVisibleChange]);

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-7 right-6 z-50 group">
      
//       {/* 🔥 Wave / Ripple Background */}
    //   <span className="absolute inset-0 rounded-full bg-black opacity-30 animate-ping"></span>

//       {/* Button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="relative bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//       >
//         <FaAngleDoubleUp size={20} />
//       </button>

     
      
//     </div>
//   );
// }

//.......

"use client";

import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function ScrollToTop({
  onVisibleChange,
}: {
  onVisibleChange?: (v: boolean) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 300;
      setVisible(show);
      onVisibleChange?.(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onVisibleChange]);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-7 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaAngleDoubleUp size={20} />
    </button>
  );
}