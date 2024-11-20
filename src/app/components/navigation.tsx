"use client"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation"

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav>
            {/* <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
                Home
            </Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
                About
            </Link>
            <Link href="/launches/1" className={
                pathname.startsWith("/launches/1") 
                ? "font-bold mr-4" 
                : "mr-4 text-blue-500"
                }>
                Launch 1
            </Link> */}
            <Link href="/">
                <Image
                className="dark:invert"
                src="/rocket-logo.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                />
            </Link>
        </nav>
    )
}