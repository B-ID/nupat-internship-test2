import { menuData } from "@/data/menuData";
import { BsLightningCharge, FiUsers, IoMdAdd } from "@/data/icons";
import Link from "next/link";
import { IMenuData } from "@/interfaces/interfaces";
import DarkModeSwitch from "./DarkModeSwitch";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className=" text-white hidden desktop:flex h-screen scrollbar-hide overflow-y-scroll flex-col justify-between  transition duration-300 px-[32px] py-[38px]  w-[272px] bg-dashboard dark:border-r border-gray-500/50 dark:bg-black">
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
        <nav className="space-y-5">
          {menuData.map((item: IMenuData, i) => (
            <Link
              key={i}
              href={"/"}
              className="flex transition items-center gap-2.5 rounded-lg hover:bg-dashboard-active/50 p-2"
            >
              <item.Icon size={22} />
              <p>{item.title}</p>
            </Link>
          ))}
        </nav>
        <hr className="my-4 border-t border-[#8E87A0] rounded-fll" />
        <div className="mb-8">
          <Link
            className="flex hover:bg-dashboard-active/50 items-center gap-2.5 p-2"
            href={"/test"}
          >
            <BsLightningCharge size={22} />
            <p>Profile</p>
          </Link>
          <Link
            className="flex hover:bg-dashboard-active/50 items-center gap-2.5 p-2"
            href={""}
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
