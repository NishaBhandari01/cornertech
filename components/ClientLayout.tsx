"use client";

import { useEffect, useState } from "react";
import CornorTechLogoAnimation from "@/components/loading/page";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CornorTechLogoAnimation />;
  }

  return <>{children}</>;
}