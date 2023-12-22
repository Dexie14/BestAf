import { DM_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const DMSans = DM_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "BestAf App",
  description: "Official BestAf Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={DMSans.className} style={{ fontFamily: "DMSansMedium" }}>
        <div className="flex overflow-y-hidden max-h-[100vh]">
          <div className="w-[20%] sticky">
            <Sidebar />
          </div>
          <div className="w-full ">
            <div className="">
              <Navbar/>
              <div className="px-8 py-6 h-full overflow-y-scroll bg-yellow-400">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
