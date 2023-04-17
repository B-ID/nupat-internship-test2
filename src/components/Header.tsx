import React from "react";
import Image from "next/image";
import profileStack from "../assets/images/profileStack.png";
import {
  FiUsers,
  IoMdAdd,
  AiOutlineUnorderedList,
  BsLightningCharge,
} from "@/data/icons";

type Props = {};

export default function Header(props: Props) {
  return (
    <div className="sticky top-0 px-4 pt-4 pb-6 bg-white desktop:px-16 desktop:desktop:pt-10 dark:bg-black">
      <div className="">
        {/* Header Campaign */}
        <div className="flex flex-col gap-4 tablet:items-center tablet:justify-between tablet:flex-row mb-14">
          <div className="">
            <h1 className="text-2xl tablet:text-3xl  desktop:text-[38px] desktop:mb-1 font-semibold ">New Campaign Run</h1>
            <p className="text-[#B8B9BD] text-sm">
              A new campaign launch work for brand new feature in May month
            </p>
          </div>

          <button className="px-4 py-2 tablet:px-6 tablet:py-3 rounded desktop:px-[28.5px] desktop:py-3 desktop:rounded-lg bg-black active:opacity-90 dark:bg-white transition active:scale-95">
            <p className="text-sm font-medium text-white dark:text-black">ADD MEMBERS</p>
          </button>
          </div>

        {/*  */}

        {/* Header Options */}
        <div className="flex items-center justify-between px-4">
          {/* Options left */}
          <div className="flex items-center gap-3 ">
            <Image
              className="w-[80px] h-[32px] object-cover"
              alt="profileStack"
              src={profileStack}
              quality={100}
            />

            <p className="text-sm text-[#B8B9BD] hidden tablet:block ">8 members</p>
          </div>

          {/* options right */}
          <ul className="text-[#7D8088] dark:text-[#B8B9BD]  flex items-center gap-[21.38px]">
            <li className="flex items-center gap-1">
              <FiUsers className="" />
              <p className="hidden laptop:block">Participants View</p>
            </li>
            <li className="flex items-center gap-1">
              <FiUsers />
              <p className="hidden laptop:block">Board View</p>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineUnorderedList />
              <p className="hidden laptop:block">List View</p>
            </li>
            <li className="flex items-center gap-1">
              <BsLightningCharge />
              <p className="hidden laptop:block">Power View</p>
            </li>
            <li>
              <IoMdAdd />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
