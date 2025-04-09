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
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                        ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </section>
                <ul className={"w-1/2 left-1/2 list-none p-5 text-center"}>
                    <li className={"text-xl border-2 rounded-2xl border-cyan-400 text-cyan-400 p-2 m-2"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=python&sort="}
                              target={"_blank"}>Python</Link>
                    </li>
                    <li className={"text-xl border-2 rounded-2xl border-orange-400 text-orange-400 p-2 m-2"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=java&sort="}
                              target={"_blank"}>Java</Link>
                    </li>
                    <li className={"text-xl border-2 rounded-2xl border-yellow-400 text-yellow-400 p-2 m-2"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=javascript&sort="}
                              target={"_blank"}>JavaScript</Link>
                    </li>
                    <li className={"text-xl border-2 rounded-2xl border-green-400 text-green-400 p-2 m-2"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=html&sort="}
                              target={"_blank"}>HTML</Link>
                    </li>
                    <li className={"text-xl border-2 rounded-2xl border-blue-400 text-blue-400 p-2 m-2"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=css&sort="}
                              target={"_blank"}>CSS</Link>
                    </li>
                    <li className={"text-xl border-2 rounded-2xl border-red-400 text-red-400 p-2 m-2"}>
                        <Link href={"https://github.com/KrisHD1337?tab=repositories&q=&type=&language=sql&sort="}
                              target={"_blank"}>SQL</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
