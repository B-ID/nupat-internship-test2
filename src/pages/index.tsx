import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

export default function Home(props: Props) {
  return (
    <main className="flex-1 px-16 pt-16 pb-20 bg-dull-white">
      <div className="grid grid-cols-1 gap-10 laptop:grid-cols-2 desktop:grid-cols-3 ">
        {/* Grid 1 */}
        <div className='border border-purple-500'>
         grid1 
        </div>

        {/* Grid 2 */}
        <div className="border border-orange-500">
          grid2

        </div>
        {/* grid-3 */}
        <div className="border border-pink-500">
          grid-3
        </div>
      </div>
    </main>
  );
}
