import { menuData } from "@/data/menuData";
import { BsLightningCharge, FiUsers, IoMdAdd } from "@/data/icons";
import Link from "next/link";
import { IMenuData } from "@/interfaces/interfaces";
import DarkModeSwitch from "./DarkModeSwitch";
import { useMenu } from "@/contexts/MenuContext";

type Props = {};

export default function Sidebar({}: Props) {

  const {mobileMenu, openMenu, closeMenu} = useMenu()
  
  return (
    <div className={`flex flex-col justify-between text-white ${mobileMenu ? 'translate-x-0' : '-translate-x-full'} absolute z-50 desktop:relative desktop:translate-x-0 h-screen scrollbar-hide overflow-y-scroll   transition duration-300 px-[28px] py-[15px] desktop:px-[32px] desktop:py-[38px]  w-[272px] bg-dashboard dark:border-r border-gray-500/50 dark:bg-black`}>

      
      <div className="">
        {/* Sidebar greeting*/}
        <button className="px-[25px] mb-[40.5px] py-[14.5px] bg-dashboard-active rounded-lg">
          <div className="flex items-center gap-[11.44px]">
            <BsLightningCharge
              className="flex-shrink-0 text-[#D4B2FF]"
              size={24}
            />
            <h2 className="whitespace-nowrap">Welcome Keerthi</h2>
          </div>
        </button>

        {/* Menu */}
        <nav className="space-y-3 desktop:space-y-5">
          {menuData.map((item: IMenuData, i) => (
            <Link
              key={i}
              href={"/"}
              className="flex transition items-center gap-2.5 rounded hover:bg-dashboard-active/50 p-2"
            >
              <item.Icon size={22} />
              <p>{item.title}</p>
            </Link>
          ))}
        </nav>
        <hr className="my-4 border-t border-[#8E87A0] rounded-fll" />
        <div className="mb-4 desktop:mb-8">
          <Link
            className="flex rounded hover:bg-dashboard-active/50 items-center gap-2.5 p-2"
            href={"/"}
          >
            <BsLightningCharge size={22} />
            <p>Profile</p>
          </Link>
          <Link
            className="flex rounded hover:bg-dashboard-active/50 items-center gap-2.5 p-2"
            href={"/"}
          > 
            <FiUsers size={22} />
            <p>Logout</p>
          </Link>
        <DarkModeSwitch />
        </div>

      </div>

      {/* New project */}
      <button className="py-[17.5px]  px-[31.5px] rounded-lg bg-dashboard-active">
        <div className="flex items-center gap-[10.75px]">
          <IoMdAdd size={25} />
          <h3 className="whitespace-nowrap">NEW PROJECT</h3>
        </div>
      </button>
    </div>
  );
}
