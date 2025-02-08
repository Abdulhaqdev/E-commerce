import Navbar from '@/components/chared/navbar'
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import { FC } from 'react'
import { Toaster } from '@/components/ui/toaster'

const montserrat = Montserrat({
  weight: ['400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Seleor e-commerce",
  description: "Seleor e-commerce website built with Next.js",
};

export interface ChildProps {
	children: React.ReactNode
}

const RootLayout : FC<ChildProps> = ({children})=> {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased `}>
      
      {/* navbar */}
      <Navbar/>
      <main className='container max-w-6xl mt-24'>{children}</main>
       {/* toster */}
       <Toaster/>
      </body>
    </html>
  )
}

export default RootLayout
