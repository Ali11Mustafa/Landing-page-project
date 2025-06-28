import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Focus Marketing Solutions | Creative Marketing & Digital Growth",
  description:
    "Transform your business with innovative marketing strategies, digital marketing, and social media management. Let Focus Marketing Solutions help you build something extraordinary.",
  keywords: "marketing solutions, digital marketing, social media, creative marketing, business growth",
  author: "Focus Marketing Solutions",
  viewport: "width=device-width, initial-scale=1",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
