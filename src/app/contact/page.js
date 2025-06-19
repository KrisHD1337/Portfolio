"use client";

import { Mail, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="flex flex-col md:flex-row
                 dark:animate-pulse-border-dark animate-pulse-border-light
                 justify-between h-screen items-center
                 border-b-2 border-x-2 border-emerald-800 dark:border-emerald-300
                 w-screen p-0 m-0"
    >
      <section className="flex flex-col items-center w-full p-10 gap-10">
        <h1 className="text-3xl md:text-6xl dark:animate-pulse-dark animate-pulse-light p-2">
          Kontakt
        </h1>

        <div className="flex flex-col gap-6 w-full max-w-lg">
          <ContactCard
            href="mailto:kriscerni@gmail.com"
            icon={Mail}
            label="E-Mail"
            value="kriscerni@gmail.com"
          />
          {/*<ContactCard
            href="https://discord.com/users/KrisHD#6748"
            icon={MessageCircle}
            label="Discord"
            value="KrisHD#6748"
          />
          */}
          <ContactCard
            href="https://github.com/KrisHD1337"
            icon={Github}
            label="GitHub"
            value="github.com/KrisHD1337"
          />
        </div>
      </section>
    </div>
  );
}

function ContactCard({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-5 rounded-lg border-2
                 border-emerald-800 dark:border-emerald-300
                 bg-white dark:bg-black/40 transition
                 hover:scale-[1.02] hover:border-emerald-600
                 dark:hover:border-emerald-400"
    >
      <Icon
        size={32}
        className="text-emerald-800 dark:text-emerald-300 shrink-0"
      />
      <div className="flex flex-col">
        <span className="text-lg font-medium">{label}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {value}
        </span>
      </div>
    </a>
  );
}