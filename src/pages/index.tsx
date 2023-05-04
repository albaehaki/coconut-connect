import Image from 'next/image'
import { Inter } from 'next/font/google'

// components
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import DeskripsionSection from "@/components/deskripsionSection";
import ProdukFetures from "@/components/produkFetures";
import CTAsection from "@/components/CTAsection";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Header />
    <HeroSection />
    {/* <DeskripsionSection /> */}
    <ProdukFetures />
    <CTAsection />
    <Contact />
  </>
 
  )
}
