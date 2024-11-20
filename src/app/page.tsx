import Image from "next/image";

export default function Home() {
  return (
      <main className=" grid items-center justify-items-center gap-8 font-[family-name:var(--font-geist-sans)] fmb-auto">
        <Image
          className="dark:invert"
          src="/rocket-logo.svg"
          alt="Starborn Logo"
          width={180}
          height={38}
          priority
        />
        <h1> Stay up to date with Orbital Rocket Launches </h1>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/launches-server"
          >
            Mission Control
          </a>
        </div>
      </main>

  );
}
