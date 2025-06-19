export default function Me() {
    return (
        <div className="flex flex-col md:flex-row dark:animate-pulse-border-dark animate-pulse-border-light
                        justify-between md:h-screen h-full items-center border-b-2 border-x-2 border-emerald-800
                        dark:border-emerald-300 w-screen p-0 m-0">

            <section className="order-2 md:order-1 w-full md:w-1/3 p-5 flex justify-center">
                <img
                    className="w-2/3 mx-auto md:w-sm md:pl-20"
                    src="/img.jpeg"
                    alt="Bild von Kristian"
                />
            </section>

            <section className="order-1 md:order-2 flex flex-col items-center w-full md:w-2/3 p-10 pb-0">
                <h1 className="text-3xl md:text-6xl dark:animate-pulse-dark animate-pulse-light p-2">Wer bin ich?</h1>
                <p className="md:text-2xl text-center">
                    Mein Name ist Kristian und bin Schüler an der Informatikmittelschule in Hottingen. Ich bin in
                    der Schweiz am 17.07.2007 geboren und bin zum teil Kroate, aber auch Slowener. Ich
                    programmiere hauptsächlich Mods und Videospiele. In meiner Freizeit programmiere ich gerne Mods
                    für Minecraft, was ich auch sehr gerne mit meinen Kollegen spiele. Mein grosses Hobby ist die
                    Flugsimulation, wo ich hauptsächlich mit zivilen Flugzeugen fliege. Am meisten fliege ich mit
                    der Airbus a320, fliege ab und zu aber auch grössere Flieger. Mein längster simulierter Flug war
                    von Zürich nach Kanada, wo ich ca. 8 Stunden mit einer Boeing 787 flog.
                </p>
            </section>
        </div>
    );
}