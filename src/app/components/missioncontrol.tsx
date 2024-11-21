"use client"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation"
import { useState } from "react";
import { Launch } from "../launches-server/model";

export const MissionControl = ( {launches} : {launches: [Launch]}) => {
    const [selectedLaunch, setContent] = useState<Launch>(launches[0]);

    const handleClick = (e: any, launch: Launch) => {
      setContent(launch);
    };

    return ( 
      <div className="flex w-full h-full border overflow-hidden">
        <div className="w-1/5 border-r overflow-y-scroll p-4">
          <ul className="space-y-2">
            {launches.map((launch: Launch) => (
              <li
                key={launch.id}
                className="p-4 text-white-700 ">
                  <a className='' onClick={(e) => handleClick(e, launch)}>                      
                  <h1 className='text-2xl font-extrabold'>
                    {launch.name} ({launch.vehicle.name})
                  </h1>
                  <p className="p-4 text-lg text-white-500">
                    {launch.provider.name}
                  </p>
                  <p className="p-4 text-lg text-white-500">
                    {launch.t0}
                  </p>
                </a>

              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow p-4">
          <h1 className="text-2xl"> { selectedLaunch.name } </h1>
          <p> Links </p>
          <h2> Company </h2>
          <h2> Launch Vehicle</h2>
          <h2> Mission Details</h2>
          <h2> Launch Timeline/Status</h2>
        </div>
      </div>
    )

}