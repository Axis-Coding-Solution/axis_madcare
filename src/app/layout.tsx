// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "@/app/_styles/index.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

/**
 *
 * Main layout file. helpful for global settings and styling
 *
 */

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
// import { Merriweather } from "next/font/google";
import { roboto } from "@/utility/font";
import "@/app/_styles/index.css";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const merriWeather = Merriweather({
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "900"],
// });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={roboto.className + " antialiased"}>{children}</body>
    </html>
  );
}
