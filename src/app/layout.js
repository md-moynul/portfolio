import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
});

export const metadata = {
  title: "Portfolio | MERN Developer",
  description: "Architecting the Future of Web Apps. Senior Fullstack Engineer specialized in MERN applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
