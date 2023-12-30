import { AboutMe } from "@/pages/AboutMe";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { HomeIcon, PersonStanding, Presentation, Sun } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export const sections = [
    {
        id: 'home',
        label: 'home',
        icon: <HomeIcon />,
        component: Home
    },
    {
        id: 'about',
        label: 'about me',
        icon: <PersonStanding />,
        component: AboutMe
    },
    {
        id: 'projects',
        label: 'projects',
        icon: <Presentation />,
        component: Projects
    },
    {
        id: 'toggle-mode',
        label: 'toggle-mode',
        icon: <Sun />,
        component: ModeToggle
    }
]