'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/slices/Providers";
import ProvidersLoading from "@/providers/NextProgress";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation'
 
const metadata: Metadata = {
  title: "InnoJam 2023",
  description:
    "Unleash innovation and creativity at the InnoJam 2023. Join us for a coding extravaganza where ideas come to life!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  return (
   
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <html lang="en">
          <body className={inter.className}>
            <Provider>
              <ProvidersLoading>
                <div className="flex  h-screen flex-col">
                  <Navbar />
                  <div>{children}</div>
                </div>
              </ProvidersLoading>
            </Provider>
          </body>
        </html>
      </motion.div>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </AnimatePresence>
  );
}
