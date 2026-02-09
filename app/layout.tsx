import type { Metadata } from "next";
import localFont from "next/font/local";
import { CursorProvider } from "@/context/CursorContext";
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "../public/fonts/Geist-Thin.ttf", weight: "100" },
    { path: "../public/fonts/Geist-ExtraLight.ttf", weight: "200" },
    { path: "../public/fonts/Geist-Light.ttf", weight: "300" },
    { path: "../public/fonts/Geist-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Geist-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Geist-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/Geist-Bold.ttf", weight: "700" },
    { path: "../public/fonts/Geist-ExtraBold.ttf", weight: "800" },
    { path: "../public/fonts/Geist-Black.ttf", weight: "900" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    { path: "../public/fonts/GeistMono-Thin.ttf", weight: "100" },
    { path: "../public/fonts/GeistMono-ExtraLight.ttf", weight: "200" },
    { path: "../public/fonts/GeistMono-Light.ttf", weight: "300" },
    { path: "../public/fonts/GeistMono-Regular.ttf", weight: "400" },
    { path: "../public/fonts/GeistMono-Medium.ttf", weight: "500" },
    { path: "../public/fonts/GeistMono-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/GeistMono-Bold.ttf", weight: "700" },
    { path: "../public/fonts/GeistMono-ExtraBold.ttf", weight: "800" },
    { path: "../public/fonts/GeistMono-Black.ttf", weight: "900" },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

const martinaPlantijn = localFont({
  src: [
    { path: "../public/fonts/TestMartinaPlantijn-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/TestMartinaPlantijn-Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/TestMartinaPlantijn-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/TestMartinaPlantijn-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/TestMartinaPlantijn-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-martina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cynthia Xin | Product Designer",
  description: "Seattle-based product designer. Selected work and case studies.",
  openGraph: {
    title: "Cynthia Xin | Product Designer",
    description: "Seattle-based product designer. Selected work and case studies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${martinaPlantijn.variable}`}
    >
      <body className="font-sans">
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
