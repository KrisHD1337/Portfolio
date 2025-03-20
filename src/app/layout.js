"use client"

import "./globals.css";
import Link from "next/link";
import {ThemeProvider} from "@/components/theme-provider";
import {ModeToggle} from "@/components/mode-toggle";
import {useTheme} from "next-themes";


export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={"bg-gray-200 dark:bg-black text-emerald-800 dark:text-emerald-300"}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <header className={"flex text-3xl md:text-5xl p-3 justify-between border-b-2 border-emerald-800 dark:border-emerald-300 content-center"}>
                <button className={""}>&#9776;</button>
                <div className={"p-2"}>Kristians Portfolio</div>
                <ModeToggle/>
            </header>
            <div className={"p-5"}>
                {children}
            </div>
            <footer className="">
                <ul className="flex justify-evenly flex-wrap border-t-2 border-emerald-800 dark:border-emerald-300 p-3">
                    <li className="">
                        <Link href="/privacy">
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </footer>
        </ThemeProvider>
        </body>
        </html>
    );
}
