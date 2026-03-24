// "use client";

// import { useEffect, useRef } from "react";

// export default function CustomCursor() {
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (window.innerWidth < 768) return;

//     const cursor = ref.current!;
//     let x = 0,
//       y = 0;
//     let mouseX = 0,
//       mouseY = 0;

//     const move = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     const animate = () => {
//       x += (mouseX - x) * 0.1;
//       y += (mouseY - y) * 0.1;

//       cursor.style.transform = `translate(${x}px, ${y}px)`;
//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", move);
//     animate();

//     return () => {
//       window.removeEventListener("mousemove", move);
//     };
//   }, []);

//   return (
//     <div className="hidden md:block fixed top-0 left-0 w-6 h-6 bg-blue-600 rounded-full pointer-events-none z-[9999] mix-blend-difference" ref={ref} />
//   );
// }

//.............

"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const cursor = ref.current!;
    let x = 0,
      y = 0;
    let mouseX = 0,
      mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x) * 0.1;
      y += (mouseY - y) * 0.1;

      cursor.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
<div
  ref={ref}
  className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
>
  <div className="w-3 h-3 bg-[#0EBAC4] rounded-full"></div>
  <div className="w-8 h-8 border border-[#0EBAC4] rounded-full absolute top-[-8px] left-[-8px]"></div>
</div>
  );
}