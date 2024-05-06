import type { Metadata } from "next";
import "./globals.css";

const metadata: Metadata = {
  title: "Generic Control Plane",
  description: "Streamline generic control planes. Create bespoke Kubernetes-like control planes.",
};


import { Chivo } from 'next/font/google';
import './styles.css';

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={chivo.variable}>
        {children}
      </body>
    </html>
  )
}
