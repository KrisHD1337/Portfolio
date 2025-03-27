import {Accordion} from "radix-ui";
import Link from "next/link";

export default function ProjectAccordion() {
    return (
        <Accordion.Root className="" type={"multiple"}>
            <Accordion.Item value={"item-1"}>
                <Accordion.Trigger>Projects</Accordion.Trigger>
                <Accordion.Content className="flex justify-center flex-col p-2">
                    <Link className="text-lg p-2" href="/projects">All Projects</Link>
                    <Link className="text-lg p-2" href="/projects/porsche">Wirtschaftsgeschichte von Porsche</Link>
                    <Link className="text-lg p-2" href="/projects/nuclear-age">Nuclear Age Mod</Link>
                    <Link className="text-lg p-2" href="/projects/roboxers">Roboxers</Link>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )
}