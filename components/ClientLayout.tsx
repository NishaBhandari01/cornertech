
"use client";

import { useEffect, useState } from "react";
import CornorTechLogoAnimation from "@/components/loading/page";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        sessionStorage.setItem("hasVisited", "true");
        setIsLoading(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <CornorTechLogoAnimation />;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
