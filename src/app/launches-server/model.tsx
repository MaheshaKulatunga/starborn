export type Launch = {
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