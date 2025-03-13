import type { Metadata } from "next";
import {
  Inter_Tight,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
} from "next/font/google";
import "./globals.css";
// import { ModalProvider } from "@/context/ModalContext";
// import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import localFont from "next/font/local";
import { Nav } from "@/components/shared/Nav/Nav";
// import { Toaster } from "react-hot-toast";

const interTight = Inter_Tight({
  variable: "--interTight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--barlowCondensed",
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--barlowSemiCondensed",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Thunder Trails`,
    absolute: "Thunder Trails",
  },
  description: "We sell the best bikes known to man.",
};

const NeubauGroteskNor = localFont({
  src: "../../public/fonts/NeubauGroteskNor.woff2",
  variable: "--NeubauGroteskNor",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${interTight.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable} ${NeubauGroteskNor.variable}`}
      >
        {/* <ModalProvider> */}
        {/* <Toaster
          position='bottom-right'
          toastOptions={{
            className: "toastFont",
            duration: 6000,
            style: {
              border: "2px solid #295f4e",
              borderRadius: "50px",
              textAlign: "center",
              whiteSpace: "nowrap",
            },
          }}
        /> */}
        <Nav />
        {children}
        {/* </ModalProvider> */}
      </body>
    </html>
  );
}
