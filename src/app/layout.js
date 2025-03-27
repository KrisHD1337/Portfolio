"use client"

import "./globals.css";
import Link from "next/link";
import {ThemeProvider} from "@/components/theme-provider";
import {ModeToggle} from "@/components/mode-toggle";
import Burger from "@/components/burger";
import {usePathname} from "next/navigation";


export default function RootLayout({children}) {
    const pathname = usePathname();
    const getTitle = () => {
        switch (pathname) {
            case "/":
                return "Kristians Portfolio";
            case "/about":
                return "About";
            case "/projects":
                return "Projects";
            case "/me":
                return "About me";
            case "/contact":
                return "Contact";
            case "/projects/roboxers":
                return "Roboxers";
            case "/projects/nuclear-age":
                return "Nuclear Age Mod";
            case "/projects/porsche":
                return "Wirtschaftsgeschichte von Porsche";
            case "/privacy":
                return "Privacy Policy";
            default:
                return "Kristians Portfolio";
        }
    };
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
            <header
                className={"fixed dark:bg-black bg-gray-200 w-full flex text-3xl md:text-5xl p-3 justify-between border-b-2 border-emerald-800 dark:border-emerald-300 content-center"}>
                <Burger/>
                <div className={""}>{getTitle()}</div>
                <ModeToggle/>
            </header>
            <div className={"p-5 pt-23"}>
                {children}
            </div>
            <footer className={""}>
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
