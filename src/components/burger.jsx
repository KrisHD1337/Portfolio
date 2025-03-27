import React, {useState} from 'react';
import Link from "next/link";
import ProjectAccordion from "@/components/accordion";

export default function Burger() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className={"text-5xl"} onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
            <div
                    className={`absolute top-19 left-0 md:w-1/4 w-3/4 h-screen dark:bg-emerald-950 dark:border-t-emerald-400 
                dark:border-r-emerald-400 border-2 bg-gray-200 flex flex-col
                border-t-emerald-600 border-r-emerald-600
                gap-6 font-semibold text-lg transform transition-transform
                ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
                style={{
                    transition: "transform 0.3s ease," +
                        "opacity 0.3s ease"
                }}>
                <ul className={"text-2xl list-none"}>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <ProjectAccordion/>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"/me"}>About-Me</Link>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories"} target={"_blank"}>GitHub</Link>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}
                 className={`absolute top-19 md:left-1/4 md:w-3/4 left-3/4 w-1/4 h-screen bg-black flex flex-col
                items-center gap-6 font-semibold text-lg transform transition-transform 
                ${isOpen ? "opacity-50" : "opacity-0 hidden"}`}
                 style={{
                     transition: "transform 0.3s ease," +
                         "opacity 0.3s ease"
                 }}>
            </div>
        </div>
    );
}
