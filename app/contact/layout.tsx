import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
import Provider from "@/slices/Providers";
import ProvidersLoading from "@/providers/NextProgress";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "InnoJam 2023 - Contact",
    description:
      "Reach out to us and be a part of InnoJam 2023! Connect with our team, share your thoughts, and explore opportunities for collaboration. The Contact Us page is your gateway to joining the coding extravaganza. Let's innovate together!",
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
