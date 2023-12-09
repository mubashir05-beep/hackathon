
import React from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/page";
import { Suspense } from "react"; 
export default function PreLoadProvider({
  children,
}: {
  children: React.ReactNode;
}) {
 
  
  return (
    <Suspense fallback={<Loader/>}>{children} </Suspense>
  );
}
