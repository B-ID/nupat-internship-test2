import React from "react";
import Image from "next/image";
import profileStack from "../assets/images/profile-stack2.png";
import {
  FiUsers,
  AiOutlineUnorderedList,
  BsLightningCharge,
  BiPlus,
  RxDashboard,
} from "@/data/icons";
import MenuButton from "./MenuButton";
import { useMenu } from "@/contexts/MenuContext";

type Props = {};

export default function Header(props: Props) {
  const {mobileMenu} = useMenu()

  return (
    <header className={`sticky top-0 z-30 px-4 pt-4 pb-6 desktop:px-16 desktop:pt-10 ${mobileMenu ? 'bg-white dark:bg-[#121212]' : 'backdrop-blur-xl'}`} >
      <div className="">
        {/* Header Campaign */}
        <div className="flex flex-col gap-4 tablet:items-center tablet:justify-between tablet:flex-row mb-14">
          <div className="">
            <h1 className="text-2xl tablet:text-3xl  desktop:text-[38px] desktop:mb-1 font-semibold ">
              New Campaign Run
            </h1>
            <p className="text-[#B8B9BD] text-sm">
              A new campaign launch work for brand new feature in May month
            </p>
          </div>

          {/* Menu Button */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 flex-1 tablet:px-6 tablet:py-3 rounded desktop:px-[28.5px] desktop:py-3 desktop:rounded-lg bg-black active:opacity-90 dark:bg-white transition active:scale-95">
              <p className="text-sm font-medium text-white dark:text-black">
                ADD MEMBERS
              </p>
            </button>
            <MenuButton />
          </div>
        </div>

        {/*  */}

        {/* Header Options */}
        <div className="flex items-center justify-between px-4">
          {/* Options left */}
          <div className="flex items-center gap-3 ">
            <div className="object-cover w-[80px] h-[32px] relative">
              <Image
                // className="w-[80px] h-[32px] object-cover"
                className="object-cover "
                alt="profileStack"
                src={profileStack}
                fill
                unoptimized
              />
            </div>

            <p className="text-sm text-[#B8B9BD] hidden tablet:block ">
              8 members
            </p>
          </div>

          {/* options right */}
          <ul className="text-[#7D8088] dark:text-[#B8B9BD]  flex items-center gap-[21.38px]">
            <li className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
              <FiUsers className="" />
              <p className="hidden laptop:block">Participants View</p>
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
              <RxDashboard />
              <p className="hidden laptop:block">Board View</p>
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
              <AiOutlineUnorderedList />
              <p className="hidden laptop:block">List View</p>
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-black dark:hover:text-white">
              <BsLightningCharge />
              <p className="hidden laptop:block">Power View</p>
            </li>
            <li className="cursor-pointer hover:text-black dark:hover:text-white">
              <BiPlus size={24} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
