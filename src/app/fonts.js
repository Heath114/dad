// src/app/fonts.js
import localFont from "next/font/local";

/** Core Lufga (preloaded) */
export const lufgaCore = localFont({
  src: [
    { path: "../../public/fonts/LufgaRegular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/LufgaBold.woff2",    weight: "700", style: "normal" },
    { path: "../../public/fonts/LufgaLight.woff2",     weight: "300", style: "normal" },
    { path: "../../public/fonts/LufgaSemiBold.woff2",  weight: "600", style: "normal" },
    { path: "../../public/fonts/LufgaMedium.woff2",    weight: "500", style: "normal" },

  ],
  variable: "--font-lufga",
  display: "swap",
  preload: true,  // only these two get preloaded
});

/** All remaining Lufga weights (NOT preloaded) */
export const lufgaMore = localFont({
  src: [
    { path: "../../public/fonts/LufgaThin.woff2",      weight: "100", style: "normal" },
    { path: "../../public/fonts/LufgaExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-lufga-more",
  display: "swap",
  preload: false,
});

/** Kontora for headings */
export const kontora = localFont({
  src: [{ path: "../../public/fonts/KONTORA-SEMIBOLD.woff2", weight: "600", style: "normal" }],
  variable: "--font-kontora",
  display: "swap",
  preload: false,
});

