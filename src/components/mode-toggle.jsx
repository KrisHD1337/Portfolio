"use client"

import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"

export function ModeToggle() {
    const {theme, setTheme} = useTheme()

    return (
        <Button variant="outline" size="icon" onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-transparent text-yellow-600 dark:text-yellow-200 lg:scale-150 m-2
                border-1 dark:border-emerald-300 border-emerald-800">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-125 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-125"/>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}