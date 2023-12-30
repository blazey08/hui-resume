import { Heading1 } from "../common/typography/Heading1";
import { Heading2 } from "../common/typography/Heading2";
import { Heading4 } from "../common/typography/Heading4";
import styles from "@/styles/animation.module.css"

export function Intro() {
    return (
        <div className={`text-left space-y-3 ${styles.slideIn}`}>
            <Heading1>Hello, I'm Yu Hui</Heading1>
            <Heading2>Software Developer | Crappy Gamer | Filler Term</Heading2>
            <Heading4>Continue reading if... there's no if, just do it.</Heading4>
            <Heading4>Please.</Heading4>
            <Heading4>For Me.</Heading4>
            <Heading4>For Humanity.</Heading4>
        </div>
    )
}