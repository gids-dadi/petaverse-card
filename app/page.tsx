"use client";
import React from "react";
import { CircularProgressBar } from "../components/circular-progress-bar";
import Image from "next/image";

export default function App() {
  const [selectedOption, setSelectedOption] = React.useState("last30days");
  return (
    <div className="flex flex-col w-full  gap-6 items-center justify-center h-[70vh] max-w-[30rem] mx-auto ">
      <div className="flex gap-8 items-center justify- bg-white  w-full rounded-md  h-full px-8">
        <CircularProgressBar
          percentage={70}
          size={120}
          strokeWidth={8}
          imageSrc="/assets/lady.jpg"
          imageSize={100}
          strokeColor="#ee9b00 "
          strokeBackgroundColor="#f2cc8f"
          backgroundStrokeWidth={15}
        />

        <div className=" flex flex-col justify-center items-start">
          <div className="flex items-center gap-2 p-1  bg-[#ee9b00] rounded-full">
            <Image
              src="/assets/snowflake.png"
              width={30}
              height={30}
              alt="Icon"
            />
          </div>
          <h3 className="text-black font-semibold text-left text-lg">Titan</h3>
          <span
            className="
           text-black font-bold text-left text-xl"
          >
            Level 4/8
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4  items-center justify-start  bg-white   py-4 w-[30rem] rounded-md h-full ">
        <div className="flex  gap-4  items-center justify-start  bg-white  px-8  w-[30rem] rounded-md h-full ">
          <div className="">
            <CircularProgressBar
              percentage={81}
              size={120}
              strokeWidth={8}
              imageSize={40}
              strokeColor="#4caf50"
              strokeBackgroundColor="#95d5b2"
              backgroundStrokeWidth={15}
            />
          </div>

          <div className="relative inline-block w-full">
            <select
              className=" block  py-2 text-gray-700 bg-white w-full px-4 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              defaultValue="last30days"
            >
              <option value="last30days">Last 30 days</option>
            </select>
            <div className="absolute inset-y-0 right-0 bottom-[105px] flex items-center px-2 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {selectedOption === "last30days" && (
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-500">Promoters</span>
                  <span className="text-black font-bold">40</span>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-500">Passive</span>
                  <span className="text-black font-bold">15</span>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-500">Detractors</span>
                  <span className="text-black font-bold">2</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-1 bg-gray-200 w-full py-3 px-10  rounded-md">
          <span className="text-black">View all reviews</span>
          <div className="text-black font-bold flex items-center gap-1">
            <Image src="/assets/star.png" width={20} height={20} alt="Star" />
            4.5
          </div>
        </div>
      </div>
    </div>
  );
}
