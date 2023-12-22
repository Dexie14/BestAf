import { DM_Sans } from "next/font/google";
import "../globals.css";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";

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
        <section className="py-10">
        <div className="flex justify-center gap-3 items-center">
          <Image src={logo} height={28} width={24} alt="logo" />
          <h6 className="text-xl text-primary" style={{ fontFamily: "DMSans" }}>
            Bestaf
          </h6>
        </div>
        {children}
        </section>
      </body>
    </html>
  );
}
