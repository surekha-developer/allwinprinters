"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({
  moveLeft,
}: {
  moveLeft?: boolean;
}) {
  return (
    <a
      href="https://wa.me/918686017734"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${
        moveLeft ? "right-20" : "right-6"
      } z-50 bg-green-500 text-white p-3 rounded-full shadow-lg`}
    >
        <span className="absolute inset-0 rounded-full bg-black opacity-30 animate-ping"></span>
      <FaWhatsapp size={26} />
    </a>
  );
}



