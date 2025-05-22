import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <div className="flex dark:animate-pulse-border-dark animate-pulse-border-light justify-between h-screen
            items-center border-b-2 border-x-2 border-emerald-800 dark:border-emerald-300 w-screen p-0 m-0">
                <section className={"w-1/2 md:w-1/3 p-5 place-content-center"}>
                    <img className={""} src={"https://placehold.co/500"} alt={"Bild von Kristian"}/>
                </section>
                <section className={"flex flex-col items-center w-1/2 md:w-2/3 left-1/2 md:left-1/3 p-10"}>
                    <h1 className={"text-3xl md:text-6xl dark:animate-pulse-dark animate-pulse-light p-2"}>Willkommen!</h1>
                    <p className={"md:text-2xl justify-items-center text-center"}>
                        Mein Name ist Kristian und bin Schüler an der Informatikmittelschule in Hottingen. Ich
                        programmiere
                        hauptsächlich Videospiele und Mods. Auf dieser Webseite findest du meine Projekte und
                        Informationen
                        zu mir!
                    </p>
                    <Button
                        className={"p-4 md:p-7 mt-20 md:text-3xl bg-emerald-800 text-gray-200 dark:bg-emerald-300 dark:text-black m-5"}>
                        <Link className={""} href={"/me"}>Mehr zu mir</Link>
                    </Button>
                </section>
            </div>
            <div className="flex justify-between h-screen items-center border-b-2 border-x-2  border-emerald-800
            dark:border-emerald-300 dark:animate-pulse-border-dark animate-pulse-border-light w-screen p-0 m-0">
                <section className={"w-1/2 p-5"}>
                    <p className={"md:text-2xl"}>
                        Hier findest du einige meiner Informatik-Skills! Klicke einfach auf einer der Sprachen* und du
                        kommst zu den Projekten mit der jeweiligen Sprache! Nicht zu jeder Sprache hat es aber unbedingt
                        ein Projekt. *Nicht alle sind Programmiersprachen.
                    </p>
                </section>
                <ul className={"w-1/2 left-1/2 list-none p-5 text-center"}>
                    <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=sql&sort="}
                          target={"_blank"}>
                        <li className={"text-xl border-2 rounded-2xl dark:hover:bg-radial from-black via-black to-red-400 border-emerald-800 dark:border-red-400 dark:text-red-400 bg-red-400 dark:bg-black p-2 m-2"}>
                            SQL
                        </li>
                    </Link>
                    <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=java&sort="}
                          target={"_blank"}>
                        <li className={"text-xl border-2 rounded-2xl dark:hover:bg-radial from-black via-black to-orange-400 border-emerald-800 dark:border-orange-400 dark:text-orange-400 bg-orange-400 dark:bg-black p-2 m-2"}>
                            Java
                        </li>
                    </Link>
                    <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=javascript&sort="}
                          target={"_blank"}>
                        <li className={"text-xl border-2 rounded-2xl dark:hover:bg-radial from-black via-black to-yellow-400 border-emerald-800 dark:border-yellow-400 dark:text-yellow-400 bg-yellow-400 dark:bg-black p-2 m-2"}>
                            JavaScript
                        </li>
                    </Link>
                    <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=html&sort="}
                          target={"_blank"}>
                        <li className={"text-xl border-2 rounded-2xl dark:hover:bg-radial from-black via-black to-green-400 border-emerald-800 dark:border-green-400 dark:text-green-400 bg-green-400 dark:bg-black p-2 m-2"}>
                            HTML
                        </li>
                    </Link>
                    <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=python&sort="}
                          target={"_blank"}>
                        <li className={"text-xl border-2 rounded-2xl dark:hover:bg-radial from-black via-black to-cyan-400 border-emerald-800 dark:border-cyan-400 dark:text-cyan-400 bg-cyan-400 dark:bg-black p-2 m-2"}>
                            Python
                        </li>
                    </Link>
                    <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=css&sort="}
                          target={"_blank"}>
                        <li className={"text-xl border-2 rounded-2xl dark:hover:bg-radial from-black via-black to-blue-400 border-emerald-800 dark:border-blue-400 dark:text-blue-400 bg-blue-400 dark:bg-black p-2 m-2"}>
                            CSS
                        </li>
                    </Link>
                    <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=kotlin&sort="}
                          target={"_blank"}>
                        <li className={"text-xl border-2 rounded-2xl dark:hover:bg-radial from-black via-black to-violet-400 border-emerald-800 dark:border-violet-400 dark:text-violet-400 bg-violet-400 dark:bg-black p-2 m-2"}>
                            Kotlin
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-wrap justify-evenly h-full items-start border-b-2 border-x-2  border-emerald-800
            dark:border-emerald-300 dark:animate-pulse-border-dark animate-pulse-border-light w-screen p-2 pt-15">
                <section
                    className={"flex flex-col p-2 m-5 w-9/10 md:w-3/10 rounded-sm border-emerald-800 dark:border-emerald-300 dark:animate-pulse-border-dark border-2 animate-pulse-border-light"}>
                    <Link href={"/projects/porsche"}>
                        <img className={"w-md"} src={"/porsche.png"} alt={"Bild von Projekt"}/>
                        <h1 className={"text-center text-3xl md:text-4xl underline p-2"}>Wirtschaftsgeschichte von
                            Porsche</h1>
                    </Link>
                    <p className={"text-center text-sm md:text-base"}>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet.</p>
                </section>
                <section
                    className={"flex flex-col p-2 m-5 w-9/10 md:w-3/10 rounded-sm border-emerald-800 dark:border-emerald-300 dark:animate-pulse-border-dark border-2 animate-pulse-border-light"}>
                    <Link href={"/projects/nuclear-age"}>
                        <img className={"w-md h-md"} src={"/reactor_core.png"} alt={"Bild von Projekt"}/>
                        <h1 className={"text-center text-3xl md:text-4xl underline p-2"}>Nuclear Age Mod</h1>
                    </Link>
                    <p className={"text-center text-sm md:text-base"}>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet.</p>
                </section>
                <section
                    className={"flex p-2 flex-col m-5 w-9/10 md:w-3/10 rounded-sm border-emerald-800 dark:border-emerald-300 dark:animate-pulse-border-dark border-2 animate-pulse-border-light"}>
                    <Link href={"/projects/gambling"}>
                        <img className={"w-md"} src={"/gambling.png"} alt={"Bild von Projekt"}/>
                        <h1 className={"text-center text-3xl md:text-4xl underline p-2"}>Gambling API</h1>
                    </Link>
                    <p className={"text-center text-sm md:text-base"}>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet.</p>
                </section>
                <section
                    className={"flex p-2 flex-col m-5 w-9/10 md:w-3/10 rounded-sm border-emerald-800 dark:border-emerald-300 dark:animate-pulse-border-dark border-2 animate-pulse-border-light"}>
                    <Link href={"/projects/stalinium"}>
                        <img className={"w-md"} src={"/stalinium.jpg"} alt={"Bild von Projekt"}/>
                        <h1 className={"text-center text-3xl md:text-4xl underline p-2"}>Stalinium Mod</h1>
                    </Link>
                    <p className={"text-center text-sm md:text-base"}>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet.</p>
                </section>
                <section
                    className={"flex p-2 flex-col m-5 w-9/10 md:w-3/10 rounded-sm border-emerald-800 dark:border-emerald-300 dark:animate-pulse-border-dark border-2 animate-pulse-border-light"}>
                    <Link href={"/projects/portfolio"}>
                        <img className={"w-md"} src={"/portfolio.png"} alt={"Bild von Projekt"}/>
                        <h1 className={"text-center text-3xl md:text-4xl underline p-2"}>Portfolio</h1>
                    </Link>
                    <p className={"text-center text-sm md:text-base"}>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet.</p>
                </section>
            </div>
        </div>
    );
}
