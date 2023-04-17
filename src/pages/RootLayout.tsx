import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen h-screen overflow-y-scroll">

        <Header />
        {children}
      </div>
    </div>
  );
}
