import Head from 'next/head'
import Image from "next/image";
import PlanetCoLogo from '../assets/planetco_logo.png'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section id="homePage" className="">
      <Head>
        <title>Restoring the Planet, one city at a time | PlanetCo</title>
      </Head>
      <div className="min-h-screen w-full flex justify-center items-center">
        <Image src={PlanetCoLogo} className="w-1/4 rounded-full" />
      </div>
      
    </section>
  );
}
