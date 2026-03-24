"use client";

import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";
// import WhatsAppButton from "./WhatsAppButton";

export default function UIButtons() {
  const [scrollVisible, setScrollVisible] = useState(false);

  return (
    <>
      {/* WhatsApp Button */}
      <WhatsAppButton moveLeft={scrollVisible} />

      {/* Scroll To Top */}
      <ScrollToTop onVisibleChange={setScrollVisible} />
    </>
  );
}