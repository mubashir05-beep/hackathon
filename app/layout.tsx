import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
import MobileCenterContent from "@/components/MobileContent/page";
import Provider from "@/slices/Providers";

export const metadata: Metadata = {
  title: "InnoJam 2023",
  description:
    "Unleash innovation and creativity at the InnoJam 2023. Join us for a coding extravaganza where ideas come to life!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="flex justify-center flex-col items-center">
            <Navbar />
            <div>{children}</div>
            <div className="min-[1370px]:hidden fixed max-[620px]:hidden min-[1024px]:left-4 bottom-4  ">
              <MobileCenterContent />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
