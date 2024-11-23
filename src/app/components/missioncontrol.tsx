"use client"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation"
import { useState } from "react";
import { Launch } from "../launches-server/model";
import { LaunchBrief } from "./launchbrief";

export const MissionControl = ({ launches }: { launches: [Launch] }) => {
  const [selectedLaunch, setContent] = useState<Launch>(launches[0]);

  const handleClick = (e: any, launch: Launch) => {
    setContent(launch);
  };

  return (
    <div className="flex w-full h-full border overflow-hidden">
      <div className="w-1/5 border-r overflow-y-scroll">
        <ul className="">
          {launches.map((launch: Launch) => (
            <li
              key={launch.id}
              className="text-white-700 flex items-center justify-between w-full font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
              <a className='p-4 w-full h-full' onClick={(e) => handleClick(e, launch)}>
                <div className="flex">
                  <h1 className='text-2xl font-extrabold'>
                    {launch.name}
                  </h1>
                </div>
                <div className="flex">
                  <div className="flex">
                  <Image
                      className="dark:invert "
                      src="/company.svg"
                      alt="Starborn Logo"
                      width={24}
                      height={24}
                      priority
                    />
                  <p className="p-4 text-lg text-white-500">
                    {launch.provider.name}
                  </p>
                  <Image
                      className="dark:invert"
                      src="/vehicle.svg"
                      alt="Starborn Logo"
                      width={24}
                      height={24}
                      priority
                    />
                    <p className="p-4 text-lg text-white-500">
                      {launch.vehicle.name}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                <Image
                      className="dark:invert"
                      src="/time.svg"
                      alt="Starborn Logo"
                      width={24}
                      height={24}
                      priority
                    />
                  <p className="text-lg text-white-500">
                    {launch.t0 != null ? launch.t0 : "TBC"}
                  </p>
                </div>
                <div className="flex gap-2 pt-4">
                  {launch.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                    >
                      {tag.text}
                    </span>
                  ))}
              </div>
              </a>

            </li>
          ))}
        </ul>
      </div>
      < LaunchBrief launch={selectedLaunch} />
    </div>
  )

}