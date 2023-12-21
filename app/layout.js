import { DM_Sans } from "next/font/google";
import "./globals.css";

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

const DMSans = DM_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: 'BestAf App',
  description: 'Official BestAf Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className} style={{ fontFamily: "DMSansMedium" }}>
      <div className="flex overflow-y-hidden max-h-[100vh]">
            <div className="w-[20%] sticky">
              <h1>sidebar</h1>
            </div>
            <div className="w-full">
              <div className="">
                <p>navbar</p>
                <div className="px-8 py-6 h-[calc(100vh-98px)] overflow-y-scroll">
                  {children}
                </div>
              </div>
            </div>
          </div>
      </body>


    </html>
  )
}
