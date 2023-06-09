import React from "react";
import CampaignStatus from "./CampaignStatus";
import Image from "next/image";
import cardImg from "../assets/images/🖼️ Card-Image-2.png";
import TaskCard from "./TaskCard";

type Props = {
  imgSrc: string
  sliderColor?: string
  progress?: string

};

export default function TaskDetail({progress, sliderColor, imgSrc}: Props) {
  return (
    <div className="p-4 bg-white rounded-md dark:bg-[#181818]">
        <div className="relative h-[168px] w-full mb-[18px]">
          <Image className="object-cover" src={imgSrc} alt="card-img" fill />
      </div>
        <TaskCard title="Highfidelity design" progress={progress} sliderColor={sliderColor} />
    </div>
  );
}
