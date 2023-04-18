import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";
import {Inter} from 'next/font/google'
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', ]
})

export default function RootLayout({ children }: Props) {
  return (
    <div className={`h-screen `}>
      <Head>
        <title>Campaign Dashboard</title>
        <meta name="description" content="Built & Developed by Nupat Technologies" />
      </Head>
      <div className="flex">
        <div className="h-screen">
      <Sidebar />
        </div>
      <div className="flex flex-col w-screen h-screen overflow-y-scroll scrollbar-hide">
        <Header />
        {children}
      </div>
      </div>
    </div>
  );
}
