import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/slices/Providers";
import ProvidersLoading from "@/providers/NextProgress";
import Head from "next/head";

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
          <ProvidersLoading>
            <div className="flex  h-screen flex-col">
              <Navbar />
              <div>{children}</div>
            </div>
          </ProvidersLoading>
        </Provider>
      </body>
    </html>
  );
}
