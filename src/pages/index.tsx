import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TaskDetail from "@/components/TaskDetail";
import CampaignStatus from "@/components/CampaignStatus";
import TaskCard from "@/components/TaskCard";
import card1 from "../assets/images/🖼️ Card-Image-1.png";
import card2 from "../assets/images/🖼️ Card-Image-2.png";
import card3 from "../assets/images/🖼️ Card-Image.png";
import AddTask from "@/components/AddTask";


type Props = {};

export default function Home(props: Props) {
  return (
    <main className=" px-4 flex-1 tablet:px-6 pt-6 desktop:px-16 desktop:pt-16 laptop:px-8 laptop:pt-8 pb-20 bg-dull-white dark:bg-[#121212]">
      <div className="grid grid-cols-1 gap-10 laptop:grid-cols-2 desktop:grid-cols-3 ">
        {/* Grid 1 */}
        <div className="">
          <CampaignStatus order={3} status="To Do" />
          <TaskDetail
            imgSrc={card3.src}
            />

          <div className="p-4 my-4 bg-white rounded-lg dark:bg-[#181818]">
            <TaskCard title="Usability Testing" />
          </div>
          <AddTask />
        </div>

        {/* Grid 2 */}
        <div className="">
          <CampaignStatus order={2} status="In progress" />
          <TaskDetail
            sliderColor="bg-slider-orange"
            progress='w-3/4'
            imgSrc={card1.src}
          />
          <div className="mt-4">
            <AddTask />
          </div>
        </div>

        {/* grid-3 */}
        <div className="">
          <CampaignStatus order={1} status="Completed" />
          <div className="p-4 mb-4 bg-white dark:bg-[#181818] rounded-lg">
            <TaskCard
              title="Usability Testing"
              progress='w-full'
              sliderColor="bg-slider-green"
            />
          </div>
          <TaskDetail
            progress='w-full'
            sliderColor="bg-slider-green"
            imgSrc={card2.src}
          />
          <div className="mt-4">
            <AddTask />
          </div>
        </div>
      </div>
    </main>
  );
}
