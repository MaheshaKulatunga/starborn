"use client"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation"
import { useState } from "react";
import { Launch } from "../launches-server/model";

export const LaunchBrief = ( {launch} : {launch: Launch}) => {

    return ( 
        <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">{launch.name}</h1>
          <p className="">{launch.launch_description}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Provider</h2>
            <p className="">{launch.provider.name}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Vehicle</h2>
            <p className="">{launch.vehicle.name}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Launch Pad</h2>
            <p className="">
              {launch.pad.name} - {launch.pad.location.name}, {launch.pad.location.state}, {launch.pad.location.country}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Mission</h2>
            {launch.missions.map((mission) => (
              <div key={mission.id} className="mt-2">
                <p className="font-bold">{mission.name}</p>
                <p className="">{mission.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Weather</h2>
            <p className="text-gray-800">{launch.weather_summary}</p>
            <p className="">
              Temperature: {launch.weather_temp} | Wind: {launch.weather_wind_mph} mph
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Tags</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {launch.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm"
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )

}