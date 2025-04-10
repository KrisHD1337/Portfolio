import React, {useState} from 'react';
import Link from "next/link";
import {Accordion} from "radix-ui";

export default function Burger() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className={"text-4xl md:text-5xl"} onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
            <div
                    className={`absolute top-19 left-0 md:w-1/4 w-3/4 h-screen bg-gradient-to-tl 
                    dark:from-emerald-950 dark:via-emerald-800 dark:to-emerald-950 dark:border-t-emerald-400 
                dark:border-r-emerald-400 border-2 from-gray-300 via-emerald-100 to-gray-300 flex flex-col
                border-t-emerald-600 border-r-emerald-600
                gap-6 font-semibold text-lg transform transition-transform
                ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
                style={{
                    transition: "transform 0.3s ease," +
                        "opacity 0.3s ease"
                }}>
                <ul className={"text-2xl list-none"}>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"/"} onClick={() => setIsOpen(!isOpen)}>Home</Link>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Accordion.Root className="" type={"multiple"}>
                            <Accordion.Item value={"item-1"}>
                                <Accordion.Trigger>Projects</Accordion.Trigger>
                                <Accordion.Content className="flex justify-center flex-col p-2">
                                    <Link className="text-lg p-2" href="/projects"
                                          onClick={() => setIsOpen(!isOpen)}>All Projects</Link>
                                    <Link className="text-lg p-2" href="/projects/porsche"
                                          onClick={() => setIsOpen(!isOpen)}>Wirtschaftsgeschichte von Porsche</Link>
                                    <Link className="text-lg p-2" href="/projects/nuclear-age"
                                          onClick={() => setIsOpen(!isOpen)}>Nuclear Age Mod</Link>
                                    <Link className="text-lg p-2" href="/projects/roboxers"
                                          onClick={() => setIsOpen(!isOpen)}>Roboxers</Link>
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion.Root>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"/me"} onClick={() => setIsOpen(!isOpen)}>About-Me</Link>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories"} target={"_blank"}>GitHub</Link>
                    </li>
                    <li className={"p-3 border-b-emerald-600 border-2 dark:border-b-emerald-400"}>
                        <Link href={"/contact"} onClick={() => setIsOpen(!isOpen)}>Contact</Link>
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
