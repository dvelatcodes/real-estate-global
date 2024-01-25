import {
  kaushan_script,
  inter,
  montserrat,
  poppins,
  noto_serif,
} from "./fonts";
import "./globals.scss";
import { Footer, Navbar } from "./components";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kaushan_script.variable} ${montserrat.variable} ${poppins.variable} ${noto_serif.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
