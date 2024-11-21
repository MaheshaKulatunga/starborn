"use client"
import { useRouter } from "next/navigation"
import Image from "next/image";

export default function About() {
    const router = useRouter();

    return (
        <main className=" grid items-center h-full justify-items-center gap-8 font-[family-name:var(--font-geist-sans)] fmb-auto ">
            <div className="grid items-center justify-items-center gap-8 fmb-auto">
                <h1> About Starborn </h1>
                <div className="flex gap-4 items-center flex-col sm:flex-row">

                </div>
            </div>
        </main>
    )
}

