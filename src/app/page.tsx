import Image from "next/image";

export default function Home() {
  return (
      <main className=" grid items-center h-full justify-items-center gap-8 font-[family-name:var(--font-geist-sans)] fmb-auto ">
        <div className="grid items-center justify-items-center gap-8 fmb-auto">
          <Image
            className="dark:invert"
            src="/rocket-logo.svg"
            alt="Starborn Logo"
            width={180}
            height={38}
            priority
          />
          <h1> STAY UP TO DATE WITH ORBITAL ROCKET LAUNCHES </h1>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              href="/launches-server"
            >
              MISSION CONTROL
            </a>
          </div>
        </div>
      </main>

  );
}
