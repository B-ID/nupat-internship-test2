import React from "react";
import { AiOutlineMore, BsListCheck, FiLink2, TbMessageCircle } from "@/data/icons";
import Image from "next/image";
import cardImg  from '../assets/images/profileStack.png'
import { stringify } from "querystring";

type Props = {
  title: string
  sliderColor?: string
  progress?:  string 
};

export default function TaskCard({sliderColor, title, progress}: Props) {
  const progressBar = sliderColor + " " + progress

  console.log(progressBar, sliderColor)

  return (
    <div className="">
      {/* Task header */}
      <div>
        <div className="flex items-center justify-between mb-2 ">
          <h2 className="font-bold">{title}</h2>
          <AiOutlineMore className="align-bottom cursor-pointer text-neutral" size={20} />
        </div>
        <p className="text-neutral">Make clear design and color</p>
      </div>

      {/* Task Body */}
      <div>
        <div className="flex items-center mb-[8.5px] justify-between">
          <span className="flex items-center gap-2 text-neutral">
            <BsListCheck className="w-6 h-6" />
            <p>Progress</p>
          </span>
          <p className="text-sm font-bold">2/10</p>
        </div>

        {/* <div className={`h-2 relative after:absolute after:left-0 after:bg-slider-orange z-20 after:h-screen after:w-[${progress}%] bg-[#EBEBEB] rounded-full mb-2 `}/> */}
        <div className="relative">
        <div className={`relative  bg-[#EBEBEB] h-2 mb-2 rounded-full `} />
        <div className={` absolute top-0 z-10 left-0 ${progressBar} h-2 mb-2 rounded-full`} />
        </div>

        {/* Task footer */}
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-neutral">
          <span className="flex items-center gap-1">
            <TbMessageCircle className="w-6 h-6 " />
            <p className="text-sm">7</p>
          </span>
          <span className="flex items-center gap-1">
            <FiLink2 className="w-6 h-6" />
            <p className="text-sm">2</p>
          </span>
        </div>
        <Image 
        src={cardImg}
        alt="profile-stack"
        />
        </div>

      </div>
    </div>
  );
}
