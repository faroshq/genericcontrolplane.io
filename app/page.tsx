
import { Header } from "@/components/header";
import { LandingPlage } from "@/components/landing-page";


import { Chivo, Rubik } from 'next/font/google';

import { Footer } from "@/components/footer";
import './styles.css';

export default function Home() {
  return (
    <div>
      <Header />
      <LandingPlage />
      <Footer />
    </div>
  );
}
const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})
