import "./globals.css";
import Link from "next/link";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={"bg-black text-emerald-300"}>
        <header className={"flex text-5xl p-3 justify-between border-b-2 border-emerald-300"}>
            <button className={""}>&#9776;</button>
            <div className={""}>Kristians Portfolio</div>
            <button className={""}>&#9790;</button>
        </header>
        <div className={"p-5"}>
            {children}
        </div>
        <footer className="">
            <ul className="flex justify-evenly flex-wrap border-t-2 border-emerald-300 p-3">
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
        </body>
        </html>
    );
}
