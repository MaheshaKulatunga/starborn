type Launch = {
    id: number,
    cospar_id: string,
    sort_date: string,
    name: string,
    provider: {
      id: number,
      name: string,
      slug: string
    },
    vehicle: {
      id: number,
      name: string,
      company_id: number,
      slug: string
    },
    pad: {
      id: number,
      name: string,
      location: {
        id: number,
        name: string,
        state: string,
        statename: string,
        country: string,
        slug: string
      }
    },
    missions: [
      {
        id: number,
        name: string,
        description: string
      }
    ],
    mission_description: string,
    launch_description: string,
    win_open: string,
    t0: string,
    win_close: string,
    est_date: {
      month: number,
      day: number,
      year: number,
      quarter: string
    },
    date_str: string,
    tags: [
      {
        id: number,
        text: string
      }
    ],
    slug: string,
    weather_summary: string,
    weather_temp: string,
    weather_condition: string,
    weather_wind_mph: string,
    weather_icon: string,
    weather_updated: string,
    quicktext: string,
    media: [string],
    result: number,
    suborbital: string,
    modified: string
  }

export default async function UsersServer() {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch("https://fdo.rocketlaunch.live/json/launches/next/5");
    const result = await response.json();
    const launches = result.result

    return (
        <main className=" grid items-center justify-items-center gap-8 font-[family-name:var(--font-geist-sans)] fmb-auto">
        <ul className = "space-y-4 p-4">
            {launches.map((launch: Launch) => (
                <li
                    key={launch.id}
                    className="p-4 text-white-700"
                >
                    <h1>{launch.name} ({launch.vehicle.name})</h1>
                    <p className="p-4 text-white-500"> {launch.launch_description}</p>
                </li>
            ))}
        </ul>
        </main>
    )

}