"use client"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation"

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav>
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

