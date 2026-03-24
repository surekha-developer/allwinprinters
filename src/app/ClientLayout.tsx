"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import UIButtons from "@/components/UIButtons";
import RouteScrollReset from "@/components/RouteScrollReset";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 🔥 show loader on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // smooth professional delay

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Custom Cursor (desktop only inside component) */}
      {/* <CustomCursor /> */}

      {/* Loader */}
      {loading && <Loader />}

      {/* Page Content */}
      {!loading && children}

      {/* Scroll reset on route change */}
      <RouteScrollReset />

      {/* WhatsApp + Scroll Top Buttons */}
      <UIButtons />
    </>
  );
}