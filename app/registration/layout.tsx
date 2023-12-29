import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/slices/Providers";
import ProvidersLoading from "@/providers/NextProgress";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "InnoJam 2023 - Registration",
    description:
    "Secure your spot at InnoJam 2023! Register now for this coding extravaganza where innovation meets creativity. Join our community of tech enthusiasts, developers, and visionaries. Don't miss out on the opportunity to be part of something extraordinary!",
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
          <ProvidersLoading>
            <Toaster />
            <div className="flex bg-white h-screen flex-col">
              <Navbar />
              <div>{children}</div>
            </div>
          </ProvidersLoading>
        </Provider>
      </body>
    </html>
  );
}
