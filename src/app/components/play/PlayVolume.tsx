"use client";

import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume() {
  const handleChange = (event: any) => {
    const boxVolumeTotal = event.target;

    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio?.querySelector(".inner-audio");

    elementAudio.volume = parseFloat(boxVolumeTotal.value)/100;

    const boxVolumeCurrent: any = document.querySelector(".box-volume .inner-current");
    boxVolumeCurrent.style.width = `${boxVolumeTotal.value}%`;
  }

  return (
    <>
      <div className="w-[184px] flex items-end box-volume">
        <button className="text-[16px] text-white inner-button">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="h-[3px] w-[100%] bg-primary rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
          <input
            type="range" 
            min={0}
            max={100}
            defaultValue={100}
            className="w-full h-[3px] bg-[#FFFFFF1A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}