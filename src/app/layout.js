
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Jost, Poppins, Inter} from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "QuillAudits",
  description: "QuillAudits",
};

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['400','500','600','700','800'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600','700','800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400','500','600','700','800'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${poppins.variable} ${inter.variable}`}>
      <body>
        <div className='bg-gradient-to-r from-light-navy to-dark-navy'>
            <Navbar/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
