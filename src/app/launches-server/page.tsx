import { MissionControl } from '../components/missioncontrol';


export default async function UsersServer() {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch("https://fdo.rocketlaunch.live/json/launches/next/5");
  const result = await response.json();
  const launches = result.result

  return (
    <main className="grid items-center h-full justify-items-center gap-8 font-[family-name:var(--font-geist-sans)] fmb-auto overflow-hidden">
      < MissionControl launches={ launches }  />
    </main>
  )

}

